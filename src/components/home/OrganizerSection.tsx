import { Award, BookOpen, Building2, Users } from "lucide-react";

const OrganizerSection = () => {
  const credentials = [
    { icon: Award, label: "NAAC A+ Accredited" },
    { icon: BookOpen, label: "UGC Autonomous" },
    { icon: Building2, label: "Affiliated to JNTU Hyderabad" },
    { icon: Users, label: "Hub for Deep-Tech Innovation" },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Organizer</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              St. Martin's Engineering College
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              St. Martin's Engineering College (SMEC) is committed to the mission of 
              <span className="text-primary font-semibold"> "Shaping Viksit Bharat's Brightest Minds"</span>. 
              SMEC serves as a growing hub for deep-tech innovation, entrepreneurship, and research, 
              nurturing the next generation of innovators and leaders.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{cred.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="font-display text-4xl font-bold">S</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                To be a catalyst for innovation and entrepreneurship, creating an ecosystem 
                where ideas transform into impactful solutions that shape the future of technology.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-primary-foreground/20">
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">2026</p>
                  <p className="text-primary-foreground/60 text-sm">Event Year</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">Hyderabad</p>
                  <p className="text-primary-foreground/60 text-sm">Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerSection;
