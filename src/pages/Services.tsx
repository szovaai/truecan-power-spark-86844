import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Lightbulb, 
  Plug, 
  Car, 
  Wrench,
  Shield,
  Building2,
  Factory,
  Store,
  Home
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const residentialServices = [
    { icon: Zap, title: "Panel Upgrades", description: "Modernize your electrical system with safe, code-compliant panel upgrades.", link: "/services/panel-upgrade" },
    { icon: Plug, title: "Outlets & Switches", description: "Professional installation and repair of all electrical outlets and switches.", link: "/residential" },
    { icon: Home, title: "Smart Home Integration", description: "Connect and automate your home with smart electrical solutions.", link: "/residential" },
    { icon: Lightbulb, title: "Lighting Design", description: "Beautiful, energy-efficient lighting solutions for every room.", link: "/services/pot-light-installation" },
    { icon: Wrench, title: "Hot Tub Wiring", description: "Safe, compliant electrical hookups for hot tubs and spas.", link: "/services/hot-tub-sauna-wiring" },
    { icon: Shield, title: "Generators", description: "Backup power solutions to keep your home running during outages.", link: "/residential" },
  ];

  const commercialServices = [
    { icon: Building2, title: "Tenant Fit-Outs", description: "Complete electrical installations for new commercial spaces.", link: "/services/renovation-wiring" },
    { icon: Factory, title: "Power Distribution", description: "Industrial-grade power systems for facilities and warehouses.", link: "/commercial" },
    { icon: Lightbulb, title: "Lighting Retrofits", description: "Energy-efficient LED upgrades that reduce operating costs.", link: "/services/pot-light-installation" },
    { icon: Wrench, title: "Maintenance Contracts", description: "Scheduled preventative maintenance to avoid costly downtime.", link: "/commercial" },
    { icon: Car, title: "EV Infrastructure", description: "Commercial EV charging stations for businesses and properties.", link: "/services/ev-charger-installation" },
    { icon: Shield, title: "Backup Systems", description: "Emergency power and UPS solutions for critical operations.", link: "/services/emergency-electrician" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-32">
        <div className="absolute inset-0 hero-gradient circuit-texture" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-foreground">
          <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 leading-tight">
            Full-Service Electricians
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Comprehensive electrical solutions for homes, offices, and facilities in the Calgary area
          </p>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Residential Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Safe, clean, on-time electrical work for your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {residentialServices.map((service, index) => (
              <Card key={index} className="hover:shadow-glow transition-smooth border-2 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Link to={service.link} className="text-primary font-semibold mt-4 inline-block hover:underline">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/residential">View All Residential Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Commercial & Industrial
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted electrical partner for builders, businesses, and property managers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {commercialServices.map((service, index) => (
              <Card key={index} className="hover:shadow-glow transition-smooth border-2 border-border hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <Link to={service.link} className="text-primary font-semibold mt-4 inline-block hover:underline">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/commercial">View All Commercial Services</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a quick phone consultation with our electrical experts. No obligation, just honest advice.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-premium bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
