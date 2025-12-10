import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Eye, Trash2, Pencil, Copy, Filter } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { useIsMobile } from "@/hooks/use-mobile";
import QuoteCard from "@/components/quotes/QuoteCard";

interface Quote {
  id: string;
  quote_number: string;
  customer_name: string;
  customer_email: string | null;
  customer_phone: string | null;
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

const statusOptions = [
  { value: "all", label: "All Statuses" },
  { value: "draft", label: "Draft" },
  { value: "sent", label: "Sent" },
  { value: "accepted", label: "Accepted" },
  { value: "rejected", label: "Rejected" },
];

const QuotesList = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchQuotes = async () => {
    let query = supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });

    if (statusFilter !== "all") {
      query = query.eq("status", statusFilter as "draft" | "sent" | "accepted" | "rejected");
    }

    const { data, error } = await query;

    if (error) {
      toast.error("Failed to load quotes");
      console.error(error);
    } else {
      setQuotes(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, [statusFilter]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this quote?")) return;
    
    const { error } = await supabase.from("quotes").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete quote");
    } else {
      toast.success("Quote deleted");
      fetchQuotes();
    }
  };

  const handleDuplicate = async (quote: Quote) => {
    const { data: fullQuote, error: fetchError } = await supabase
      .from("quotes")
      .select("*")
      .eq("id", quote.id)
      .single();

    if (fetchError || !fullQuote) {
      toast.error("Failed to duplicate quote");
      return;
    }

    const { data: newQuote, error: insertError } = await supabase
      .from("quotes")
      .insert([{
        customer_name: fullQuote.customer_name,
        customer_email: fullQuote.customer_email,
        customer_phone: fullQuote.customer_phone,
        job_address: fullQuote.job_address,
        line_items: fullQuote.line_items,
        labor_hours: fullQuote.labor_hours,
        labor_rate: fullQuote.labor_rate,
        markup_percentage: fullQuote.markup_percentage,
        notes: fullQuote.notes,
        subtotal: fullQuote.subtotal,
        total: fullQuote.total,
        status: "draft",
        quote_number: "",
      }])
      .select()
      .single();

    if (insertError || !newQuote) {
      toast.error("Failed to duplicate quote");
      console.error(insertError);
    } else {
      toast.success("Quote duplicated");
      navigate(`/quotes/edit/${newQuote.id}`);
    }
  };

  // Calculate summary stats
  const stats = {
    total: quotes.length,
    draft: quotes.filter(q => q.status === "draft").length,
    sent: quotes.filter(q => q.status === "sent").length,
    accepted: quotes.filter(q => q.status === "accepted").length,
    totalValue: quotes.filter(q => q.status === "accepted").reduce((sum, q) => sum + Number(q.total), 0),
  };

  if (loading) {
    return <div className="text-center py-12">Loading quotes...</div>;
  }

  return (
    <div>
      {/* Stats Bar - Scrollable on mobile */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-4 sm:grid sm:grid-cols-5 sm:gap-4 sm:mb-6 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 min-w-[120px] flex-shrink-0 sm:min-w-0">
          <p className="text-xs sm:text-sm text-gray-500">Total</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 min-w-[120px] flex-shrink-0 sm:min-w-0">
          <p className="text-xs sm:text-sm text-gray-500">Drafts</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-600">{stats.draft}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 min-w-[120px] flex-shrink-0 sm:min-w-0">
          <p className="text-xs sm:text-sm text-gray-500">Sent</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">{stats.sent}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 min-w-[120px] flex-shrink-0 sm:min-w-0">
          <p className="text-xs sm:text-sm text-gray-500">Accepted</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600">{stats.accepted}</p>
        </div>
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 min-w-[120px] flex-shrink-0 sm:min-w-0">
          <p className="text-xs sm:text-sm text-gray-500">Won Value</p>
          <p className="text-xl sm:text-2xl font-bold text-green-600">
            ${stats.totalValue.toLocaleString('en-CA', { minimumFractionDigits: 0 })}
          </p>
        </div>
      </div>

      {/* Header with filter and new button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Quotes</h2>
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <Filter className="w-4 h-4 text-gray-400" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32 sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Link to="/quotes/new" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            New Quote
          </Button>
        </Link>
      </div>

      {quotes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500 mb-4">
            {statusFilter === "all" ? "No quotes yet" : `No ${statusFilter} quotes`}
          </p>
          <Link to="/quotes/new">
            <Button>Create your first quote</Button>
          </Link>
        </div>
      ) : isMobile ? (
        /* Mobile: Card Layout */
        <div className="space-y-3">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              onDuplicate={handleDuplicate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        /* Desktop: Table Layout */
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quote #</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell className="font-mono text-sm">
                    {quote.quote_number}
                  </TableCell>
                  <TableCell className="font-medium">
                    {quote.customer_name}
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {quote.customer_email || quote.customer_phone || "—"}
                  </TableCell>
                  <TableCell className="font-medium">
                    ${Number(quote.total).toLocaleString("en-CA", { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[quote.status]}>
                      {quote.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {format(new Date(quote.created_at), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        title="Duplicate"
                        onClick={() => handleDuplicate(quote)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Link to={`/quotes/edit/${quote.id}`}>
                        <Button variant="ghost" size="sm" title="Edit">
                          <Pencil className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to={`/quotes/${quote.id}`}>
                        <Button variant="ghost" size="sm" title="View">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        title="Delete"
                        onClick={() => handleDelete(quote.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default QuotesList;
