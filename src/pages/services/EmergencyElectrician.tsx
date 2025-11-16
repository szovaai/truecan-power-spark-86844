import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBlock from "@/components/EvidenceBlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import { evidenceBlocks } from "@/data/citations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, AlertTriangle, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EmergencyElectrician = () => {
  const evidence = evidenceBlocks['emergency'];

  const emergencies = [
    { icon: AlertTriangle, title: "Power Outages", desc: "Partial or complete power loss in your home" },
    { icon: AlertTriangle, title: "Burning Smells", desc: "Burning odor from outlets, switches, or panel" },
    { icon: AlertTriangle, title: "Sparking Outlets", desc: "Visible sparks or arcing from electrical devices" },
    { icon: AlertTriangle, title: "Hot Fixtures", desc: "Warm switches, outlets, or electrical panel" },
  ];

  const benefits = [
    { icon: Clock, text: "24/7 availability - nights, weekends, and holidays" },
    { icon: Zap, text: "2-hour guaranteed response time" },
    { icon: Shield, text: "Licensed electricians with fully stocked trucks" },
    { icon: Phone, text: "Upfront pricing before work begins" },
  ];

  const faqs = [
    {
      question: "What qualifies as an electrical emergency?",
      answer: "Electrical emergencies include power outages, burning smells, sparking outlets, warm electrical panels, exposed wires, smoke from fixtures, frequent breaker trips, or any situation that poses immediate fire or shock risk. If you smell burning or see sparks, call immediately."
    },
    {
      question: "How quickly can you respond to an emergency?",
      answer: "We guarantee a 2-hour response time for emergency calls in Calgary. Our electricians carry fully stocked trucks with common parts to resolve most emergencies on the first visit, minimizing downtime and restoring your safety quickly."
    },
    {
      question: "Do you charge extra for emergency service?",
      answer: "Emergency service rates apply for after-hours calls (nights, weekends, holidays) due to immediate dispatch and 24/7 availability. However, we provide upfront pricing before starting work so there are no surprises. Safety is worth the investment."
    },
    {
      question: "Should I turn off power if I have an electrical emergency?",
      answer: "If you smell burning, see sparks, or suspect imminent fire risk, shut off power at your main breaker immediately and evacuate. Call 911 if there's active fire or smoke, then call us for electrical repair once the fire department clears the scene."
    },
    {
      question: "Can you make permanent repairs during an emergency call?",
      answer: "In most cases, yes. Our trucks are stocked with common breakers, outlets, wire, and tools to complete permanent repairs on-site. For complex issues requiring permits or extensive work, we'll make the system safe and schedule follow-up repairs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>24/7 Emergency Electrician Calgary | 2-Hour Response - TrueCan Power</title>
        <meta 
          name="description" 
          content="24/7 emergency electrical service in Calgary. Licensed electricians respond within 2 hours for power outages, electrical fires, and urgent repairs. Call (587) 317-0615 now." 
        />
        <meta name="keywords" content="emergency electrician Calgary, 24/7 electrician, electrical emergency, power outage Calgary, electrical fire, urgent electrical repair" />
        <link rel="canonical" href="https://truecanpower.com/services/emergency-electrician" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/services/emergency-electrician",
          serviceType: "24/7 Emergency Electrical Service",
          description: "Round-the-clock emergency electrical service with 2-hour guaranteed response. Licensed electricians for power outages, electrical fires, and urgent repairs in Calgary.",
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
            { name: "Emergency Electrician", url: "https://truecanpower.com/services/emergency-electrician" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-red-500/10 via-background to-amber-500/10 py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 text-red-600 mb-6">
                  <AlertTriangle size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  24/7 Emergency Electrician Calgary
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Electrical emergency? We respond within 2 hours. Available 24/7 for power outages, burning smells, and urgent electrical repairs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="destructive" className="text-lg py-6">
                    <a href="tel:+15873170615">
                      <Phone className="mr-2" size={24} />
                      Call Now: (587) 317-0615
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Request Callback</Link>
                  </Button>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  <strong>Active electrical fire or smoke?</strong> Call 911 first, then call us for repair.
                </p>
              </div>
            </div>
          </section>

          {/* Common Emergencies */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Common Electrical Emergencies We Handle</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {emergencies.map((emergency, index) => (
                    <Card key={index} className="border-red-500/30">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-600 flex-shrink-0">
                            <emergency.icon size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{emergency.title}</h3>
                            <p className="text-muted-foreground">{emergency.desc}</p>
                          </div>
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
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose TrueCan Power for Emergencies?</h2>
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
                <h2 className="text-3xl font-bold mb-8">What to Expect from Our Emergency Service</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Immediate Dispatch</h3>
                      <p className="text-muted-foreground">
                        When you call, we dispatch the nearest available electrician immediately. No waiting on hold, no callbacks—we mobilize within minutes to meet our 2-hour response guarantee.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Safety Assessment</h3>
                      <p className="text-muted-foreground">
                        Our first priority is making your home safe. We assess the situation, identify hazards, isolate problems, and ensure there's no immediate risk to you or your property.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Diagnosis & Upfront Pricing</h3>
                      <p className="text-muted-foreground">
                        We diagnose the issue and provide clear, upfront pricing before starting repairs. No surprises—you approve the work and cost before we proceed.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">On-Site Repair</h3>
                      <p className="text-muted-foreground">
                        Our trucks carry breakers, outlets, wire, connectors, and tools to complete most emergency repairs immediately. We restore power and safety as quickly as possible.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Follow-Up Recommendations</h3>
                      <p className="text-muted-foreground">
                        After restoring safety, we provide recommendations for any additional work needed to prevent future emergencies, such as panel upgrades or circuit improvements.
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
                  anchorId="evidence-emergency"
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
          <section className="py-20 bg-gradient-to-br from-red-500/20 via-background to-amber-500/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Electrical Emergency? We're Here 24/7
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Don't wait. Call now for immediate dispatch and 2-hour guaranteed response anywhere in Calgary.
                </p>
                <Button asChild size="lg" variant="destructive" className="text-lg py-6">
                  <a href="tel:+15873170615">
                    <Phone className="mr-2" size={24} />
                    Emergency: (587) 317-0615
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EmergencyElectrician;
