import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Lightbulb, 
  Wrench,
  Zap,
  Car,
  Battery,
  CheckCircle2,
  Shield
} from "lucide-react";
import commercialHero from "@/assets/commercial-hero.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Commercial = () => {
  const services = [
    {
      icon: Building2,
      title: "Tenant Fit-Outs",
      description: "Complete electrical installations for new commercial spaces, retail stores, and office environments."
    },
    {
      icon: Lightbulb,
      title: "Lighting Retrofits",
      description: "Upgrade to energy-efficient LED lighting and significantly reduce operating costs."
    },
    {
      icon: Wrench,
      title: "Maintenance Contracts",
      description: "Scheduled preventative maintenance to keep your operations running smoothly year-round."
    },
    {
      icon: Zap,
      title: "Power Distribution Systems",
      description: "Design and install robust electrical infrastructure for warehouses, factories, and facilities."
    },
    {
      icon: Battery,
      title: "Backup Generators",
      description: "Automatic backup power solutions to protect against costly downtime."
    },
    {
      icon: Car,
      title: "EV Charging Stations",
      description: "Commercial-grade EV charging infrastructure for businesses and property managers."
    }
  ];

  const clientTypes = [
    "Property Managers",
    "General Contractors",
    "Retail Stores",
    "Office Buildings",
    "Warehouses & Facilities",
    "Restaurant & Hospitality"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Commercial Electrician Calgary | Industrial - TrueCan Power</title>
        <meta 
          name="description" 
          content="Commercial & industrial electrical services in Calgary. Tenant fit-outs, lighting retrofits, EV charging, backup generators. Licensed, insured contractors."
        />
        <link rel="canonical" href="https://truecanpower.com/commercial" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${commercialHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6 leading-tight">
            Commercial & Industrial Electrical
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Trusted by Builders, Businesses, and Property Managers
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-glow">
            <Link to="/contact">Schedule a Site Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Full-Scale Commercial Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powering businesses across Canada with reliable electrical infrastructure
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

      {/* Client Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-12">
              Who We Serve
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {clientTypes.map((client, index) => (
                <div key={index} className="flex items-center justify-center gap-3 p-6 bg-background rounded-lg shadow-elegant">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="font-semibold text-lg">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-glow border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-3xl font-montserrat font-bold mb-4">
                    Certified & Trusted
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Our commitment to excellence and safety
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">Licensed</div>
                    <p className="text-sm text-muted-foreground">Fully Licensed Electricians</p>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">Insured</div>
                    <p className="text-sm text-muted-foreground">Comprehensive Coverage</p>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-2">ESA Certified</div>
                    <p className="text-sm text-muted-foreground">Electrical Safety Authority</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold mb-4">
                    Professional Electrical Contractors
                  </p>
                  <p className="text-muted-foreground">
                    Committed to the highest standards of electrical installation, service, and safety
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4">
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a detailed site assessment and competitive quote from our commercial electrical experts.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-glow">
            <Link to="/contact">Request a Commercial Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commercial;
