import { Zap, Lightbulb, Power, Bath, Wrench, Home, Shield } from "lucide-react";

export interface QuickQuotePackage {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  materials: Array<{
    name: string;
    quantity: number;
    unit_price: number;
    unit_type: string;
  }>;
  laborHours: number;
  suggestedTotal: number;
  color: string;
}

export const QUICK_QUOTE_PACKAGES: QuickQuotePackage[] = [
  {
    id: "ev-charger",
    name: "EV Charger",
    icon: <Zap className="w-8 h-8" />,
    description: "Level 2 charger install",
    materials: [
      { name: "Level 2 EV Charger", quantity: 1, unit_price: 650, unit_type: "each" },
      { name: "50A Breaker", quantity: 1, unit_price: 45, unit_type: "each" },
      { name: "6/3 NMD-90 Wire", quantity: 15, unit_price: 8.75, unit_type: "meter" },
      { name: "Weatherproof Box", quantity: 1, unit_price: 35, unit_type: "each" },
    ],
    laborHours: 4,
    suggestedTotal: 1850,
    color: "bg-emerald-500",
  },
  {
    id: "pot-lights",
    name: "6 Pot Lights",
    icon: <Lightbulb className="w-8 h-8" />,
    description: "LED recessed lighting",
    materials: [
      { name: "4\" LED Pot Light", quantity: 6, unit_price: 45, unit_type: "each" },
      { name: "14/2 NMD-90 Wire", quantity: 30, unit_price: 1.85, unit_type: "meter" },
      { name: "Junction Box", quantity: 6, unit_price: 8, unit_type: "each" },
      { name: "Dimmer Switch", quantity: 1, unit_price: 65, unit_type: "each" },
    ],
    laborHours: 4,
    suggestedTotal: 1200,
    color: "bg-amber-500",
  },
  {
    id: "panel-upgrade",
    name: "Panel 200A",
    icon: <Power className="w-8 h-8" />,
    description: "Full panel upgrade",
    materials: [
      { name: "200A Panel", quantity: 1, unit_price: 450, unit_type: "each" },
      { name: "200A Main Breaker", quantity: 1, unit_price: 125, unit_type: "each" },
      { name: "50A Breaker", quantity: 4, unit_price: 45, unit_type: "each" },
      { name: "Ground Rod Kit", quantity: 1, unit_price: 85, unit_type: "each" },
    ],
    laborHours: 8,
    suggestedTotal: 3500,
    color: "bg-blue-500",
  },
  {
    id: "hot-tub",
    name: "Hot Tub",
    icon: <Bath className="w-8 h-8" />,
    description: "Spa/hot tub wiring",
    materials: [
      { name: "50A GFCI Breaker", quantity: 1, unit_price: 145, unit_type: "each" },
      { name: "6/3 NMD-90 Wire", quantity: 20, unit_price: 8.75, unit_type: "meter" },
      { name: "Disconnect Box", quantity: 1, unit_price: 85, unit_type: "each" },
      { name: "Weatherproof Box", quantity: 1, unit_price: 35, unit_type: "each" },
    ],
    laborHours: 5,
    suggestedTotal: 1600,
    color: "bg-cyan-500",
  },
  {
    id: "service-call",
    name: "Service Call",
    icon: <Wrench className="w-8 h-8" />,
    description: "Diagnostic visit",
    materials: [],
    laborHours: 1.5,
    suggestedTotal: 185,
    color: "bg-gray-500",
  },
  {
    id: "renovation",
    name: "Renovation",
    icon: <Home className="w-8 h-8" />,
    description: "Room rewiring",
    materials: [
      { name: "14/2 NMD-90 Wire", quantity: 50, unit_price: 1.85, unit_type: "meter" },
      { name: "12/2 NMD-90 Wire", quantity: 25, unit_price: 2.25, unit_type: "meter" },
      { name: "Receptacle", quantity: 8, unit_price: 12, unit_type: "each" },
      { name: "Switch", quantity: 4, unit_price: 15, unit_type: "each" },
      { name: "Junction Box", quantity: 12, unit_price: 8, unit_type: "each" },
    ],
    laborHours: 6,
    suggestedTotal: 1400,
    color: "bg-purple-500",
  },
  {
    id: "surge-protection",
    name: "Surge Protect",
    icon: <Shield className="w-8 h-8" />,
    description: "Whole-home surge protection",
    materials: [
      { name: "Whole-Home Surge Protector", quantity: 1, unit_price: 250, unit_type: "each" },
      { name: "2-Pole Breaker", quantity: 1, unit_price: 35, unit_type: "each" },
    ],
    laborHours: 2,
    suggestedTotal: 450,
    color: "bg-orange-500",
  },
];

interface QuickQuotesProps {
  onSelectPackage: (pkg: QuickQuotePackage) => void;
}

const QuickQuotes = ({ onSelectPackage }: QuickQuotesProps) => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
        <Zap className="w-5 h-5 text-amber-500" />
        Quick Quotes
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {QUICK_QUOTE_PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => onSelectPackage(pkg)}
            className={`${pkg.color} text-white rounded-xl p-3 flex flex-col items-center gap-1 hover:opacity-90 active:scale-95 transition-all shadow-md min-h-[90px]`}
          >
            {pkg.icon}
            <span className="text-xs font-semibold text-center leading-tight">{pkg.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickQuotes;
