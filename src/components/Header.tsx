import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "@/assets/truecan-logo-final.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/residential", label: "Residential" },
    { to: "/commercial", label: "Commercial" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/powershield", label: "PowerShield™", isNew: true },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#E8E6E3] text-gray-900 py-2 hidden md:block border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm font-medium">
          <Phone className="h-4 w-4" />
          <span>24/7 Electrical Help</span>
          <span>•</span>
          <a href="tel:+1XXXXXXXXXX" className="font-bold hover:text-primary transition-colors">
            (XXX) XXX-XXXX
          </a>
          <span>•</span>
          <Link to="/contact" className="font-bold hover:text-primary transition-colors">
            Book Now
          </Link>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-40 transition-smooth ${
          isScrolled 
            ? "bg-[#E8E6E3]/95 backdrop-blur-md shadow-md border-b border-gray-200" 
            : "bg-[#E8E6E3]/80 backdrop-blur-sm border-b border-gray-200/50"
        } md:top-8`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="TrueCan Power Systems" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-semibold transition-smooth hover:text-primary relative ${
                    location.pathname === link.to 
                      ? "text-primary" 
                      : "text-gray-900"
                  }`}
                >
                  {link.label}
                  {link.isNew && (
                    <span className="absolute -top-2 -right-8 bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                  {location.pathname === link.to && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Free Assessment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#E8E6E3] border-t border-gray-200">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold py-2 transition-smooth relative inline-flex items-center gap-2 ${
                    location.pathname === link.to 
                      ? "text-primary" 
                      : "text-gray-900"
                  }`}
                >
                  {link.label}
                  {link.isNew && (
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </Link>
              ))}
              <Button variant="hero" asChild className="w-full">
                <Link to="/contact">Book Free Assessment</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#E8E6E3] text-gray-900 py-3 lg:hidden shadow-lg border-t border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-bold text-sm">24/7 Electrical Help</span>
          </div>
          <a 
            href="tel:+1XXXXXXXXXX"
            className="bg-primary text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-primary/90 transition-smooth"
          >
            (XXX) XXX-XXXX
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
