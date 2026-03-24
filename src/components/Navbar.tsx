import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/menz-tech-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Menz Tech" className="h-9 w-9" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            Menz<span className="text-primary">Tech</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm" asChild>
            <Link to="/contact">
              <Phone className="w-4 h-4 mr-1" /> Get in Touch
            </Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium ${
                location.pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm" className="w-full" asChild>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Phone className="w-4 h-4 mr-1" /> Get in Touch
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
