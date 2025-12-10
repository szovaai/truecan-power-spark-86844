import { DollarSign, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface ProfitDashboardProps {
  materialCost: number;
  laborCost: number;
  total: number;
}

const ProfitDashboard = ({ materialCost, laborCost, total }: ProfitDashboardProps) => {
  const totalCost = materialCost + laborCost;
  const profit = total - totalCost;
  const profitMargin = total > 0 ? (profit / total) * 100 : 0;
  
  const isLowMargin = profitMargin > 0 && profitMargin < 35;
  const isGoodMargin = profitMargin >= 35 && profitMargin < 45;
  const isGreatMargin = profitMargin >= 45;
  
  const getMarginColor = () => {
    if (profitMargin <= 0) return "text-muted-foreground";
    if (isLowMargin) return "text-red-500";
    if (isGoodMargin) return "text-emerald-500";
    return "text-emerald-600";
  };
  
  const getBarColor = () => {
    if (profitMargin <= 0) return "bg-muted";
    if (isLowMargin) return "bg-red-500";
    if (isGoodMargin) return "bg-emerald-500";
    return "bg-emerald-600";
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-emerald-500" />
          Profit on This Job
        </h3>
        {isGreatMargin && <TrendingUp className="w-5 h-5 text-emerald-600" />}
        {isLowMargin && <TrendingDown className="w-5 h-5 text-red-500" />}
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${getBarColor()} transition-all duration-300`}
          style={{ width: `${Math.min(Math.max(profitMargin, 0), 100)}%` }}
        />
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="text-center">
          <div className="text-muted-foreground text-xs">Materials</div>
          <div className="font-medium text-foreground">${materialCost.toFixed(0)}</div>
        </div>
        <div className="text-center">
          <div className="text-muted-foreground text-xs">Labor</div>
          <div className="font-medium text-foreground">${laborCost.toFixed(0)}</div>
        </div>
        <div className="text-center">
          <div className="text-muted-foreground text-xs">Profit</div>
          <div className={`font-bold ${getMarginColor()}`}>
            ${profit.toFixed(0)}
            <span className="text-xs ml-1">({profitMargin.toFixed(0)}%)</span>
          </div>
        </div>
      </div>
      
      {isLowMargin && (
        <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 rounded-lg p-2">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span>Margin below 35% – consider increasing markup</span>
        </div>
      )}
      
      {isGreatMargin && (
        <div className="text-xs text-emerald-600 bg-emerald-50 rounded-lg p-2 text-center font-medium">
          🎉 Great margin! This is a profitable job.
        </div>
      )}
    </div>
  );
};

export default ProfitDashboard;
