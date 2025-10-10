import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Award,
  Users,
  CheckCircle2,
  Zap
} from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We show up on time, complete work as promised, and stand behind every installation."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Honest assessments, transparent pricing, and ethical business practices always."
    },
    {
      icon: Zap,
      title: "Precision",
      description: "Every wire, every connection, every detail done right the first time."
    }
  ];

  const certifications = [
    "Licensed Master Electricians",
    "Fully Insured & Bonded",
    "ESA Certified Contractors",
    "Member of Electrical Contractors Association",
    "WSIB Compliant",
    "Code-Compliant Installations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-montserrat font-extrabold mb-6 leading-tight">
            A Proudly Canadian Electrical Company
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Built on reliability, integrity, and precision
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src={teamPhoto} 
                  alt="TrueCan Power Systems Team" 
                  className="rounded-lg shadow-glow w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-montserrat font-extrabold mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  TrueCan Power Systems Inc. was founded with a simple mission: to provide honest, reliable electrical services that homeowners and businesses can trust.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  As a proudly Canadian company, we understand the unique electrical needs of our climate and communities. From harsh winters requiring reliable heating systems to modern homes demanding smart technology integration, we've seen it all.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we serve residential and commercial clients across Canada, bringing the same commitment to quality and safety to every project, big or small.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-smooth shadow-elegant">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold mb-4">
                Credentials & Certifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Your safety and satisfaction are backed by professional excellence
              </p>
            </div>

            <Card className="shadow-glow border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                      <span className="font-semibold text-lg">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                      <Users size={80} className="text-white" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-montserrat font-bold mb-4">
                      Meet the Leadership Team
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Our leadership brings over 25 years of combined electrical experience across residential, commercial, and industrial sectors.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      From apprentice to master electrician, our team has worked on projects ranging from single-family homes to multi-million dollar commercial developments. This depth of experience ensures we bring best practices and innovative solutions to every job.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-extrabold mb-4">
            Experience the TrueCan Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for reliable, professional electrical service.
          </p>
          <Button variant="secondary" size="lg" asChild className="shadow-glow">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
