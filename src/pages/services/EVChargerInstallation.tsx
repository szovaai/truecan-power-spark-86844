import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBlock from "@/components/EvidenceBlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import { evidenceBlocks } from "@/data/citations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EVChargerInstallation = () => {
  const evidence = evidenceBlocks['ev-charger'];

  const benefits = [
    { icon: Zap, text: "Level 2 charging - up to 7x faster than standard outlets" },
    { icon: Shield, text: "Dedicated 240V circuit with proper protection" },
    { icon: CheckCircle2, text: "Full permit handling and ESA inspection" },
    { icon: Clock, text: "Typical installation completed in 4-6 hours" },
  ];

  const faqs = [
    {
      question: "Do I need a permit for a Level 2 EV charger in Calgary?",
      answer: "Yes, most Level 2 EV charger installations require an electrical permit in Calgary. We handle all permit applications and coordinate ESA inspections as part of our installation service, ensuring full compliance with Alberta Electrical Code."
    },
    {
      question: "How long does EV charger installation take?",
      answer: "A typical residential EV charger installation takes 4-6 hours, depending on your panel capacity, the distance from your electrical panel to the charging location, and any necessary panel upgrades. We'll provide an accurate timeline after our free site assessment."
    },
    {
      question: "Can my electrical panel support an EV charger?",
      answer: "Most homes with 200-amp service can support a Level 2 EV charger. During our free assessment, we perform a load calculation to ensure your panel has adequate capacity. If an upgrade is needed, we'll provide a transparent quote for panel service upgrades."
    },
    {
      question: "What EV charger brands do you install?",
      answer: "We install all major EV charger brands including Tesla Wall Connector, ChargePoint Home, Grizzl-E, FLO Home, and others. We'll recommend the best charger for your vehicle, budget, and charging needs during our consultation."
    },
    {
      question: "Do you install outdoor EV chargers?",
      answer: "Yes, we regularly install outdoor EV chargers with weatherproof enclosures and proper GFCI protection. All outdoor installations meet Alberta's stringent electrical code requirements for exterior installations and harsh winter conditions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>EV Charger Installation Calgary | Level 2 Home Charging - TrueCan Power</title>
        <meta 
          name="description" 
          content="Professional Level 2 EV charger installation in Calgary. Licensed electricians handle permits, inspections, and fast home charging setup. Free site assessment. Call (250) 883-0499."
        />
        <meta name="keywords" content="EV charger installation Calgary, Level 2 charging, Tesla charger installation, electric vehicle charging Calgary, home EV charger" />
        <link rel="canonical" href="https://truecanpower.com/services/ev-charger-installation" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/services/ev-charger-installation",
          serviceType: "EV Charger Installation",
          description: "Professional Level 2 home EV charger installation with permits and ESA inspection included. Dedicated 240V circuits for fast, safe charging in Calgary.",
          citation: evidence.sources.map(s => s.url)
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
            { name: "Services", url: "https://truecanpower.com/services" },
            { name: "EV Charger Installation", url: "https://truecanpower.com/services/ev-charger-installation" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32 md:pt-40 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  EV Charger Installation in Calgary
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Fast, safe home charging for your electric vehicle. Professional installation with permits and inspection included.
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
                <h2 className="text-3xl font-bold mb-8">What's Included in Our EV Charger Installation</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Free Site Assessment</h3>
                      <p className="text-muted-foreground">
                        We visit your home to assess your electrical panel capacity, determine the optimal charger location, measure cable runs, and provide a detailed quote. No obligation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Dedicated 240V Circuit Installation</h3>
                      <p className="text-muted-foreground">
                        We install a new 40-50 amp dedicated circuit from your electrical panel to your charging location, using proper wire sizing and protection devices for safe, code-compliant operation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Permit & Inspection Coordination</h3>
                      <p className="text-muted-foreground">
                        We handle all electrical permit applications with the City of Calgary and coordinate the required ESA inspection after installation—included in our service price.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Professional Charger Mounting</h3>
                      <p className="text-muted-foreground">
                        Your EV charger is securely mounted at the optimal height and location, with clean cable management and weatherproof protection for indoor or outdoor installations.
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
                  anchorId="evidence-ev-charger"
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
                  Ready to Install Your Home EV Charger?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free site assessment and quote today. Licensed, insured, and ESA certified.
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

export default EVChargerInstallation;
