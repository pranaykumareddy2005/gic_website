import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-gic-violet to-gic-purple-dark" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.3, 1], x: [-50, 0, -50] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-gic-lavender/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            <span className="text-white/90 text-sm font-medium">Limited Seats Available</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Innovate?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Join 10,000+ innovators at the Global Innovators Conclave 2026
            </p>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-white/90"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">27-28 February 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">St. Martin's Engineering College, Hyderabad</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link to="/register">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-lg font-bold shadow-2xl shadow-black/20">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/passes">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg font-semibold">
                  View Passes
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 flex flex-wrap justify-center gap-8 text-white/60 text-sm"
          >
            {[
              { label: "500+ Expert Mentors" },
              { label: "₹10Cr Investment Pool" },
              { label: "100+ Startups" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
