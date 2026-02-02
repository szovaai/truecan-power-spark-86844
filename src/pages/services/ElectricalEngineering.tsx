import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Zap, 
  Lightbulb, 
  AlertTriangle,
  ClipboardCheck,
  HardHat,
  CheckCircle2,
  Shield,
  Target,
  Clock,
  DollarSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ElectricalEngineering = () => {
  const engineeringServices = [
    {
      icon: Zap,
      title: "Power Distribution Design",
      description: "Load calculations, fault current analysis, and single-line diagrams for reliable power infrastructure."
    },
    {
      icon: Lightbulb,
      title: "Lighting & Controls Design",
      description: "Energy modeling, photometric analysis, and control system specification for efficient illumination."
    },
    {
      icon: AlertTriangle,
      title: "Arc Flash Studies",
      description: "Hazard analysis, incident energy calculations, and PPE labeling for worker safety compliance."
    },
    {
      icon: ClipboardCheck,
      title: "Code Compliance Reviews",
      description: "CEC compliance verification, permit coordination, and regulatory requirement assessments."
    },
    {
      icon: HardHat,
      title: "Construction Administration",
      description: "Site visits, inspections, punch lists, and commissioning support throughout your project."
    },
    {
      icon: FileText,
      title: "Permit-Ready Drawings",
      description: "Complete electrical design packages ready for permit submission and contractor bidding."
    }
  ];

  const advantages = [
    {
      icon: Target,
      title: "Seamless Handoff",
      description: "Design flows directly to installation with zero information loss between teams."
    },
    {
      icon: Shield,
      title: "Single Accountability",
      description: "One team owns the outcome from engineering through energization."
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Eliminate coordination overhead and markups between separate engineering and contracting firms."
    },
    {
      icon: Clock,
      title: "Faster Timelines",
      description: "Parallel engineering and procurement compress project schedules."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Electrical Engineering Services Calgary | Design & Specify - TrueCan Power</title>
        <meta 
          name="description" 
          content="Professional electrical engineering in Calgary. Power distribution design, arc flash studies, lighting design, permit-ready drawings. Engineering + installation under one roof."
        />
        <link rel="canonical" href="https://truecanpower.com/services/electrical-engineering" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-20">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 circuit-texture opacity-20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="text-lg md:text-xl mb-4 font-semibold tracking-wide text-primary-foreground/80">
            Design. Specify. Execute.
          </p>
          <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 leading-tight">
            Electrical Engineering Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Professional engineering for power distribution, lighting systems, and electrical infrastructure — backed by in-house installation capability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild className="shadow-glow">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary"
            >
              <Link to="/commercial">View Commercial Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-montserrat font-bold text-foreground leading-relaxed">
              "Most contractors install what others design. We engineer and build — one team, one responsibility."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Engineering Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Engineering Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical engineering for commercial and industrial facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-smooth shadow-elegant hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold mb-3">
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

      {/* Why Engineer + Contractor Together */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Why Engineering + Execution Together?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The advantages of integrated design-build electrical delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
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
                    Professional Credentials
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Engineering expertise backed by professional licensing and industry standards
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="font-semibold text-lg block">Licensed Electrical Contractors</span>
                      <span className="text-sm text-muted-foreground">Full installation capability</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="font-semibold text-lg block">ESA Certified</span>
                      <span className="text-sm text-muted-foreground">Electrical Safety Authority approved</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="font-semibold text-lg block">In-House Engineering</span>
                      <span className="text-sm text-muted-foreground">Professional electrical engineering support</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <span className="font-semibold text-lg block">Professional Liability Coverage</span>
                      <span className="text-sm text-muted-foreground">Errors & omissions insurance</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground">
                    Contact us to discuss your engineering requirements and learn more about our credentials.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              When You Need Engineering
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common scenarios where professional electrical engineering adds value
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-lg border-2 border-border">
              <h3 className="font-bold text-lg mb-2">New Construction</h3>
              <p className="text-muted-foreground text-sm">Complete electrical design from load analysis through permit-ready drawings for new facilities.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border-2 border-border">
              <h3 className="font-bold text-lg mb-2">Facility Upgrades</h3>
              <p className="text-muted-foreground text-sm">Power system analysis and design for capacity upgrades, equipment additions, or modernization.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border-2 border-border">
              <h3 className="font-bold text-lg mb-2">Safety Compliance</h3>
              <p className="text-muted-foreground text-sm">Arc flash studies, short circuit analysis, and protective device coordination studies.</p>
            </div>
            <div className="p-6 bg-background rounded-lg border-2 border-border">
              <h3 className="font-bold text-lg mb-2">Energy Efficiency</h3>
              <p className="text-muted-foreground text-sm">Lighting redesign, power factor correction, and energy optimization analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
            From Single-Line to Switchgear
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how integrated engineering and installation can streamline your next electrical project.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-premium bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Start Your Engineering Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElectricalEngineering;
