import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreProductCard from "@/components/store/StoreProductCard";
import StoreProductModal from "@/components/store/StoreProductModal";
import { useProducts, useProductCategories, type DbProduct } from "@/hooks/useCatalog";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";
  const [search, setSearch] = useState(q);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [selected, setSelected] = useState<DbProduct | null>(null);

  const { data: products = [], isLoading } = useProducts();
  const { data: cats = [] } = useProductCategories();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCat && p.category_id !== selectedCat) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (maxPrice !== "" && Number(p.price) > maxPrice) return false;
      return true;
    });
  }, [products, selectedCat, search, maxPrice]);

  return (
    <>
      <Navbar />
      <div className="pt-[112px] md:pt-[130px] min-h-screen bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-4 text-sm text-muted-foreground">
            Showing <strong className="text-foreground">{filtered.length}</strong> results
            {selectedCat && ` in ${cats.find((c) => c.id === selectedCat)?.name}`}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
            {/* Sidebar */}
            <aside className="bg-background border rounded-lg p-4 h-fit lg:sticky lg:top-32">
              <div className="mb-6">
                <h3 className="font-semibold text-sm mb-3">Search</h3>
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Product name…" />
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-sm mb-3">Category</h3>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setSelectedCat(null)}
                    className={`block w-full text-left text-sm py-1 ${!selectedCat ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    All categories
                  </button>
                  {cats.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCat(c.id)}
                      className={`block w-full text-left text-sm py-1 ${selectedCat === c.id ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm mb-3">Max price (GH₵)</h3>
                <Input
                  type="number"
                  min={0}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="Any"
                />
              </div>
            </aside>

            {/* Grid */}
            <div>
              {isLoading ? (
                <div className="text-center py-12 text-muted-foreground">Loading products…</div>
              ) : filtered.length === 0 ? (
                <div className="bg-background border rounded-lg p-12 text-center text-muted-foreground">
                  No products match your filters.
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                  {filtered.map((p) => (
                    <StoreProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <StoreProductModal product={selected} open={!!selected} onOpenChange={(o) => !o && setSelected(null)} />
      <Footer />
    </>
  );
};

export default ProductsPage;
