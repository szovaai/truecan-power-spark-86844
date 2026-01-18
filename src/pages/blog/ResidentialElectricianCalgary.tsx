import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Home, Lightbulb, Plug, Zap, Shield, Clock, Hammer, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import SchemaMarkup from "@/components/SchemaMarkup";

const ResidentialElectricianCalgary = () => {
  const services = [
    {
      icon: Zap,
      title: "Panel Upgrades",
      description: "Upgrade your home's electrical panel to handle modern power demands. 100A, 200A, and 400A service upgrades."
    },
    {
      icon: Lightbulb,
      title: "Lighting Installation",
      description: "Pot lights, chandeliers, under-cabinet lighting, outdoor fixtures, and smart lighting systems."
    },
    {
      icon: Plug,
      title: "Outlet & Switch Work",
      description: "New outlets, GFCI installation, USB outlets, smart switches, and outlet relocation."
    },
    {
      icon: Hammer,
      title: "Renovation Wiring",
      description: "Complete electrical for basement developments, kitchen renovations, bathroom updates, and additions."
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Home electrical safety inspections for peace of mind or real estate transactions."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency electrical service for power outages, sparking, and electrical fires."
    }
  ];

  const commonIssues = [
    "Flickering or dimming lights",
    "Frequently tripping breakers",
    "Outlets not working",
    "Buzzing or humming sounds",
    "Burning smell from outlets",
    "Outdated aluminum wiring",
    "Not enough outlets",
    "Old fuse box needs upgrading"
  ];

  const faqs = [
    {
      question: "How much does it cost to hire a residential electrician in Calgary?",
      answer: "Residential electrical costs vary by project. Simple outlet installations may start at $150-200, while panel upgrades can range from $1,500-4,000. We provide free estimates with transparent, upfront pricing before any work begins."
    },
    {
      question: "Do I need a permit for residential electrical work?",
      answer: "In Calgary, permits are required for most electrical work beyond simple repairs. This includes new circuits, panel upgrades, and renovation wiring. TrueCan Power handles all permitting and inspections as part of our service."
    },
    {
      question: "How often should I have my home's electrical inspected?",
      answer: "We recommend electrical inspections every 10 years for homes under 40 years old, and every 5 years for older homes. You should also get an inspection before buying a home or after any major renovation."
    },
    {
      question: "Is aluminum wiring dangerous?",
      answer: "Aluminum wiring, common in 1960s-70s homes, can be a fire hazard if not properly maintained. We can inspect your aluminum wiring and install approved connectors to make it safe, or recommend rewiring if necessary."
    },
    {
      question: "Can you install EV chargers for residential homes?",
      answer: "Yes! We're certified Tesla and ChargePoint installers. We can install Level 2 EV chargers in your garage or driveway, including any panel upgrades needed to support the additional load."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Residential Electrician Calgary | Home Electrical Services - TrueCan Power</title>
        <meta 
          name="description" 
          content="Residential electrician in Calgary for home electrical needs. Panel upgrades, lighting, outlets, home renovations. Licensed & insured. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/residential-electrician-calgary" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          name: "Residential Electrician Calgary",
          description: "Complete residential electrical services for Calgary homeowners including panel upgrades, lighting, outlets, and renovation wiring.",
          provider: "TrueCan Power",
          areaServed: "Calgary, Alberta",
          serviceType: "Residential Electrical Services"
        }}
      />

      <SchemaMarkup 
        type="FAQ" 
        data={{
          questions: faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />

      <SchemaMarkup 
        type="Breadcrumb" 
        data={{
          items: [
            { name: "Home", url: "https://truecanpower.com/" },
            { name: "Blog", url: "https://truecanpower.com/blog" },
            { name: "Residential Electrician Calgary", url: "https://truecanpower.com/blog/residential-electrician-calgary" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32 md:pt-40 pb-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                    <Home size={18} />
                    <span className="text-sm font-medium">Residential Specialists</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Residential Electrician in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your home deserves the best electrical care. TrueCan Power provides complete residential electrical services for Calgary homeowners—from panel upgrades and lighting to renovation wiring and emergency repairs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <Link to="/contact">Get Free Quote</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+12508830499">
                        <Phone className="mr-2" size={20} />
                        (250) 883-0499
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <QuoteRequestForm variant="card" title="Free Home Electrical Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Home Electrical Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Complete residential electrical solutions for every room in your Calgary home.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-smooth">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Common Issues */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Common Home Electrical Issues We Fix
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {commonIssues.map((issue, index) => (
                    <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-lg border">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <p className="text-lg text-muted-foreground mb-6">
                    Experiencing any of these issues? Don't wait—electrical problems can become safety hazards.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Schedule an Inspection</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Homeowners Trust Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                  Why Calgary Homeowners Trust TrueCan Power
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <Shield size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-muted-foreground">
                      Master electrician license with full liability coverage for your home.
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <Home size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Respect for Your Home</h3>
                    <p className="text-muted-foreground">
                      Clean work areas, shoe covers, and thorough cleanup after every job.
                    </p>
                  </div>
                  <div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                    <p className="text-muted-foreground">
                      We stand behind our work with a satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Links */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Popular Residential Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { name: "Panel Upgrades", link: "/services/panel-upgrades" },
                  { name: "Pot Light Installation", link: "/services/pot-light-installation" },
                  { name: "EV Charger Installation", link: "/services/ev-charger-installation" },
                  { name: "Renovation Wiring", link: "/services/renovation-wiring" }
                ].map((service, index) => (
                  <Link key={index} to={service.link}>
                    <Card className="h-full hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-4 text-center">
                        <span className="font-medium">{service.name}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Residential Electrical FAQ
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Upgrade Your Home's Electrical?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free residential electrical estimate. We'll assess your home's needs and provide transparent pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Estimate</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+12508830499">
                      <Phone className="mr-2" size={20} />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResidentialElectricianCalgary;
