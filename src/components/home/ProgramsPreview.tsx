import { ArrowRight, Mic, Sparkles, Building, TrendingUp, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsPreview = () => {
  const programs = [
    {
      icon: Mic,
      title: "Knowledge Hub",
      description: "Panel discussions & talks featuring policymakers, industry experts, and thought leaders.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Sparkles,
      title: "Alpha to Infinite",
      description: "Innovation challenge where students solve real-world problems under expert guidance.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Building,
      title: "BusiTech Expo",
      description: "Dual-track exhibition for startups and students to showcase innovations.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Investors Boot Camp",
      description: "Exclusive pitching platform with funding opportunities up to ₹10 Crore.",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: GraduationCap,
      title: "Masterminds Congregation",
      description: "Dedicated initiative for school students to pitch creative ideas and learn.",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Programs & Tracks</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Key Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Diverse opportunities for innovators at every stage of their journey
            </p>
          </div>
          <Link to="/programs">
            <Button variant="outline" className="group">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
