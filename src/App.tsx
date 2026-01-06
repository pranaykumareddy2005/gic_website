import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Passes from "./pages/Passes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import Speakers from "./pages/Speakers";
import Venue from "./pages/Venue";
import Accommodation from "./pages/Accommodation";
import Announcements from "./pages/Announcements";
import Gallery from "./pages/Gallery";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/passes" element={<Passes />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/register" element={<Register />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
