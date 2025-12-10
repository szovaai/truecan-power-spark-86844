import { AlertTriangle } from "lucide-react";

interface LineItem {
  id: string;
  name: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

interface QuoteWarningsProps {
  customerName: string;
  customerEmail: string;
  lineItems: LineItem[];
  laborHours: number;
  markupPercent: number;
}

interface Warning {
  type: "error" | "warning";
  message: string;
}

const QuoteWarnings = ({
  customerName,
  customerEmail,
  lineItems,
  laborHours,
  markupPercent,
}: QuoteWarningsProps) => {
  const warnings: Warning[] = [];

  // Missing customer name
  if (!customerName.trim()) {
    warnings.push({ type: "error", message: "Customer name is required" });
  }

  // No materials added
  if (lineItems.length === 0) {
    warnings.push({ type: "warning", message: "No materials added to quote" });
  }

  // Zero quantity items
  const zeroQtyItems = lineItems.filter(item => item.quantity <= 0);
  if (zeroQtyItems.length > 0) {
    warnings.push({ type: "warning", message: `${zeroQtyItems.length} item(s) have zero quantity` });
  }

  // Zero labor hours on quote with materials
  if (lineItems.length > 0 && laborHours === 0) {
    warnings.push({ type: "warning", message: "No labor hours added" });
  }

  // Low markup warning
  if (markupPercent < 20 && markupPercent > 0) {
    warnings.push({ type: "warning", message: `Markup is below 20% (${markupPercent}%)` });
  }

  // No email (can't send quote)
  if (!customerEmail.trim()) {
    warnings.push({ type: "warning", message: "No email - quote cannot be emailed" });
  }

  if (warnings.length === 0) return null;

  const hasErrors = warnings.some(w => w.type === "error");

  return (
    <div className={`rounded-lg p-3 space-y-2 ${hasErrors ? "bg-red-50 border border-red-200" : "bg-yellow-50 border border-yellow-200"}`}>
      <div className="flex items-center gap-2">
        <AlertTriangle className={`w-4 h-4 ${hasErrors ? "text-red-500" : "text-yellow-500"}`} />
        <span className={`text-sm font-medium ${hasErrors ? "text-red-700" : "text-yellow-700"}`}>
          {warnings.length} issue{warnings.length > 1 ? "s" : ""} detected
        </span>
      </div>
      <ul className="space-y-1">
        {warnings.map((warning, i) => (
          <li
            key={i}
            className={`text-sm ${warning.type === "error" ? "text-red-600" : "text-yellow-700"}`}
          >
            • {warning.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteWarnings;
