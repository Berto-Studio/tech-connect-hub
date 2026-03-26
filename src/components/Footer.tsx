import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/menz-tech-logo.png";
import { WHATSAPP_NUMBER } from "@/data/products";

const Footer = () => (
  <footer className="bg-dark border-t border-dark-foreground/10">
    <div className="container mx-auto px-4 py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="MenzTech" className="h-9 w-9" />
            <span className="font-display text-xl font-bold text-dark-foreground">
              Menz<span className="text-primary">Tech</span>
            </span>
          </Link>
          <p className="text-sm text-dark-foreground/50 leading-relaxed mb-4">
            Ghana's trusted provider of networking equipment, digital security, and electrical installation services.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-whatsapp hover:text-whatsapp/80 transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-dark-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/projects" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-dark-foreground/50 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-dark-foreground mb-4">Services</h4>
          <ul className="space-y-2.5">
            {["CCTV Installation", "Network Setup", "Electric Fencing", "Solar Power", "Gate Automation", "IT Support"].map((s) => (
              <li key={s}>
                <Link to="/services" className="text-sm text-dark-foreground/50 hover:text-primary transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-dark-foreground mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-dark-foreground/50">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              123 Tech Street, Accra, Ghana
            </li>
            <li className="flex items-center gap-3 text-sm text-dark-foreground/50">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              +233 (0) 234 567 890
            </li>
            <li className="flex items-center gap-3 text-sm text-dark-foreground/50">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              info@menztech.com
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-dark-foreground/10 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-dark-foreground/40">
          © {new Date().getFullYear()} MenzTech. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-xs text-dark-foreground/40">Privacy Policy</span>
          <span className="text-xs text-dark-foreground/40">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
