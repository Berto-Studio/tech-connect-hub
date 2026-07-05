import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const CartPage = () => {
  const { user, loading: authLoading } = useAuth();
  const { items, total, updateQty, removeItem, loading } = useCart();

  if (authLoading) return <div className="min-h-screen flex items-center justify-center">Loading…</div>;

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="pt-[130px] min-h-screen bg-muted/30">
          <div className="container mx-auto px-4 py-16 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="font-display text-2xl font-bold mb-2">Sign in to see your cart</h1>
            <p className="text-muted-foreground mb-6">Save items and check out faster when you're signed in.</p>
            <Button asChild size="lg"><Link to="/auth">Sign in</Link></Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const checkout = () => {
    toast.success("Checkout flow coming soon — payment integration pending.");
  };

  return (
    <>
      <Navbar />
      <div className="pt-[130px] min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-display text-2xl font-bold mb-6">Shopping Cart</h1>

          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading cart…</div>
          ) : items.length === 0 ? (
            <div className="bg-background border rounded-lg p-12 text-center">
              <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground mb-4">Your cart is empty.</p>
              <Button asChild><Link to="/products">Continue shopping</Link></Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_320px] gap-6">
              <div className="bg-background border rounded-lg divide-y">
                {items.map((item) => (
                  <div key={item.id} className="p-4 flex gap-4">
                    <img
                      src={item.products?.image_url ?? ""}
                      alt={item.products?.name}
                      className="w-24 h-24 object-cover rounded bg-muted shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground line-clamp-2">{item.products?.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">In stock</p>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQty(item.id, Math.max(1, item.quantity - 1))}>
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQty(item.id, item.quantity + 1)}>
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive ml-2" onClick={() => removeItem(item.id)}>
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </Button>
                      </div>
                    </div>
                    <p className="font-bold text-foreground shrink-0">
                      GH₵{(Number(item.products?.price ?? 0) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <aside className="bg-background border rounded-lg p-5 h-fit lg:sticky lg:top-32">
                <h2 className="font-display font-semibold text-lg mb-4">Order summary</h2>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between"><span>Items</span><span>{items.length}</span></div>
                  <div className="flex justify-between"><span>Subtotal</span><span>GH₵{total.toFixed(2)}</span></div>
                  <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>Calculated at checkout</span></div>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t mb-4">
                  <span>Total</span><span>GH₵{total.toFixed(2)}</span>
                </div>
                <Button className="w-full" size="lg" onClick={checkout}>Proceed to checkout</Button>
                <Button variant="ghost" className="w-full mt-2" asChild>
                  <Link to="/products">Continue shopping</Link>
                </Button>
              </aside>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
