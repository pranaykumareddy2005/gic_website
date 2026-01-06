import { Users, Award, Briefcase, Lightbulb, Globe, Handshake } from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Users,
      value: "10,000+",
      label: "Global Participants",
      description: "Innovators from across the globe",
    },
    {
      icon: Award,
      value: "500+",
      label: "Expert Mentors",
      description: "From government, industry & academia",
    },
    {
      icon: Briefcase,
      value: "₹5 Lakhs",
      label: "Prize Pool",
      description: "For winning innovations",
    },
    {
      icon: Lightbulb,
      value: "₹10 Cr",
      label: "Investment Potential",
      description: "Funding opportunities (T&C Apply)",
    },
    {
      icon: Globe,
      value: "2 Days",
      label: "Intense Learning",
      description: "27-28 February 2026",
    },
    {
      icon: Handshake,
      value: "∞",
      label: "Networking",
      description: "Connections that last a lifetime",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Attend GIC 2026?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Unparalleled opportunities for growth, learning, and collaboration
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 md:p-8 hover:bg-primary-foreground/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <highlight.icon className="w-7 h-7 text-white" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {highlight.value}
              </p>
              <p className="font-semibold text-primary-foreground mb-2">
                {highlight.label}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
