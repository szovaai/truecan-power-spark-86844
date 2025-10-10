import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/truecan-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src={logoImage} 
              alt="TrueCan Power Systems" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Licensed, insured, and ready 24/7 to keep your home and business powered safely.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/residential" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Residential Services
              </Link>
              <Link to="/commercial" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Commercial Services
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-secondary-foreground/80">
              <li>Panel Upgrades</li>
              <li>EV Charger Installation</li>
              <li>Lighting Design</li>
              <li>Smart Home Integration</li>
              <li>Emergency Repairs</li>
              <li>Maintenance Contracts</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2 text-secondary-foreground/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Serving all of Canada</span>
              </div>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-smooth"
              >
                <Phone size={18} />
                <span>(XXX) XXX-XXXX</span>
              </a>
              <a 
                href="mailto:info@truecanpower.com" 
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-smooth"
              >
                <Mail size={18} />
                <span>info@truecanpower.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <p>© {currentYear} TrueCan Power Systems Inc. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
