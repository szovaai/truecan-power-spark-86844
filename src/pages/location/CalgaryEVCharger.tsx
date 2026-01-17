import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, Car, Zap, Clock, Shield } from "lucide-react";
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

const CalgaryEVCharger = () => {
  const benefits = [
    { icon: Car, text: "All EV brands: Tesla, Ford, Rivian, BMW, Hyundai & more" },
    { icon: Zap, text: "Level 2 charging - 8x faster than standard outlet" },
    { icon: Clock, text: "Same-day installation available" },
    { icon: Shield, text: "Full permits & ESA inspection included" },
  ];

  const faqs = [
    {
      question: "How much does EV charger installation cost in Calgary?",
      answer: "EV charger installation in Calgary typically ranges from $800-$2,500 depending on your electrical panel capacity, charger location, and any upgrades needed. We provide free on-site assessments and detailed quotes with no hidden fees."
    },
    {
      question: "Do I need a panel upgrade for an EV charger?",
      answer: "Not always. Many Calgary homes can accommodate a Level 2 EV charger without a panel upgrade. Our electrician will assess your current panel capacity during the free estimate and recommend the most cost-effective solution."
    },
    {
      question: "What EV charger brands do you install?",
      answer: "We install all major EV charger brands including Tesla Wall Connector, ChargePoint, Grizzl-E, JuiceBox, and more. We can also help you choose the best charger for your vehicle and budget."
    },
    {
      question: "How long does EV charger installation take?",
      answer: "Most residential EV charger installations take 2-4 hours. If a panel upgrade is needed, the project may require a full day. We handle all permits and schedule the ESA inspection."
    },
    {
      question: "Are there rebates for EV charger installation in Alberta?",
      answer: "Alberta occasionally offers incentives for EV charger installation. We stay current on available rebates and can help you maximize any savings. Contact us for the latest information on available programs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>EV Charger Installation Calgary | Tesla & All Brands - TrueCan</title>
        <meta 
          name="description" 
          content="Professional EV charger installation in Calgary. Level 2 charging for Tesla, Ford, Rivian & more. Permits included. Same-day service. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/calgary-ev-charger-installation" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/calgary-ev-charger-installation",
          serviceType: "EV Charger Installation",
          description: "Professional Level 2 EV charger installation in Calgary for all electric vehicle brands. Includes permits, ESA inspection, and warranty."
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
            { name: "EV Charger Installation", url: "https://truecanpower.com/calgary-ev-charger-installation" }
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
                    EV Charger Installation in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Charge your electric vehicle at home with a professionally installed Level 2 charger. We install all brands including Tesla, Ford, Rivian, and more.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                          <benefit.icon size={20} />
                        </div>
                        <span className="text-sm pt-2">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

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
                  <QuoteRequestForm title="Get Your EV Charger Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Calgary EV Charger Installation Process</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                      <h3 className="font-semibold mb-2">Free Assessment</h3>
                      <p className="text-sm text-muted-foreground">We evaluate your panel, determine the best charger location, and provide a detailed quote.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                      <h3 className="font-semibold mb-2">Professional Install</h3>
                      <p className="text-sm text-muted-foreground">Our licensed electricians install your charger, pull permits, and ensure code compliance.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                      <h3 className="font-semibold mb-2">Start Charging</h3>
                      <p className="text-sm text-muted-foreground">We test everything, show you how to use your charger, and schedule the ESA inspection.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Calgary EV Charger Installation FAQ</h2>
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
                  Ready to Charge at Home?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free quote for EV charger installation in Calgary. Same-day estimates available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/services/ev-charger-installation">Learn More</Link>
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

export default CalgaryEVCharger;
