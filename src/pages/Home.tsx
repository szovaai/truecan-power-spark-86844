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

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuaranteeCard from "@/components/GuaranteeCard";
import HeroLeadForm from "@/components/HeroLeadForm";

const Home = () => {
  const problemSolutions = [
    { icon: Wrench, problem: "Residential, Commercial & Industrial Service Experts", solution: "Complete electrical solutions for homes, businesses, and industrial facilities", link: "/services" }
  ];

  const services = [
    { icon: Zap, label: "Panel Upgrades", description: "Modernize your system", link: "/services/panel-upgrade" },
    { icon: Car, label: "EV Chargers", description: "Home & commercial", link: "/services/ev-charger-installation" },
    { icon: Lightbulb, label: "Lighting Design", description: "Efficient solutions", link: "/services/pot-light-installation" },
    { icon: Shield, label: "Generators", description: "Backup power systems", link: "/services" },
    { icon: Plug, label: "Tenant Improvements", description: "Commercial fit-outs", link: "/services/renovation-wiring" },
    { icon: Wrench, label: "Maintenance Contracts", description: "Preventative care", link: "/services" }
  ];


  // Testimonials removed - awaiting real customer reviews

  const faqs = [
    { question: "Are you licensed and insured?", answer: "Yes, we are fully licensed with ESA certification and carry comprehensive liability insurance. All our work is guaranteed and code-compliant." },
    { question: "What is your warranty on electrical work?", answer: "We provide a 2-year workmanship warranty on all installations and repairs. Materials are covered by manufacturer warranties." },
    { question: "How do you price your services?", answer: "We offer transparent, up-front pricing with no hidden fees. You'll receive a detailed quote before any work begins." },
    { question: "What's your emergency response time?", answer: "For emergencies, we aim to respond within 2 hours. We're available 24/7 for urgent electrical issues." },
    { question: "What areas do you service?", answer: "We serve the Calgary area." },
    { question: "Do you work on both residential and commercial properties?", answer: "Yes, we handle everything from home repairs to large commercial installations and maintenance contracts." }
  ];

  const certifications = ["ESA Certified", "Licensed & Insured"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-start overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 circuit-texture opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-primary/10" />
        
        <div className="relative z-10 container mx-auto px-4 pt-8 md:pt-12 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <div className="text-center lg:text-left fade-up-enter">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-extrabold mb-4 leading-[1.1] tracking-tight">
              Power You Can Trust For Life
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
              <span className="font-medium">Serving the Calgary Area</span>
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
          </div>

          {/* Right: Lead Form */}
          <div className="lg:sticky lg:top-32 fade-up-enter" style={{ animationDelay: '0.2s' }}>
            <HeroLeadForm />
          </div>
        </div>
        </div>
      </section>

      {/* Problem → Solution Grid */}
      <section id="solutions" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 max-w-2xl mx-auto">
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
      <section id="services" className="py-20 bg-background">
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
              <Link key={index} to={service.link}>
                <Card className="hover:shadow-premium transition-smooth cursor-pointer border-2 border-border hover:border-primary/50 group h-full">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <service.icon size={28} />
                    </div>
                    <h3 className="font-bold text-base md:text-lg mb-2 break-words leading-tight">{service.label}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>


      <section id="trust" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-8">
              Trusted by Homeowners & Businesses
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join our growing list of satisfied customers in the Calgary area
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common electrical service questions
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-background border-2 border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
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
