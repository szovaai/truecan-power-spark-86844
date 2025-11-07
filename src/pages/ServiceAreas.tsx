import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceAreas = () => {
  const areas = [
    {
      name: "Calgary",
      description: "Complete electrical services throughout Calgary and all quadrants (NE, NW, SE, SW). Same-day service available for most repairs.",
      communities: ["Downtown", "Beltline", "Bridgeland", "Kensington", "Inglewood", "Mission", "Marda Loop", "Altadore", "Auburn Bay", "Mahogany", "Cranston", "Legacy"]
    },
    {
      name: "Airdrie",
      description: "Fast, reliable electrical service for Airdrie homes and businesses. Emergency service available 24/7.",
      communities: []
    },
    {
      name: "Cochrane",
      description: "Trusted electrical contractor serving Cochrane and surrounding rural properties.",
      communities: []
    },
    {
      name: "Okotoks",
      description: "Professional electrical installations and repairs throughout Okotoks.",
      communities: []
    },
    {
      name: "Chestermere",
      description: "Licensed electricians serving Chestermere residential and commercial properties.",
      communities: []
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Electrical Services",
    "provider": {
      "@id": "https://truecanpower.com/#identity"
    },
    "areaServed": areas.map(area => ({
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "State",
        "name": "Alberta"
      }
    })),
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+1-250-883-0499",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "areaServed": "CA"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://truecanpower.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": "https://truecanpower.com/service-areas"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Service Areas - Calgary Electrician | TrueCan Power</title>
        <meta name="description" content="TrueCan Power serves Calgary, Airdrie, Cochrane, Okotoks, and Chestermere with professional electrical services. Same-day service available, 24/7 emergency response." />
        <meta name="keywords" content="calgary electrician, airdrie electrician, cochrane electrician, okotoks electrician, chestermere electrician, alberta electrical services" />
        <link rel="canonical" href="https://truecanpower.com/service-areas" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 md:pt-32">
        <div className="absolute inset-0 hero-gradient circuit-texture" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-foreground">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6 leading-tight">
            Serving Calgary & Area
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Professional electrical services throughout Calgary and surrounding communities
          </p>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {areas.map((area, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-smooth hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{area.name}</h2>
                      <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                  {area.communities.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm font-semibold mb-2">Communities Served:</p>
                      <div className="flex flex-wrap gap-2">
                        {area.communities.map((community, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {community}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-extrabold text-center mb-12">
            Why Choose TrueCan Power
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Fast Response</h3>
                <p className="text-muted-foreground">Same-day service available. 2-hour emergency response guarantee.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">Local Team</h3>
                <p className="text-muted-foreground">Alberta-based electricians who know local codes and conditions.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-3">24/7 Available</h3>
                <p className="text-muted-foreground">Emergency service available around the clock, 365 days a year.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Notice */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-l-4 border-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Area?</h3>
              <p className="text-muted-foreground mb-6">
                We may still be able to help! We regularly service areas throughout Southern Alberta. 
                Give us a call to check if we can serve your location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Request Service</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+12508830499">Call (250) 883-0499</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a free assessment with Calgary's trusted electrical experts.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-premium bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Book Free Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
