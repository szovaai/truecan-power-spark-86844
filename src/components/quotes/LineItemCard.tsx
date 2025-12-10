import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Minus, Plus } from "lucide-react";

interface LineItem {
  id: string;
  material_id: string | null;
  name: string;
  quantity: number;
  unit_price: number;
  unit_type: string;
  subtotal: number;
  is_custom: boolean;
}

interface LineItemCardProps {
  item: LineItem;
  onUpdate: (id: string, updates: Partial<LineItem>) => void;
  onRemove: (id: string) => void;
}

const LineItemCard = ({ item, onUpdate, onRemove }: LineItemCardProps) => {
  const handleQuantityChange = (delta: number) => {
    const newQty = Math.max(0, item.quantity + delta);
    onUpdate(item.id, { quantity: newQty });
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
      {/* Header with name and delete */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          {item.is_custom ? (
            <Input
              value={item.name}
              onChange={(e) => onUpdate(item.id, { name: e.target.value })}
              placeholder="Item name"
              className="bg-white font-medium"
            />
          ) : (
            <span className="font-medium text-gray-900">{item.name}</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 -mt-1 -mr-2"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Quantity stepper and price */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
            onClick={() => handleQuantityChange(-1)}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <div className="w-20 text-center">
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => onUpdate(item.id, { quantity: parseFloat(e.target.value) || 0 })}
              className="text-center bg-white h-10"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
            onClick={() => handleQuantityChange(1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
          <span className="text-sm text-gray-500">{item.unit_type}</span>
        </div>

        <div className="text-right">
          {item.is_custom ? (
            <Input
              type="number"
              step="0.01"
              value={item.unit_price}
              onChange={(e) => onUpdate(item.id, { unit_price: parseFloat(e.target.value) || 0 })}
              className="w-24 text-right bg-white"
              placeholder="Price"
            />
          ) : (
            <span className="text-sm text-gray-600">${Number(item.unit_price).toFixed(2)} ea</span>
          )}
        </div>
      </div>

      {/* Subtotal */}
      <div className="flex justify-end pt-2 border-t border-gray-200">
        <span className="font-semibold text-gray-900">
          ${item.subtotal.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default LineItemCard;
