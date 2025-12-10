import { AlertCircle, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Quote {
  id: string;
  quote_number: string;
  customer_name: string;
  status: string;
  total: number;
  updated_at: string;
}

interface NeedsAttentionProps {
  quotes: Quote[];
}

const NeedsAttention = ({ quotes }: NeedsAttentionProps) => {
  const now = new Date();
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  
  // Find quotes that need attention
  const needsFollowUp = quotes
    .filter(q => q.status === "sent" && new Date(q.updated_at) < threeDaysAgo)
    .sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime())
    .slice(0, 3);
  
  const draftsOld = quotes
    .filter(q => q.status === "draft" && new Date(q.updated_at) < threeDaysAgo)
    .slice(0, 2);

  const items = [
    ...needsFollowUp.map(q => ({
      id: q.id,
      quote_number: q.quote_number,
      customer_name: q.customer_name,
      type: "follow-up" as const,
      message: `${formatDistanceToNow(new Date(q.updated_at))} since sent`,
      icon: <Clock className="w-4 h-4 text-amber-500" />,
    })),
    ...draftsOld.map(q => ({
      id: q.id,
      quote_number: q.quote_number,
      customer_name: q.customer_name,
      type: "draft" as const,
      message: "Old draft - finish or delete?",
      icon: <MessageSquare className="w-4 h-4 text-blue-500" />,
    })),
  ];

  if (items.length === 0) return null;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-2">
      <div className="flex items-center gap-2 text-amber-700">
        <AlertCircle className="w-4 h-4" />
        <span className="text-sm font-semibold">Needs Attention</span>
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/quotes/builder/${item.id}`}
            className="flex items-center gap-2 bg-white rounded-lg p-2 hover:bg-amber-100 transition-colors"
          >
            {item.icon}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">
                {item.quote_number} - {item.customer_name}
              </div>
              <div className="text-xs text-muted-foreground">{item.message}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NeedsAttention;
