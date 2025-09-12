import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nayan-4b2b61249/",
      icon: <Linkedin className="h-6 w-6" />,
      description: "Let's connect professionally",
      color: "hover:bg-blue-600/10 hover:border-blue-500/50"
    },
    {
      name: "GitHub",
      url: "https://github.com/NayanCod",
      icon: <Github className="h-6 w-6" />,
      description: "Check out my code",
      color: "hover:bg-purple-600/10 hover:border-purple-500/50"
    },
    {
      name: "Email",
      url: "mailto:kumarnayab6@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      description: "Send me a message",
      color: "hover:bg-green-600/10 hover:border-green-500/50"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thanks for checking out my internship journey! 🚀 Let's connect and discuss opportunities.
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-8 rounded-2xl text-center group transition-all duration-300 hover:transform hover:scale-105 border border-border/50 ${link.color}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center text-white group-hover:glow-pulse">
                    {link.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:gradient-text transition-all">
                  {link.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {link.description}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-primary group-hover:text-primary-glow transition-colors">
                  <span className="text-sm font-medium">Connect</span>
                  <ArrowUpRight className="h-4 w-4 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm passionate about creating scalable solutions and learning new technologies. 
                Whether it's about internships, projects, or just tech discussions, I'd love to hear from you!
              </p>
              
              <Button
                asChild
                className="btn-hero text-white border-0"
              >
                <a href="mailto:kumarnayab6@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border/20">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Nayan. Built with passion and modern technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;