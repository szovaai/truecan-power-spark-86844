import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      category: "commercial",
      title: "Warehouse LED Retrofit",
      description: "Complete LED upgrade for 50,000 sq ft facility, reducing power consumption by 38%",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    },
    {
      category: "residential",
      title: "Panel Upgrade - NW Calgary",
      description: "200A service upgrade completed in one day, passed inspection first time",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    },
    {
      category: "ev",
      title: "Commercial EV Charging Station",
      description: "4-station Level 2 charger installation for office building",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    },
    {
      category: "lighting",
      title: "Restaurant Ambient Lighting",
      description: "Custom dimmable LED system with smart controls for upscale dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
    {
      category: "panel",
      title: "Condo Panel Replacement",
      description: "Upgraded outdated fuse box to modern breaker panel with AFCI protection",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    },
    {
      category: "commercial",
      title: "Retail Store Fit-Out",
      description: "Complete electrical installation for 3,000 sq ft retail space",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    },
    {
      category: "residential",
      title: "Smart Home Integration",
      description: "Whole-home automation with smart lighting, outlets, and control system",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      category: "ev",
      title: "Home EV Charger Install",
      description: "Tesla Wall Connector installation with dedicated 60A circuit",
      image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&q=80",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 md:pt-32">
        <div className="absolute inset-0 hero-gradient circuit-texture" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-foreground">
          <h1 className="text-5xl md:text-7xl font-montserrat font-extrabold mb-6 leading-tight">
            Proven Results
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Real Projects, Real Clients, Real Excellence
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-surface border border-border">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="lighting">Lighting</TabsTrigger>
                <TabsTrigger value="ev">EV Chargers</TabsTrigger>
                <TabsTrigger value="panel">Panel Upgrades</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeFilter} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-premium transition-smooth group border-2 border-border hover:border-primary/50">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
