import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GuaranteeCard = () => {
  return (
    <Card className="border-2 border-success/20 bg-success/5">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
              <Shield className="h-6 w-6 text-success" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">On-Time Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed">
              On-Time Arrival Window. If we're late, we credit $50—no questions asked.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuaranteeCard;
