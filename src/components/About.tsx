import { Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Main Content */}
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">Joined July 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-medium">Cluix Pvt Ltd</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Software Developer Intern
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I joined <span className="text-primary font-medium">Cluix Pvt Ltd</span> as a Software Developer Intern on 
                  <span className="text-accent font-medium"> 1st July 2025</span>. During my internship, I focused on 
                  improving authentication systems, backend features, deployments, and automation to make projects more 
                  reliable and scalable.
                </p>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Key Achievements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">6+</div>
                    <div className="text-sm text-muted-foreground">Months Experience</div>
                  </div>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="w-full md:w-80 h-64 relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-2xl opacity-20"></div>
                <div className="absolute inset-4 glass-card rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <div className="text-xl font-semibold gradient-text">Innovation</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Building the Future
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;