import { Check, Loader2, AlertCircle, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

interface SaveStatusIndicatorProps {
  status: "idle" | "saving" | "saved" | "error";
  className?: string;
}

const SaveStatusIndicator = ({ status, className }: SaveStatusIndicatorProps) => {
  if (status === "idle") return null;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-sm px-2 py-1 rounded-md",
        status === "saving" && "text-blue-600 bg-blue-50",
        status === "saved" && "text-green-600 bg-green-50",
        status === "error" && "text-red-600 bg-red-50",
        className
      )}
    >
      {status === "saving" && (
        <>
          <Loader2 className="w-3 h-3 animate-spin" />
          <span>Saving...</span>
        </>
      )}
      {status === "saved" && (
        <>
          <Check className="w-3 h-3" />
          <span>Saved</span>
        </>
      )}
      {status === "error" && (
        <>
          <AlertCircle className="w-3 h-3" />
          <span>Save failed</span>
        </>
      )}
    </div>
  );
};

export default SaveStatusIndicator;
