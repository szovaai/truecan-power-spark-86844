import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, AlertTriangle, Clock, Shield, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const CalgaryTroubleshooting = () => {
  const emergencyIssues = [
    { icon: AlertTriangle, issue: "Complete power outage", urgent: true },
    { icon: Zap, issue: "Sparking outlets or switches", urgent: true },
    { icon: AlertTriangle, issue: "Burning smell from panel", urgent: true },
    { icon: Zap, issue: "Exposed wires or shock hazard", urgent: true },
    { icon: Clock, issue: "Frequent breaker trips", urgent: false },
    { icon: Clock, issue: "Flickering lights", urgent: false },
    { icon: Clock, issue: "Dead outlets", urgent: false },
    { icon: Clock, issue: "Buzzing sounds from panel", urgent: false },
  ];

  const faqs = [
    {
      question: "How fast can you respond to an electrical emergency in Calgary?",
      answer: "We offer 24/7 emergency electrical service in Calgary with a typical response time of 2 hours or less. For life-threatening emergencies, always call 911 first, then call us."
    },
    {
      question: "What should I do if I smell burning from my electrical panel?",
      answer: "If you smell burning near your electrical panel: 1) Don't touch the panel, 2) Turn off the main breaker if safe to do so, 3) Leave the area, 4) Call 911 if you see flames, 5) Call us for emergency service."
    },
    {
      question: "Why do my breakers keep tripping?",
      answer: "Frequent breaker trips can indicate overloaded circuits, a faulty breaker, short circuit, or ground fault. While not always an emergency, repeated trips should be investigated by a licensed electrician to prevent fire hazards."
    },
    {
      question: "Is it safe to reset a tripped breaker?",
      answer: "It's generally safe to reset a breaker once. If it trips again immediately, don't reset it again—this indicates a problem that needs professional diagnosis. Repeated resets can cause the breaker to fail."
    },
    {
      question: "What does emergency electrical service cost in Calgary?",
      answer: "Emergency service rates vary based on time of day and complexity. We charge a flat diagnostic fee, then provide a quote before any repairs. We never start work without your approval on pricing."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Electrician Calgary | 24/7 Troubleshooting - TrueCan</title>
        <meta 
          name="description" 
          content="24/7 emergency electrician in Calgary. Fast response for outages, sparking, breaker trips. Licensed & insured. Call now: (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/calgary-electrical-troubleshooting" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/calgary-electrical-troubleshooting",
          serviceType: "Emergency Electrical Service",
          description: "24/7 emergency electrician services in Calgary. Fast response for power outages, sparking outlets, breaker trips, and all electrical emergencies."
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
            { name: "Emergency Troubleshooting", url: "https://truecanpower.com/calgary-electrical-troubleshooting" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-destructive/10 via-background to-primary/10 pt-32 md:pt-40 pb-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
                  <AlertTriangle size={20} />
                  <span className="font-semibold">24/7 Emergency Service</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Calgary Emergency Electrician
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Electrical emergency? We respond fast—24 hours a day, 7 days a week. Licensed electricians ready to help with any electrical issue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="destructive">
                    <a href="tel:+12508830499">
                      <Phone className="mr-2" size={20} />
                      Call Now: (250) 883-0499
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Request Callback</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={18} />
                    <span>2-Hour Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="text-primary" size={18} />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={18} />
                    <span>No Hidden Fees</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Issues Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Common Electrical Emergencies We Handle</h2>
                <p className="text-muted-foreground text-center mb-12">
                  Issues marked with red require immediate attention. Call us right away.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {emergencyIssues.map((item, index) => (
                    <Card key={index} className={item.urgent ? "border-destructive/50" : ""}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <item.icon 
                          className={item.urgent ? "text-destructive" : "text-amber-500"} 
                          size={20} 
                        />
                        <span className={item.urgent ? "font-semibold" : ""}>{item.issue}</span>
                        {item.urgent && (
                          <span className="ml-auto text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">
                            URGENT
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* What to Do */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">While You Wait for Our Electrician</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-green-500/50">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-4 text-green-600">✓ DO</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span>Turn off the main breaker if safe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span>Keep clear of any damaged wiring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span>Unplug appliances in affected areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                          <span>Call 911 if you see flames or smoke</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-destructive/50">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-4 text-destructive">✗ DON'T</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                          <span>Touch sparking or hot outlets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                          <span>Use water on electrical fires</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                          <span>Attempt DIY repairs on live wires</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="text-destructive flex-shrink-0 mt-0.5" size={18} />
                          <span>Repeatedly reset tripping breakers</span>
                        </li>
                      </ul>
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
                <h2 className="text-3xl font-bold text-center mb-12">Emergency Electrician FAQ</h2>
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
          <section className="py-20 bg-gradient-to-br from-destructive/20 via-background to-primary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Electrical Emergency? We're Here to Help.
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  24/7 emergency electrical service in Calgary. Fast response, fair pricing, licensed electricians.
                </p>
                <Button asChild size="lg" variant="destructive">
                  <a href="tel:+12508830499">
                    <Phone className="mr-2" size={20} />
                    Call Now: (250) 883-0499
                  </a>
                </Button>
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

export default CalgaryTroubleshooting;
