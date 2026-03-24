import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { WHATSAPP_NUMBER } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'd like to order:\n\n📦 ${product.name}\n💰 $${product.price.toFixed(2)}\n\nPlease confirm availability.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-xl bg-card border overflow-hidden hover:shadow-lg transition-shadow"
    >
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide rounded-full bg-primary text-primary-foreground">
          {product.badge}
        </span>
      )}

      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="font-display font-semibold text-foreground leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-foreground">${product.price.toFixed(2)}</span>
          <Button size="sm" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              Order
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
