import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import gicLogo from "@/assets/gic-logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { 
      name: "Explore", 
      path: "/programs",
      dropdown: [
        { name: "Events / Schedule", path: "/schedule" },
        { name: "Speakers", path: "/speakers" },
        { name: "Venue", path: "/venue" },
      ]
    },
    { name: "Why GIC", path: "/about" },
    { name: "Passes", path: "/passes" },
    { name: "Accommodation", path: "/accommodation" },
    { name: "Announcements", path: "/announcements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={gicLogo} alt="GIC Logo" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex items-center gap-1">
              <span className="font-display font-bold text-xl text-primary">GIC</span>
              <span className="font-display font-bold text-xl text-foreground">2026</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to={link.path} className="w-full cursor-pointer">
                        All Programs
                      </Link>
                    </DropdownMenuItem>
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link to={item.path} className="w-full cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-sm font-medium">
                Login/Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-sm font-medium py-2 px-2 rounded-lg ${
                      isActive(link.path)
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-muted-foreground py-1.5 px-2 hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium mt-4">
                  Login/Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
