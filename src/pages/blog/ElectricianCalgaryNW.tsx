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
  Home
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

const ElectricianCalgaryNW = () => {
  const neighborhoods = [
    "Kensington", "Brentwood", "Varsity", "Dalhousie", "Tuscany", 
    "Arbour Lake", "Royal Oak", "Panorama Hills", "Country Hills", "Hamptons",
    "Edgemont", "MacEwan Glen", "Sandstone Valley", "Hawkwood", "Citadel",
    "Ranchlands", "Silver Springs", "Scenic Acres", "Rocky Ridge", "Nolan Hill"
  ];

  const services = [
    { icon: Zap, label: "Panel Upgrades", link: "/services/panel-upgrade", desc: "Upgrade older NW Calgary home panels" },
    { icon: Car, label: "EV Charger Installation", link: "/services/ev-charger-installation", desc: "Home charging for electric vehicles" },
    { icon: Lightbulb, label: "Pot Light Installation", link: "/services/pot-light-installation", desc: "Modern recessed lighting solutions" },
    { icon: Shield, label: "Surge Protection", link: "/services/surge-protection", desc: "Protect your home from power surges" },
    { icon: Wrench, label: "Basement Development Wiring", link: "/services/renovation-wiring", desc: "Complete electrical for basement renos" },
    { icon: Clock, label: "24/7 Emergency Service", link: "/services/emergency-electrician", desc: "Round-the-clock emergency repairs" },
  ];

  const faqs = [
    {
      question: "What NW Calgary neighborhoods do you service?",
      answer: "We serve all Calgary NW communities including Kensington, Brentwood, Varsity, Dalhousie, Tuscany, Arbour Lake, Royal Oak, Panorama Hills, Country Hills, Hamptons, Edgemont, and all surrounding areas."
    },
    {
      question: "How fast can you respond to NW Calgary?",
      answer: "For standard service, we often have same-day availability for NW Calgary homes. For emergencies, our typical response time is 2 hours or less. Our team is well-positioned to serve the northwest quadrant quickly."
    },
    {
      question: "Do you handle basement development electrical in NW Calgary?",
      answer: "Absolutely! Basement development is one of our specialties. Many NW Calgary homes have unfinished basements with great potential. We handle complete electrical rough-in, panel upgrades if needed, lighting design, and final connections for your basement project."
    },
    {
      question: "What does electrical work cost in NW Calgary?",
      answer: "Costs depend on the project scope. Standard service calls run $85-$150/hour. Popular NW Calgary projects: basement electrical rough-in ($3,000-$6,000), EV charger installation ($1,500-$3,000), panel upgrades ($2,500-$4,500). We provide free, detailed quotes."
    },
    {
      question: "Can you add a hot tub circuit at my NW Calgary home?",
      answer: "Yes! Hot tub and spa wiring is a common request in NW Calgary. We install dedicated 240V circuits, GFCI protection, and ensure proper grounding. Most hot tub installations can be completed in a single day."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrician Calgary NW | Kensington, Brentwood, Varsity - TrueCan Power</title>
        <meta 
          name="description" 
          content="Expert electrician in Calgary NW. Serving Kensington, Brentwood, Varsity, Tuscany, Panorama Hills & all NW communities. Free estimates. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/electrician-calgary-nw" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/blog/electrician-calgary-nw",
          serviceType: "Electrician Services",
          description: "Licensed electrician services for Calgary NW communities including Kensington, Brentwood, Varsity, Tuscany, and all northwest neighborhoods."
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
            { name: "Electrician Calgary NW", url: "https://truecanpower.com/blog/electrician-calgary-nw" }
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
                    <span>Calgary NW</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Expert Electrician Services in Calgary NW
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Serving Calgary's diverse northwest communities from inner-city Kensington to established suburbs like Tuscany and new developments in Nolan Hill. Your trusted local electrical experts.
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
                  <h2 className="text-3xl font-bold">NW Calgary Neighborhoods We Serve</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  From the trendy shops of Kensington to the family-friendly suburbs of Panorama Hills, we provide expert electrical services throughout northwest Calgary.
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

          {/* NW Calgary Specific Content */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold">Electrical Needs in NW Calgary</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Northwest Calgary offers incredible diversity—from the character homes of Kensington and Hillhurst to the sprawling estates of Tuscany and the new builds in Nolan Hill. Each area has unique electrical requirements.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Common NW Calgary Electrical Projects</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Basement Developments:</strong> NW Calgary homes are famous for their basement suites and entertainment spaces. We handle complete electrical rough-ins, panel upgrades, and specialty lighting.</li>
                    <li><strong>Hot Tub & Spa Wiring:</strong> Many NW homes have decks perfect for hot tubs. We install dedicated 240V circuits with proper GFCI protection.</li>
                    <li><strong>EV Charger Installation:</strong> Electric vehicle adoption is high in NW Calgary. We install Level 2 chargers in garages throughout the area.</li>
                    <li><strong>Panel Upgrades:</strong> Older homes in established NW neighborhoods often need panel upgrades to support modern electrical demands.</li>
                    <li><strong>Outdoor Lighting:</strong> Landscape and security lighting for Calgary's variable climate.</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Serving Established & New Communities</h3>
                  <p>
                    Whether your home was built in the 1950s in Kensington or 2020s in Nolan Hill, we have the expertise to handle your electrical needs. Older homes may need rewiring or panel upgrades, while newer homes often want smart home features, additional circuits, or specialty installations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Our NW Calgary Electrical Services</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Complete electrical solutions for every NW Calgary home, from quick repairs to major installations.
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
                  Get a free, no-obligation quote for your NW Calgary electrical project.
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
                <h2 className="text-3xl font-bold text-center mb-12">Calgary NW Electrician FAQ</h2>
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
                  Need an Electrician in Calgary NW?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free estimate today. Licensed, insured, and ready to help with any electrical project in your NW Calgary home.
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

export default ElectricianCalgaryNW;