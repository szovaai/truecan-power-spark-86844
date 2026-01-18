import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Clock, 
  Car,
  Lightbulb,
  Wrench,
  MapPin,
  Building
} from "lucide-react";
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

const ElectricianCalgarySE = () => {
  const neighborhoods = [
    "McKenzie Towne", "Auburn Bay", "Cranston", "Mahogany", "New Brighton",
    "Douglasdale", "Quarry Park", "Seton", "Walden", "Legacy",
    "Copperfield", "Chaparral", "Lake Bonavista", "Willow Park", "Maple Ridge",
    "Sundance", "Midnapore", "Queensland", "Riverbend", "Ogden"
  ];

  const services = [
    { icon: Car, label: "EV Charger Installation", link: "/services/ev-charger-installation", desc: "Level 2 home chargers for your electric vehicle" },
    { icon: Zap, label: "Panel Upgrades", link: "/services/panel-upgrade", desc: "Upgrade to handle modern electrical demands" },
    { icon: Lightbulb, label: "Pot Light Installation", link: "/services/pot-light-installation", desc: "Recessed lighting for your home" },
    { icon: Shield, label: "Surge Protection", link: "/services/surge-protection", desc: "Whole-home surge protection systems" },
    { icon: Wrench, label: "Smart Home Wiring", link: "/services/renovation-wiring", desc: "Wiring for automated home systems" },
    { icon: Clock, label: "24/7 Emergency Service", link: "/services/emergency-electrician", desc: "Round-the-clock emergency repairs" },
  ];

  const faqs = [
    {
      question: "What SE Calgary communities do you service?",
      answer: "We serve all Calgary SE neighborhoods including McKenzie Towne, Auburn Bay, Cranston, Mahogany, New Brighton, Seton, Walden, Legacy, Copperfield, Chaparral, Lake Bonavista, and all surrounding communities."
    },
    {
      question: "Can you install an EV charger at my SE Calgary home?",
      answer: "Absolutely! EV charger installation is one of our most requested services in SE Calgary. Many newer homes in communities like Mahogany, Auburn Bay, and Seton are perfect for Level 2 charger installation. We handle the complete installation including any panel upgrades needed."
    },
    {
      question: "How fast can you get to SE Calgary for an emergency?",
      answer: "For electrical emergencies in SE Calgary, our typical response time is 2 hours or less. We have technicians positioned throughout the city to ensure fast response to communities from Quarry Park to Seton."
    },
    {
      question: "Do new SE Calgary homes need electrical work?",
      answer: "While newer homes are built to code, many homeowners in SE Calgary's new communities want upgrades like additional outlets in garages, EV charger installations, hot tub wiring, or smart home systems. We also help with builder deficiency repairs."
    },
    {
      question: "What's the cost for electrical work in SE Calgary?",
      answer: "Costs vary by project scope. Standard service calls start at $85-$150/hour. EV charger installations typically range from $1,500-$3,000. We provide free, detailed quotes before any work begins."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrician Calgary SE | McKenzie, Auburn Bay, Cranston - TrueCan Power</title>
        <meta 
          name="description" 
          content="Licensed electrician in Calgary SE. Serving McKenzie Towne, Auburn Bay, Cranston, Mahogany & all SE communities. Same-day service. Free quotes. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/electrician-calgary-se" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/blog/electrician-calgary-se",
          serviceType: "Electrician Services",
          description: "Licensed electrician services for Calgary SE communities including McKenzie Towne, Auburn Bay, Cranston, Mahogany, and all southeast neighborhoods."
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
            { name: "Blog", url: "https://truecanpower.com/blog" },
            { name: "Electrician Calgary SE", url: "https://truecanpower.com/blog/electrician-calgary-se" }
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Link to="/blog" className="hover:text-primary">Blog</Link>
                    <span>/</span>
                    <span>Calgary SE</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Calgary SE Electrician Services
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Fast, reliable electrical service for southeast Calgary's growing communities. From EV charger installations in Auburn Bay to smart home setups in Mahogany, we're your local electrical experts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>Same-Day Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>24/7 Emergency</span>
                    </div>
                  </div>
                </div>
                <div>
                  <QuoteRequestForm title="Get a Free Quote Today" />
                </div>
              </div>
            </div>
          </section>

          {/* Neighborhoods Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold">SE Calgary Neighborhoods We Serve</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  We provide fast, professional electrical services throughout southeast Calgary. Whether you're in an established community like Lake Bonavista or a new development in Seton, we're ready to help.
                </p>
                <div className="flex flex-wrap gap-3">
                  {neighborhoods.map((neighborhood, index) => (
                    <span 
                      key={index} 
                      className="bg-muted px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SE Calgary Specific Content */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold">Electrical Needs in SE Calgary</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Southeast Calgary is one of the fastest-growing regions in the city, with vibrant communities like Auburn Bay, Mahogany, and Seton offering modern living with access to lakes, parks, and the new South Health Campus.
                  </p>
                  <p>
                    While many SE Calgary homes are newer, they still have unique electrical needs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>EV Charger Installation:</strong> SE Calgary leads in EV adoption. We install Level 2 chargers that can fully charge your vehicle overnight.</li>
                    <li><strong>Smart Home Integration:</strong> New homes are perfect for smart lighting, automated blinds, and whole-home audio systems.</li>
                    <li><strong>Hot Tub & Spa Wiring:</strong> Many SE communities allow hot tubs, requiring dedicated 240V circuits.</li>
                    <li><strong>Garage Workshop Wiring:</strong> Additional circuits and subpanels for home workshops and tools.</li>
                    <li><strong>Builder Deficiency Repairs:</strong> We fix electrical issues left behind by builders.</li>
                  </ul>
                  <p>
                    Established SE communities like Lake Bonavista, Willow Park, and Maple Ridge may need panel upgrades and rewiring to support modern electrical demands.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Our SE Calgary Electrical Services</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Complete electrical solutions for SE Calgary homes—from new installations to emergency repairs.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <Link key={index} to={service.link}>
                    <Card className="hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0">
                            <service.icon size={24} />
                          </div>
                          <span className="font-semibold">{service.label}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{service.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <section className="py-12 bg-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Get a free, no-obligation quote for your SE Calgary electrical project.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Request Your Free Quote</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Calgary SE Electrician FAQ</h2>
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

          {/* Bottom CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Need an Electrician in Calgary SE?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free estimate today. Licensed, insured, and ready to help with any electrical project in your SE Calgary home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Free Estimate</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="tel:+12508830499">
                      <Phone className="mr-2" size={20} />
                      Call Now
                    </a>
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

export default ElectricianCalgarySE;