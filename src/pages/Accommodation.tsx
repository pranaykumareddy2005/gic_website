import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Building2, Users, Calendar, AlertCircle, CheckCircle2, Info, UserPlus, Hash, BedDouble, Moon, Sun, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stayOptions = [
  { id: "feb26", label: "Feb 26 (Night Before)", description: "Arrive early, settle in before the event" },
  { id: "feb27", label: "Feb 27 (Day 1)", description: "First day of GIC 2026" },
  { id: "feb28", label: "Feb 28 (Day 2)", description: "Second day of GIC 2026" },
  { id: "mar1", label: "Mar 1 (Post Event)", description: "Extra day for networking & departure" },
];

const accommodationFeatures = [
  {
    icon: BedDouble,
    title: "Campus Hostel",
    description: "Comfortable hostel rooms with essential amenities"
  },
  {
    icon: Calendar,
    title: "Flexible Stay",
    description: "Feb 26 - Mar 1 (up to 4 nights)"
  },
  {
    icon: Users,
    title: "Group Preference",
    description: "Create or join groups for proximity placement"
  },
  {
    icon: CheckCircle2,
    title: "QR Check-in",
    description: "Hassle-free entry with your unique QR code"
  }
];

const bookingSteps = [
  {
    step: 1,
    title: "Register for Event",
    description: "Complete your GIC 2026 registration first"
  },
  {
    step: 2,
    title: "Add Accommodation",
    description: "Opt for accommodation during or after registration"
  },
  {
    step: 3,
    title: "Select Stay Dates",
    description: "Choose from Feb 26 (night before) to Mar 1 (post event)"
  },
  {
    step: 4,
    title: "Select Gender",
    description: "For appropriate hostel block allocation"
  },
  {
    step: 5,
    title: "Group Preference",
    description: "Create a group or join with a friend's code"
  },
  {
    step: 6,
    title: "Confirm Booking",
    description: "Review details and confirm your stay"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Accommodation = () => {
  return (
    <>
      <Helmet>
        <title>Accommodation - GIC 2026</title>
        <meta name="description" content="Book accommodation for Global Innovators Conclave 2026. Campus hostel rooms from Feb 26 - Mar 1 with flexible stay options." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gic-dark via-gic-dark to-primary/20">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
                <Building2 className="w-3.5 h-3.5 mr-1.5" />
                Optional Add-on
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Event <span className="text-gradient-purple">Accommodation</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Stay on campus from <strong className="text-white">February 26 - March 1</strong>. Arrive before the event starts and leave after it ends.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 h-14 text-lg font-semibold shadow-xl shadow-primary/30">
                  Book Accommodation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stay Duration Visual */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Stay Duration Options
              </h2>
              <p className="text-muted-foreground">Choose nights that suit your schedule</p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stayOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="relative bg-background border-2 border-border hover:border-primary/50 rounded-2xl p-6 transition-colors cursor-pointer group"
                >
                  <div className="absolute top-3 right-3">
                    {index === 0 && <Moon className="w-5 h-5 text-primary/60" />}
                    {(index === 1 || index === 2) && <Sun className="w-5 h-5 text-primary" />}
                    {index === 3 && <Clock className="w-5 h-5 text-primary/60" />}
                  </div>
                  <p className="font-bold text-foreground text-lg mb-1">{option.label}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                  {(index === 1 || index === 2) && (
                    <Badge className="mt-3 bg-primary/10 text-primary border-0 text-xs">Event Day</Badge>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {accommodationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary to-gic-violet rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Booking Flow */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            >
              How to Book
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {bookingSteps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-start group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary to-gic-violet text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg"
                  >
                    {item.step}
                  </motion.div>
                  <div className="flex-1 bg-background border border-border rounded-xl p-5 group-hover:border-primary/40 transition-colors">
                    <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Grouping System */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center"
            >
              Group Preference System
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 mb-10"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gic-violet to-primary rounded-xl flex items-center justify-center shadow-lg">
                    <UserPlus className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl">Create a Group</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Start a new group and share the unique code with friends. They can join using this code.
                </p>
                <Badge variant="outline" className="bg-primary/5">System generates unique code</Badge>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-gic-violet rounded-xl flex items-center justify-center shadow-lg">
                    <Hash className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl">Join a Group</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Enter a valid group code shared by a friend to join their group.
                </p>
                <Badge variant="outline" className="bg-primary/5">One group per participant</Badge>
              </motion.div>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6"
            >
              <div className="flex gap-4">
                <AlertCircle className="w-7 h-7 text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Important Disclaimer</h4>
                  <p className="text-muted-foreground">
                    <strong>Grouping is for proximity preference only.</strong> Final room and bed allocation will be decided by the organizing team based on availability and hostel regulations. Group members may be placed in the same room, adjacent rooms, or the same floor.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Room Allocation Info */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
            >
              Room Allocation Policy
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl p-6 space-y-4"
            >
              {[
                "Room allocation is done manually by organizers based on availability, hostel rules, and group preferences.",
                "Exact room numbers and hostel block details will be shared via Announcements before the event.",
                "Accommodation booking is locked after confirmation and cannot be modified.",
                "Check-in will be done using your QR code at the hostel entrance."
              ].map((text, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-3 items-start">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-muted-foreground">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link to="/announcements">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  Check Announcements for Updates
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Accommodation;
