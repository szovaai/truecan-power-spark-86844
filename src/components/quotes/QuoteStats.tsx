import { FileText, Clock, CheckCircle, DollarSign } from "lucide-react";

interface Quote {
  id: string;
  status: string;
  total: number;
  created_at: string;
  updated_at: string;
}

interface QuoteStatsProps {
  quotes: Quote[];
}

const QuoteStats = ({ quotes }: QuoteStatsProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const quotesToday = quotes.filter(q => new Date(q.created_at) >= today).length;
  const pendingQuotes = quotes.filter(q => q.status === "sent").length;
  const acceptedQuotes = quotes.filter(q => q.status === "accepted");
  const totalWon = acceptedQuotes.reduce((sum, q) => sum + (q.total || 0), 0);
  
  // Find quotes that need follow-up (sent > 3 days ago)
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const needsFollowUp = quotes.filter(q => 
    q.status === "sent" && new Date(q.updated_at) < threeDaysAgo
  ).length;

  const stats = [
    {
      label: "Today",
      value: quotesToday,
      icon: <FileText className="w-4 h-4" />,
      color: "bg-blue-500",
    },
    {
      label: "Pending",
      value: pendingQuotes,
      icon: <Clock className="w-4 h-4" />,
      color: "bg-amber-500",
      alert: needsFollowUp > 0,
    },
    {
      label: "Won",
      value: `$${(totalWon / 1000).toFixed(1)}k`,
      icon: <DollarSign className="w-4 h-4" />,
      color: "bg-emerald-500",
    },
    {
      label: "Accepted",
      value: acceptedQuotes.length,
      icon: <CheckCircle className="w-4 h-4" />,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {stats.map((stat) => (
        <div 
          key={stat.label}
          className={`${stat.color} text-white rounded-xl p-3 text-center relative`}
        >
          {stat.alert && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
          <div className="flex justify-center mb-1 opacity-80">{stat.icon}</div>
          <div className="text-lg font-bold">{stat.value}</div>
          <div className="text-xs opacity-80">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default QuoteStats;
