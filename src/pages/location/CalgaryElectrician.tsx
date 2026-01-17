import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Clock, 
  Car,
  Lightbulb,
  Wrench
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import QuoteRequestForm from "@/components/QuoteRequestForm";

const CalgaryElectrician = () => {
  const services = [
    { icon: Zap, label: "Panel Upgrades", link: "/services/panel-upgrade" },
    { icon: Car, label: "EV Charger Installation", link: "/services/ev-charger-installation" },
    { icon: Lightbulb, label: "Pot Light Installation", link: "/services/pot-light-installation" },
    { icon: Shield, label: "Surge Protection", link: "/services/surge-protection" },
    { icon: Wrench, label: "Renovation Wiring", link: "/services/renovation-wiring" },
    { icon: Clock, label: "24/7 Emergency Service", link: "/services/emergency-electrician" },
  ];

  const faqs = [
    {
      question: "How much does a Calgary electrician cost?",
      answer: "Calgary electrician rates typically range from $85-$150/hour depending on the complexity of work. We provide free, upfront quotes with no hidden fees. Emergency and after-hours calls may have additional charges."
    },
    {
      question: "Do you offer same-day electrical service in Calgary?",
      answer: "Yes! We offer same-day service for most electrical needs in Calgary. For emergencies, we provide 24/7 response with a typical arrival time of 2 hours or less."
    },
    {
      question: "Are you licensed electricians in Alberta?",
      answer: "Absolutely. All our electricians are fully licensed in Alberta, ESA-certified, and insured. We pull all required permits and ensure every job passes inspection."
    },
    {
      question: "What areas of Calgary do you serve?",
      answer: "We serve all Calgary neighborhoods including NW, NE, SW, SE, and surrounding areas like Airdrie, Cochrane, Okotoks, and Chestermere."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free estimates for most electrical projects. Our electrician will assess your needs and provide a detailed, written quote before any work begins."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Calgary Electrician | Licensed 24/7 Service - TrueCan Power</title>
        <meta 
          name="description" 
          content="Top-rated Calgary electricians for residential & commercial work. Licensed, insured, ESA-certified. Same-day service available. Free quotes. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/calgary-electrician" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/calgary-electrician",
          serviceType: "Electrical Services",
          description: "Licensed Calgary electricians providing residential and commercial electrical services including panel upgrades, EV charger installation, lighting, and 24/7 emergency repairs."
        }}
      />

      <SchemaMarkup 
        type="FAQ" 
        data={{ questions: faqs }}
      />

      <SchemaMarkup 
        type="Breadcrumb" 
        data={{
          items: [
            { name: "Home", url: "https://truecanpower.com/" },
            { name: "Calgary Electrician", url: "https://truecanpower.com/calgary-electrician" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32 md:pt-40 pb-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Calgary Electrician Services
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Licensed, insured, ESA-certified electricians serving Calgary and surrounding areas. From panel upgrades to emergency repairs, we're your trusted local electrical experts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button asChild size="lg">
                      <Link to="/contact">Get Free Estimate</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="tel:+12508830499">
                        <Phone className="mr-2" size={20} />
                        (250) 883-0499
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>Same-Day Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>24/7 Emergency</span>
                    </div>
                  </div>
                </div>
                <div>
                  <QuoteRequestForm title="Get a Free Quote Today" />
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Calgary Electrical Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <Link key={index} to={service.link}>
                    <Card className="hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50 h-full">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                          <service.icon size={24} />
                        </div>
                        <span className="font-semibold">{service.label}</span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Why Calgary Chooses TrueCan Power</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Licensed ESA-certified electricians",
                    "100% code-compliant work",
                    "Upfront pricing, no hidden fees",
                    "Clean, respectful service",
                    "Warranty on all installations",
                    "Same-day service available",
                    "24/7 emergency response",
                    "Free estimates on most jobs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground text-center mt-8">
                  Licensed & Insured • Permits & Inspections • Warranty-Backed Work
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Calgary Electrician FAQ</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Need a Calgary Electrician?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free estimate today. Licensed, insured, and ready to help with any electrical project.
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
                <p className="text-sm text-muted-foreground mt-6">
                  Licensed & Insured • Permits & Inspections • Warranty-Backed Work
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CalgaryElectrician;
