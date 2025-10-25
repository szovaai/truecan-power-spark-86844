import { useState } from "react";
import { Shield, X } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const exitIntentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
});

const ExitIntentPopup = () => {
  const location = useLocation();
  const [hasShown, setHasShown] = useSessionStorage('exitPopupShown', false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Don't show on Contact page
  const enabled = location.pathname !== '/contact' && !hasShown;

  useExitIntent({
    onExitIntent: () => {
      if (enabled) {
        setIsOpen(true);
        setHasShown(true);
      }
    },
    enabled,
    delay: 3000,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      exitIntentSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          isExitIntentLead: true,
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "We'll email you within 2 hours with your free inspection details.",
      });
      
      setIsOpen(false);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error submitting exit intent lead:', error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto border-2 border-primary/30 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-background [&::-webkit-scrollbar-thumb]:bg-foreground/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-foreground/30">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader>
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-2 border-primary shadow-glow">
              <Shield className="text-primary w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.5} />
            </div>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-montserrat font-extrabold text-center">
            Wait! Before You Go...
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Claim Your Free 20-Point Home Safety Inspection
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 pt-2">
          <div className="p-3 bg-primary/10 border-l-4 border-primary rounded-lg">
            <p className="font-semibold mb-2">Valued at $99 — Yours Free!</p>
            <p className="text-sm text-muted-foreground">
              Identify hidden electrical hazards before they become expensive problems
            </p>
          </div>

          <div className="bg-surface/50 rounded-lg p-3 border border-border">
            <p className="text-sm mb-2 font-semibold">What's Included:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>✓ ESA-Certified technician inspection</li>
              <li>✓ Complete safety report with photos</li>
              <li>✓ No obligation, 100% free</li>
            </ul>
          </div>

          <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-center">
            <p className="text-sm font-bold text-destructive">
              ⚠️ Only 5 free inspections left this week!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Label htmlFor="exit-name">Name *</Label>
              <Input
                id="exit-name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="exit-email">Email *</Label>
              <Input
                id="exit-email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="exit-phone">Phone (Optional)</Label>
              <Input
                id="exit-phone"
                type="tel"
                placeholder="(403) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Claim My Free Inspection"}
            </Button>
          </form>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-smooth"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
