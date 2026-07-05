import { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./AuthContext";
import type { DbProduct } from "@/hooks/useCatalog";

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  products: DbProduct;
}

interface CartState {
  items: CartItem[];
  count: number;
  total: number;
  loading: boolean;
  addToCart: (productId: string, qty?: number) => Promise<void>;
  updateQty: (id: string, qty: number) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  clear: () => Promise<void>;
}

const CartCtx = createContext<CartState>({} as CartState);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const qc = useQueryClient();

  const { data: items = [], isLoading } = useQuery({
    queryKey: ["cart", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("cart_items")
        .select("id, product_id, quantity, products(*)")
        .eq("user_id", user!.id);
      if (error) throw error;
      return (data as any[]) as CartItem[];
    },
  });

  const invalidate = () => qc.invalidateQueries({ queryKey: ["cart", user?.id] });

  const addMut = useMutation({
    mutationFn: async ({ productId, qty }: { productId: string; qty: number }) => {
      if (!user) throw new Error("Sign in required");
      const existing = items.find((i) => i.product_id === productId);
      if (existing) {
        const { error } = await supabase
          .from("cart_items")
          .update({ quantity: existing.quantity + qty })
          .eq("id", existing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("cart_items")
          .insert({ user_id: user.id, product_id: productId, quantity: qty });
        if (error) throw error;
      }
    },
    onSuccess: invalidate,
  });

  const updateMut = useMutation({
    mutationFn: async ({ id, qty }: { id: string; qty: number }) => {
      const { error } = await supabase.from("cart_items").update({ quantity: qty }).eq("id", id);
      if (error) throw error;
    },
    onSuccess: invalidate,
  });

  const removeMut = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("cart_items").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: invalidate,
  });

  const clearMut = useMutation({
    mutationFn: async () => {
      if (!user) return;
      const { error } = await supabase.from("cart_items").delete().eq("user_id", user.id);
      if (error) throw error;
    },
    onSuccess: invalidate,
  });

  const count = items.reduce((n, i) => n + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.quantity * Number(i.products?.price ?? 0), 0);

  return (
    <CartCtx.Provider
      value={{
        items,
        count,
        total,
        loading: isLoading,
        addToCart: (productId, qty = 1) => addMut.mutateAsync({ productId, qty }),
        updateQty: (id, qty) => updateMut.mutateAsync({ id, qty }),
        removeItem: (id) => removeMut.mutateAsync(id),
        clear: () => clearMut.mutateAsync(),
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};

export const useCart = () => useContext(CartCtx);
