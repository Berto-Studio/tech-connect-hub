import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER } from "@/data/products";

const ContactPage = () => (
  <>
    <Navbar />
    <div className="pt-16">
      {/* Header */}
      <div className="bg-dark py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-dark-foreground mb-2">Contact Us</h1>
          <p className="text-dark-foreground/60 max-w-lg">
            Have a project in mind? Reach out and let's discuss how we can help.
          </p>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need a CCTV installation, network setup, or a full smart building solution — our team is ready to help. 
                Contact us through any of the channels below, or simply send us a WhatsApp message for the fastest response.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: MapPin, label: "Visit Us", value: "123 Tech Street, Accra, Ghana", sub: "Mon–Fri, 8:00 AM – 6:00 PM" },
                  { icon: Phone, label: "Call Us", value: "+233 (0) 234 567 890", sub: "Available during business hours" },
                  { icon: Mail, label: "Email Us", value: "info@menztech.com", sub: "We respond within 24 hours" },
                  { icon: Clock, label: "Working Hours", value: "Monday – Friday: 8AM – 6PM", sub: "Saturday: 9AM – 2PM | Sunday: Closed" },
                ].map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl border bg-card">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">{label}</p>
                      <p className="text-sm text-foreground mt-0.5">{value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground w-full sm:w-auto" asChild>
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

            {/* Right — Map */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden border h-80 lg:h-96">
                <iframe
                  title="MenzTech Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127065.99735495!2d-0.2630637!3d5.6037168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border bg-card text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-1">500+</p>
                  <p className="text-xs text-muted-foreground">Products Sold</p>
                </div>
                <div className="p-5 rounded-xl border bg-card text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-1">50+</p>
                  <p className="text-xs text-muted-foreground">Projects Completed</p>
                </div>
                <div className="p-5 rounded-xl border bg-card text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-1">24/7</p>
                  <p className="text-xs text-muted-foreground">Support Available</p>
                </div>
                <div className="p-5 rounded-xl border bg-card text-center">
                  <p className="font-display text-3xl font-bold text-primary mb-1">4.9★</p>
                  <p className="text-xs text-muted-foreground">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ContactPage;
