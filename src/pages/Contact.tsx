import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact - GIC 2026 | Global Innovators Conclave</title>
        <meta name="description" content="Contact the GIC 2026 team for inquiries about the Global Innovators Conclave." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Have questions? We are here to help you with anything related to GIC 2026
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Partnership Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="min-h-[150px] rounded-lg"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Location",
                      details: ["St. Martin's Engineering College", "Dhulapally, Secunderabad", "Hyderabad, Telangana"],
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      details: ["info@gic2026.com", "support@gic2026.com"],
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      details: ["+91 98765 43210", "+91 98765 43211"],
                    },
                  ].map((info, index) => (
                    <div key={index} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <div className="mt-10">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">FAQs</h3>
                  <div className="space-y-4">
                    {[
                      { q: "When is GIC 2026?", a: "27-28 February 2026." },
                      { q: "Where is the event?", a: "St. Martin's Engineering College, Hyderabad." },
                      { q: "Can I attend for one day?", a: "Yes, 1-day and 2-day passes are available." },
                    ].map((faq, index) => (
                      <div key={index} className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-medium text-foreground text-sm mb-1">{faq.q}</h4>
                        <p className="text-muted-foreground text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
