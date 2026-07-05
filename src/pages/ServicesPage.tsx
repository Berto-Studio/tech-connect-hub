import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreServiceCard from "@/components/store/StoreServiceCard";
import StoreServiceModal from "@/components/store/StoreServiceModal";
import { useServices, useServiceCategories, type DbService } from "@/hooks/useCatalog";

const ServicesPage = () => {
  const { data: services = [], isLoading } = useServices();
  const { data: cats = [] } = useServiceCategories();
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [selected, setSelected] = useState<DbService | null>(null);

  const filtered = useMemo(
    () => (selectedCat ? services.filter((s) => s.category_id === selectedCat) : services),
    [services, selectedCat]
  );

  return (
    <>
      <Navbar />
      <div className="pt-[112px] md:pt-[130px] min-h-screen bg-muted/30">
        <div className="bg-background border-b">
          <div className="container mx-auto px-4 py-10">
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2">Our Services</h1>
            <p className="text-muted-foreground max-w-xl">
              End-to-end installation, security, and IT services delivered by certified specialists.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCat(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedCat ? "bg-primary text-primary-foreground" : "bg-background border text-foreground hover:bg-muted"
              }`}
            >
              All services
            </button>
            {cats.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCat === c.id ? "bg-primary text-primary-foreground" : "bg-background border text-foreground hover:bg-muted"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">Loading services…</div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((s) => (
                <StoreServiceCard key={s.id} service={s} onClick={() => setSelected(s)} />
              ))}
            </div>
          )}
        </div>
      </div>
      <StoreServiceModal service={selected} open={!!selected} onOpenChange={(o) => !o && setSelected(null)} />
      <Footer />
    </>
  );
};

export default ServicesPage;
