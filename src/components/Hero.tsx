import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float-animation"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/15 rounded-full blur-2xl float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-lg float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Nayan</span>{' '}
            👋
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Software Developer Intern at{' '}
            <span className="text-primary font-semibold">Cluix Pvt Ltd</span>
          </p>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Building secure, scalable, and innovative digital solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('work')}
              className="btn-hero text-white border-0"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border/50 bg-glass/50 hover:bg-primary/10"
              >
                <a 
                  href="https://www.linkedin.com/in/nayan-4b2b61249/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border/50 bg-glass/50 hover:bg-primary/10"
              >
                <a 
                  href="https://github.com/NayanCod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border/50 bg-glass/50 hover:bg-primary/10"
              >
                <a 
                  href="mailto:kumarnayab6@gmail.com"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              className="h-6 w-6 mx-auto text-primary cursor-pointer hover:text-primary-glow transition-colors"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;