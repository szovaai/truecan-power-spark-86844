import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  MapPin, 
  Zap, 
  Lightbulb, 
  Plug, 
  Car,
  Wrench,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-electrical.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully certified with ESA approval and comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service",
      description: "Power issues don't wait. Neither do we. Available around the clock for urgent electrical needs."
    },
    {
      icon: MapPin,
      title: "Local Canadian Experts",
      description: "Proudly Canadian, serving communities across the country with reliable electrical solutions."
    }
  ];

  const services = [
    { icon: Zap, label: "Panel Upgrades", description: "Modernize your electrical system" },
    { icon: Lightbulb, label: "Lighting Solutions", description: "Beautiful, efficient lighting design" },
    { icon: Plug, label: "Wiring & Outlets", description: "Safe, code-compliant installations" },
    { icon: Car, label: "EV Chargers", description: "Home & commercial charging stations" },
    { icon: Wrench, label: "Maintenance", description: "Preventative care & inspections" },
    { icon: Shield, label: "Emergency Repairs", description: "Fast response when you need it" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "TrueCan upgraded our entire panel in under a day. Professional, clean, and incredibly knowledgeable. Highly recommend!"
    },
    {
      name: "Michael Chen",
      location: "Vancouver, BC",
      rating: 5,
      text: "Fixed a major electrical short in under 2 hours and saved us over $1,200 in potential repairs. Outstanding service!"
    },
    {
      name: "Jennifer Brown",
      location: "Montreal, QC",
      rating: 5,
      text: "Installed our EV charger perfectly. The team was punctual, courteous, and the work is flawless. Will use again!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 leading-tight">
            Power You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-semibold">
            Residential & Commercial Electrical Experts
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Certified, insured, and ready 24/7 to keep your home and business powered safely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book a Free Power Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-center mb-12">
            Why Choose TrueCan?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-smooth shadow-elegant hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-glow transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <service.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.label}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/residential">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold text-center mb-12">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-primary text-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-6">
            Ready to Power Up Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free assessment from certified electrical experts. No obligations, just honest advice.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-glow">
            <Link to="/contact">Book Your Free Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
