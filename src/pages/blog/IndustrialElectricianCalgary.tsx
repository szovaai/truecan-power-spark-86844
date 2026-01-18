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
  Factory,
  Lightbulb,
  Wrench,
  Building,
  Settings,
  AlertTriangle
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

const IndustrialElectricianCalgary = () => {
  const industries = [
    "Manufacturing Facilities", "Warehouses & Distribution", "Food Processing Plants",
    "Oil & Gas Support Facilities", "Automotive Shops", "Metal Fabrication",
    "Printing & Packaging", "Cold Storage Facilities", "Data Centers",
    "Commercial Kitchens", "Breweries & Distilleries", "Agricultural Operations"
  ];

  const services = [
    { icon: Zap, label: "3-Phase Power Installation", desc: "Complete 3-phase electrical systems for heavy machinery and equipment" },
    { icon: Factory, label: "Machine Hookups", desc: "Industrial equipment connections, VFDs, and motor controls" },
    { icon: Lightbulb, label: "Industrial Lighting", desc: "LED retrofits, high-bay lighting, and emergency lighting systems" },
    { icon: Settings, label: "Panel & Switchgear", desc: "Industrial electrical panels, switchgear, and distribution systems" },
    { icon: Shield, label: "Safety Systems", desc: "Emergency shutoffs, arc flash studies, and safety inspections" },
    { icon: Clock, label: "24/7 Emergency Service", desc: "Minimize downtime with round-the-clock emergency response" },
  ];

  const faqs = [
    {
      question: "What industrial electrical services do you offer in Calgary?",
      answer: "We provide comprehensive industrial electrical services including 3-phase power installation, machine hookups, motor controls and VFDs, industrial lighting (including LED retrofits), panel and switchgear work, preventive maintenance, safety inspections, arc flash studies, and 24/7 emergency repairs."
    },
    {
      question: "Do you work with 600V and 3-phase systems?",
      answer: "Yes, our industrial electricians are fully qualified to work with 600V systems, 3-phase power, and high-amperage installations. We handle everything from small machine hookups to complete facility electrical systems."
    },
    {
      question: "Can you help reduce our facility's energy costs?",
      answer: "Absolutely. We specialize in industrial LED lighting retrofits that can reduce lighting energy costs by 50-70%. We also install power factor correction equipment, high-efficiency motors, and can conduct energy audits to identify additional savings opportunities."
    },
    {
      question: "Do you offer maintenance contracts for industrial facilities?",
      answer: "Yes, we offer preventive maintenance contracts tailored to your facility's needs. Regular maintenance reduces unexpected downtime, extends equipment life, and ensures code compliance. Contact us to discuss a custom maintenance schedule."
    },
    {
      question: "How quickly can you respond to industrial emergencies?",
      answer: "We understand that downtime costs money. For industrial electrical emergencies in Calgary, we offer priority 24/7 response with typical arrival times of 2-4 hours. We can also discuss dedicated on-call arrangements for critical facilities."
    },
    {
      question: "Are you licensed for commercial and industrial work?",
      answer: "Yes, all our electricians are fully licensed in Alberta with specific experience in commercial and industrial electrical systems. We carry comprehensive liability insurance ($5M coverage) and workers' compensation. We handle all permits and inspections."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industrial Electrician Calgary | Commercial & Warehouse Wiring - TrueCan Power</title>
        <meta 
          name="description" 
          content="Industrial electrician services in Calgary. Warehouse wiring, 3-phase power, machine hookups, LED lighting retrofits. Licensed for commercial work. Call (250) 883-0499."
        />
        <link rel="canonical" href="https://truecanpower.com/blog/industrial-electrician-calgary" />
      </Helmet>

      <SchemaMarkup 
        type="Service" 
        data={{
          serviceUrl: "/blog/industrial-electrician-calgary",
          serviceType: "Industrial Electrician Services",
          description: "Industrial and commercial electrician services in Calgary including 3-phase power, machine hookups, warehouse wiring, and industrial lighting retrofits."
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
            { name: "Industrial Electrician Calgary", url: "https://truecanpower.com/blog/industrial-electrician-calgary" }
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
                    <span>Industrial Electrician</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Industrial Electrician Services in Calgary
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Specialized industrial electrical services for Calgary's manufacturing, warehouse, and commercial facilities. From 3-phase power to machine hookups, we keep your operation running.
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
                      <span>3-Phase Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span>24/7 Emergency</span>
                    </div>
                  </div>
                </div>
                <div>
                  <QuoteRequestForm title="Get a Commercial Quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Industries Served */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold">Industries We Serve</h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  We provide industrial electrical services to a wide range of Calgary businesses and facilities.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  {industries.map((industry, index) => (
                    <div 
                      key={index} 
                      className="bg-muted px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2"
                    >
                      <Building className="text-primary flex-shrink-0" size={16} />
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Industrial Specialists */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Why Industrial Electrical Requires Specialists</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Industrial electrical work isn't like residential wiring. The stakes are higher, the systems are more complex, and the consequences of mistakes can be severe—from equipment damage and production downtime to safety hazards.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                    <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-semibold mb-2">Higher Voltages & Amperages</h3>
                      <p className="text-sm text-muted-foreground">
                        Industrial facilities often operate at 347/600V with high-amperage systems. This requires specialized knowledge, equipment, and safety protocols.
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-semibold mb-2">Complex Control Systems</h3>
                      <p className="text-sm text-muted-foreground">
                        VFDs, PLCs, motor controls, and automation systems require electricians who understand industrial controls and programming.
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-semibold mb-2">Code Compliance</h3>
                      <p className="text-sm text-muted-foreground">
                        Industrial facilities face strict electrical codes and regular inspections. Non-compliance can mean shutdowns and fines.
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-lg border-l-4 border-primary">
                      <h3 className="font-semibold mb-2">Minimizing Downtime</h3>
                      <p className="text-sm text-muted-foreground">
                        Every hour of downtime costs money. We understand the importance of efficient repairs and scheduled maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Industrial Electrical Services</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Complete industrial electrical solutions from installation to maintenance and emergency repairs.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((service, index) => (
                  <Card key={index} className="h-full border-2">
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
                ))}
              </div>
            </div>
          </section>

          {/* Safety Focus */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold">Safety Is Non-Negotiable</h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    In industrial environments, electrical safety isn't optional—it's essential. Our approach prioritizes safety at every step:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Arc Flash Studies:</strong> We perform arc flash assessments and help you implement proper PPE requirements and labeling.</li>
                    <li><strong>Lockout/Tagout Compliance:</strong> All our work follows proper LOTO procedures to protect workers.</li>
                    <li><strong>Emergency Shutoff Systems:</strong> We install and maintain emergency stop systems and safety interlocks.</li>
                    <li><strong>Ground Fault Protection:</strong> Proper grounding and GFCI protection for personnel safety.</li>
                    <li><strong>Regular Inspections:</strong> Preventive maintenance catches problems before they become hazards.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <section className="py-12 bg-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Need Industrial Electrical Work?</h3>
                <p className="text-muted-foreground mb-6">
                  Get a free, no-obligation quote for your facility's electrical needs.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Request a Commercial Quote</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Industrial Electrician FAQ</h2>
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
                  Need an Industrial Electrician in Calgary?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free estimate for your commercial or industrial electrical project. Licensed, insured, and experienced with complex industrial systems.
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
                <p className="text-sm text-muted-foreground mt-6">
                  Licensed & Insured • $5M Liability Coverage • 24/7 Emergency Response
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

export default IndustrialElectricianCalgary;