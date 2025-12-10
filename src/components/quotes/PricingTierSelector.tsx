import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Star, Crown, Sparkles } from "lucide-react";

export type PricingTier = "good" | "better" | "best";

interface TierConfig {
  name: string;
  label: string;
  materialMultiplier: number;
  laborMultiplier: number;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  badge?: string;
  highlight?: boolean;
}

export const PRICING_TIERS: Record<PricingTier, TierConfig> = {
  good: {
    name: "Good",
    label: "Standard",
    materialMultiplier: 1.0,
    laborMultiplier: 1.0,
    icon: <Check className="w-5 h-5" />,
    description: "Quality work at base pricing",
    benefits: ["Standard materials", "1-year warranty", "Professional install"],
  },
  better: {
    name: "Better",
    label: "Premium",
    materialMultiplier: 1.15,
    laborMultiplier: 1.10,
    icon: <Star className="w-5 h-5" />,
    description: "Premium materials & extended warranty",
    benefits: ["Premium materials", "3-year warranty", "Priority support", "Extended guarantee"],
    badge: "MOST POPULAR",
    highlight: true,
  },
  best: {
    name: "Best",
    label: "Elite",
    materialMultiplier: 1.30,
    laborMultiplier: 1.20,
    icon: <Crown className="w-5 h-5" />,
    description: "Top-tier materials & lifetime warranty",
    benefits: ["Top-tier materials", "Lifetime warranty", "VIP support", "Annual inspection"],
  },
};

interface PricingTierSelectorProps {
  selectedTier: PricingTier;
  onTierChange: (tier: PricingTier) => void;
  baseTotal: number;
  materialsSubtotal: number;
  laborTotal: number;
  markupAmount: number;
}

export function calculateTierPricing(
  tier: PricingTier,
  materialsSubtotal: number,
  laborTotal: number,
  markupPercent: number
) {
  const config = PRICING_TIERS[tier];
  const adjustedMaterials = materialsSubtotal * config.materialMultiplier;
  const adjustedLabor = laborTotal * config.laborMultiplier;
  const adjustedMarkup = (adjustedMaterials * markupPercent) / 100;
  return {
    materials: adjustedMaterials,
    labor: adjustedLabor,
    markup: adjustedMarkup,
    total: adjustedMaterials + adjustedLabor + adjustedMarkup,
  };
}

const PricingTierSelector = ({
  selectedTier,
  onTierChange,
  materialsSubtotal,
  laborTotal,
  markupAmount,
}: PricingTierSelectorProps) => {
  const tiers: PricingTier[] = ["good", "better", "best"];
  const baseMarkupPercent = materialsSubtotal > 0 ? (markupAmount / materialsSubtotal) * 100 : 25;
  const baseLaborTotal = laborTotal / PRICING_TIERS[selectedTier].laborMultiplier;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-500" />
        <label className="text-sm font-semibold text-foreground">Choose Package</label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tiers.map((tier) => {
          const config = PRICING_TIERS[tier];
          const isSelected = selectedTier === tier;
          const pricing = calculateTierPricing(
            tier,
            materialsSubtotal,
            baseLaborTotal,
            baseMarkupPercent
          );

          return (
            <button
              key={tier}
              onClick={() => onTierChange(tier)}
              className={cn(
                "relative p-4 rounded-xl border-2 text-left transition-all",
                config.highlight && !isSelected && "ring-2 ring-amber-200 ring-offset-2",
                isSelected
                  ? config.highlight 
                    ? "border-amber-500 bg-amber-50 shadow-lg shadow-amber-200/50"
                    : "border-primary bg-primary/5 shadow-md"
                  : config.highlight
                    ? "border-amber-300 bg-amber-50/50 hover:border-amber-400"
                    : "border-border bg-card hover:border-muted-foreground/30"
              )}
            >
              {config.badge && (
                <Badge className={cn(
                  "absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 font-bold",
                  isSelected ? "bg-amber-500" : "bg-amber-400",
                  "text-white animate-pulse"
                )}>
                  {config.badge}
                </Badge>
              )}
              
              <div className="flex items-center gap-2 mb-2">
                <span className={cn(
                  "p-2 rounded-full",
                  isSelected 
                    ? config.highlight ? "bg-amber-500 text-white" : "bg-primary text-primary-foreground"
                    : config.highlight ? "bg-amber-100 text-amber-600" : "bg-muted text-muted-foreground"
                )}>
                  {config.icon}
                </span>
                <div>
                  <span className={cn(
                    "font-bold text-lg",
                    config.highlight ? "text-amber-700" : "text-foreground"
                  )}>
                    {config.name}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">{config.label}</span>
                </div>
              </div>
              
              {/* Benefits list */}
              <ul className="space-y-1 mb-3">
                {config.benefits.slice(0, 3).map((benefit, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Check className={cn(
                      "w-3 h-3 flex-shrink-0",
                      config.highlight ? "text-amber-500" : "text-emerald-500"
                    )} />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <div className={cn(
                "text-2xl font-bold",
                config.highlight ? "text-amber-700" : "text-foreground"
              )}>
                ${pricing.total.toLocaleString("en-CA", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </div>
              
              {config.highlight && (
                <div className="mt-2 text-xs text-amber-600 font-medium">
                  Recommended for most customers
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PricingTierSelector;
