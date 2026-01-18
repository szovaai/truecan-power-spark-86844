import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, MapPin, Shield, Award, Clock, CheckCircle, Zap, FileCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import SchemaMarkup from "@/components/SchemaMarkup";

const ElectricianCalgaryAB = () => {
  const albertaCredentials = [
    {
      icon: Award,
      title: "Alberta Master Electrician",
      description: "Fully licensed master electrician certification through Alberta Apprenticeship and Industry Training."
    },
    {
      icon: Shield,
      title: "Alberta WCB Covered",
      description: "Workers' Compensation Board coverage for all technicians working on your property."
    },
    {
      icon: FileCheck,
      title: "Alberta Permit Certified",
      description: "Authorized to pull electrical permits in Calgary and surrounding Alberta municipalities."
    },
    {
      icon: CheckCircle,
      title: "Alberta Safety Codes",
      description: "All work meets or exceeds Alberta Safety Codes and Canadian Electrical Code standards."
    }
  ];

  const serviceAreas = [
    "Calgary NW", "Calgary NE", "Calgary SW", "Calgary SE",
    "Airdrie", "Cochrane", "Chestermere", "Okotoks",
    "High River", "Strathmore", "Crossfield", "Carstairs"
  ];

  const faqs = [
    {
      question: "What licensing is required for electricians in Calgary, AB?",
      answer: "In Alberta, electricians must hold a valid journeyman or master electrician certificate issued by Alberta Apprenticeship and Industry Training. TrueCan Power employs master electricians who meet all Alberta licensing requirements."
    },
    {
      question: "Do you serve areas outside Calgary, AB?",
      answer: "Yes! While based in Calgary, we serve the greater Calgary region including Airdrie, Cochrane, Chestermere, Okotoks, and other surrounding Alberta communities."
    },
    {
      question: "Are electrical permits required in Calgary, AB?",
      answer: "Yes, most electrical work in Calgary requires a permit from the City of Calgary Safety Codes department. TrueCan Power handles all permitting and arranges required inspections as part of our service."
    },
    {
      question: "What electrical code applies in Calgary, Alberta?",
      answer: "Calgary follows the Canadian Electrical Code (CEC) as adopted by Alberta Safety Codes. We stay current with all code updates and ensure all work is compliant with the latest standards."
    },
    {
      question: "Do you offer emergency electrical services in Calgary, AB?",
      answer: "Yes, we provide 24/7 emergency electrical services throughout Calgary, AB and surrounding areas. Call (250) 883-0499 for immediate assistance with electrical emergencies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrician Calgary AB | Licensed Alberta Electricians - TrueCan Power</title>
        <meta 
          name="description" 
          content="Electrician in Calgary, AB. Alberta-licensed, fully insured electrical services for homes and businesses. 24/7 emergency service. Get your free quote today."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/electrician-calgary-ab" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          name: "Electrician Calgary AB",
          description: "Licensed Alberta electrician services for Calgary, AB. Residential and commercial electrical with 24/7 emergency service.",
          provider: "TrueCan Power",
          areaServed: "Calgary, AB",
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
            { name: "Electrician Calgary AB", url: "https://truecanpower.com/blog/electrician-calgary-ab" }
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
                    <span className="text-sm font-medium">Calgary, AB</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Electrician in Calgary, AB
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Looking for an Alberta-licensed electrician in Calgary, AB? TrueCan Power provides professional residential and commercial electrical services throughout Calgary and the greater Alberta region. Fully insured, WCB covered, and available 24/7.
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
                  <QuoteRequestForm variant="card" title="Get Your Free Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Alberta Credentials */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Alberta-Licensed Electrical Professionals
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  TrueCan Power meets all Alberta licensing requirements and safety standards.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {albertaCredentials.map((credential, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-smooth text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <credential.icon size={24} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{credential.title}</h3>
                      <p className="text-muted-foreground text-sm">{credential.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Service Areas in Calgary, AB Region
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 bg-background p-4 rounded-lg border">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <p className="text-lg text-muted-foreground mb-6">
                    Serving all of Calgary, AB and surrounding Alberta communities.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Request Service in Your Area</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Electrical Services in Calgary, AB
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "Panel Upgrades", link: "/services/panel-upgrades", desc: "100A to 400A service upgrades" },
                  { name: "EV Charger Installation", link: "/services/ev-charger-installation", desc: "Level 2 home & commercial chargers" },
                  { name: "Pot Light Installation", link: "/services/pot-light-installation", desc: "LED recessed lighting" },
                  { name: "Renovation Wiring", link: "/services/renovation-wiring", desc: "Basement, kitchen, bathroom" },
                  { name: "Emergency Service", link: "/services/emergency-electrician", desc: "24/7 emergency response" },
                  { name: "Surge Protection", link: "/services/surge-protection", desc: "Whole-home protection" }
                ].map((service, index) => (
                  <Link key={index} to={service.link}>
                    <Card className="h-full hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6">
                        <Zap className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-1">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Local AB Electrician */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Why Hire a Local Calgary, AB Electrician?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Familiar with Calgary's electrical permit process",
                    "Understands Alberta Safety Codes requirements",
                    "Fast response times across Calgary, AB",
                    "Knowledge of local home construction styles",
                    "Established relationships with AB inspectors",
                    "Available for ongoing maintenance and service"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg border">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Calgary, AB Electrician FAQ
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
                  Need an Electrician in Calgary, AB?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get your free quote from a licensed Alberta electrician. Fast service, fair pricing, satisfaction guaranteed.
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

export default ElectricianCalgaryAB;
