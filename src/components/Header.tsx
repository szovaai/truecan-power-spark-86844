import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoImage from "@/assets/truecan-logo.png";

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
    { to: "/residential", label: "Residential" },
    { to: "/commercial", label: "Commercial" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-sm shadow-elegant" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="TrueCan Power Systems" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-semibold transition-smooth hover:text-primary ${
                    location.pathname === link.to 
                      ? "text-primary" 
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(XXX) XXX-XXXX</span>
              </a>
              <Button variant="hero" asChild>
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold py-2 transition-smooth ${
                    location.pathname === link.to 
                      ? "text-primary" 
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-2 text-foreground py-2"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">(XXX) XXX-XXXX</span>
              </a>
              <Button variant="hero" asChild className="w-full">
                <Link to="/contact">Book Free Assessment</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3 md:hidden">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="font-bold text-sm">Need urgent service?</span>
          <a 
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-bold text-sm"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
