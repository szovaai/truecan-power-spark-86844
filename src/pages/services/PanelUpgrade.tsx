import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBlock from "@/components/EvidenceBlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import { evidenceBlocks } from "@/data/citations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, AlertTriangle, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PanelUpgrade = () => {
  const evidence = evidenceBlocks['panel-upgrade'];

  const signs = [
    { icon: AlertTriangle, text: "Frequent breaker trips or blown fuses" },
    { icon: AlertTriangle, text: "Dimming lights when appliances turn on" },
    { icon: AlertTriangle, text: "Warm or discolored outlets and switches" },
    { icon: AlertTriangle, text: "Planning to add EV charger or major appliances" },
  ];

  const benefits = [
    { icon: Zap, text: "Increased capacity for modern electrical loads" },
    { icon: Shield, text: "Enhanced safety with arc-fault and GFCI protection" },
    { icon: CheckCircle2, text: "Support for EVs, heat pumps, and home additions" },
    { icon: CheckCircle2, text: "Increased home value and insurance compliance" },
  ];

  const faqs = [
    {
      question: "How do I know if I need a panel upgrade?",
      answer: "Signs include frequent breaker trips, a panel over 25 years old, 100-amp or smaller service, adding major appliances (EV charger, hot tub, heat pump), or planning a home addition. We provide free load calculations to determine if an upgrade is needed."
    },
    {
      question: "How long does a panel upgrade take?",
      answer: "Most residential panel upgrades are completed in 6-10 hours over 1-2 days. The timeline depends on panel size, service upgrade requirements, and whether ENMAX needs to upgrade your meter base. We coordinate all utility work to minimize disruption."
    },
    {
      question: "Do I need to upgrade to 200 amps?",
      answer: "Most modern homes benefit from 200-amp service, which supports electric vehicles, heat pumps, air conditioning, and future expansion. We'll perform a detailed load calculation based on your current and planned electrical needs to recommend the right service size."
    },
    {
      question: "Will my power be off during the upgrade?",
      answer: "Yes, power will be off for 4-8 hours during the panel installation. We schedule upgrades at your convenience and work efficiently to minimize downtime. Critical circuits can often be restored sooner."
    },
    {
      question: "What's included in the panel upgrade cost?",
      answer: "Our panel upgrade includes the new electrical panel, all breakers, disconnect switch, grounding system, permit fees, ESA inspection, and coordination with ENMAX for meter changes. We provide itemized quotes with no hidden fees."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Panel Upgrade Calgary | 200 Amp Service Upgrade - TrueCan Power</title>
        <meta 
          name="description" 
          content="Professional electrical panel upgrades in Calgary. Upgrade to 200 amp service for EVs, heat pumps, and modern loads. Licensed electricians, full permits. Call (250) 883-0499." 
        />
        <meta name="keywords" content="electrical panel upgrade Calgary, 200 amp service, panel replacement Calgary, breaker box upgrade, electrical service upgrade" />
        <link rel="canonical" href="https://truecanpower.com/services/panel-upgrade" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/services/panel-upgrade",
          serviceType: "Electrical Panel Upgrade",
          description: "Expert electrical panel upgrades from 100A to 200A service. Support modern electrical loads including EVs and heat pumps. Full permits and ESA inspection.",
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
            { name: "Panel Upgrade", url: "https://truecanpower.com/services/panel-upgrade" }
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
                  Electrical Panel Upgrade Calgary
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Upgrade to 200-amp service for modern electrical needs. Safe, code-compliant installations by licensed electricians.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Load Assessment</Link>
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

          {/* Warning Signs */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Signs You Need a Panel Upgrade</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {signs.map((sign, index) => (
                    <Card key={index} className="border-amber-500/30">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex-shrink-0">
                            <sign.icon size={24} />
                          </div>
                          <p className="text-foreground pt-2">{sign.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Upgrading Your Panel</h2>
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
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Our Panel Upgrade Process</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">1. Free Load Calculation & Assessment</h3>
                      <p className="text-muted-foreground">
                        We assess your current panel, calculate your electrical loads, and determine the right service size for your needs. This includes considering future additions like EV chargers or renovations.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">2. Permit Application & Utility Coordination</h3>
                      <p className="text-muted-foreground">
                        We handle all permit applications and coordinate with ENMAX for any required meter base upgrades or service changes, ensuring a seamless process.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">3. Professional Panel Installation</h3>
                      <p className="text-muted-foreground">
                        We install your new panel with modern arc-fault and GFCI breakers, proper grounding, surge protection, and clean labeling. All work meets or exceeds current Alberta Electrical Code standards.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">4. ESA Inspection & Documentation</h3>
                      <p className="text-muted-foreground">
                        After installation, we coordinate the required ESA inspection and provide you with all documentation for your records and future home sales.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Evidence Block */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <EvidenceBlock
                  claim={evidence.claim}
                  sources={evidence.sources}
                  localNote={evidence.localNote}
                  anchorId="evidence-panel-upgrade"
                />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
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
                  Ready to Upgrade Your Electrical Panel?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free load calculation and transparent quote. Licensed, insured, and ESA certified.
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

export default PanelUpgrade;
