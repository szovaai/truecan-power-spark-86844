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
  Star,
  Timer
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

const ElectricianCalgaryNearMe = () => {
  const regions = [
    { name: "Calgary NW", link: "/blog/electrician-calgary-nw", areas: "Kensington, Brentwood, Varsity, Tuscany" },
    { name: "Calgary SW", link: "/blog/electrician-calgary-sw", areas: "Marda Loop, Mount Royal, Killarney, Altadore" },
    { name: "Calgary SE", link: "/blog/electrician-calgary-se", areas: "McKenzie Towne, Auburn Bay, Cranston, Mahogany" },
    { name: "Calgary NE", link: "/calgary-electrician", areas: "Bridgeland, Renfrew, Temple, Marlborough" },
    { name: "Inner City", link: "/calgary-electrician", areas: "Downtown, Beltline, Mission, Inglewood" },
    { name: "Surrounding Areas", link: "/service-areas", areas: "Airdrie, Cochrane, Okotoks, Chestermere" },
  ];

  const services = [
    { icon: Clock, label: "24/7 Emergency Service", link: "/services/emergency-electrician", desc: "Round-the-clock emergency repairs" },
    { icon: Zap, label: "Panel Upgrades", link: "/services/panel-upgrade", desc: "Upgrade your electrical panel" },
    { icon: Car, label: "EV Charger Installation", link: "/services/ev-charger-installation", desc: "Home charging stations" },
    { icon: Lightbulb, label: "Pot Light Installation", link: "/services/pot-light-installation", desc: "Modern recessed lighting" },
    { icon: Shield, label: "Surge Protection", link: "/services/surge-protection", desc: "Protect your electronics" },
    { icon: Wrench, label: "Renovation Wiring", link: "/services/renovation-wiring", desc: "Complete reno electrical" },
  ];

  const faqs = [
    {
      question: "How do I find a good electrician near me in Calgary?",
      answer: "Look for: 1) Valid Alberta electrical license, 2) Comprehensive insurance, 3) Positive Google reviews, 4) Upfront pricing, 5) Warranty on work. TrueCan Power checks all these boxes—we're licensed, insured, ESA-certified, and have 5-star reviews from Calgary homeowners."
    },
    {
      question: "How quickly can an electrician get to my Calgary location?",
      answer: "For standard appointments, we often have same-day availability. For electrical emergencies, our typical response time is 2 hours or less anywhere in Calgary. We have technicians positioned throughout the city to ensure fast service."
    },
    {
      question: "What areas of Calgary do you cover?",
      answer: "We serve all of Calgary including NW, NE, SW, SE, and the inner city. We also service surrounding communities like Airdrie, Cochrane, Okotoks, Chestermere, and the Rocky View County."
    },
    {
      question: "Do you charge a service call fee?",
      answer: "We charge a reasonable service call fee that covers our diagnostic time. This fee is typically waived or applied to the cost of repairs if you proceed with the work. We're always upfront about costs before starting any job."
    },
    {
      question: "Are your electricians licensed in Alberta?",
      answer: "Yes, all our electricians are fully licensed in Alberta, ESA-certified, and carry comprehensive liability insurance. We pull all required permits and ensure every job passes city inspection."
    }
  ];

  const trustSignals = [
    { icon: Star, label: "5-Star Google Reviews" },
    { icon: Shield, label: "Fully Licensed & Insured" },
    { icon: Timer, label: "Same-Day Service Available" },
    { icon: CheckCircle2, label: "Satisfaction Guaranteed" },
  ];

  return (
    <>
      <Helmet>
        <title>Electrician Calgary Near Me | Fast Local Service - TrueCan Power</title>
        <meta 
          name="description" 
          content="Looking for an electrician near you in Calgary? TrueCan Power offers 24/7 emergency service, same-day appointments & free estimates. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/electrician-calgary-near-me" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/blog/electrician-calgary-near-me",
          serviceType: "Electrician Services",
          description: "Local Calgary electrician services with fast response times. Serving all Calgary neighborhoods including NW, NE, SW, SE, and surrounding communities."
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
            { name: "Electrician Calgary Near Me", url: "https://truecanpower.com/blog/electrician-calgary-near-me" }
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
                    <span>Calgary Near Me</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Find a Trusted Electrician Near You in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    When you search "electrician near me," you want someone local, reliable, and available fast. TrueCan Power serves all Calgary neighborhoods with same-day service and 24/7 emergency response.
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
                  <div className="grid grid-cols-2 gap-4">
                    {trustSignals.map((signal, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <signal.icon className="text-primary" size={18} />
                        <span className="text-sm">{signal.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <QuoteRequestForm title="Get a Free Quote Today" />
                </div>
              </div>
            </div>
          </section>

          {/* Regions Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold">Electricians in Every Calgary Area</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  No matter where you are in Calgary, we have a licensed electrician ready to help. Click your area for specific neighborhood information.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regions.map((region, index) => (
                    <Link key={index} to={region.link}>
                      <Card className="hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50 h-full">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{region.name}</h3>
                          <p className="text-sm text-muted-foreground">{region.areas}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Local Matters */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Why "Near Me" Matters for Electrical Work</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    When you're dealing with an electrical issue—especially an emergency—you need someone who can get to you fast. That's why choosing a local Calgary electrician makes a difference:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                    <div className="bg-background p-6 rounded-lg">
                      <Timer className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Faster Response Times</h3>
                      <p className="text-sm text-muted-foreground">
                        Our technicians are positioned throughout Calgary. For emergencies, we typically arrive within 2 hours.
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-lg">
                      <MapPin className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Local Knowledge</h3>
                      <p className="text-sm text-muted-foreground">
                        We know Calgary's neighborhoods, building codes, and common electrical issues in homes throughout the city.
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-lg">
                      <Shield className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Accountability</h3>
                      <p className="text-sm text-muted-foreground">
                        As a local business, our reputation matters. We stand behind our work with warranties and follow-up service.
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-lg">
                      <CheckCircle2 className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold mb-2">Permit Knowledge</h3>
                      <p className="text-sm text-muted-foreground">
                        We handle all Calgary permit requirements and know exactly what the city inspectors look for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Choose */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">How to Choose an Electrician Near You</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Not all electricians are created equal. Here's a checklist to help you choose the right one:
                  </p>
                  <div className="space-y-4 my-6 not-prose">
                    {[
                      { check: true, text: "Valid Alberta Master or Journeyman Electrician license" },
                      { check: true, text: "Comprehensive liability insurance (at least $2M coverage)" },
                      { check: true, text: "Workers' compensation coverage" },
                      { check: true, text: "Positive reviews on Google or other platforms" },
                      { check: true, text: "Upfront, written quotes before work begins" },
                      { check: true, text: "Pulls all required permits" },
                      { check: true, text: "Provides warranty on workmanship" },
                      { check: true, text: "Available for emergencies (if you need 24/7 service)" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    <strong>TrueCan Power meets all these criteria.</strong> We're fully licensed, insured, and committed to providing Calgary homeowners with reliable, code-compliant electrical work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Services Available Near You</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Whatever electrical service you need, we can help—anywhere in Calgary.
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
                  Get a free, no-obligation quote from a local Calgary electrician.
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
                <h2 className="text-3xl font-bold text-center mb-12">Finding an Electrician Near Me - FAQ</h2>
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
                  Need an Electrician Near You?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free estimate today. Licensed, insured, and ready to help anywhere in Calgary.
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

export default ElectricianCalgaryNearMe;