import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Star, Shield, Clock, Award, CheckCircle, Zap, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import SchemaMarkup from "@/components/SchemaMarkup";

const BestElectricianCalgary = () => {
  const reasons = [
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "Consistently rated 5 stars by Calgary homeowners for quality work and professionalism."
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Alberta master electrician license with comprehensive liability insurance for your protection."
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      description: "Fast response times with same-day appointments available for urgent electrical needs."
    },
    {
      icon: Award,
      title: "ESA Certified",
      description: "Electrical Safety Authority certified, meeting the highest industry standards."
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a satisfaction guarantee on all services."
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Serving Calgary families and businesses with reliable electrical solutions since day one."
    }
  ];

  const faqs = [
    {
      question: "What makes TrueCan Power the best electrician in Calgary?",
      answer: "TrueCan Power stands out with our combination of master electrician licensing, 5-star customer reviews, same-day service availability, transparent pricing, and satisfaction guarantee. We're fully insured and ESA certified, ensuring the highest quality work."
    },
    {
      question: "How do I know if an electrician is properly licensed in Calgary?",
      answer: "In Alberta, electricians must hold a valid journeyman or master electrician certificate. You can verify credentials through the Alberta government's trade certification database. TrueCan Power is fully licensed and happy to provide proof of credentials."
    },
    {
      question: "Do you offer emergency electrical services?",
      answer: "Yes! We provide 24/7 emergency electrical services across Calgary. Whether it's a power outage, sparking outlet, or electrical fire risk, we respond quickly to keep your home safe."
    },
    {
      question: "What areas of Calgary do you serve?",
      answer: "We serve all of Calgary including NW, NE, SW, SE, and surrounding communities like Airdrie, Cochrane, Chestermere, and Okotoks. No matter where you are in the Calgary area, we can help."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free estimates for most electrical projects. Contact us to schedule a no-obligation assessment of your electrical needs and receive transparent, upfront pricing."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Electrician in Calgary | Top-Rated Local Service - TrueCan Power</title>
        <meta 
          name="description" 
          content="Looking for the best electrician in Calgary? TrueCan Power: 5-star reviews, licensed, insured, and ESA-certified. Same-day service available. Free quotes."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/best-electrician-calgary" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          name: "Best Electrician Calgary",
          description: "Top-rated electrical services in Calgary with 5-star reviews, licensed professionals, and satisfaction guarantee.",
          provider: "TrueCan Power",
          areaServed: "Calgary, Alberta",
          serviceType: "Electrical Services"
        }}
      />

      <SchemaMarkup 
        type="FAQ" 
        data={{
          questions: faqs.map(faq => ({
            question: faq.question,
            answer: faq.answer
          }))
        }}
      />

      <SchemaMarkup 
        type="Breadcrumb" 
        data={{
          items: [
            { name: "Home", url: "https://truecanpower.com/" },
            { name: "Blog", url: "https://truecanpower.com/blog" },
            { name: "Best Electrician Calgary", url: "https://truecanpower.com/blog/best-electrician-calgary" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32 md:pt-40 pb-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">5-Star Rated</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Best Electrician in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Looking for the best electrician in Calgary? TrueCan Power delivers top-rated electrical services with 5-star reviews, master electrician licensing, and a satisfaction guarantee. Experience the difference quality makes.
                  </p>
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
                  <QuoteRequestForm variant="card" title="Get Your Free Estimate" />
                </div>
              </div>
            </div>
          </section>

          {/* Why We're the Best */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Makes the Best Electrician?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  When Calgary homeowners search for the best electrician, they look for licensing, reviews, reliability, and quality. Here's why TrueCan Power checks every box.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-smooth">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <reason.icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Checklist Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  How to Choose the Best Electrician in Calgary
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Valid Alberta master or journeyman electrician license",
                    "Comprehensive liability insurance coverage",
                    "Positive reviews and testimonials from local customers",
                    "Transparent pricing with written estimates",
                    "Same-day or emergency service availability",
                    "Satisfaction guarantee on all work",
                    "ESA or equivalent safety certification",
                    "Professional, uniformed technicians"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <p className="text-lg text-muted-foreground mb-6">
                    TrueCan Power meets all these criteria and more. See for yourself why we're Calgary's best choice.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Schedule Your Free Assessment</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Our Top-Rated Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Panel Upgrades", link: "/services/panel-upgrades", icon: Zap },
                  { name: "EV Charger Installation", link: "/services/ev-charger-installation", icon: Zap },
                  { name: "Pot Light Installation", link: "/services/pot-light-installation", icon: Zap },
                  { name: "Emergency Service", link: "/services/emergency-electrician", icon: Zap }
                ].map((service, index) => (
                  <Link key={index} to={service.link}>
                    <Card className="h-full hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                          <service.icon size={24} />
                        </div>
                        <h3 className="font-semibold">{service.name}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Work with Calgary's Best?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join thousands of satisfied Calgary homeowners who trust TrueCan Power for their electrical needs. Get your free quote today.
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
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BestElectricianCalgary;
