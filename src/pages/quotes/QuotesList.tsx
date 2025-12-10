import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { Plus, Eye, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";

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

const QuotesList = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });

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
  }, []);

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

  if (loading) {
    return <div className="text-center py-12">Loading quotes...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Quotes</h2>
        <Link to="/quotes/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Quote
          </Button>
        </Link>
      </div>

      {quotes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500 mb-4">No quotes yet</p>
          <Link to="/quotes/new">
            <Button>Create your first quote</Button>
          </Link>
        </div>
      ) : (
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
                    <div className="flex items-center justify-end gap-2">
                      <Link to={`/quotes/${quote.id}`}>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
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