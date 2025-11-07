import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBlock from "@/components/EvidenceBlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import { evidenceBlocks } from "@/data/citations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Shield, Zap, CheckCircle2, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HotTubSaunaWiring = () => {
  const evidence = evidenceBlocks['hot-tub-sauna'];

  const benefits = [
    { icon: Shield, text: "GFCI protection for shock prevention in wet areas" },
    { icon: Zap, text: "240V circuits sized for your specific equipment" },
    { icon: Droplets, text: "Weatherproof disconnect switches for outdoor installations" },
    { icon: CheckCircle2, text: "Full permit and ESA inspection included" },
  ];

  const faqs = [
    {
      question: "What electrical requirements does my hot tub need?",
      answer: "Most residential hot tubs require a dedicated 240V, 40-60 amp circuit with GFCI protection. We review your hot tub's specifications to determine exact requirements and ensure proper sizing of wire, breaker, and disconnect switch."
    },
    {
      question: "Do I need a permit for hot tub or sauna wiring?",
      answer: "Yes, hot tub and sauna electrical installations require permits in Calgary due to safety concerns with water and electricity proximity. We handle all permit applications and coordinate the required ESA inspection after installation."
    },
    {
      question: "Can you install wiring for outdoor hot tubs?",
      answer: "Yes, we specialize in outdoor electrical installations using weatherproof conduit, GFCI protection, and proper burial depths for underground cable runs. All outdoor hot tub installations meet Alberta's strict weatherproofing and safety codes."
    },
    {
      question: "What's the difference between hot tub and sauna wiring?",
      answer: "Hot tubs typically need 240V 40-60A circuits due to heater and pump loads, while saunas usually require 240V 30-60A circuits depending on heater size. Both need GFCI protection, but hot tubs have additional requirements for proximity to water and outdoor weatherproofing."
    },
    {
      question: "How long does hot tub wiring installation take?",
      answer: "Most hot tub electrical installations are completed in 4-6 hours, depending on distance from your electrical panel and whether trenching is needed for outdoor installations. We schedule around hot tub delivery for seamless setup."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hot Tub & Sauna Wiring Calgary | 240V Electrical Installation - TrueCan Power</title>
        <meta 
          name="description" 
          content="Professional hot tub and sauna electrical wiring in Calgary. GFCI-protected 240V circuits with permits and inspection. Licensed electricians. Call (250) 883-0499." 
        />
        <meta name="keywords" content="hot tub wiring Calgary, sauna electrical installation, 240V circuit, hot tub electrician Calgary, outdoor electrical Calgary" />
        <link rel="canonical" href="https://truecanpower.com/services/hot-tub-sauna-wiring" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/services/hot-tub-sauna-wiring",
          serviceType: "Hot Tub & Sauna Electrical Installation",
          description: "Expert hot tub and sauna wiring with GFCI protection, weatherproof disconnects, and code-compliant installation. Permits and inspection included in Calgary.",
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
            { name: "Hot Tub & Sauna Wiring", url: "https://truecanpower.com/services/hot-tub-sauna-wiring" }
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
                  Hot Tub & Sauna Electrical Installation Calgary
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Safe, code-compliant 240V wiring for hot tubs and saunas. GFCI protection and weatherproof installations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Site Assessment</Link>
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
                <h2 className="text-3xl font-bold mb-8 text-center">Safe & Reliable Electrical Installation</h2>
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
                <h2 className="text-3xl font-bold mb-8">What's Included in Our Installation</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Load Calculation & Circuit Design</h3>
                      <p className="text-muted-foreground">
                        We review your hot tub or sauna specifications to determine exact electrical requirements, including voltage, amperage, and wire sizing. Free site assessment with transparent pricing.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Dedicated 240V Circuit Installation</h3>
                      <p className="text-muted-foreground">
                        We install a new dedicated circuit from your electrical panel with properly sized wire (typically 6AWG or 8AWG), GFCI breaker protection, and code-compliant conduit or cable installation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Weatherproof Disconnect Switch</h3>
                      <p className="text-muted-foreground">
                        All outdoor installations include a weatherproof disconnect switch within sight of your hot tub, meeting CSA standards for emergency shutoff and service disconnect requirements.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Underground Trenching (if required)</h3>
                      <p className="text-muted-foreground">
                        For outdoor hot tubs, we excavate trenches to proper depth (18-24 inches) for buried conduit or direct-burial cable, protecting your electrical service from lawn equipment and weather.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Permit & ESA Inspection</h3>
                      <p className="text-muted-foreground">
                        We handle all permit applications and coordinate the required ESA inspection after installation—included in our service price for worry-free compliance.
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
                  anchorId="evidence-hot-tub-sauna"
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
                  Ready to Install Your Hot Tub or Sauna?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free site assessment and quote. Safe, code-compliant installation by licensed electricians.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Request Free Assessment</Link>
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

export default HotTubSaunaWiring;
