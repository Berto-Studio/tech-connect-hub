import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User, LogOut, LayoutDashboard, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/menz-tech-logo.png";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const nav = useNavigate();
  const { user, isAdmin, signOut } = useAuth();
  const { count } = useCart();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) nav(`/products?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-dark text-dark-foreground text-xs">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Delivering across Ghana</span>
          <div className="hidden sm:flex gap-4">
            <Link to="/contact" className="hover:text-primary">Customer service</Link>
            {isAdmin && <Link to="/admin" className="hover:text-primary">Admin</Link>}
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="container mx-auto px-4 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Menz Tech" className="h-9 w-9" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground hidden sm:inline">
            Menz<span className="text-primary">Tech</span>
          </span>
        </Link>

        {/* Search */}
        <form onSubmit={submitSearch} className="hidden md:flex flex-1 max-w-2xl">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, services…"
            className="rounded-r-none border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button type="submit" className="rounded-l-none px-4">
            <Search className="w-4 h-4" />
          </Button>
        </form>

        <div className="flex items-center gap-1 ml-auto">
          {/* Cart */}
          <Button variant="ghost" size="sm" asChild className="relative">
            <Link to="/cart" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {count > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center rounded-full text-[10px] px-1 bg-primary">
                  {count}
                </Badge>
              )}
              <span className="hidden sm:inline ml-1 text-sm">Cart</span>
            </Link>
          </Button>

          {/* Account */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline ml-1 text-sm truncate max-w-[100px]">{user.email?.split("@")[0]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="truncate">{user.email}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/cart">Your cart</Link></DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin"><LayoutDashboard className="w-4 h-4 mr-2" /> Admin dashboard</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="w-4 h-4 mr-2" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button size="sm" asChild>
              <Link to="/auth">Sign in</Link>
            </Button>
          )}

          <button className="md:hidden text-foreground ml-1" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Category row (desktop) */}
      <div className="hidden md:block border-t bg-muted/40">
        <div className="container mx-auto px-4 h-10 flex items-center gap-6 overflow-x-auto">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium whitespace-nowrap transition-colors ${
                location.pathname === l.to ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t px-4 pb-4 space-y-3">
          <form onSubmit={submitSearch} className="flex pt-3">
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search…" className="rounded-r-none" />
            <Button type="submit" className="rounded-l-none"><Search className="w-4 h-4" /></Button>
          </form>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium ${
                location.pathname === l.to ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {isAdmin && (
            <Link to="/admin" onClick={() => setOpen(false)} className="block text-sm font-medium text-primary">
              Admin dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
