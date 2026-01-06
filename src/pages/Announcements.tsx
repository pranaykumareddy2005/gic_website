import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Bell, AlertTriangle, Building2, Info, Calendar, Clock, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type AnnouncementCategory = "all" | "general" | "accommodation" | "urgent";

interface Announcement {
  id: number;
  title: string;
  content: string;
  category: "general" | "accommodation" | "urgent";
  date: string;
  time: string;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "Early Bird Registration Extended!",
    content: "Due to popular demand, we have extended the early bird registration deadline to January 31, 2026. Don't miss out on discounted passes!",
    category: "general",
    date: "2026-01-15",
    time: "10:00 AM"
  },
  {
    id: 2,
    title: "Accommodation Booking Now Open",
    content: "Campus accommodation booking is now available for registered participants. Book your stay for Day 1, Day 2, or both days. Limited slots available.",
    category: "accommodation",
    date: "2026-01-20",
    time: "09:00 AM"
  },
  {
    id: 3,
    title: "Important: Bring Valid ID Proof",
    content: "All participants must carry a valid government-issued ID proof (Aadhar, PAN, Passport, or College ID) for entry verification along with their QR code.",
    category: "urgent",
    date: "2026-02-01",
    time: "11:30 AM"
  },
  {
    id: 4,
    title: "Keynote Speaker Announced",
    content: "We are thrilled to announce Dr. Rajesh Kumar, CEO of TechVentures India, as our keynote speaker for the inaugural session. More speakers to be announced soon!",
    category: "general",
    date: "2026-02-05",
    time: "03:00 PM"
  },
  {
    id: 5,
    title: "Hostel Check-in Timings",
    content: "Accommodation check-in will be available from 6:00 PM on February 26, 2026. Please report to the hostel reception with your QR code and ID proof.",
    category: "accommodation",
    date: "2026-02-10",
    time: "02:00 PM"
  },
  {
    id: 6,
    title: "Schedule Update: Day 1 Sessions",
    content: "The Knowledge Hub panel discussion has been moved from 11:00 AM to 11:30 AM. Please check the updated schedule for accurate timings.",
    category: "urgent",
    date: "2026-02-15",
    time: "04:30 PM"
  }
];

const categoryConfig = {
  general: {
    icon: Info,
    label: "General",
    color: "bg-primary/10 text-primary border-primary/20"
  },
  accommodation: {
    icon: Building2,
    label: "Accommodation",
    color: "bg-accent/10 text-accent border-accent/20"
  },
  urgent: {
    icon: AlertTriangle,
    label: "Urgent",
    color: "bg-destructive/10 text-destructive border-destructive/20"
  }
};

const Announcements = () => {
  const [filter, setFilter] = useState<AnnouncementCategory>("all");

  const filteredAnnouncements = filter === "all" 
    ? announcements 
    : announcements.filter(a => a.category === filter);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>Announcements - GIC 2026</title>
        <meta name="description" content="Stay updated with the latest announcements, schedule changes, and important notices for Global Innovators Conclave 2026." />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="bg-hero-gradient py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                <Bell className="w-3 h-3 mr-1" />
                Latest Updates
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                <span className="text-gradient-blue">Announcements</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Stay informed about event updates, schedule changes, and important notices.
              </p>
            </div>
          </div>
        </section>

        {/* Announcements List */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className="rounded-full"
              >
                <Filter className="w-4 h-4 mr-1" />
                All
              </Button>
              <Button
                variant={filter === "general" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("general")}
                className="rounded-full"
              >
                <Info className="w-4 h-4 mr-1" />
                General
              </Button>
              <Button
                variant={filter === "accommodation" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("accommodation")}
                className="rounded-full"
              >
                <Building2 className="w-4 h-4 mr-1" />
                Accommodation
              </Button>
              <Button
                variant={filter === "urgent" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("urgent")}
                className="rounded-full"
              >
                <AlertTriangle className="w-4 h-4 mr-1" />
                Urgent
              </Button>
            </div>

            {/* Announcements */}
            <div className="space-y-4">
              {filteredAnnouncements.map((announcement) => {
                const config = categoryConfig[announcement.category];
                const Icon = config.icon;
                
                return (
                  <div 
                    key={announcement.id}
                    className={`bg-card border rounded-xl p-5 card-hover ${
                      announcement.category === "urgent" ? "border-destructive/30" : "border-border"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${config.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="outline" className={config.color}>
                            {config.label}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(announcement.date)}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {announcement.time}
                          </span>
                        </div>
                        <h3 className="font-semibold text-foreground text-lg mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {announcement.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredAnnouncements.length === 0 && (
              <div className="text-center py-12">
                <Bell className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">No announcements in this category yet.</p>
              </div>
            )}

            {/* Subscribe Note */}
            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <Bell className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                All registered participants will receive important announcements via email and SMS.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Announcements;
