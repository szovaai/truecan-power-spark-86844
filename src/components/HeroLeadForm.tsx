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

const leadSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  serviceType: z.string().min(1, { message: "Please select a service" }),
});

const HeroLeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = leadSchema.parse(formData);
      setIsSubmitting(true);

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Request Received!",
        description: "We'll contact you within 2 hours during business hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive"
        });
      } else {
        console.error("Error sending request:", error);
        toast({
          title: "Error",
          description: "Failed to send request. Please call us at (587) 317-0615",
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

  return (
    <Card className="shadow-glow border-2 border-primary/30 bg-white animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-montserrat font-bold text-center">
          Get Your Free Quote
        </CardTitle>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="text-success" size={16} />
          <span>Response within 2 hours</span>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Full Name *</Label>
            <Input
              id="lead-name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Smith"
              required
              className="border-2 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-phone">Phone Number *</Label>
            <Input
              id="lead-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="(587) 555-0123"
              required
              className="border-2 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-email">Email Address *</Label>
            <Input
              id="lead-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
              required
              className="border-2 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-service">Service Needed *</Label>
            <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)} required>
              <SelectTrigger id="lead-service" className="border-2 focus:border-primary">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="panel-upgrade">Panel Upgrade</SelectItem>
                <SelectItem value="ev-charger">EV Charger Installation</SelectItem>
                <SelectItem value="lighting">Lighting Installation</SelectItem>
                <SelectItem value="emergency">Emergency Repair</SelectItem>
                <SelectItem value="hot-tub">Hot Tub/Sauna Wiring</SelectItem>
                <SelectItem value="renovation">Renovation Wiring</SelectItem>
                <SelectItem value="commercial">Commercial Service</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            size="lg" 
            className="w-full button-glow-hover"
            disabled={isSubmitting}
          >
            <Send className="mr-2" size={18} />
            {isSubmitting ? "Sending..." : "Get Free Quote"}
          </Button>

          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            By submitting, you agree to be contacted about your electrical service needs.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default HeroLeadForm;
