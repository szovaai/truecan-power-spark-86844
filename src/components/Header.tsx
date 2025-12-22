import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@/assets/truecan-logo-main.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const serviceLinks = [
    { to: "/services/panel-upgrade", label: "Panel Upgrades" },
    { to: "/services/ev-charger-installation", label: "EV Charger Installation" },
    { to: "/services/hot-tub-sauna-wiring", label: "Hot Tub & Sauna Wiring" },
    { to: "/services/pot-light-installation", label: "Pot Light Installation" },
    { to: "/services/surge-protection", label: "Surge Protection" },
    { to: "/services/emergency-electrician", label: "Emergency Electrician" },
    { to: "/services/renovation-wiring", label: "Renovation Wiring" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white py-2 hidden md:block border-b border-gray-800">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm font-medium">
          <Phone className="h-4 w-4" />
          <span>24/7 Electrical Help</span>
          <span>•</span>
          <a href="tel:+12508830499" className="font-bold hover:text-primary transition-colors">
            (250) 883-0499
          </a>
          <span>•</span>
          <Link to="/contact" className="font-bold hover:text-primary transition-colors">
            Book Now
          </Link>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-40 transition-smooth bg-white shadow-md border-b border-gray-200 md:top-8`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage} 
                alt="TrueCan Power Systems" 
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Home Link */}
              <Link
                to="/"
                className={`font-semibold transition-smooth hover:text-primary relative ${
                  location.pathname === "/" ? "text-primary" : "text-gray-900"
                }`}
              >
                Home
                {location.pathname === "/" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`font-semibold transition-smooth hover:text-primary relative flex items-center gap-1 ${
                  location.pathname.startsWith("/services") ? "text-primary" : "text-gray-900"
                }`}>
                  Services
                  <ChevronDown className="h-4 w-4" />
                  {location.pathname.startsWith("/services") && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-xl z-50 min-w-[240px] p-2">
                  <DropdownMenuItem asChild className="px-4 py-3 rounded-md cursor-pointer hover:bg-gray-100 focus:bg-gray-100">
                    <Link to="/services" className="w-full font-bold text-gray-900 text-base">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                  <div className="h-px bg-gray-200 my-2" />
                  {serviceLinks.map((link) => (
                    <DropdownMenuItem key={link.to} asChild className="px-4 py-2.5 rounded-md cursor-pointer hover:bg-gray-100 focus:bg-gray-100">
                      <Link to={link.to} className="w-full text-gray-700 hover:text-primary text-sm">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Remaining Nav Links */}
              {navLinks.slice(1).map((link) => (
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
          <div className="lg:hidden bg-white border-t border-gray-300">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-semibold py-2 transition-smooth ${
                  location.pathname === "/" ? "text-primary" : "text-gray-900"
                }`}
              >
                Home
              </Link>
              
              {/* Services Section */}
              <div className="border-l-2 border-primary pl-4">
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold py-2 block transition-smooth ${
                    location.pathname === "/services" ? "text-primary" : "text-gray-900"
                  }`}
                >
                  All Services
                </Link>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 block text-sm transition-smooth ${
                      location.pathname === link.to ? "text-primary" : "text-gray-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold py-2 transition-smooth ${
                    location.pathname === link.to ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {link.label}
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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white text-gray-900 py-3 lg:hidden shadow-lg border-t border-gray-300">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="font-bold text-sm">24/7 Electrical Help</span>
          </div>
          <a 
            href="tel:+12508830499"
            className="bg-primary text-white px-4 py-2 rounded-md font-bold text-sm hover:bg-primary/90 transition-smooth"
          >
            (250) 883-0499
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
