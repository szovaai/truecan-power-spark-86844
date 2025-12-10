import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

type MaterialCategory = "wiring" | "panels" | "lighting" | "ev_chargers" | "fixtures" | "misc";

interface Material {
  id: string;
  name: string;
  category: MaterialCategory;
  unit_price: number;
  unit_type: string;
  supplier: string | null;
}

const categoryLabels: Record<MaterialCategory, string> = {
  wiring: "Wiring",
  panels: "Panels",
  lighting: "Lighting",
  ev_chargers: "EV Chargers",
  fixtures: "Fixtures",
  misc: "Misc",
};

interface MaterialCardProps {
  material: Material;
  onEdit: (material: Material) => void;
  onDelete: (id: string) => void;
}

const MaterialCard = ({ material, onEdit, onDelete }: MaterialCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-gray-900">{material.name}</h3>
        <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-600">
          {categoryLabels[material.category]}
        </span>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
        <span>${Number(material.unit_price).toFixed(2)} / {material.unit_type}</span>
        {material.supplier && <span>{material.supplier}</span>}
      </div>

      <div className="flex items-center gap-2 pt-2 border-t">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onEdit(material)}
        >
          <Pencil className="w-4 h-4 mr-1" />
          Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(material.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default MaterialCard;
