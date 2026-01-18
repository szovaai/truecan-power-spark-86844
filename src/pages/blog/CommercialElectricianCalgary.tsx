import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Building2, Store, Utensils, Briefcase, Factory, Clock, Shield, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import SchemaMarkup from "@/components/SchemaMarkup";

const CommercialElectricianCalgary = () => {
  const services = [
    {
      icon: Building2,
      title: "Office Electrical",
      description: "Complete office wiring, lighting design, data cabling, and electrical panel installations for modern workspaces."
    },
    {
      icon: Store,
      title: "Retail Lighting",
      description: "Energy-efficient LED retrofits, display lighting, and track lighting systems to showcase your products."
    },
    {
      icon: Utensils,
      title: "Restaurant Wiring",
      description: "Commercial kitchen electrical, exhaust fan wiring, POS system installations, and outdoor patio lighting."
    },
    {
      icon: Briefcase,
      title: "Medical & Dental",
      description: "Specialized electrical for medical equipment, backup power systems, and healthcare facility compliance."
    },
    {
      icon: Factory,
      title: "Warehouse & Industrial",
      description: "High-bay lighting, 3-phase power, machine hookups, and industrial panel upgrades."
    },
    {
      icon: Clock,
      title: "After-Hours Service",
      description: "Minimize business disruption with evening and weekend service options for commercial clients."
    }
  ];

  const businessTypes = [
    "Office Buildings",
    "Retail Stores",
    "Restaurants & Cafes",
    "Medical Clinics",
    "Dental Offices",
    "Warehouses",
    "Manufacturing Facilities",
    "Hotels & Hospitality",
    "Fitness Centers",
    "Auto Dealerships",
    "Property Management",
    "Schools & Daycares"
  ];

  const faqs = [
    {
      question: "Do you offer after-hours commercial electrical service?",
      answer: "Yes! We understand that electrical work can disrupt your business operations. We offer evening, weekend, and overnight service options to minimize impact on your customers and employees."
    },
    {
      question: "Are you licensed for commercial electrical work in Calgary?",
      answer: "Absolutely. TrueCan Power holds a master electrician license in Alberta, which qualifies us for all residential, commercial, and industrial electrical work. We're fully insured for commercial projects."
    },
    {
      question: "Can you help with commercial lighting retrofits?",
      answer: "Yes, LED retrofits are one of our specialties. We help Calgary businesses reduce energy costs by up to 70% with modern LED lighting solutions, often with utility rebates available."
    },
    {
      question: "Do you handle commercial electrical maintenance contracts?",
      answer: "We offer ongoing maintenance agreements for commercial clients. Regular inspections and preventive maintenance help avoid costly emergency repairs and ensure code compliance."
    },
    {
      question: "What's involved in a commercial electrical inspection?",
      answer: "Our commercial inspections include panel assessment, wiring condition review, code compliance check, safety device testing, and a detailed report with recommendations. We help you stay compliant with Alberta electrical codes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrician Calgary | Business & Office Wiring - TrueCan Power</title>
        <meta 
          name="description" 
          content="Commercial electrician services in Calgary. Office wiring, retail lighting, restaurant electrical, 3-phase power. Licensed for commercial projects. Free estimates."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/commercial-electrician-calgary" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          name: "Commercial Electrician Calgary",
          description: "Professional commercial electrical services for Calgary businesses including office wiring, retail lighting, and industrial installations.",
          provider: "TrueCan Power",
          areaServed: "Calgary, Alberta",
          serviceType: "Commercial Electrical Services"
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
            { name: "Commercial Electrician Calgary", url: "https://truecanpower.com/blog/commercial-electrician-calgary" }
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
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                    <Building2 size={18} />
                    <span className="text-sm font-medium">Commercial Specialists</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Commercial Electrician in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Professional commercial electrical services for Calgary businesses. From office build-outs to retail lighting, restaurant wiring to industrial installations—we deliver quality work with minimal disruption to your operations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <Link to="/contact">Get Commercial Quote</Link>
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
                  <QuoteRequestForm variant="card" title="Commercial Electrical Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Commercial Electrical Services
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive electrical solutions for every type of Calgary business.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-2 hover:border-primary/50 transition-smooth">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Business Types */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Industries We Serve
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {businessTypes.map((type, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg text-center border hover:border-primary/50 transition-smooth">
                      {type}
                    </div>
                  ))}
                </div>
                <div className="text-center mt-10">
                  <p className="text-lg text-muted-foreground mb-6">
                    Don't see your industry? We serve all types of commercial properties in Calgary.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Why Calgary Businesses Choose TrueCan Power
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <Shield className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Fully Licensed & Insured</h3>
                      <p className="text-muted-foreground">
                        Master electrician licensing for commercial work with comprehensive liability coverage to protect your business.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <Clock className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">
                        After-hours, weekend, and overnight service options to minimize disruption to your business operations.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <Zap className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Code Compliant</h3>
                      <p className="text-muted-foreground">
                        All work meets or exceeds Alberta electrical codes with proper permitting and inspections.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <Building2 className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Maintenance Contracts</h3>
                      <p className="text-muted-foreground">
                        Ongoing maintenance agreements to keep your electrical systems running safely and efficiently.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Commercial Electrical FAQ
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
                  Ready to Upgrade Your Business Electrical?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free commercial electrical estimate. We'll assess your needs and provide transparent pricing for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/contact">Get Commercial Quote</Link>
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

export default CommercialElectricianCalgary;
