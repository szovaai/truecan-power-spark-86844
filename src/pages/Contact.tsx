import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    urgency: "",
    message: "",
    interestedInPowerShield: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      urgency: "",
      message: "",
      interestedInPowerShield: false
    });
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6 leading-tight">
            Get Your Power Issue Solved — Fast
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Book your appointment or request a quote in minutes
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-montserrat font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Reach out for a free consultation. Our team is ready to help with your electrical needs.
                </p>
              </div>

              <Card className="shadow-elegant">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <a 
                        href="tel:+12508830499"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        (250) 883-0499
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">24/7 Emergency Line</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a 
                        href="mailto:info@truecanpower.com"
                        className="text-muted-foreground hover:text-primary transition-smooth break-all"
                      >
                        info@truecanpower.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Service Area</h3>
                      <p className="text-muted-foreground">
                        Serving all of Canada
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Licensed in all provinces</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Mon - Fri: 7:00 AM - 7:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Sat - Sun: 8:00 AM - 5:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">Emergency service 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-glow border-2 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-montserrat font-bold mb-6">
                    Request an Appointment
                  </h2>

                  {/* Urgency Banner */}
                  <div className="mb-6 p-4 bg-primary/10 border-l-4 border-primary rounded-lg flex items-center gap-3">
                    <Clock className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-sm">
                        Only <span className="text-primary">{8 - new Date().getDay()}</span> inspection slots left this week
                      </p>
                      <p className="text-xs text-muted-foreground">Book now to secure your spot</p>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Smith"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(XXX) XXX-XXXX"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Service Type</Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                          <SelectTrigger id="serviceType">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-background z-50">
                            <SelectItem value="residential">Residential Service</SelectItem>
                            <SelectItem value="commercial">Commercial Service</SelectItem>
                            <SelectItem value="panel-upgrade">Panel Upgrade</SelectItem>
                            <SelectItem value="ev-charger">EV Charger Installation</SelectItem>
                            <SelectItem value="lighting">Lighting Installation</SelectItem>
                            <SelectItem value="emergency">Emergency Repair</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
                          <SelectTrigger id="urgency">
                            <SelectValue placeholder="How urgent?" />
                          </SelectTrigger>
                          <SelectContent className="bg-background z-50">
                            <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                            <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                            <SelectItem value="soon">Soon (This week)</SelectItem>
                            <SelectItem value="planning">Planning ahead</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your project</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Describe what electrical work you need..."
                        rows={5}
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-surface rounded-lg border border-border">
                      <Checkbox
                        id="powerShield"
                        checked={formData.interestedInPowerShield}
                        onCheckedChange={(checked) => handleChange("interestedInPowerShield", checked as boolean)}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="powerShield" className="cursor-pointer font-semibold">
                          ☑️ I'm interested in learning more about PowerShield™ membership
                        </Label>
                        {formData.interestedInPowerShield && (
                          <p className="text-sm text-muted-foreground">
                            Great choice! We'll include PowerShield™ information in our response and show you how to save on electrical services year-round.
                          </p>
                        )}
                      </div>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="mr-2" size={20} />
                      Send Request
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by TrueCan Power Systems regarding your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-8">
              Service Area Map
            </h2>
            <div className="bg-background rounded-lg shadow-elegant p-4 h-96 flex items-center justify-center">
              <p className="text-muted-foreground">
                [Google Maps integration would go here]
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
