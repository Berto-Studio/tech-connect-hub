import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-router.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
    </div>

    <div className="container relative z-10 mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/20 text-primary border border-primary/30">
          Networking Solutions
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-dark-foreground mb-6">
          Power Your <span className="text-primary">Connectivity</span>
        </h1>
        <p className="text-lg text-dark-foreground/70 mb-8 max-w-lg">
          Premium routers, modems, and networking equipment — plus expert installation and support services to keep you connected.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href="#products">Browse Products</a>
          </Button>
          <Button size="lg" variant="outline" className="border-dark-foreground/30 text-dark-foreground hover:bg-dark-foreground/10" asChild>
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </motion.div>
    </div>

    <a href="#products" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-dark-foreground/50">
      <ArrowDown className="w-6 h-6" />
    </a>
  </section>
);

export default HeroSection;
