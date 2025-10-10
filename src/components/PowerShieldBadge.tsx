import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface PowerShieldBadgeProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const PowerShieldBadge = ({ size = "md", className }: PowerShieldBadgeProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  const iconSizes = {
    sm: 20,
    md: 32,
    lg: 48
  };

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className={cn(
        "relative rounded-full bg-gradient-to-br from-background to-surface flex items-center justify-center border-2 border-primary shadow-glow group-hover:shadow-premium transition-smooth",
        sizeClasses[size]
      )}>
        <div className="absolute inset-0 rounded-full bg-primary/5" />
        <Shield className="text-primary relative z-10" size={iconSizes[size]} strokeWidth={2.5} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-primary font-bold text-xs">⚡</div>
        </div>
      </div>
      {size !== "sm" && (
        <div className="text-center">
          <p className="font-montserrat font-bold text-sm">PowerShield™</p>
          <p className="text-xs text-muted-foreground">Member</p>
        </div>
      )}
    </div>
  );
};

export default PowerShieldBadge;
