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

const ElectricianCalgarySW = () => {
  const neighborhoods = [
    "Marda Loop", "Mount Royal", "Killarney", "Altadore", "Bankview", 
    "Scarboro", "South Calgary", "Sunalta", "Erlton", "Mission",
    "Elbow Park", "Britannia", "Elboya", "Windsor Park", "Rutland Park",
    "Richmond", "Knob Hill", "Currie Barracks", "Lincoln Park", "Lakeview"
  ];

  const services = [
    { icon: Zap, label: "Panel Upgrades", link: "/services/panel-upgrade", desc: "Upgrade your older SW Calgary home's electrical panel" },
    { icon: Car, label: "EV Charger Installation", link: "/services/ev-charger-installation", desc: "Home charging stations for your electric vehicle" },
    { icon: Lightbulb, label: "Pot Light Installation", link: "/services/pot-light-installation", desc: "Modern recessed lighting for any room" },
    { icon: Shield, label: "Surge Protection", link: "/services/surge-protection", desc: "Protect electronics from power surges" },
    { icon: Wrench, label: "Renovation Wiring", link: "/services/renovation-wiring", desc: "Complete electrical for your reno project" },
    { icon: Clock, label: "24/7 Emergency Service", link: "/services/emergency-electrician", desc: "Round-the-clock emergency repairs" },
  ];

  const faqs = [
    {
      question: "What areas of Calgary SW do you serve?",
      answer: "We serve all Calgary SW neighborhoods including Marda Loop, Mount Royal, Killarney, Altadore, Bankview, Mission, Elbow Park, Britannia, Lakeview, Currie Barracks, Lincoln Park, and all surrounding communities."
    },
    {
      question: "How quickly can you respond to SW Calgary?",
      answer: "Our team is strategically located to provide fast service to SW Calgary. For standard appointments, we often have same-day availability. For emergencies, our typical response time is 2 hours or less."
    },
    {
      question: "Do you work on older homes in SW Calgary?",
      answer: "Absolutely! Many SW Calgary neighborhoods like Mount Royal, Elbow Park, and Mission have beautiful older homes that need specialized electrical work. We have extensive experience upgrading knob-and-tube wiring, installing modern panels, and bringing heritage homes up to current electrical code."
    },
    {
      question: "What does a panel upgrade cost in SW Calgary?",
      answer: "Panel upgrades in SW Calgary typically range from $2,500 to $4,500 depending on the complexity and amperage required. We provide free, detailed quotes before any work begins. Many older SW homes have 60A or 100A panels that need upgrading to 200A for modern electrical demands."
    },
    {
      question: "Are you licensed to work in Calgary?",
      answer: "Yes, all our electricians are fully licensed in Alberta, ESA-certified, and carry comprehensive insurance. We pull all required permits and ensure every job passes city inspection."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrician Calgary SW | Marda Loop, Mount Royal, Killarney - TrueCan Power</title>
        <meta 
          name="description" 
          content="Top-rated electrician in Calgary SW. Serving Marda Loop, Mount Royal, Killarney, Altadore & all SW communities. Licensed, insured. Free quotes. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/electrician-calgary-sw" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/blog/electrician-calgary-sw",
          serviceType: "Electrician Services",
          description: "Licensed electrician services for Calgary SW communities including Marda Loop, Mount Royal, Killarney, Altadore, and all southwest neighborhoods."
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
            { name: "Electrician Calgary SW", url: "https://truecanpower.com/blog/electrician-calgary-sw" }
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
                    <span>Calgary SW</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Electrician Services in Calgary SW
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Your trusted local electrician serving all southwest Calgary communities. From heritage home rewiring in Mount Royal to new construction in Currie Barracks, we handle every electrical need with expertise and care.
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
                  <h2 className="text-3xl font-bold">SW Calgary Neighborhoods We Serve</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  We provide comprehensive electrical services to all southwest Calgary communities. Whether you're in a character home in Mission or a new build in Currie Barracks, our licensed electricians are ready to help.
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

          {/* Why SW Calgary Homes Need Us */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold">Why SW Calgary Homeowners Trust Us</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Calgary's southwest is home to some of the city's most diverse architecture—from the grand heritage homes of Mount Royal and Elbow Park to the modern developments in Currie Barracks and Lincoln Park. This variety means electrical needs vary dramatically from home to home.
                  </p>
                  <p>
                    Many older SW Calgary homes were built with electrical systems that can't handle today's demands. Homes in neighbourhoods like Marda Loop, Killarney, and Altadore often have original 60A or 100A panels that struggle with modern appliances, home offices, and electric vehicle chargers.
                  </p>
                  <p>
                    Our electricians specialize in bringing these homes up to modern standards while respecting their character. We're experienced with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Replacing outdated knob-and-tube wiring safely</li>
                    <li>Upgrading electrical panels to 200A service</li>
                    <li>Adding circuits for home offices and workshops</li>
                    <li>Installing EV chargers in older garages</li>
                    <li>Modern lighting retrofits that maintain home character</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Our SW Calgary Electrical Services</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                From emergency repairs to complete home rewiring, we offer the full range of residential electrical services.
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
                  Get a free, no-obligation quote for your SW Calgary electrical project.
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
                <h2 className="text-3xl font-bold text-center mb-12">Calgary SW Electrician FAQ</h2>
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
                  Need an Electrician in Calgary SW?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free estimate today. Licensed, insured, and ready to help with any electrical project in your SW Calgary home.
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

export default ElectricianCalgarySW;