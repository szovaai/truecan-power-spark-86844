import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Lightbulb, 
  Plug, 
  Battery,
  Home,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import residentialHero from "@/assets/residential-hero.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Residential = () => {
  const services = [
    {
      icon: Zap,
      title: "Panel Upgrades",
      description: "Modernize your electrical panel to handle today's power demands safely and efficiently."
    },
    {
      icon: Plug,
      title: "Outlet & Switch Installations",
      description: "Add outlets, upgrade switches, or install specialized receptacles like USB ports."
    },
    {
      icon: Lightbulb,
      title: "Lighting Design & Installation",
      description: "Transform your space with beautiful, energy-efficient lighting solutions."
    },
    {
      icon: Home,
      title: "Smart Home Integration",
      description: "Upgrade to smart switches, dimmers, and automated lighting systems."
    },
    {
      icon: Battery,
      title: "Generator Backup Systems",
      description: "Never lose power with automatic backup generator installation and maintenance."
    },
    {
      icon: ShieldCheck,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety assessments to protect your family and home."
    }
  ];

  const benefits = [
    "Licensed ESA-certified electricians",
    "100% code-compliant work",
    "Clean, respectful service",
    "Upfront pricing, no hidden fees",
    "Warranty on all installations",
    "Emergency service available"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Residential Electrician Calgary | Home Electrical - TrueCan</title>
        <meta 
          name="description" 
          content="Expert residential electrical services in Calgary. Panel upgrades, lighting, smart home, generator backup. Licensed, insured, satisfaction guaranteed."
        />
        <link rel="canonical" href="https://truecanpower.com/residential" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${residentialHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6 leading-tight">
            Residential Electrical Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            From New Installs to Emergency Repairs — We Power Your Home
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-glow">
            <Link to="/contact">Book a Free Home Safety Check</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Complete Home Electrical Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional service for every electrical need in your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-smooth shadow-elegant hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-glow border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold mb-2">Success Story</h3>
                    <p className="text-muted-foreground">Real results from a recent project</p>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-6 mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    "We responded to an emergency call about flickering lights and burning smells. Our team identified a major electrical short in the main panel that could have caused a fire."
                  </p>
                  <p className="text-lg leading-relaxed font-semibold text-primary">
                    Fixed the issue in under 2 hours and prevented significant damage to the home's electrical system.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-semibold">Same-day service</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-semibold">Code-compliant repair</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-semibold">5-year warranty</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-center mb-12">
              The TrueCan Difference
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-muted rounded-lg">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="font-semibold text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4">
            Book a Free Home Safety Check
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our certified electricians will inspect your home's electrical system and provide a detailed safety report — absolutely free.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-glow">
            <Link to="/contact">Schedule Your Free Inspection</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Residential;
