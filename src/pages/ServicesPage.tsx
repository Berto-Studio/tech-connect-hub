import { motion } from "framer-motion";
import { Wrench, Wifi, Shield, Headphones, Building2, Camera, Clock, DollarSign, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, WHATSAPP_NUMBER } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  Wrench, Wifi, Shield, Headphones, Building: Building2, Camera,
};

const ServicesPage = () => (
  <>
    <Navbar />
    <div className="pt-16">
      {/* Header */}
      <div className="bg-dark py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-dark-foreground mb-2">
            Our Services
          </h1>
          <p className="text-dark-foreground/60 max-w-lg">
            Professional networking services — from installation to ongoing support and security.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 space-y-12">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Wrench;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi! I'm interested in your "${s.title}" service. Can you share more details?`
            )}`;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-8 items-start p-6 sm:p-8 rounded-2xl border bg-card ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Info side */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">{s.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{s.duration}</span>
                    </div>
                  </div>

                  <Button className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Inquire on WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Features side */}
                <div className="flex-1 w-full lg:max-w-md bg-background rounded-xl border p-6">
                  <h3 className="font-display font-semibold text-foreground mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ServicesPage;
