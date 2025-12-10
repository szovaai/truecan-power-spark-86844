import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Star, Crown } from "lucide-react";

export type PricingTier = "good" | "better" | "best";

interface TierConfig {
  name: string;
  label: string;
  materialMultiplier: number;
  laborMultiplier: number;
  icon: React.ReactNode;
  description: string;
  badge?: string;
}

export const PRICING_TIERS: Record<PricingTier, TierConfig> = {
  good: {
    name: "Good",
    label: "Standard",
    materialMultiplier: 1.0,
    laborMultiplier: 1.0,
    icon: <Check className="w-4 h-4" />,
    description: "Quality work at base pricing",
  },
  better: {
    name: "Better",
    label: "Premium",
    materialMultiplier: 1.15,
    laborMultiplier: 1.10,
    icon: <Star className="w-4 h-4" />,
    description: "Premium materials & extended warranty",
    badge: "Most Popular",
  },
  best: {
    name: "Best",
    label: "Elite",
    materialMultiplier: 1.30,
    laborMultiplier: 1.20,
    icon: <Crown className="w-4 h-4" />,
    description: "Top-tier materials & lifetime warranty",
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

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-gray-700">Quote Tier</label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tiers.map((tier) => {
          const config = PRICING_TIERS[tier];
          const isSelected = selectedTier === tier;
          const pricing = calculateTierPricing(
            tier,
            materialsSubtotal,
            laborTotal / PRICING_TIERS[selectedTier].laborMultiplier,
            (markupAmount / materialsSubtotal) * 100 || 25
          );

          return (
            <button
              key={tier}
              onClick={() => onTierChange(tier)}
              className={cn(
                "relative p-4 rounded-lg border-2 text-left transition-all",
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300 bg-white"
              )}
            >
              {config.badge && (
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs">
                  {config.badge}
                </Badge>
              )}
              <div className="flex items-center gap-2 mb-2">
                <span className={cn(
                  "p-1.5 rounded-full",
                  isSelected ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
                )}>
                  {config.icon}
                </span>
                <span className="font-semibold">{config.name}</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{config.description}</p>
              <p className="text-lg font-bold text-gray-900">
                ${pricing.total.toLocaleString("en-CA", { minimumFractionDigits: 2 })}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PricingTierSelector;
