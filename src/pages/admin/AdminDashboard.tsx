import { Package, Wrench, FolderTree, Layers } from "lucide-react";
import { useProducts, useServices, useProductCategories, useServiceCategories } from "@/hooks/useCatalog";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { data: products = [] } = useProducts();
  const { data: services = [] } = useServices();
  const { data: pcats = [] } = useProductCategories();
  const { data: scats = [] } = useServiceCategories();

  const stats = [
    { label: "Products", value: products.length, icon: Package, to: "/admin/products", color: "bg-blue-500/10 text-blue-600" },
    { label: "Product Categories", value: pcats.length, icon: FolderTree, to: "/admin/product-categories", color: "bg-indigo-500/10 text-indigo-600" },
    { label: "Services", value: services.length, icon: Wrench, to: "/admin/services", color: "bg-emerald-500/10 text-emerald-600" },
    { label: "Service Categories", value: scats.length, icon: Layers, to: "/admin/service-categories", color: "bg-amber-500/10 text-amber-600" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Welcome back</h2>
        <p className="text-muted-foreground text-sm">Here's an overview of your catalog.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link key={s.label} to={s.to} className="bg-background border rounded-lg p-5 hover:shadow-md hover:border-primary/40 transition-all">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${s.color}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-background border rounded-lg p-5">
          <h3 className="font-semibold mb-3">Recent Products</h3>
          <ul className="space-y-2">
            {products.slice(0, 5).map((p) => (
              <li key={p.id} className="flex items-center gap-3 text-sm">
                {p.image_url && <img src={p.image_url} alt="" className="w-9 h-9 rounded object-cover" />}
                <span className="flex-1 truncate">{p.name}</span>
                <span className="text-muted-foreground">GH₵{Number(p.price).toFixed(2)}</span>
              </li>
            ))}
            {products.length === 0 && <li className="text-sm text-muted-foreground">No products yet.</li>}
          </ul>
        </div>
        <div className="bg-background border rounded-lg p-5">
          <h3 className="font-semibold mb-3">Recent Services</h3>
          <ul className="space-y-2">
            {services.slice(0, 5).map((s) => (
              <li key={s.id} className="flex items-center gap-3 text-sm">
                {s.image_url && <img src={s.image_url} alt="" className="w-9 h-9 rounded object-cover" />}
                <span className="flex-1 truncate">{s.title}</span>
              </li>
            ))}
            {services.length === 0 && <li className="text-sm text-muted-foreground">No services yet.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
