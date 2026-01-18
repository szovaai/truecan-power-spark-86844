import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MapPin, Home, Building2, Zap, Shield, Clock, Award, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import SchemaMarkup from "@/components/SchemaMarkup";

const ElectricianCalgaryAlberta = () => {
  const services = [
    {
      icon: Zap,
      title: "Panel Upgrades",
      description: "Upgrade your electrical panel to meet modern power demands. 100A, 200A, and 400A service available."
    },
    {
      icon: Home,
      title: "Residential Services",
      description: "Complete home electrical including lighting, outlets, renovations, and safety inspections."
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description: "Office wiring, retail lighting, restaurant electrical, and industrial installations."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Service",
      description: "24/7 emergency electrical service across Calgary, Alberta. Fast response guaranteed."
    }
  ];

  const albertaRegulations = [
    {
      title: "Canadian Electrical Code",
      description: "All work complies with the CEC as adopted by Alberta Safety Codes."
    },
    {
      title: "Permit Requirements",
      description: "We handle all electrical permits required by the City of Calgary and Alberta municipalities."
    },
    {
      title: "Inspection Coordination",
      description: "We arrange all required inspections with Alberta Safety Codes officers."
    },
    {
      title: "Licensed Professionals",
      description: "All technicians hold valid Alberta journeyman or master electrician certificates."
    }
  ];

  const calgaryAreas = [
    { name: "Northwest Calgary", communities: "Kensington, Brentwood, Varsity, Tuscany, Arbour Lake" },
    { name: "Northeast Calgary", communities: "Bridgeland, Renfrew, Marlborough, Falconridge, Skyview Ranch" },
    { name: "Southwest Calgary", communities: "Marda Loop, Mount Royal, Killarney, Altadore, Bankview" },
    { name: "Southeast Calgary", communities: "McKenzie Towne, Auburn Bay, Cranston, Mahogany, Seton" },
    { name: "Inner City", communities: "Downtown, Beltline, Mission, Inglewood, Bridgeland" },
    { name: "Surrounding Areas", communities: "Airdrie, Cochrane, Chestermere, Okotoks, High River" }
  ];

  const faqs = [
    {
      question: "What makes TrueCan Power different from other Calgary, Alberta electricians?",
      answer: "TrueCan Power combines master electrician expertise with exceptional customer service. We're fully licensed in Alberta, offer same-day service, provide transparent pricing, and back all work with a satisfaction guarantee. Our technicians are background-checked and treat your property with respect."
    },
    {
      question: "How quickly can you respond to electrical emergencies in Calgary, Alberta?",
      answer: "We offer 24/7 emergency service throughout Calgary, Alberta and surrounding areas. For true emergencies like sparking, burning smells, or power outages, we prioritize rapid response—often within 1-2 hours depending on your location."
    },
    {
      question: "Do you work in all areas of Calgary, Alberta?",
      answer: "Yes! We serve all Calgary quadrants (NW, NE, SW, SE) and surrounding Alberta communities including Airdrie, Cochrane, Chestermere, Okotoks, High River, and more."
    },
    {
      question: "What's the process for getting electrical work done in Calgary, Alberta?",
      answer: "Contact us for a free estimate. We'll assess your needs, provide transparent pricing, and schedule the work. For permitted work, we handle all paperwork with the City of Calgary, complete the installation, and arrange the required inspection. It's that simple."
    },
    {
      question: "Are your prices competitive for Calgary, Alberta?",
      answer: "We offer fair, transparent pricing that reflects the quality of our work. We provide detailed written estimates before starting, so you know exactly what to expect. No hidden fees, no surprises—just honest electrical service."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrician Calgary Alberta | Trusted Local Service - TrueCan Power</title>
        <meta 
          name="description" 
          content="Need an electrician in Calgary, Alberta? TrueCan Power offers licensed, professional electrical services. Residential & commercial. 24/7 emergency calls."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/electrician-calgary-alberta" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          name: "Electrician Calgary Alberta",
          description: "Comprehensive electrical services for Calgary, Alberta including residential, commercial, and emergency electrical work.",
          provider: "TrueCan Power",
          areaServed: "Calgary, Alberta",
          serviceType: "Electrical Services"
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
            { name: "Electrician Calgary Alberta", url: "https://truecanpower.com/blog/electrician-calgary-alberta" }
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
                    <MapPin size={18} />
                    <span className="text-sm font-medium">Calgary, Alberta</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Electrician in Calgary, Alberta
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Your complete guide to electrical services in Calgary, Alberta. TrueCan Power provides licensed, professional electrical work for homes and businesses throughout the Calgary region. From simple repairs to complex installations, we're your trusted Alberta electrician.
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
                  <QuoteRequestForm variant="card" title="Free Calgary Electrical Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Electrical Services in Calgary, Alberta
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive electrical solutions for every need in the Calgary, Alberta region.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-smooth">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Alberta Regulations */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Alberta Electrical Regulations & Compliance
                </h2>
                <p className="text-lg text-muted-foreground text-center mb-10">
                  Electrical work in Calgary, Alberta must comply with provincial regulations. TrueCan Power ensures all work meets these standards.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {albertaRegulations.map((reg, index) => (
                    <Card key={index} className="border-2">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{reg.title}</h3>
                        <p className="text-muted-foreground">{reg.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Calgary Areas Served */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Calgary, Alberta Communities We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {calgaryAreas.map((area, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">{area.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{area.communities}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Why Calgary, Alberta Trusts TrueCan Power
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Alberta Licensed</h3>
                      <p className="text-muted-foreground">Master electrician certification through Alberta Apprenticeship and Industry Training.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fully Insured</h3>
                      <p className="text-muted-foreground">Comprehensive liability insurance and WCB coverage for your protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">24/7 Emergency Service</h3>
                      <p className="text-muted-foreground">Round-the-clock emergency electrical service across Calgary, Alberta.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Satisfaction Guaranteed</h3>
                      <p className="text-muted-foreground">We stand behind our work with a satisfaction guarantee on all services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { name: "Residential", link: "/residential" },
                  { name: "Commercial", link: "/commercial" },
                  { name: "All Services", link: "/services" },
                  { name: "Contact Us", link: "/contact" }
                ].map((item, index) => (
                  <Link key={index} to={item.link}>
                    <Card className="h-full hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-4 text-center">
                        <span className="font-medium">{item.name}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Calgary, Alberta Electrician FAQ
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
                  Ready for Quality Electrical Service in Calgary, Alberta?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Contact TrueCan Power today for your free estimate. Licensed, insured, and ready to help with any electrical project.
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

export default ElectricianCalgaryAlberta;
