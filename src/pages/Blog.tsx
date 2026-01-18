import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Factory, Search, Phone, Star, Building2, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const Blog = () => {
  const articles = [
    {
      title: "Electrician Calgary SW",
      excerpt: "Expert electrical services in Calgary's southwest communities. Serving Marda Loop, Mount Royal, Killarney, Altadore & more.",
      slug: "/blog/electrician-calgary-sw",
      icon: MapPin,
      neighborhoods: ["Marda Loop", "Mount Royal", "Killarney", "Altadore"]
    },
    {
      title: "Electrician Calgary SE",
      excerpt: "Licensed electricians serving Calgary's southeast communities. McKenzie Towne, Auburn Bay, Cranston, Mahogany & more.",
      slug: "/blog/electrician-calgary-se",
      icon: MapPin,
      neighborhoods: ["McKenzie Towne", "Auburn Bay", "Cranston", "Mahogany"]
    },
    {
      title: "Electrician Calgary Near Me",
      excerpt: "Find a trusted local electrician anywhere in Calgary. Fast response times, 24/7 emergency service available.",
      slug: "/blog/electrician-calgary-near-me",
      icon: Search,
      neighborhoods: ["All Calgary Areas"]
    },
    {
      title: "Electrician Calgary NW",
      excerpt: "Professional electrical services in Calgary's northwest communities. Kensington, Brentwood, Varsity, Tuscany & more.",
      slug: "/blog/electrician-calgary-nw",
      icon: MapPin,
      neighborhoods: ["Kensington", "Brentwood", "Varsity", "Tuscany"]
    },
    {
      title: "Industrial Electrician Calgary",
      excerpt: "Commercial and industrial electrical specialists. Warehouse wiring, 3-phase power, machine hookups, lighting retrofits.",
      slug: "/blog/industrial-electrician-calgary",
      icon: Factory,
      neighborhoods: ["Industrial Districts", "Commercial Zones"]
    },
    {
      title: "Best Electrician Calgary",
      excerpt: "Top-rated electrician with 5-star reviews. Licensed, insured, and trusted by Calgary homeowners.",
      slug: "/blog/best-electrician-calgary",
      icon: Star,
      neighborhoods: ["All Calgary", "Top Rated"]
    },
    {
      title: "Commercial Electrician Calgary",
      excerpt: "Commercial electrical services for offices, retail, restaurants & businesses. Licensed for commercial work.",
      slug: "/blog/commercial-electrician-calgary",
      icon: Building2,
      neighborhoods: ["Offices", "Retail", "Restaurants"]
    },
    {
      title: "Residential Electrician Calgary",
      excerpt: "Home electrical services for Calgary homeowners. Panel upgrades, lighting, outlets, renovations & more.",
      slug: "/blog/residential-electrician-calgary",
      icon: Home,
      neighborhoods: ["All Calgary Homes"]
    },
    {
      title: "Electrician Calgary AB",
      excerpt: "Alberta-licensed electrician serving Calgary, AB. Professional residential & commercial electrical services.",
      slug: "/blog/electrician-calgary-ab",
      icon: MapPin,
      neighborhoods: ["Calgary", "Alberta"]
    },
    {
      title: "Electrician Calgary Alberta",
      excerpt: "Comprehensive electrical services in Calgary, Alberta. 24/7 emergency service, free estimates.",
      slug: "/blog/electrician-calgary-alberta",
      icon: MapPin,
      neighborhoods: ["Calgary", "Alberta"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | Calgary Electrical Tips & Insights - TrueCan Power</title>
        <meta 
          name="description" 
          content="Calgary electrical tips, guides, and local service information from TrueCan Power. Find electricians in your neighborhood and learn about electrical services."
        />
        <link rel="canonical" href="https://truecanpower.com/blog" />
      </Helmet>

      <SchemaMarkup 
        type="Breadcrumb" 
        data={{
          items: [
            { name: "Home", url: "https://truecanpower.com/" },
            { name: "Blog", url: "https://truecanpower.com/blog" }
          ]
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-32 md:pt-40 pb-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  TrueCan Power Blog
                </h1>
                <p className="text-xl text-muted-foreground">
                  Calgary electrical tips, local service guides, and expert insights to help you make informed decisions about your electrical needs.
                </p>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {articles.map((article, index) => (
                  <Link key={index} to={article.slug}>
                    <Card className="h-full hover:shadow-glow transition-smooth cursor-pointer border-2 hover:border-primary/50">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                            <article.icon size={20} />
                          </div>
                          <CardTitle className="text-lg">{article.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {article.neighborhoods.map((hood, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                              {hood}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Need a Calgary Electrician?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a free estimate today. Licensed, insured, and ready to help with any electrical project.
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

export default Blog;