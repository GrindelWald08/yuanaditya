import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Figma, Linkedin, Github, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedGradientMesh } from "@/components/AnimatedGradientMesh";

const Index = () => {
  const portfolioItems = [
    {
      title: "Money Tracker App",
      description: "Personal finance management app with budget tracking and expense analytics",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1554252116-ee59370d1f66?w=800&q=80",
      github: "https://github.com/yuanaditya/money-tracker",
      figma: "https://figma.com/file/money-tracker"
    },
    {
      title: "Outdoor Rental Website",
      description: "Equipment rental platform for camping, hiking, and outdoor adventures",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
      github: "https://github.com/yuanaditya/outdoor-rental",
      figma: "https://figma.com/file/outdoor-rental"
    },
    {
      title: "Travel Website",
      description: "Destination discovery platform with flight and accommodation booking",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
      github: "https://github.com/yuanaditya/travel-website",
      figma: "https://figma.com/file/travel-website"
    },
    {
      title: "Travel App",
      description: "Mobile companion for trip planning and travel itinerary management",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      github: "https://github.com/yuanaditya/travel-app",
      figma: "https://figma.com/file/travel-app"
    },
    {
      title: "Recipe Sharing App",
      description: "Social cooking platform for sharing and discovering recipes",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      github: "https://github.com/yuanaditya/recipe-sharing",
      figma: "https://figma.com/file/recipe-sharing"
    },
    {
      title: "Real Estate Platform",
      description: "Property search and listing platform for buying and renting homes",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      github: "https://github.com/yuanaditya/real-estate",
      figma: "https://figma.com/file/real-estate"
    },
    {
      title: "Event Booking App",
      description: "Discover and book tickets for concerts, festivals, and local events",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      github: "https://github.com/yuanaditya/event-booking",
      figma: "https://figma.com/file/event-booking"
    },
    {
      title: "Coffee Shop Finder",
      description: "Location-based app for discovering local cafes and coffee shops",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      github: "https://github.com/yuanaditya/coffee-finder",
      figma: "https://figma.com/file/coffee-finder"
    },
    {
      title: "Meditation & Wellness App",
      description: "Mindfulness and meditation app for mental health and relaxation",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      github: "https://github.com/yuanaditya/meditation-app",
      figma: "https://figma.com/file/meditation-app"
    },
    {
      title: "Hotel Booking Website",
      description: "Hotel and resort booking platform with reviews and recommendations",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      github: "https://github.com/yuanaditya/hotel-booking",
      figma: "https://figma.com/file/hotel-booking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <AnimatedGradientMesh variant="primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <AnimatedSection>
            <div className="space-y-6 backdrop-blur-sm bg-card/30 p-8 rounded-2xl border border-border/50 shadow-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Yuan Aditya Prasetyo
              </h1>
              <p className="text-xl text-muted-foreground">
                Website & App Designer
              </p>
              <p className="text-lg text-muted-foreground">
                Crafting beautiful digital experiences through innovative design solutions using Figma. 
                Specializing in web and mobile application design that combines aesthetics with functionality.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="backdrop-blur-md bg-primary hover:bg-primary/80 text-primary-foreground border border-primary/50 shadow-lg hover:shadow-primary/50 transition-all">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
                <Button variant="outline" size="lg" className="backdrop-blur-md bg-card/40 hover:bg-primary hover:text-primary-foreground border-border/50 hover:border-primary transition-all">
                  View Work
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" className="backdrop-blur-md bg-card/30 hover:bg-primary hover:text-primary-foreground border border-border/30 hover:border-primary transition-all">
                  <Figma className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="backdrop-blur-md bg-card/30 hover:bg-primary hover:text-primary-foreground border border-border/30 hover:border-primary transition-all">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="backdrop-blur-md bg-card/30 hover:bg-primary hover:text-primary-foreground border border-border/30 hover:border-primary transition-all">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto backdrop-blur-md bg-card/20 p-4 rounded-2xl border border-border/50 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Yuan Aditya Prasetyo"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <AnimatedGradientMesh variant="secondary" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {["Design Philosophy", "Tools & Skills", "Experience"].map((title, index) => (
              <AnimatedSection key={title} delay={index * 150}>
                <Card className="backdrop-blur-xl bg-card/40 border-border/50 hover:bg-card/60 transition-all hover:scale-105 shadow-xl h-full">
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {title === "Design Philosophy" && "I believe in creating intuitive, user-centered designs that solve real problems and delight users."}
                      {title === "Tools & Skills" && "Expert in Figma, UI/UX design, prototyping, design systems, and responsive web & mobile design."}
                      {title === "Experience" && "Freelance designer working with startups and businesses to bring their digital visions to life."}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <AnimatedGradientMesh variant="accent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-foreground mb-12">Portfolio</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="overflow-hidden backdrop-blur-xl bg-card/40 border-border/50 hover:bg-card/60 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all group h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-semibold">{item.category}</span>
                      <div className="flex items-center gap-3">
                        <a 
                          href={item.figma} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          title="View Figma Design"
                        >
                          <Figma className="h-4 w-4" />
                        </a>
                        <a 
                          href={item.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <AnimatedGradientMesh variant="primary" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have a project in mind? Let's create something amazing together.
              </p>
              <Button size="lg" className="backdrop-blur-md bg-primary hover:bg-primary/80 text-primary-foreground border border-primary/50 shadow-lg hover:shadow-primary/50 transition-all">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border/50 backdrop-blur-xl bg-card/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Yuan Aditya Prasetyo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
