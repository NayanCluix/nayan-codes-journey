import { Code, Cloud, Database, Smartphone, Globe, Shield, GitBranch, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Code className="h-6 w-6" />,
      color: "bg-primary",
      skills: ["Node.js", "Vue.js", "Flutter", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "bg-secondary",
      skills: ["AWS EC2", "Docker", "Docker Compose", "Certbot SSL", "CI/CD"]
    },
    {
      title: "Databases & Services",
      icon: <Database className="h-6 w-6" />,
      color: "bg-accent",
      skills: ["MongoDB", "MQTT", "msg91", "Firebase", "REST APIs"]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-gradient-to-r from-primary to-secondary",
      skills: ["Git", "Microsoft 365", "Google Workspace", "Play Store", "Linux"]
    }
  ];

  const techIcons = [
    { name: "Node.js", emoji: "🟢" },
    { name: "Vue.js", emoji: "💚" },
    { name: "Flutter", emoji: "🔵" },
    { name: "AWS", emoji: "🧡" },
    { name: "Docker", emoji: "🐳" },
    { name: "MongoDB", emoji: "🍃" },
    { name: "Git", emoji: "📂" },
    { name: "MQTT", emoji: "📡" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Tools</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to build modern applications
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Icons Display */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">
              Technologies I Use
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
              {techIcons.map((tech, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-4xl md:text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300 float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                    {tech.emoji}
                  </div>
                  <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;