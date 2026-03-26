import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import type { Product } from "@/data/products";

interface Props {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDetailModal = ({ product, open, onOpenChange }: Props) => {
  if (!product) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I'd like to order:\n\n📦 ${product.name}\n💰 GH₵${product.price.toFixed(2)}\n\nPlease confirm availability.`
  )}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex gap-2 mb-2">
            <Badge variant="secondary">{product.category}</Badge>
            {product.badge && <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>}
          </div>
          <DialogTitle className="font-display text-2xl">{product.name}</DialogTitle>
          <DialogDescription>
            {product.description}
          </DialogDescription>
        </DialogHeader>

        <div className="my-4">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-xl" />
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-display font-semibold text-foreground mb-2">Key Features</h4>
            <ul className="space-y-2">
              {["High-performance hardware", "Easy setup & configuration", "Warranty-backed product", "Energy efficient design", "24/7 technical support included"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-xs text-muted-foreground">Price</p>
              <p className="font-display text-3xl font-bold text-foreground">GH₵{product.price.toFixed(2)}</p>
            </div>
            <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
