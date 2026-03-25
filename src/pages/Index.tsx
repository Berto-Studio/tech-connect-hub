import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-router.jpg";
import { products, services } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Wrench, Wifi, Shield, Headphones, Building2, Camera } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Wrench, Wifi, Shield, Headphones, Building: Building2, Camera,
};

const Index = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/20 text-primary border border-primary/30">
              Networking Solutions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-dark-foreground mb-6">
              Power Your <br />
              <span className="text-primary">Connectivity</span>
            </h1>
            <p className="text-lg text-dark-foreground/70 mb-8 max-w-lg">
              Premium routers, modems, and networking equipment — plus expert installation and support services.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-dark-foreground/30 text-dark-foreground hover:bg-dark-foreground/10" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-dark-foreground/10">
              {[
                { value: "500+", label: "Products Sold" },
                { value: "50+", label: "Happy Clients" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-dark-foreground/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-dark-foreground/10">
              <img src={heroImg} alt="Networking equipment" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-lg">
              <p className="font-display font-bold text-lg">Menz Tech</p>
              <p className="text-xs opacity-80">Trusted in Ghana</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Our most popular networking gear.</p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/products" className="gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-2">Our Services</h2>
            <p className="text-muted-foreground">Expert networking services for every need.</p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/services" className="gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((s) => {
            const Icon = iconMap[s.icon] || Wrench;
            return (
              <Link
                key={s.id}
                to="/services"
                className="p-6 rounded-xl bg-background border hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{s.shortDescription}</p>
                <span className="text-sm font-semibold text-primary">{s.price}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default Index;
