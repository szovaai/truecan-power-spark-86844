import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const EmergencyFAB = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Emergency request submitted! We'll call you within 10 minutes.");
    setOpen(false);
    setFormData({ name: "", phone: "", issue: "" });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 left-6 md:bottom-8 md:left-8 h-16 w-16 rounded-full shadow-premium hover:shadow-glow z-50"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-surface border-border">
        <SheetHeader>
          <SheetTitle className="text-2xl">Emergency Service</SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Fill out this form and we'll call you within 10 minutes.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-background border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="issue">What's the issue?</Label>
            <Select
              value={formData.issue}
              onValueChange={(value) => setFormData({ ...formData, issue: value })}
              required
            >
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="power-outage">Power Outage</SelectItem>
                <SelectItem value="sparking">Sparking/Burning Smell</SelectItem>
                <SelectItem value="breaker-tripping">Breaker Keeps Tripping</SelectItem>
                <SelectItem value="no-power">No Power to Area</SelectItem>
                <SelectItem value="other">Other Emergency</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Submit Emergency Request
          </Button>
          
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground text-center mb-2">
              Or call us directly:
            </p>
            <a
              href="tel:+12508830499"
              className="block text-center text-2xl font-bold text-primary hover:text-primary-hover transition-smooth"
            >
              (250) 883-0499
            </a>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EmergencyFAB;
