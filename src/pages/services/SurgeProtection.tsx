import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBlock from "@/components/EvidenceBlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import { evidenceBlocks } from "@/data/citations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, Clock, Shield, Zap, Home, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SurgeProtection = () => {
  const evidence = evidenceBlocks['surge-protection'];

  const benefits = [
    { icon: Shield, text: "Advanced Surge Suppression - Absorbs and redirects excess voltage to prevent damage" },
    { icon: Zap, text: "High Joule Rating - Strong, long-lasting protection for multiple devices" },
    { icon: Clock, text: "Fast Response Time - Detects and reacts to surges in nanoseconds" },
    { icon: Home, text: "Professional Panel-Mounted Installation - Whole-home protection at the source" },
  ];

  const faqs = [
    {
      question: "Do I need whole-home surge protection in Calgary?",
      answer: "Yes, Calgary homes are particularly vulnerable to power surges from lightning strikes, utility grid switching, and large appliances cycling on/off. Whole-home surge protection installed at your electrical panel provides comprehensive protection for all your electronics, including computers, TVs, smart home devices, and major appliances."
    },
    {
      question: "What causes power surges?",
      answer: "Power surges can be caused by lightning strikes (even nearby ones), utility grid switching, large appliances like HVAC systems cycling on/off, faulty wiring, or downed power lines. In Calgary, winter storms and grid maintenance make surge protection especially important year-round."
    },
    {
      question: "How long does surge protector installation take?",
      answer: "A whole-home surge protector installation typically takes 2-3 hours. The device is mounted directly in your electrical panel, providing protection for every circuit in your home. We'll also test the installation to ensure proper grounding and operation."
    },
    {
      question: "What's the difference between whole-home and power bar surge protection?",
      answer: "Power bar surge protectors only protect devices plugged directly into them and can fail without warning. Whole-home surge protectors are installed at your electrical panel and protect every outlet, hard-wired appliance, and electronic device in your home. They also feature LED indicators to confirm protection status."
    },
    {
      question: "Will surge protection help my EV charger?",
      answer: "Absolutely. EV chargers are expensive investments with sensitive electronics. Whole-home surge protection prevents voltage spikes from damaging your charger and vehicle's onboard systems. We often recommend surge protection as part of any EV charger installation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Surge Protection Calgary | Whole-Home Surge Protectors - TrueCan Power</title>
        <meta 
          name="description" 
          content="Protect your valuable electronics from power surges with professional whole-home surge protection in Calgary. Licensed electricians, fast installation. Call (250) 883-0499."
        />
        <meta name="keywords" content="surge protection Calgary, whole-home surge protector, power surge protection, electrical surge protection, home surge protector installation" />
        <link rel="canonical" href="https://truecanpower.com/services/surge-protection" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/services/surge-protection",
          serviceType: "Surge Protection Installation",
          description: "Professional whole-home surge protection installation. Protect all electronics and appliances from dangerous power spikes with panel-mounted surge protectors in Calgary.",
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
            { name: "Surge Protection", url: "https://truecanpower.com/services/surge-protection" }
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
                  Surge Protection in Calgary
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Protect your valuable electronics and appliances from dangerous power spikes and electrical surges with professional whole-home surge protection.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <h2 className="text-3xl font-bold mb-8">What's Included in Our Surge Protection Service</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Free Surge Risk Assessment</h3>
                      <p className="text-muted-foreground">
                        We evaluate your home's electrical system, identify vulnerable electronics and appliances, and recommend the appropriate level of surge protection for your needs.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Whole-Home Surge Protection Installation</h3>
                      <p className="text-muted-foreground">
                        We install a commercial-grade surge protection device directly in your electrical panel. This provides protection for every circuit, outlet, and hard-wired appliance in your home—not just devices plugged into power bars.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Point-of-Use Protector Recommendations</h3>
                      <p className="text-muted-foreground">
                        For maximum protection, we recommend layered surge protection. We'll advise on point-of-use protectors for your most sensitive equipment like computers, home theaters, and networking gear.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Permit & Code Compliance</h3>
                      <p className="text-muted-foreground">
                        All surge protection installations meet CSA C22.1 requirements and Alberta Electrical Code standards. We handle any required permits and ensure your installation passes inspection.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">TrueCanPower Surge Protection Features</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Shield size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">High Joule Rating</h3>
                      <p className="text-sm text-muted-foreground">Strong, long-lasting protection for multiple devices</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Zap size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Nanosecond Response</h3>
                      <p className="text-sm text-muted-foreground">Detects and reacts to surges instantly</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">LED Status Indicators</h3>
                      <p className="text-sm text-muted-foreground">Visual confirmation your devices are protected</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Home size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Whole-Home Coverage</h3>
                      <p className="text-sm text-muted-foreground">Protects every outlet and circuit</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Monitor size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Electronics Safe</h3>
                      <p className="text-sm text-muted-foreground">Ideal for computers, TVs, and smart devices</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <Clock size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">Built to Last</h3>
                      <p className="text-sm text-muted-foreground">Durable construction for reliable protection</p>
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
                  anchorId="evidence-surge-protection"
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
                  Ready to Protect Your Home from Power Surges?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free surge risk assessment and quote today. Don't leave your devices vulnerable to unpredictable power spikes.
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

export default SurgeProtection;