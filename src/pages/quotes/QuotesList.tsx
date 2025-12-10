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
import QuickQuotes, { QuickQuotePackage } from "@/components/quotes/QuickQuotes";
import QuoteStats from "@/components/quotes/QuoteStats";
import NeedsAttention from "@/components/quotes/NeedsAttention";

interface Quote {
  id: string;
  quote_number: string;
  customer_name: string;
  customer_email: string | null;
  customer_phone: string | null;
  total: number;
  status: "draft" | "sent" | "accepted" | "rejected";
  created_at: string;
  updated_at: string;
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

  const handleQuickQuote = (pkg: QuickQuotePackage) => {
    // Store the package in sessionStorage and navigate to builder
    sessionStorage.setItem("quickQuotePackage", JSON.stringify(pkg));
    navigate("/quotes/new");
    toast.success(`Starting ${pkg.name} quote`);
  };

  if (loading) {
    return <div className="text-center py-12">Loading quotes...</div>;
  }

  return (
    <div className="space-y-4">
      {/* Quick Quotes */}
      <QuickQuotes onSelectPackage={handleQuickQuote} />

      {/* Stats */}
      <QuoteStats quotes={quotes} />

      {/* Needs Attention */}
      <NeedsAttention quotes={quotes} />

      {/* Header with filter and new button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">All Quotes</h2>
          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-28 sm:w-36 h-9">
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
          <Button className="w-full sm:w-auto h-11 text-base">
            <Plus className="w-5 h-5 mr-2" />
            New Quote
          </Button>
        </Link>
      </div>

      {quotes.length === 0 ? (
        <div className="text-center py-8 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground mb-4">
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
        <div className="bg-card rounded-xl border border-border overflow-hidden">
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
                  <TableCell className="text-sm text-muted-foreground">
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
                  <TableCell className="text-sm text-muted-foreground">
                    {format(new Date(quote.created_at), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        title="Duplicate"
                        onClick={() => handleDuplicate(quote)}
                        className="h-9 w-9"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Link to={`/quotes/edit/${quote.id}`}>
                        <Button variant="ghost" size="sm" title="Edit" className="h-9 w-9">
                          <Pencil className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to={`/quotes/${quote.id}`}>
                        <Button variant="ghost" size="sm" title="View" className="h-9 w-9">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        title="Delete"
                        onClick={() => handleDelete(quote.id)}
                        className="h-9 w-9"
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
