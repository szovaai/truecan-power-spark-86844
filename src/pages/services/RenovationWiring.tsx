import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBlock from "@/components/EvidenceBlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import { evidenceBlocks } from "@/data/citations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Home, CheckCircle2, Hammer, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RenovationWiring = () => {
  const evidence = evidenceBlocks['renovation-wiring'];

  const benefits = [
    { icon: Home, text: "Custom layouts designed for your renovation plans" },
    { icon: Zap, text: "Arc-fault and GFCI protection per 2021 CEC" },
    { icon: CheckCircle2, text: "Coordinated scheduling with contractors" },
    { icon: Hammer, text: "Full permit support for Calgary approvals" },
  ];

  const faqs = [
    {
      question: "When should I involve an electrician in my renovation?",
      answer: "Contact an electrician during the planning phase, before demolition begins. We can assess your existing electrical capacity, plan new circuits, coordinate with general contractors, and ensure electrical work aligns with your timeline and budget."
    },
    {
      question: "What electrical circuits does a kitchen renovation need?",
      answer: "Modern kitchens typically require 7+ dedicated circuits: two 20A small appliance circuits, refrigerator, dishwasher, microwave, range (40-50A 240V), and general lighting. We design layouts that meet code and accommodate all your planned appliances."
    },
    {
      question: "Do I need to upgrade my panel for a basement renovation?",
      answer: "It depends on your current panel capacity and the scope of your renovation. We perform a load calculation to determine if your existing service can support additional circuits for lighting, outlets, bathroom, and entertainment equipment. If needed, we'll quote panel upgrades."
    },
    {
      question: "Can you work around my general contractor's schedule?",
      answer: "Yes, we regularly coordinate with general contractors, plumbers, and HVAC trades. We provide rough-in wiring during the framing stage and return for finish work (outlets, switches, fixtures) after drywall and painting are complete."
    },
    {
      question: "What permits are needed for renovation electrical work?",
      answer: "Most electrical renovations requiring new circuits or panel work need permits in Calgary. We handle all electrical permit applications and coordinate ESA inspections at rough-in and final stages, ensuring seamless approval for your renovation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Basement & Kitchen Renovation Wiring Calgary | Electrical Contractor - TrueCan Power</title>
        <meta 
          name="description" 
          content="Expert electrical wiring for basement and kitchen renovations in Calgary. Code-compliant circuits, permits, and coordination with contractors. Call (250) 883-0499." 
        />
        <meta name="keywords" content="basement wiring Calgary, kitchen electrical renovation, renovation electrician Calgary, basement electrical, kitchen rewiring" />
        <link rel="canonical" href="https://truecanpower.com/services/renovation-wiring" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/services/renovation-wiring",
          serviceType: "Basement & Kitchen Renovation Electrical",
          description: "Professional electrical wiring for basement and kitchen renovations. Custom circuit design, code-compliant installation, and permit coordination in Calgary.",
          citation: evidence.sources.map(s => s.url)
        }}
      />

      <SchemaMarkup type="FAQ" data={{ questions: faqs }} />

      <SchemaMarkup 
        type="Breadcrumb" 
        data={{
          items: [
            { name: "Home", url: "https://truecanpower.com/" },
            { name: "Services", url: "https://truecanpower.com/services" },
            { name: "Renovation Wiring", url: "https://truecanpower.com/services/renovation-wiring" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Basement & Kitchen Electrical Renovation Calgary
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert electrical wiring for renovations. Custom circuit design, code compliance, and seamless contractor coordination.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Renovation Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+12508830499">
                      <Phone className="mr-2" size={20} />
                      (250) 883-0499
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us for Renovation Electrical?</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                            <benefit.icon size={24} />
                          </div>
                          <p className="text-foreground pt-2">{benefit.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Service Details */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Renovation Electrical Services</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Kitchen Renovations</h3>
                      <p className="text-muted-foreground mb-4">
                        Complete kitchen electrical design including dedicated circuits for range, dishwasher, refrigerator, microwave, and small appliances. Under-cabinet lighting, pot lights, and island outlets.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>240V range circuits (40-50A)</li>
                        <li>Dedicated 20A small appliance circuits</li>
                        <li>GFCI-protected countertop outlets</li>
                        <li>Undercabinet and accent lighting</li>
                        <li>Code-compliant outlet spacing</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Basement Renovations</h3>
                      <p className="text-muted-foreground mb-4">
                        Full basement electrical including rec rooms, home theaters, bedrooms, bathrooms, and wet bars. Proper lighting, outlet placement, and dedicated circuits for entertainment systems.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Pot light and fixture installation</li>
                        <li>GFCI outlets for bathrooms and bars</li>
                        <li>Arc-fault protection for bedrooms</li>
                        <li>Dedicated circuits for home theaters</li>
                        <li>Sump pump and dehumidifier circuits</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Bathroom Renovations</h3>
                      <p className="text-muted-foreground mb-4">
                        GFCI-protected outlets, heated floor circuits, exhaust fan wiring, and vanity lighting. All installations meet strict bathroom electrical code requirements.
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>GFCI-protected bathroom outlets</li>
                        <li>Heated floor thermostat and circuit</li>
                        <li>Exhaust fan with timer/humidity sensor</li>
                        <li>Vanity and mirror lighting</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Home Additions</h3>
                      <p className="text-muted-foreground mb-4">
                        Electrical service for room additions, sunrooms, and enclosed garages. We assess existing capacity and coordinate service upgrades if needed.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Evidence Block */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <EvidenceBlock
                  claim={evidence.claim}
                  sources={evidence.sources}
                  localNote={evidence.localNote}
                  anchorId="evidence-renovation-wiring"
                />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
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
                  Planning a Kitchen or Basement Renovation?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get expert electrical design and installation. Free consultations for renovation projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Request Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/services">View All Services</Link>
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

export default RenovationWiring;
