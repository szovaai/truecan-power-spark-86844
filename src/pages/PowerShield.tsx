import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Percent,
  ClipboardCheck,
  Calendar,
  Shield,
  Home as HomeIcon,
  Building2,
  Briefcase,
  XCircle,
  Star,
  Plus
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PowerShieldBadge from "@/components/PowerShieldBadge";
import PowerShieldTerms from "@/components/PowerShieldTerms";

const PowerShield = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "2 Service Calls/Year",
      description: "Diagnostic + first 30 minutes labour each visit"
    },
    {
      icon: Clock,
      title: "24/7 Priority Dispatch",
      description: "Members jump the queue—same/next-day service"
    },
    {
      icon: Percent,
      title: "10% Off Parts & Labour",
      description: "Save on materials and extended work"
    },
    {
      icon: ClipboardCheck,
      title: "Free Safety Reports",
      description: "20-point electrical safety check after each visit"
    },
    {
      icon: Calendar,
      title: "Same/Next-Day Booking",
      description: "Priority scheduling windows for members"
    },
    {
      icon: Shield,
      title: "Satisfaction Guaranteed",
      description: "Friendly service or your visit credit back"
    }
  ];

  const personas = [
    {
      icon: HomeIcon,
      title: "Homeowners",
      description: "Avoid surprise repair bills and get priority access when you need it most"
    },
    {
      icon: Building2,
      title: "Landlords & Property Managers",
      description: "Keep tenants safe and minimize downtime with priority service"
    },
    {
      icon: Briefcase,
      title: "Small Businesses",
      description: "Priority access during emergencies keeps your business running"
    }
  ];

  const addOns = [
    {
      name: "Business PowerShield Pro™",
      price: "$347/year",
      features: [
        "4 service calls included",
        "Annual lighting & exit sign check",
        "Priority emergency dispatch",
        "10% off all parts & labour"
      ]
    },
    {
      name: "Generator Care Add-On",
      price: "+$99/year",
      features: [
        "1 annual maintenance visit",
        "Load testing & diagnostics",
        "Fuel system inspection",
        "Battery testing & replacement"
      ]
    },
    {
      name: "EV Charger Care Add-On",
      price: "+$69/year",
      features: [
        "Annual safety inspection",
        "Firmware update check",
        "Connection testing",
        "Usage report & optimization"
      ]
    }
  ];

  const covered = [
    "Travel, diagnosis, up to 30 min labour per call",
    "Tripping breakers, faulty receptacles/switches",
    "Light fixture swaps, GFCI resets, loose connections",
    "Annual safety inspections"
  ];

  const notCovered = [
    "Major projects (panel upgrades, rewires, new circuits)",
    "Permits, specialty equipment, lift rentals",
    "Emergencies outside local zones (reduced fee applies)",
    "Unused calls don't roll over"
  ];

  const faqs = [
    {
      question: "How fast is priority response?",
      answer: "Members jump the queue. Typical same-day/next-day service; emergencies get 24/7 access."
    },
    {
      question: "What if the fix takes longer than 30 minutes?",
      answer: "You approve before we continue. Members get 10% off additional labour and parts."
    },
    {
      question: "Can I use calls at two properties?",
      answer: "Base plan covers one address; add extra addresses for $99 each."
    },
    {
      question: "Do calls roll over to next year?",
      answer: "No—use them within 12 months to keep the plan sharp and proactive."
    },
    {
      question: "How do I book my service calls?",
      answer: "Call our priority line, use our member portal, or book online—it's that easy."
    },
    {
      question: "What's your satisfaction guarantee?",
      answer: "Friendly service or your visit credit back—we'll make it right."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, cancel before your renewal date with no penalties."
    },
    {
      question: "Do you service my area?",
      answer: "We serve all of Alberta. Standard zones listed; travel surcharges may apply beyond."
    }
  ];

  // Testimonials removed - awaiting real customer reviews

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-gradient circuit-texture" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-foreground">
          <div className="mb-6">
            <PowerShieldBadge size="lg" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 leading-tight">
            PowerShield™ Membership
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Priority Electrical Care for $197/yr
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Two covered service calls, 24/7 Alberta-wide dispatch, and a satisfaction guarantee
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 size={20} />
              <span className="font-semibold">Fast help when it matters</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 size={20} />
              <span className="font-semibold">Save hundreds on routine fixes</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 size={20} />
              <span className="font-semibold">Alberta-wide emergency access</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Join PowerShield</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#whats-included">See What's Included</a>
            </Button>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-success" size={18} />
              <span className="font-semibold">ESA-Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-success" size={18} />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="text-primary" size={18} />
              <span className="font-semibold">Professional Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Feature Grid */}
      <section id="whats-included" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for peace of mind and priority service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-smooth shadow-elegant hover:shadow-glow group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-success/10 text-success mb-4 group-hover:bg-success group-hover:text-white transition-smooth">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Hero Card */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-2 border-primary shadow-premium bg-gradient-to-br from-surface to-background">
            <CardContent className="p-10 text-center">
              <div className="mb-6">
                <PowerShieldBadge size="md" className="mx-auto" />
              </div>
              
              <div className="mb-8">
                <div className="text-6xl font-montserrat font-bold text-primary mb-2">
                  $197
                  <span className="text-2xl text-muted-foreground">/year</span>
                </div>
                <p className="text-muted-foreground">
                  Significant savings compared to standard service call rates
                </p>
              </div>

              <div className="space-y-3 text-left mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span>2 service calls per year (diagnostic + 30 min labour)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span>24/7 priority emergency access</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span>10% off parts & additional labour</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span>Free 20-point safety check</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span>Same/next-day priority booking</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
                  <span>Satisfaction guaranteed</span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full mb-4" asChild>
                <Link to="/contact">Activate My Membership</Link>
              </Button>
              
              <PowerShieldTerms />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Who It's For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {personas.map((persona, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-smooth shadow-elegant group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <persona.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{persona.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{persona.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Add-On Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhance your PowerShield™ membership with specialized coverage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-2 border-primary/30 hover:border-primary transition-smooth shadow-elegant hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold flex-1">{addon.name}</h3>
                    <Plus className="text-primary flex-shrink-0" size={24} />
                  </div>
                  <div className="text-3xl font-montserrat font-bold text-primary mb-6">
                    {addon.price}
                  </div>
                  <ul className="space-y-3">
                    {addon.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <Link to="/contact">Add to Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered / Not Covered */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              What's Covered
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Covered */}
            <Card className="border-2 border-success/30 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-success" size={28} />
                  Covered
                </h3>
                <ul className="space-y-4">
                  {covered.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-success flex-shrink-0 mt-0.5" size={20} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Not Covered */}
            <Card className="border-2 border-destructive/30 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <XCircle className="text-destructive" size={28} />
                  Not Covered
                </h3>
                <ul className="space-y-4">
                  {notCovered.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={20} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PowerShield Badge Display */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20 shadow-premium bg-gradient-to-br from-surface to-background text-center">
            <CardContent className="p-12">
              <PowerShieldBadge size="lg" className="mx-auto mb-6" />
              <h2 className="text-3xl font-montserrat font-bold mb-4">
                PowerShield™ Member Badge
              </h2>
              <p className="text-muted-foreground text-lg mb-2">
                Priority Dispatch • 24/7 • Guaranteed
              </p>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                As a PowerShield™ member, you'll receive priority treatment on every service request. 
                Your membership badge ensures you're always at the front of the line.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border-2 border-border rounded-lg px-6 shadow-elegant hover:border-primary/50 transition-smooth"
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Member Benefits Summary */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Why Join PowerShield™?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience priority service and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-elegant border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="text-primary w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Priority Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jump the queue with same/next-day priority scheduling for all your electrical needs
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-elegant border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <Shield className="text-primary w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Peace of Mind</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Two covered service calls per year plus 24/7 emergency dispatch when you need it
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-elegant border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <Percent className="text-primary w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Save Money</h3>
                <p className="text-muted-foreground leading-relaxed">
                  10% discount on all parts and additional labour beyond covered service calls
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
            Join PowerShield™ Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start protecting your home today—activation takes 2 minutes
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-premium bg-white text-primary hover:bg-white/90 mb-4">
            <Link to="/contact">Activate My Membership</Link>
          </Button>
          <p className="text-sm opacity-80">
            No long-term commitment • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PowerShield;
