import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, Zap, Shield, AlertTriangle, Home } from "lucide-react";
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

const CalgaryPanelUpgrade = () => {
  const warningSignsData = [
    "Breakers trip frequently",
    "Flickering or dimming lights",
    "Burning smell from panel",
    "Panel feels warm to touch",
    "Planning to add EV charger or hot tub",
    "Home is 25+ years old with original panel"
  ];

  const faqs = [
    {
      question: "How much does a panel upgrade cost in Calgary?",
      answer: "A 200 amp panel upgrade in Calgary typically costs $2,500-$4,500 depending on your home's existing wiring, meter base condition, and permit requirements. We provide detailed, fixed-price quotes with no hidden fees."
    },
    {
      question: "Do I need a panel upgrade for an EV charger?",
      answer: "Not always. Many homes have enough capacity for a 40-50 amp EV charger circuit. Our electrician will assess your panel during a free estimate and recommend the most cost-effective solution."
    },
    {
      question: "How long does a panel upgrade take?",
      answer: "Most panel upgrades take 6-8 hours to complete. Your power will be off for 4-6 hours during the main work. We coordinate with ENMAX for any required disconnect/reconnect."
    },
    {
      question: "Will I need a permit for a panel upgrade?",
      answer: "Yes, all electrical panel upgrades in Calgary require a permit and ESA inspection. We handle all permit applications and schedule the inspection as part of our service."
    },
    {
      question: "What's the difference between 100 amp and 200 amp service?",
      answer: "A 200 amp panel provides double the electrical capacity, essential for modern homes with EV chargers, hot tubs, heat pumps, and multiple high-draw appliances. Most new construction uses 200 amp service."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Panel Upgrade Calgary | 200 Amp Service - TrueCan Power</title>
        <meta 
          name="description" 
          content="Electrical panel upgrades in Calgary. Upgrade to 200 amp service for EVs, heat pumps & modern loads. Full permits, ESA inspection included. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/calgary-panel-upgrade" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/calgary-panel-upgrade",
          serviceType: "Electrical Panel Upgrade",
          description: "Professional electrical panel upgrades in Calgary. 100 amp to 200 amp upgrades, breaker panel replacements, and electrical service upgrades."
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
            { name: "Calgary Electrician", url: "https://truecanpower.com/calgary-electrician" },
            { name: "Panel Upgrade", url: "https://truecanpower.com/calgary-panel-upgrade" }
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
                    Electrical Panel Upgrades in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Upgrade your electrical panel to handle modern power demands. Our licensed electricians provide safe, code-compliant 200 amp upgrades with full permits and ESA inspection.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button asChild size="lg">
                      <Link to="/contact">Get Free Assessment</Link>
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
                      <span>All Permits Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>ESA Inspection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>ENMAX Coordination</span>
                    </div>
                  </div>
                </div>
                <div>
                  <QuoteRequestForm title="Get Your Panel Upgrade Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Warning Signs */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Signs You Need a Panel Upgrade</h2>
                <p className="text-muted-foreground text-center mb-12">If you notice any of these warning signs, it may be time to upgrade your electrical panel.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {warningSignsData.map((sign, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <AlertTriangle className="text-amber-500 flex-shrink-0" size={20} />
                        <span>{sign}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Benefits of a 200 Amp Panel Upgrade</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">More Power</h3>
                      <p className="text-sm text-muted-foreground">Handle EV chargers, hot tubs, and modern appliances</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Improved Safety</h3>
                      <p className="text-sm text-muted-foreground">New breakers with arc-fault protection</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Home className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Home Value</h3>
                      <p className="text-sm text-muted-foreground">Modern electrical increases property value</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Code Compliant</h3>
                      <p className="text-sm text-muted-foreground">Meets current Alberta Electrical Code</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Calgary Panel Upgrade FAQ</h2>
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
                  Get a free panel assessment and quote. We handle all permits and ENMAX coordination.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Assessment</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/services/panel-upgrade">Learn More</Link>
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

export default CalgaryPanelUpgrade;
