import { useState } from "react";
import { Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Material {
  id: string;
  name: string;
  category: string;
  unit_price: number;
  unit_type: string;
}

interface MaterialPickerProps {
  materials: Material[];
  recentlyUsed: string[];
  onAddMaterial: (material: Material) => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  wiring: "Wiring",
  panels: "Panels",
  lighting: "Lighting",
  ev_chargers: "EV",
  fixtures: "Fixtures",
  misc: "Misc",
};

const MaterialPicker = ({ materials, recentlyUsed, onAddMaterial }: MaterialPickerProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", ...Object.keys(CATEGORY_LABELS)];
  
  // Get recently used materials
  const recentMaterials = materials.filter(m => recentlyUsed.includes(m.id)).slice(0, 4);
  
  // Filter by category
  const filteredMaterials = selectedCategory === "all" 
    ? materials 
    : materials.filter(m => m.category === selectedCategory);

  return (
    <div className="space-y-3">
      {/* Recently Used */}
      {recentMaterials.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Recently Used</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {recentMaterials.map((material) => (
              <button
                key={material.id}
                onClick={() => onAddMaterial(material)}
                className="bg-muted/50 hover:bg-muted rounded-lg p-2 text-left transition-colors"
              >
                <div className="text-xs font-medium text-foreground truncate">{material.name}</div>
                <div className="text-xs text-muted-foreground">${material.unit_price}/{material.unit_type}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Category Tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1 -mx-1 px-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat === "all" ? "All" : CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>
      
      {/* Materials Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[200px] overflow-y-auto">
        {filteredMaterials.slice(0, 12).map((material) => (
          <button
            key={material.id}
            onClick={() => onAddMaterial(material)}
            className="bg-card border border-border hover:border-primary rounded-lg p-2 text-left transition-all group"
          >
            <div className="text-xs font-medium text-foreground truncate group-hover:text-primary">
              {material.name}
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-muted-foreground">
                ${material.unit_price}/{material.unit_type}
              </span>
              <Plus className="w-3 h-3 text-muted-foreground group-hover:text-primary" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MaterialPicker;
