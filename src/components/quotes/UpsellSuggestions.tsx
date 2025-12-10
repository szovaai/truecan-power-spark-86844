import { Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LineItem {
  id: string;
  name: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

interface Upsell {
  id: string;
  trigger: string[];
  name: string;
  description: string;
  price: number;
  unit_type: string;
}

const UPSELLS: Upsell[] = [
  {
    id: "surge-protector",
    trigger: ["ev charger", "charger", "ev"],
    name: "Whole-Home Surge Protector",
    description: "Protect all electronics from power surges",
    price: 250,
    unit_type: "each",
  },
  {
    id: "smoke-detector",
    trigger: ["panel", "200a", "100a", "upgrade"],
    name: "Smoke Detector (per unit)",
    description: "Replace old smoke detectors while panel is open",
    price: 45,
    unit_type: "each",
  },
  {
    id: "smart-dimmer",
    trigger: ["pot light", "light", "lighting", "led"],
    name: "Smart Dimmer Switch",
    description: "Control lights from your phone",
    price: 85,
    unit_type: "each",
  },
  {
    id: "outdoor-gfci",
    trigger: ["hot tub", "spa", "sauna", "outdoor"],
    name: "Outdoor GFCI Outlet",
    description: "Weatherproof outlet near hot tub area",
    price: 175,
    unit_type: "each",
  },
  {
    id: "usb-outlet",
    trigger: ["receptacle", "outlet", "renovation", "wire"],
    name: "USB-C Outlet Upgrade",
    description: "Replace standard outlets with USB charging",
    price: 55,
    unit_type: "each",
  },
];

interface UpsellSuggestionsProps {
  lineItems: LineItem[];
  onAddUpsell: (upsell: { name: string; price: number; unit_type: string }) => void;
}

const UpsellSuggestions = ({ lineItems, onAddUpsell }: UpsellSuggestionsProps) => {
  // Find relevant upsells based on current line items
  const itemNames = lineItems.map(item => item.name.toLowerCase()).join(" ");
  
  const relevantUpsells = UPSELLS.filter(upsell => {
    // Check if any trigger word matches
    const matches = upsell.trigger.some(trigger => itemNames.includes(trigger));
    // Check if not already added
    const alreadyAdded = lineItems.some(item => 
      item.name.toLowerCase().includes(upsell.name.toLowerCase())
    );
    return matches && !alreadyAdded;
  });

  if (relevantUpsells.length === 0) return null;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 space-y-2">
      <div className="flex items-center gap-2 text-amber-700">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">Suggested Add-ons</span>
      </div>
      <div className="space-y-2">
        {relevantUpsells.slice(0, 2).map((upsell) => (
          <div 
            key={upsell.id}
            className="flex items-center justify-between bg-white rounded-lg p-2 shadow-sm"
          >
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">{upsell.name}</div>
              <div className="text-xs text-muted-foreground">{upsell.description}</div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="ml-2 flex-shrink-0 text-amber-700 border-amber-300 hover:bg-amber-100"
              onClick={() => onAddUpsell({ 
                name: upsell.name, 
                price: upsell.price, 
                unit_type: upsell.unit_type 
              })}
            >
              <Plus className="w-3 h-3 mr-1" />
              ${upsell.price}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpsellSuggestions;
