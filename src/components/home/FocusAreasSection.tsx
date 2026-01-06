import { 
  Cpu, 
  Bot, 
  Atom, 
  Rocket, 
  Dna, 
  Microchip, 
  Layers, 
  Database 
} from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  { icon: Cpu, name: "Artificial Intelligence", color: "from-purple-500 to-indigo-500" },
  { icon: Bot, name: "Robotics & Automation", color: "from-blue-500 to-cyan-500" },
  { icon: Atom, name: "Quantum Computing", color: "from-violet-500 to-purple-500" },
  { icon: Rocket, name: "Space Technology", color: "from-orange-500 to-red-500" },
  { icon: Dna, name: "Biotechnology", color: "from-green-500 to-emerald-500" },
  { icon: Microchip, name: "Semiconductors", color: "from-pink-500 to-rose-500" },
  { icon: Layers, name: "Advanced Materials", color: "from-teal-500 to-cyan-500" },
  { icon: Database, name: "Cloud & Data", color: "from-indigo-500 to-blue-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const FocusAreasSection = () => {
  return (
    <section className="py-24 bg-gic-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Innovation Domains
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Core Focus <span className="text-gradient-purple">Areas</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Exploring cutting-edge technologies that will shape the future of innovation and entrepreneurship
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 text-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}
                >
                  <area.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold text-white text-base lg:text-lg group-hover:text-primary transition-colors duration-300">
                  {area.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
