import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle2, Lightbulb, Zap, Home, Palette } from "lucide-react";
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

const CalgaryPotLights = () => {
  const benefits = [
    { icon: Lightbulb, text: "Energy-efficient LED pot lights" },
    { icon: Palette, text: "Dimmer switches for ambiance control" },
    { icon: Home, text: "Clean, seamless installation" },
    { icon: Zap, text: "Retrofit or new construction" },
  ];

  const faqs = [
    {
      question: "How much do pot lights cost in Calgary?",
      answer: "Pot light installation in Calgary typically costs $150-$250 per light, including the fixture, wiring, and installation. Prices vary based on ceiling type, accessibility, and whether it's new construction or retrofit. We provide detailed quotes before starting."
    },
    {
      question: "How many pot lights do I need for my room?",
      answer: "A general rule is one 4-inch pot light per 4-6 square feet, or one 6-inch light per 6-9 square feet. For a 12x12 room, you'd typically need 4-6 pot lights. We provide free lighting design consultations to determine the optimal layout."
    },
    {
      question: "Can you install pot lights in insulated ceilings?",
      answer: "Yes! We use IC-rated (Insulation Contact) pot lights that are safe for direct contact with insulation. This is especially important for Calgary homes with cathedral ceilings or attic insulation above."
    },
    {
      question: "What size pot lights should I choose?",
      answer: "4-inch pot lights work well for task lighting and smaller spaces. 6-inch lights are better for general room lighting. For 8-9 foot ceilings, 4-inch is usually preferred. We'll recommend the best size during your consultation."
    },
    {
      question: "Do pot lights need a permit in Calgary?",
      answer: "Yes, electrical work including pot light installation requires a permit in Calgary. We handle all permit applications and ensure your installation passes ESA inspection."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pot Light Installation Calgary | LED Recessed Lighting - TrueCan</title>
        <meta 
          name="description" 
          content="Expert pot light installation in Calgary. Energy-efficient LED recessed lighting for any room. Free lighting design consultation. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/calgary-pot-lights" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/calgary-pot-lights",
          serviceType: "Pot Light Installation",
          description: "Professional pot light and recessed lighting installation in Calgary. LED fixtures, dimmer switches, and custom lighting design for residential and commercial spaces."
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
            { name: "Pot Light Installation", url: "https://truecanpower.com/calgary-pot-lights" }
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
                    Pot Light Installation in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Transform your home with beautiful, energy-efficient LED pot lights. Our licensed electricians provide clean, professional installations with free lighting design consultation.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                          <benefit.icon size={20} />
                        </div>
                        <span className="text-sm">{benefit.text}</span>
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
                  <QuoteRequestForm title="Get Your Pot Light Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Popular Rooms */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Popular Rooms for Pot Lights</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { room: "Kitchen", desc: "Task lighting over counters and islands" },
                    { room: "Living Room", desc: "Ambient lighting with dimmer control" },
                    { room: "Basement", desc: "Brighten low-ceiling spaces" },
                    { room: "Bathroom", desc: "Clean, moisture-resistant lighting" },
                    { room: "Bedroom", desc: "Soft, dimmable ambient lighting" },
                    { room: "Hallway", desc: "Even lighting without bulky fixtures" }
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-1">{item.room}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why LED */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose LED Pot Lights?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Use 75% less energy than incandescent",
                    "Last 25,000+ hours (15-20 years)",
                    "No heat buildup - safe for insulation",
                    "Instant full brightness",
                    "Available in warm to cool color temps",
                    "Dimmable for ambiance control"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Calgary Pot Light Installation FAQ</h2>
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
                  Ready to Brighten Your Home?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free pot light quote with lighting design consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/services/pot-light-installation">Learn More</Link>
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

export default CalgaryPotLights;
