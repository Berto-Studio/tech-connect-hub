import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Star } from "lucide-react";
import type { DbProduct } from "@/hooks/useCatalog";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Props {
  product: DbProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StoreProductModal = ({ product, open, onOpenChange }: Props) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const nav = useNavigate();

  if (!product) return null;

  const handleAdd = async () => {
    if (!user) {
      nav("/auth");
      onOpenChange(false);
      return;
    }
    try {
      await addToCart(product.id, 1);
      toast.success("Added to cart");
      onOpenChange(false);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex gap-2 mb-2 flex-wrap">
            {product.product_categories && <Badge variant="secondary">{product.product_categories.name}</Badge>}
            {product.badge && <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>}
          </div>
          <DialogTitle className="font-display text-2xl">{product.name}</DialogTitle>
          <DialogDescription className="sr-only">{product.name} details</DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <img src={product.image_url ?? ""} alt={product.name} className="w-full h-72 md:h-full object-cover rounded-lg bg-muted" />
          <div>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              <span className="text-sm text-muted-foreground ml-1">(120 reviews)</span>
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">GH₵{Number(product.price).toFixed(2)}</p>
            <p className="text-sm text-muted-foreground mb-4">
              {product.stock > 0 ? `In stock — ${product.stock} available` : "Currently out of stock"}
            </p>
            <p className="text-sm text-foreground mb-4 leading-relaxed">{product.description}</p>

            <ul className="space-y-2 mb-6">
              {["Warranty included", "Free installation guidance", "Certified original product"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />{f}
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full" onClick={handleAdd} disabled={product.stock <= 0}>
              <ShoppingCart className="w-4 h-4 mr-2" /> Add to cart
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StoreProductModal;
