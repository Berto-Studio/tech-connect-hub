import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type { DbProduct } from "@/hooks/useCatalog";

interface Props {
  product: DbProduct;
  onClick?: () => void;
}

const StoreProductCard = ({ product, onClick }: Props) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const nav = useNavigate();

  const handleAdd = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      toast.error("Please sign in to add items to your cart");
      nav("/auth");
      return;
    }
    try {
      await addToCart(product.id, 1);
      toast.success("Added to cart");
    } catch (err: any) {
      toast.error(err.message ?? "Could not add to cart");
    }
  };

  return (
    <div
      onClick={onClick}
      className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-md hover:border-primary/40 transition-all cursor-pointer flex flex-col"
    >
      <div className="relative aspect-square bg-muted overflow-hidden">
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded bg-primary text-primary-foreground">
            {product.badge}
          </span>
        )}
        {product.image_url && (
          <img
            src={product.image_url}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      <div className="p-3 flex-1 flex flex-col">
        <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
          {product.product_categories?.name ?? "Product"}
        </p>
        <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-primary text-primary" />
          ))}
          <span className="text-[11px] text-muted-foreground ml-1">(120)</span>
        </div>
        <div className="mt-auto pt-2">
          <p className="text-lg font-bold text-foreground">
            GH₵{Number(product.price).toFixed(2)}
          </p>
          <p className="text-[11px] text-muted-foreground mb-2">
            {product.stock > 0 ? `In stock (${product.stock})` : "Out of stock"}
          </p>
          <Button
            size="sm"
            className="w-full"
            onClick={handleAdd}
            disabled={product.stock <= 0}
          >
            <ShoppingCart className="w-3.5 h-3.5 mr-1" /> Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreProductCard;
