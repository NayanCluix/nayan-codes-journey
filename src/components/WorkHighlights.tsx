import { CheckCircle, Shield, Database, Cloud, Smartphone, Globe, Mail, Users, Settings, FileText, Bell, GitBranch } from 'lucide-react';

const WorkHighlights = () => {
  const achievements = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Removed Firebase Authentication",
      description: "Eliminated Firebase Authentication from dashboard, app, and server for better security control."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "SMS & Email OTP Authentication",
      description: "Implemented new OTP system for Dashboard (dashboard.cluix.in) and Play Store App."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Device Test Data Backend",
      description: "Developed backend feature to save device test data with exact location via MQTT."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Admin Dashboards",
      description: "Built separate Admin Dashboards for SWSM and TWAD systems."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "AWS EC2 Deployment",
      description: "Deployed dashboards (swsm.dashboard.cluix.in, twad.dashboard.cluix.in) on AWS EC2."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "DLT Registration & SMS",
      description: "Set up DLT Registration, SMS headers, and content using msg91 services."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website Deployment",
      description: "Updated and deployed Cluix website (cluix.in) on AWS EC2 using Docker."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Docker + SSL Setup",
      description: "Used Docker-compose with Certbot SSL for secure and easy deployment."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Microsoft Migration",
      description: "Migrated organization from Google Workspace to Microsoft 365."
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Test Sync Fixes",
      description: "Fixed test sync issues between mobile app and device."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Test Report Generation",
      description: "Implemented full test report generation from dashboard within time frame."
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Weekly Email Notifications",
      description: "Created weekly email notifications for admins showing total tests per device and per week."
    }
  ];

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Internship <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key achievements and contributions during my internship at Cluix Pvt Ltd
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Achievements Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-px"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gradient-accent rounded-full border-4 border-background flex items-center justify-center transform md:-translate-x-4 glow-pulse">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="glass-card p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-white">
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
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

export default WorkHighlights;