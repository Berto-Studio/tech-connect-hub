import { motion } from "framer-motion";
import { Wrench, Wifi, Shield, Headphones } from "lucide-react";
import { services } from "@/data/products";

const iconMap: Record<string, React.ElementType> = { Wrench, Wifi, Shield, Headphones };

const ServicesSection = () => (
  <section id="services" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
          Our Services
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          From installation to ongoing support — we've got your network covered.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon] || Wrench;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-background border hover:border-primary/40 hover:shadow-md transition-all text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
