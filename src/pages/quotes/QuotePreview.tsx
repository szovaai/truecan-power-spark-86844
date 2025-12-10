import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Download, Printer, Mail, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { jsPDF } from "jspdf";
import { useIsMobile } from "@/hooks/use-mobile";

interface LineItem {
  id: string;
  name: string;
  quantity: number;
  unit_price: number;
  unit_type: string;
  subtotal: number;
}

interface Quote {
  id: string;
  quote_number: string;
  customer_name: string;
  customer_email: string | null;
  customer_phone: string | null;
  job_address: string | null;
  line_items: LineItem[];
  labor_hours: number;
  labor_rate: number;
  markup_percentage: number;
  notes: string | null;
  subtotal: number;
  total: number;
  status: "draft" | "sent" | "accepted" | "rejected";
  created_at: string;
}

const statusColors = {
  draft: "bg-gray-100 text-gray-800",
  sent: "bg-blue-100 text-blue-800",
  accepted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const QuotePreview = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = useIsMobile();
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const fetchQuote = async () => {
    if (!id) return;

    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      toast.error("Failed to load quote");
      console.error(error);
    } else if (data) {
      setQuote({
        ...data,
        line_items: (data.line_items as unknown as LineItem[]) || [],
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, [id]);

  const updateStatus = async (newStatus: "draft" | "sent" | "accepted" | "rejected") => {
    if (!quote) return;
    setUpdatingStatus(true);

    const { error } = await supabase
      .from("quotes")
      .update({ status: newStatus })
      .eq("id", quote.id);

    if (error) {
      toast.error("Failed to update status");
    } else {
      toast.success(`Quote marked as ${newStatus}`);
      setQuote({ ...quote, status: newStatus as Quote["status"] });
    }
    setUpdatingStatus(false);
  };

  const sendQuoteEmail = async () => {
    if (!quote) return;
    
    if (!quote.customer_email) {
      toast.error("Customer email is required to send quote");
      return;
    }

    setSendingEmail(true);

    try {
      const quoteUrl = `${window.location.origin}/quotes/${quote.id}`;
      
      const response = await supabase.functions.invoke("send-quote-email", {
        body: {
          customerEmail: quote.customer_email,
          customerName: quote.customer_name,
          quoteNumber: quote.quote_number,
          total: Number(quote.total),
          quoteUrl,
        },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      await supabase
        .from("quotes")
        .update({ status: "sent" })
        .eq("id", quote.id);

      setQuote({ ...quote, status: "sent" });
      toast.success(`Quote sent to ${quote.customer_email}`);
    } catch (error: any) {
      console.error("Error sending quote:", error);
      toast.error("Failed to send quote email");
    } finally {
      setSendingEmail(false);
    }
  };

  const generatePDF = () => {
    if (!quote) return;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 20;

    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("TrueCan Power", 20, y);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Calgary's Trusted Electricians", 20, y + 7);
    doc.text("(250) 883-0499 | service@truecanpower.com", 20, y + 12);

    doc.setFontSize(12);
    doc.text(`Quote #: ${quote.quote_number}`, pageWidth - 20, y, { align: "right" });
    doc.text(`Date: ${format(new Date(quote.created_at), "MMMM d, yyyy")}`, pageWidth - 20, y + 7, { align: "right" });

    y += 35;

    doc.setFont("helvetica", "bold");
    doc.text("Bill To:", 20, y);
    doc.setFont("helvetica", "normal");
    doc.text(quote.customer_name, 20, y + 7);
    if (quote.customer_email) doc.text(quote.customer_email, 20, y + 14);
    if (quote.customer_phone) doc.text(quote.customer_phone, 20, y + 21);
    if (quote.job_address) {
      doc.setFont("helvetica", "bold");
      doc.text("Job Address:", pageWidth / 2, y);
      doc.setFont("helvetica", "normal");
      doc.text(quote.job_address, pageWidth / 2, y + 7);
    }

    y += 40;

    doc.setFillColor(240, 240, 240);
    doc.rect(20, y, pageWidth - 40, 10, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Description", 25, y + 7);
    doc.text("Qty", 110, y + 7);
    doc.text("Unit", 130, y + 7);
    doc.text("Price", 150, y + 7);
    doc.text("Amount", pageWidth - 25, y + 7, { align: "right" });

    y += 15;

    doc.setFont("helvetica", "normal");
    quote.line_items.forEach((item) => {
      doc.text(item.name.substring(0, 40), 25, y);
      doc.text(item.quantity.toString(), 110, y);
      doc.text(item.unit_type, 130, y);
      doc.text(`$${Number(item.unit_price).toFixed(2)}`, 150, y);
      doc.text(`$${Number(item.subtotal).toFixed(2)}`, pageWidth - 25, y, { align: "right" });
      y += 8;
    });

    y += 10;

    const materialsSubtotal = quote.line_items.reduce((sum, item) => sum + item.subtotal, 0);
    const laborTotal = quote.labor_hours * quote.labor_rate;
    const markupAmount = (materialsSubtotal * quote.markup_percentage) / 100;

    doc.line(20, y, pageWidth - 20, y);
    y += 10;

    doc.text("Materials Subtotal:", 120, y);
    doc.text(`$${materialsSubtotal.toFixed(2)}`, pageWidth - 25, y, { align: "right" });
    y += 7;

    doc.text(`Markup (${quote.markup_percentage}%):`, 120, y);
    doc.text(`$${markupAmount.toFixed(2)}`, pageWidth - 25, y, { align: "right" });
    y += 7;

    doc.text(`Labor (${quote.labor_hours} hrs @ $${quote.labor_rate}/hr):`, 120, y);
    doc.text(`$${laborTotal.toFixed(2)}`, pageWidth - 25, y, { align: "right" });
    y += 10;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("TOTAL:", 120, y);
    doc.text(`$${Number(quote.total).toFixed(2)}`, pageWidth - 25, y, { align: "right" });

    y += 20;

    if (quote.notes) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("Notes:", 20, y);
      doc.setFont("helvetica", "normal");
      const splitNotes = doc.splitTextToSize(quote.notes, pageWidth - 40);
      doc.text(splitNotes, 20, y + 7);
      y += 7 + splitNotes.length * 5;
    }

    y += 15;

    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("This quote is valid for 30 days from the date issued.", 20, y);
    doc.text("Payment due upon completion unless otherwise arranged.", 20, y + 5);

    doc.save(`TrueCan-Quote-${quote.quote_number}.pdf`);
    toast.success("PDF downloaded");
  };

  if (loading) {
    return <div className="text-center py-12">Loading quote...</div>;
  }

  if (!quote) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">Quote not found</p>
        <Link to="/quotes">
          <Button>Back to Quotes</Button>
        </Link>
      </div>
    );
  }

  const materialsSubtotal = quote.line_items.reduce((sum, item) => sum + item.subtotal, 0);
  const laborTotal = quote.labor_hours * quote.labor_rate;
  const markupAmount = (materialsSubtotal * quote.markup_percentage) / 100;

  return (
    <div className="max-w-4xl mx-auto pb-24 sm:pb-0">
      {/* Actions Bar */}
      <div className="flex flex-col gap-3 mb-4 sm:mb-6">
        <div className="flex items-center justify-between">
          <Link to="/quotes" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Quotes</span>
          </Link>
          
          {/* Status Selector */}
          <div className="flex items-center gap-2">
            <Select 
              value={quote.status} 
              onValueChange={updateStatus}
              disabled={updatingStatus}
            >
              <SelectTrigger className="w-28 sm:w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quick Status Buttons - Desktop only */}
        {quote.status === "sent" && !isMobile && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-green-600 border-green-300 hover:bg-green-50"
              onClick={() => updateStatus("accepted")}
              disabled={updatingStatus}
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              Accept
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-300 hover:bg-red-50"
              onClick={() => updateStatus("rejected")}
              disabled={updatingStatus}
            >
              <XCircle className="w-4 h-4 mr-1" />
              Reject
            </Button>
          </div>
        )}
      </div>

      {/* Quote Document */}
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 print:shadow-none">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">TrueCan Power</h1>
            <p className="text-gray-600">Calgary's Trusted Electricians</p>
            <p className="text-sm text-gray-500 mt-1">(250) 883-0499 | service@truecanpower.com</p>
          </div>
          <div className="text-left sm:text-right">
            <div className="flex items-center gap-2 sm:justify-end mb-2">
              <span className="text-gray-600">Quote #:</span>
              <span className="font-mono font-bold">{quote.quote_number}</span>
              <Badge className={statusColors[quote.status]}>{quote.status}</Badge>
            </div>
            <p className="text-gray-600">
              Date: {format(new Date(quote.created_at), "MMMM d, yyyy")}
            </p>
          </div>
        </div>

        {/* Customer Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Bill To</h3>
            <p className="text-gray-800 font-medium">{quote.customer_name}</p>
            {quote.customer_email && <p className="text-gray-600">{quote.customer_email}</p>}
            {quote.customer_phone && <p className="text-gray-600">{quote.customer_phone}</p>}
          </div>
          {quote.job_address && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Job Address</h3>
              <p className="text-gray-600">{quote.job_address}</p>
            </div>
          )}
        </div>

        {/* Line Items - Card view on mobile, table on desktop */}
        <div className="mb-6 sm:mb-8">
          {isMobile ? (
            <div className="space-y-3">
              {quote.line_items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-gray-900">{item.name}</span>
                    <span className="font-semibold">${Number(item.subtotal).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{item.quantity} {item.unit_type}</span>
                    <span>${Number(item.unit_price).toFixed(2)} each</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                  <th className="text-center py-3 px-2 font-semibold w-20">Qty</th>
                  <th className="text-center py-3 px-2 font-semibold w-20">Unit</th>
                  <th className="text-right py-3 px-2 font-semibold w-24">Price</th>
                  <th className="text-right py-3 px-4 font-semibold w-28">Amount</th>
                </tr>
              </thead>
              <tbody>
                {quote.line_items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-2 text-center">{item.quantity}</td>
                    <td className="py-3 px-2 text-center text-gray-600">{item.unit_type}</td>
                    <td className="py-3 px-2 text-right">${Number(item.unit_price).toFixed(2)}</td>
                    <td className="py-3 px-4 text-right font-medium">${Number(item.subtotal).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-6 sm:mb-8">
          <div className="w-full sm:w-72 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Materials Subtotal:</span>
              <span>${materialsSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Markup ({quote.markup_percentage}%):</span>
              <span>${markupAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">
                Labor ({quote.labor_hours} hrs × ${quote.labor_rate}):
              </span>
              <span>${laborTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t font-bold text-lg">
              <span>Total:</span>
              <span>${Number(quote.total).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {quote.notes && (
          <div className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Notes</h3>
            <p className="text-gray-600 whitespace-pre-wrap">{quote.notes}</p>
          </div>
        )}

        {/* Terms */}
        <div className="text-sm text-gray-500 border-t pt-4">
          <p>This quote is valid for 30 days from the date issued.</p>
          <p>Payment due upon completion unless otherwise arranged.</p>
        </div>
      </div>

      {/* Mobile Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-2 sm:hidden z-50">
        <Button
          variant="outline"
          onClick={sendQuoteEmail}
          disabled={sendingEmail || !quote.customer_email}
          className="flex-1"
        >
          {sendingEmail ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Mail className="w-4 h-4" />
          )}
        </Button>
        <Button variant="outline" onClick={() => window.print()} className="flex-1">
          <Printer className="w-4 h-4" />
        </Button>
        <Button onClick={generatePDF} className="flex-1">
          <Download className="w-4 h-4 mr-1" />
          PDF
        </Button>
      </div>

      {/* Desktop Actions */}
      <div className="hidden sm:flex justify-end gap-2 mt-6">
        <Button
          variant="outline"
          onClick={sendQuoteEmail}
          disabled={sendingEmail || !quote.customer_email}
          title={!quote.customer_email ? "Add customer email to send" : "Send quote via email"}
        >
          {sendingEmail ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Mail className="w-4 h-4 mr-2" />
          )}
          {sendingEmail ? "Sending..." : "Email Quote"}
        </Button>
        <Button variant="outline" onClick={() => window.print()}>
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
        <Button onClick={generatePDF}>
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default QuotePreview;
