import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceBlock from "@/components/EvidenceBlock";
import SchemaMarkup from "@/components/SchemaMarkup";
import { evidenceBlocks } from "@/data/citations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Lightbulb, DollarSign, Leaf, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PotLightInstallation = () => {
  const evidence = evidenceBlocks['pot-lights'];

  const benefits = [
    { icon: Lightbulb, text: "Modern, clean aesthetic with adjustable brightness" },
    { icon: Leaf, text: "85% energy savings compared to halogen bulbs" },
    { icon: DollarSign, text: "25-year lifespan reduces replacement costs" },
    { icon: CheckCircle2, text: "IC-rated for safe installation in insulated ceilings" },
  ];

  const faqs = [
    {
      question: "How many pot lights do I need for my room?",
      answer: "A general rule is one pot light per 4-6 square feet for ambient lighting. Kitchens and task areas need denser spacing (every 4 feet), while bedrooms can use wider spacing (every 6 feet). We provide free lighting design consultations to determine optimal placement for your space."
    },
    {
      question: "Can pot lights be installed in insulated ceilings?",
      answer: "Yes, we use IC-rated (Insulation Contact) fixtures specifically designed for direct contact with insulation, meeting Alberta fire code requirements. These fixtures prevent overheating and maintain your home's energy efficiency."
    },
    {
      question: "Do I need to repaint after pot light installation?",
      answer: "We cut precise ceiling holes and provide trim rings that cover any minor imperfections, minimizing visible damage. Touch-up paint is rarely needed. We protect your home with drop cloths and clean up all debris after installation."
    },
    {
      question: "Can I dim my LED pot lights?",
      answer: "Yes, we install dimmable LED fixtures with compatible LED dimmer switches, giving you full control over brightness and ambiance. Dimming also extends bulb lifespan and saves additional energy."
    },
    {
      question: "How long does pot light installation take?",
      answer: "Most residential pot light installations (6-12 lights) are completed in 4-6 hours for a single room. Whole-home installations take 1-2 days depending on the number of fixtures and complexity of wiring runs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pot Light Installation Calgary | LED Recessed Lighting - TrueCan Power</title>
        <meta 
          name="description" 
          content="Professional pot light installation in Calgary. Energy-efficient LED recessed lighting for kitchens, basements, living rooms. Licensed electricians. Call (250) 883-0499." 
        />
        <meta name="keywords" content="pot light installation Calgary, LED recessed lighting, pot lights Calgary, kitchen lighting, basement lighting Calgary" />
        <link rel="canonical" href="https://truecanpower.com/services/pot-light-installation" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/services/pot-light-installation",
          serviceType: "Pot Light Installation",
          description: "Expert LED pot light installation for residential and commercial spaces. Energy-efficient, IC-rated fixtures with clean, professional installation in Calgary.",
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
            { name: "Pot Light Installation", url: "https://truecanpower.com/services/pot-light-installation" }
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
                  Pot Light Installation Calgary
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Modern LED recessed lighting for kitchens, basements, living rooms, and more. Energy-efficient and stylish.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Lighting Design</Link>
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
                <h2 className="text-3xl font-bold mb-8 text-center">Why Choose LED Pot Lights?</h2>
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

          {/* Popular Applications */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Popular Pot Light Applications</h2>
                
                <div className="space-y-6 mb-12">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Kitchen Lighting</h3>
                      <p className="text-muted-foreground">
                        Strategic pot light placement provides bright, shadow-free task lighting over counters, islands, and sinks. Dimmable options create ambiance for dining and entertaining.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Basement Renovations</h3>
                      <p className="text-muted-foreground">
                        Low-profile pot lights maximize headroom in basements while providing even, modern lighting for rec rooms, home theaters, and home offices.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Living & Dining Rooms</h3>
                      <p className="text-muted-foreground">
                        Replace outdated ceiling fixtures with clean, contemporary pot lights. Multiple zones with dimming control create versatile lighting for any occasion.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3">Bathrooms & Hallways</h3>
                      <p className="text-muted-foreground">
                        Moisture-rated pot lights for bathrooms provide safe, code-compliant illumination. Hallway pot lights eliminate dark corners and create a welcoming entrance.
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
                  anchorId="evidence-pot-lights"
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
                  Ready to Upgrade Your Lighting?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free lighting design consultation and quote. Professional installation by licensed electricians.
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

export default PotLightInstallation;
