import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Award, BookOpen, Building2, Users, Target, Eye, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - GIC 2026 | Global Innovators Conclave</title>
        <meta name="description" content="Learn about Global Innovators Conclave 2026, organized by St. Martin's Engineering College, Hyderabad." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              About GIC 2026
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A premier international innovation and entrepreneurship event shaping the future
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Shaping the Future of Innovation
                </h2>
                <p className="text-muted-foreground mb-6">
                  <strong className="text-foreground">Global Innovators Conclave (GIC) – 2026</strong> is a premier 
                  international innovation and entrepreneurship event organized by St. Martin's Engineering College 
                  (SMEC), Hyderabad, scheduled for <strong className="text-primary">27–28 February 2026</strong>.
                </p>
                <p className="text-muted-foreground mb-8">
                  The conclave brings together startups, deep-tech innovators, policymakers, industry leaders, 
                  investors, researchers, academicians, and students from across the globe.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">27-28 February 2026</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium">Hyderabad, India</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, title: "Startup Enablement", desc: "Launchpad for ideas and funding" },
                  { icon: Users, title: "Global Network", desc: "10,000+ participants" },
                  { icon: Award, title: "Recognition", desc: "₹5 Lakhs prize pool" },
                  { icon: Building2, title: "Deep-Tech Focus", desc: "AI, Robotics, Quantum & more" },
                ].map((item, index) => (
                  <div key={index} className="bg-card rounded-xl p-5 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-foreground rounded-2xl p-8 text-background">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-background/70">
                  To be a catalyst for innovation and entrepreneurship, creating an ecosystem where 
                  ideas transform into impactful solutions that shape the future of technology.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide a platform for collaboration, mentorship, and funding that enables 
                  startups, students, and innovators to develop solutions for real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organizer */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Organized By
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                St. Martin's Engineering College - Shaping Viksit Bharat's Brightest Minds
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, label: "NAAC A+ Accredited" },
                { icon: BookOpen, label: "UGC Autonomous" },
                { icon: Building2, label: "JNTU Hyderabad" },
                { icon: Users, label: "Deep-Tech Hub" },
              ].map((cred, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <cred.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{cred.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Be Part of the Innovation Revolution
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/passes">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Get Your Pass
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="rounded-full px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
