import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allServices, serviceCategories, type ServiceItem } from "@/data/services";
import { WHATSAPP_NUMBER } from "@/data/products";

const ServicesPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allServices : allServices.filter((s) => s.category === active);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div className="bg-dark py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-dark-foreground mb-2">Our Services</h1>
            <p className="text-dark-foreground/60 max-w-lg">
              From digital security to electrical installations — we deliver end-to-end solutions for homes, offices, and industries.
            </p>
          </div>
        </div>

        <div className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((s) => {
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hi! I'm interested in your "${s.title}" service. Can you share more details?`
                )}`;
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-xl overflow-hidden border bg-card group hover:shadow-lg transition-shadow"
                  >
                    <div className="overflow-hidden">
                      <img src={s.image} alt={s.title} loading="lazy" width={768} height={512} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-medium text-primary uppercase tracking-wide">{s.category}</span>
                      <h3 className="font-display font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{s.description}</p>
                      <Button size="sm" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground w-full" asChild>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Inquire
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
