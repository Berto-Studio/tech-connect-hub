import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/data/products";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-dark text-dark-foreground">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-dark-foreground/60 mb-10">
          Have questions? Reach out to us and we'll get back to you right away.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: MapPin, label: "Visit Us", value: "123 Tech Street, City" },
            { icon: Phone, label: "Call Us", value: "+1 (234) 567-890" },
            { icon: Mail, label: "Email Us", value: "info@menztech.com" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="p-5 rounded-xl border border-dark-foreground/10 bg-dark-foreground/5">
              <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium mb-1">{label}</p>
              <p className="text-sm text-dark-foreground/60">{value}</p>
            </div>
          ))}
        </div>

        <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to learn more about your products and services.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ContactSection;
