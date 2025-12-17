import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Figma, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  const portfolioItems = [
    {
      title: "E-Commerce Mobile App",
      description: "Modern e-commerce application with seamless user experience",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for B2B software platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "Food Delivery App",
      description: "User-friendly food ordering and delivery interface",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
      title: "Fitness Tracking App",
      description: "Health and fitness monitoring application",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&q=80"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio for creative professionals",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
    },
    {
      title: "Banking App Redesign",
      description: "Modern interface for digital banking services",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
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
      <section className="px-6 py-20 relative">
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
      <section className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
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
                    <div className="text-sm text-primary font-semibold mb-2">{item.category}</div>
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
      <section className="px-6 py-20 relative">
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
