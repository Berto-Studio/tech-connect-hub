import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Quote, Clock, MessageSquare, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-router.jpg";
import aboutImg from "@/assets/about-us.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import { products } from "@/data/products";
import { allServices } from "@/data/services";
import { projects, type Project } from "@/data/projects";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import ProjectModal from "@/components/ProjectModal";
import type { Product } from "@/data/products";

const processSteps = [
  { icon: MessageSquare, title: "Consultation", desc: "We discuss your needs, budget, and goals to understand the best solution." },
  { icon: Search, title: "Assessment", desc: "Our team surveys your site and evaluates your current infrastructure." },
  { icon: Settings, title: "Implementation", desc: "We install, configure, and optimize everything to perfection." },
  { icon: CheckCircle, title: "Support", desc: "Ongoing maintenance and 24/7 support to keep you connected." },
];

const whyChooseUs = [
  { title: "Certified Experts", desc: "Our team holds industry certifications and years of hands-on experience." },
  { title: "Affordable Pricing", desc: "Competitive rates without compromising on quality or service." },
  { title: "Fast Turnaround", desc: "Most installations completed within 24 hours of booking." },
  { title: "Genuine Products", desc: "We sell only original, warranty-backed equipment from trusted brands." },
  { title: "24/7 Support", desc: "Round-the-clock technical assistance via phone and WhatsApp." },
  { title: "Tailored Solutions", desc: "Custom network designs for homes, offices, and enterprises." },
];

const testimonials = [
  { name: "Kwame Asante", role: "CEO, Asante Logistics", text: "MenzTech transformed our office connectivity. Their team was professional, fast, and the network hasn't dropped once since installation.", rating: 5 },
  { name: "Ama Darko", role: "Hotel Manager, Golden Palm", text: "Guests constantly compliment our WiFi now. MenzTech designed a system that handles hundreds of devices effortlessly.", rating: 5 },
  { name: "Yaw Mensah", role: "IT Director, GreenField Corp", text: "The security audit they performed uncovered vulnerabilities we didn't know existed. Their expertise saved us from potential breaches.", rating: 5 },
];

const teamMembers = [
  { image: team1, name: "Daniel Mensah", role: "Founder & Lead Engineer" },
  { image: team2, name: "Abena Osei", role: "Operations Manager" },
  { image: team3, name: "Kofi Boateng", role: "Senior Network Architect" },
  { image: team4, name: "Efua Amponsah", role: "Customer Success Lead" },
];

const partners = [
  "TP-Link", "Cisco", "Ubiquiti", "MikroTik", "Netgear", "Huawei", "D-Link", "Hikvision", "Dahua", "Aruba",
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto text-center">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/20 text-primary border border-primary/30">
              Networking Solutions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-dark-foreground mb-6">
              Power Your <br /><span className="text-primary">Connectivity</span>
            </h1>
            <p className="text-lg text-dark-foreground/70 mb-8 max-w-lg mx-auto">
              Premium routers, modems, and networking equipment — plus expert installation and support services.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" asChild><Link to="/products">Browse Products</Link></Button>
              <Button size="lg" variant="outline" className="border-dark-foreground/30 text-dark hover:bg-dark-foreground/10 bg-dark-foreground" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-dark-foreground/10 justify-center">
              {[{ value: "500+", label: "Products Sold" }, { value: "50+", label: "Happy Clients" }, { value: "24/7", label: "Support" }].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-dark-foreground/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img src={aboutImg} alt="MenzTech team at work" loading="lazy" width={800} height={600} className="rounded-2xl shadow-lg w-full object-cover" />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">Who We Are</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Building Ghana's Digital Backbone</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                MenzTech is a Ghanaian networking solutions company dedicated to bridging the connectivity gap. From homes to enterprises, we provide top-tier routers, modems, and networking equipment alongside expert installation and support services.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded with a passion for reliable connectivity, our certified team has served over 50 businesses and hundreds of households across Ghana. We don't just sell equipment — we design, install, and maintain networks that keep you connected.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Certified Engineers", "Ghana-Wide Service", "Genuine Products", "24/7 Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">Shop</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Our most popular networking gear.</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/products" className="gap-1">View All <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => setSelectedProduct(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">What We Offer</span>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">Expert Services</h2>
              <p className="text-muted-foreground">Professional services tailored to your needs.</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/services" className="gap-1">View All <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.slice(0, 6).map((s) => (
              <motion.div key={s.id} {...fadeUp} className="rounded-xl overflow-hidden border bg-card group hover:shadow-md transition-all">
                <div className="overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" width={768} height={512} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{s.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/services" className="gap-1">Learn More <ArrowRight className="w-3 h-3" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">How It Works</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-foreground mb-3">Our Proven Process</h2>
            <p className="text-dark-foreground/60 max-w-md mx-auto">Every project follows a structured approach to ensure quality results.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5 relative">
                  <step.icon className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-dark-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-dark-foreground/50">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">The MenzTech Difference</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Why Clients Trust Us</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Here's what sets us apart from the competition.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl border bg-card hover:border-primary/30 transition-colors">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">Our Portfolio</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Projects We're Proud Of</h2>
              <p className="text-muted-foreground max-w-md">A glimpse into some of our completed installations across Ghana.</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/projects" className="gap-1">View All <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((item, i) => (
              <motion.div key={item.id} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedProject(item)}
                className="rounded-xl overflow-hidden border bg-background group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img src={item.images[0]} alt={item.title} loading="lazy" width={640} height={512}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.shortDesc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Don't just take our word for it.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border bg-card relative">
                <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">The People Behind MenzTech</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Passionate professionals committed to keeping Ghana connected.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m, i) => (
              <motion.div key={m.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
                  <img src={m.image} alt={m.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-2 block">Trusted Partners</span>
            <h2 className="font-display text-2xl font-bold text-foreground">Brands We Work With</h2>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {[...partners, ...partners].map((name, i) => (
              <div key={`${name}-${i}`} className="flex-shrink-0 mx-8 flex items-center justify-center h-16">
                <span className="font-display text-xl font-bold text-muted-foreground/40 hover:text-primary transition-colors whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductDetailModal product={selectedProduct} open={!!selectedProduct} onOpenChange={(o) => !o && setSelectedProduct(null)} />
      <ProjectModal project={selectedProject} open={!!selectedProject} onOpenChange={(o) => !o && setSelectedProject(null)} />
      <Footer />
    </>
  );
};

export default Index;
