import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const quoteSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  jobType: z.string().min(1, { message: "Please select a job type" }),
  postalCode: z.string()
    .trim()
    .max(10, { message: "Postal code must be less than 10 characters" })
    .optional()
    .or(z.literal("")),
});

interface QuoteRequestFormProps {
  variant?: "card" | "inline";
  title?: string;
}

const QuoteRequestForm = ({ variant = "card", title = "Get a Free Quote" }: QuoteRequestFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    jobType: "",
    postalCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = quoteSchema.parse(formData);
      setIsSubmitting(true);

      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: validatedData.name,
          phone: validatedData.phone,
          email: "quote-request@truecanpower.com",
          serviceType: validatedData.jobType,
          message: `Quick quote request. Postal Code: ${validatedData.postalCode || "Not provided"}`,
        }
      });

      if (error) throw error;

      toast({
        title: "Quote Request Sent!",
        description: "We'll call you back within 2 hours during business hours.",
      });

      setFormData({ name: "", phone: "", jobType: "", postalCode: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send request. Please call us directly.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="quote-name">Name *</Label>
        <Input
          id="quote-name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="quote-phone">Phone *</Label>
        <Input
          id="quote-phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="(XXX) XXX-XXXX"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="quote-job-type">Job Type *</Label>
        <Select value={formData.jobType} onValueChange={(value) => handleChange("jobType", value)}>
          <SelectTrigger id="quote-job-type">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-background z-50">
            <SelectItem value="panel-upgrade">Panel Upgrade</SelectItem>
            <SelectItem value="ev-charger">EV Charger Installation</SelectItem>
            <SelectItem value="pot-lights">Pot Light Installation</SelectItem>
            <SelectItem value="surge-protection">Surge Protection</SelectItem>
            <SelectItem value="hot-tub-sauna">Hot Tub / Sauna Wiring</SelectItem>
            <SelectItem value="renovation">Renovation Wiring</SelectItem>
            <SelectItem value="emergency">Emergency Repair</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="quote-postal">Postal Code (Optional)</Label>
        <Input
          id="quote-postal"
          value={formData.postalCode}
          onChange={(e) => handleChange("postalCode", e.target.value.toUpperCase())}
          placeholder="T2X 1A1"
          maxLength={7}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        <Send className="mr-2" size={18} />
        {isSubmitting ? "Sending..." : "Get Free Quote"}
      </Button>

      <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
        <CheckCircle2 size={12} className="text-primary" />
        Licensed & Insured • Permits & Inspections • Warranty-Backed Work
      </p>
    </form>
  );

  if (variant === "inline") {
    return formContent;
  }

  return (
    <Card className="shadow-elegant border-2 border-primary/20">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {formContent}
      </CardContent>
    </Card>
  );
};

export default QuoteRequestForm;
