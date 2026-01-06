import { Users, Award, Building2, Lightbulb, Globe, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "10,000+", label: "Participants" },
  { icon: Award, value: "500+", label: "Expert Mentors" },
  { icon: Building2, value: "100+", label: "Startups" },
  { icon: Lightbulb, value: "₹5L+", label: "Prize Pool" },
  { icon: Globe, value: "2 Days", label: "Event Duration" },
  { icon: Handshake, value: "₹10Cr", label: "Investment Pool" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gic-dark via-gic-dark to-primary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gic-violet/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Event at a <span className="text-gradient-purple">Glance</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Join thousands of innovators, entrepreneurs, and industry leaders at the biggest innovation conclave
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-gic-violet/20 flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <p className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/50 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
