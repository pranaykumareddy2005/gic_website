import { Link } from "react-router-dom";
import { ArrowRight, Code2, Briefcase, TrendingUp, GraduationCap, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Alpha to Infinity",
    subtitle: "30-Hour Hiring Hackathon",
    description: "360 participants compete in a 30-hour intensive hackathon across Frontend, Backend, DevOps & AI streams with direct hiring opportunities.",
    icon: Code2,
    color: "from-violet-500 to-purple-600",
    highlights: ["360 Participants", "60 Mentors", "30 Hours"],
  },
  {
    title: "Business Tech Expo",
    subtitle: "Startup & Student Expo",
    description: "50 startups and student projects showcase MVPs and prototypes with professional evaluation and investor connections.",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    highlights: ["20 Startups", "30 Student Projects", "Investor Connect"],
  },
  {
    title: "Investor Pitching Summit",
    subtitle: "Pre-Seed & Seed Stage",
    description: "63 teams pitch to investor panels - 35 student ventures and 28 professional startups compete for funding opportunities.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    highlights: ["35 Student Teams", "28 Pro Teams", "₹10Cr+ Funding"],
  },
  {
    title: "Mastermind Congregation",
    subtitle: "School Innovators Program",
    description: "1,200 school students from 8th-9th grade participate in entrepreneurship training with top 100 teams competing in finals.",
    icon: GraduationCap,
    color: "from-amber-500 to-orange-600",
    highlights: ["1,200 Students", "100 Final Teams", "₹1.5L Prize Pool"],
  },
  {
    title: "Knowledge Bubble",
    subtitle: "Premier Deep-Tech Conclave",
    description: "Two-day platform bringing policymakers, industry leaders, and innovators together across 9 cutting-edge technology domains.",
    icon: Lightbulb,
    color: "from-pink-500 to-rose-600",
    highlights: ["9 Tech Domains", "3 Parallel Tracks", "2,700 Capacity"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const FlagshipPrograms = () => {
  return (
    <section className="py-24 bg-gic-dark relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase">
              Event Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Flagship <span className="text-gradient-purple">Programs</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              A multi-layered approach to innovation ecosystem development - from talent identification to startup scaling
            </p>
          </div>
          <Link to="/programs">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button variant="outline" className="rounded-full px-6 border-2 border-white/20 text-white hover:bg-white/10 hover:border-primary">
                Explore All Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Link
                to="/programs"
                className="group relative block bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden h-full"
              >
                {/* Gradient hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}
                    >
                      <program.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-primary/80 text-sm font-medium">{program.subtitle}</p>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipPrograms;
