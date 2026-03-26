import { useState } from "react";
import { products, categories, type Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

const ProductsSection = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Product | null>(null);
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <ProductDetailModal product={selected} open={!!selected} onOpenChange={(o) => !o && setSelected(null)} />
    </section>
  );
};

export default ProductsSection;
