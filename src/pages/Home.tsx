import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Lightbulb, 
  Plug, 
  Car,
  Wrench,
  Star,
  CheckCircle2,
  Flame,
  Home as HomeIcon
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-electrical-dark.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuaranteeCard from "@/components/GuaranteeCard";

const Home = () => {
  const problemSolutions = [
    { icon: Zap, problem: "Breaker Tripping?", solution: "Same-day panel diagnostics.", link: "/contact" },
    { icon: Flame, problem: "Lights Flickering?", solution: "Lighting & wiring repairs.", link: "/residential" },
    { icon: HomeIcon, problem: "New Build or Fit-Out?", solution: "Full commercial electrical.", link: "/commercial" }
  ];

  const services = [
    { icon: Zap, label: "Panel Upgrades", description: "Modernize your system" },
    { icon: Car, label: "EV Chargers", description: "Home & commercial" },
    { icon: Lightbulb, label: "Lighting Design", description: "Efficient solutions" },
    { icon: Shield, label: "Generators", description: "Backup power systems" },
    { icon: Plug, label: "Tenant Improvements", description: "Commercial fit-outs" },
    { icon: Wrench, label: "Maintenance Contracts", description: "Preventative care" }
  ];

  const portfolioProjects = [
    { image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80", caption: "Warehouse LED retrofit cut power by 38%" },
    { image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80", caption: "Panel upgrade completed in one day" },
    { image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80", caption: "Commercial EV charging station install" }
  ];

  // Testimonials removed - awaiting real customer reviews

  const faqs = [
    { question: "Are you licensed and insured?", answer: "Yes, we are fully licensed with ESA certification and carry comprehensive liability insurance. All our work is guaranteed and code-compliant." },
    { question: "What is your warranty on electrical work?", answer: "We provide a 2-year workmanship warranty on all installations and repairs. Materials are covered by manufacturer warranties." },
    { question: "How do you price your services?", answer: "We offer transparent, up-front pricing with no hidden fees. You'll receive a detailed quote before any work begins." },
    { question: "What's your emergency response time?", answer: "For emergencies, we aim to respond within 2 hours. We're available 24/7 for urgent electrical issues." },
    { question: "What areas do you service?", answer: "We serve Calgary and surrounding areas including Airdrie, Chestermere, Cochrane, and Okotoks." },
    { question: "Do you work on both residential and commercial properties?", answer: "Yes, we handle everything from home repairs to large commercial installations and maintenance contracts." }
  ];

  const certifications = ["ESA Certified", "Licensed & Insured"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20 md:pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-dark-gradient circuit-texture" />
        
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-[720px] text-center md:text-left fade-up-enter">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-extrabold mb-4 leading-[1.1] tracking-tight">
              Power You Can Trust
            </h1>
            <p className="text-2xl md:text-3xl mb-2 font-semibold text-foreground">
              Residential & Commercial, Alberta-Wide
            </p>
            <p className="text-lg md:text-xl mb-10 text-muted-foreground leading-relaxed">
              Licensed, insured, ESA-certified electricians. Same-day service available, 24/7 emergency response, satisfaction guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                variant="hero" 
                size="lg" 
                asChild 
                className="button-glow-hover font-semibold text-base"
              >
                <Link to="/contact">Book Free Power Assessment</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-2 border-primary/50 bg-white/10 text-white hover:bg-white hover:text-primary font-semibold text-base"
              >
                <Link to="/contact">24/7 Emergency Call</Link>
              </Button>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 justify-center md:justify-start">
              <span className="font-medium">ESA-Certified</span>
              <span>•</span>
              <span className="font-medium">Licensed & Insured</span>
              <span>•</span>
              <span className="font-medium">Serving Calgary & Area</span>
            </div>
            
            <p className="text-xs text-muted-foreground mb-8 text-center md:text-left">
              Friendly, clean, on-time—or we credit $50
            </p>
            
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 bg-surface/60 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/50 text-xs">
                  <CheckCircle2 className="text-success" size={16} />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>

            {/* PowerShield Member CTA */}
            <div className="mt-8 inline-flex items-center gap-3 bg-surface/90 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30 hover:border-primary/50 transition-smooth cursor-pointer group" onClick={() => window.location.href = '/powershield'}>
              <Shield className="text-primary" size={24} />
              <div>
                <p className="text-sm font-medium group-hover:text-primary transition-smooth">Join PowerShield™ Membership →</p>
                <p className="text-xs text-muted-foreground">Priority service for just $197/year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Grid */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {problemSolutions.map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-smooth shadow-elegant hover:shadow-glow group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold mb-3 text-primary">
                    {item.problem}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.solution}
                  </p>
                  <Link to={item.link} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                    Fix This →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-premium transition-smooth cursor-pointer border-2 border-border hover:border-primary/50 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.label}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PowerShield™ Promo Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto border-2 border-primary shadow-glow bg-gradient-to-br from-surface to-background">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                    <div className="relative flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-background to-surface flex items-center justify-center border-4 border-primary shadow-premium mb-4">
                        <Shield className="text-primary w-16 h-16" strokeWidth={2.5} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="text-primary font-bold text-3xl">⚡</div>
                        </div>
                      </div>
                      <p className="font-montserrat font-bold text-lg">PowerShield™</p>
                      <p className="text-sm text-muted-foreground">Member</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 text-center md:text-left">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                    NEW MEMBERSHIP PROGRAM
                  </div>
                  <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold mb-3">
                    Introducing PowerShield™ Membership
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    Priority service, peace of mind—$197/year
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                      <span className="font-medium">2 covered service calls per year</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                      <span className="font-medium">24/7 priority emergency access</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <CheckCircle2 className="text-success flex-shrink-0" size={20} />
                      <span className="font-medium">10% off parts & additional labour</span>
                    </div>
                  </div>
                  <Button variant="hero" size="lg" asChild className="w-full md:w-auto">
                    <Link to="/powershield">Learn About PowerShield →</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mini Portfolio Carousel */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Recent Projects
            </h2>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioProjects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-border overflow-hidden">
                    <div className="relative h-96">
                      <img 
                        src={project.image} 
                        alt={project.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                        <p className="text-xl font-semibold">{project.caption}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-10">
            <Button variant="ghost" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-8">
              Trusted by Homeowners & Businesses
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join our growing list of satisfied customers across Calgary and surrounding areas
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-elegant">
                <CardContent className="p-8 text-center">
                  <Shield className="text-primary w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground text-sm">Fully certified ESA electricians</p>
                </CardContent>
              </Card>
              <Card className="shadow-elegant">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="text-primary w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground text-sm">On-time or we credit $50</p>
                </CardContent>
              </Card>
              <Card className="shadow-elegant">
                <CardContent className="p-8 text-center">
                  <Star className="text-primary w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Professional Service</h3>
                  <p className="text-muted-foreground text-sm">Clean, respectful workmanship</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
            Ready to Power Up Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free assessment from certified electrical experts. No obligations, just honest advice.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-premium bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Book Your Free Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
