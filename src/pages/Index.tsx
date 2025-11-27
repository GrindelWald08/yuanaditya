import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Figma, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg">
                View Work
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon">
                <Figma className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src={profileImage} 
                alt="Yuan Aditya Prasetyo"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Design Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  I believe in creating intuitive, user-centered designs that solve real problems and delight users.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert in Figma, UI/UX design, prototyping, design systems, and responsive web & mobile design.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Freelance designer working with startups and businesses to bring their digital visions to life.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{item.category}</div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          <Button size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Yuan Aditya Prasetyo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
