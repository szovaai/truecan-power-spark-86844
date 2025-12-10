import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Pencil, Eye, Trash2, Phone, Mail } from "lucide-react";
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

interface QuoteCardProps {
  quote: Quote;
  onDuplicate: (quote: Quote) => void;
  onDelete: (id: string) => void;
}

const QuoteCard = ({ quote, onDuplicate, onDelete }: QuoteCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-sm text-gray-500">{quote.quote_number}</p>
          <h3 className="font-semibold text-gray-900">{quote.customer_name}</h3>
        </div>
        <Badge className={statusColors[quote.status]}>{quote.status}</Badge>
      </div>

      {/* Contact Info */}
      {(quote.customer_email || quote.customer_phone) && (
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          {quote.customer_phone && (
            <a href={`tel:${quote.customer_phone}`} className="flex items-center gap-1 hover:text-gray-900">
              <Phone className="w-3 h-3" />
              {quote.customer_phone}
            </a>
          )}
          {quote.customer_email && (
            <a href={`mailto:${quote.customer_email}`} className="flex items-center gap-1 hover:text-gray-900">
              <Mail className="w-3 h-3" />
              {quote.customer_email}
            </a>
          )}
        </div>
      )}

      {/* Total & Date */}
      <div className="flex items-center justify-between pt-2 border-t">
        <span className="text-lg font-bold text-gray-900">
          ${Number(quote.total).toLocaleString("en-CA", { minimumFractionDigits: 2 })}
        </span>
        <span className="text-sm text-gray-500">
          {format(new Date(quote.created_at), "MMM d, yyyy")}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onDuplicate(quote)}
        >
          <Copy className="w-4 h-4 mr-1" />
          Copy
        </Button>
        <Link to={`/quotes/edit/${quote.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <Pencil className="w-4 h-4 mr-1" />
            Edit
          </Button>
        </Link>
        <Link to={`/quotes/${quote.id}`} className="flex-1">
          <Button variant="default" size="sm" className="w-full">
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(quote.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuoteCard;
