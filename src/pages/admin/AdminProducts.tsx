import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  useProducts, useProductCategories, useUpsertProduct, useDeleteProduct, type DbProduct,
} from "@/hooks/useCatalog";
import ImageUploader from "@/components/admin/ImageUploader";
import { toast } from "sonner";

const emptyForm = {
  id: "",
  name: "",
  slug: "",
  description: "",
  price: 0,
  image_url: "",
  category_id: "",
  badge: "",
  stock: 0,
  featured: false,
};

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const AdminProducts = () => {
  const { data: products = [], isLoading } = useProducts();
  const { data: cats = [] } = useProductCategories();
  const upsert = useUpsertProduct();
  const del = useDeleteProduct();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<typeof emptyForm>(emptyForm);

  const openNew = () => { setForm({ ...emptyForm }); setOpen(true); };
  const openEdit = (p: DbProduct) => {
    setForm({
      id: p.id, name: p.name, slug: p.slug, description: p.description ?? "",
      price: Number(p.price), image_url: p.image_url ?? "", category_id: p.category_id ?? "",
      badge: p.badge ?? "", stock: p.stock, featured: p.featured,
    });
    setOpen(true);
  };

  const save = async () => {
    if (!form.name.trim()) { toast.error("Name is required"); return; }
    const payload: any = {
      name: form.name.trim(),
      slug: form.slug.trim() || slugify(form.name),
      description: form.description || null,
      price: Number(form.price) || 0,
      image_url: form.image_url || null,
      category_id: form.category_id || null,
      badge: form.badge || null,
      stock: Number(form.stock) || 0,
      featured: form.featured,
    };
    if (form.id) payload.id = form.id;
    try {
      await upsert.mutateAsync(payload);
      toast.success(form.id ? "Product updated" : "Product created");
      setOpen(false);
    } catch (e: any) { toast.error(e.message); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    try { await del.mutateAsync(id); toast.success("Deleted"); } catch (e: any) { toast.error(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-bold">Products</h2>
        <Button onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add product</Button>
      </div>


      <div className="bg-background border rounded-lg overflow-x-auto">
        <table className="w-full text-sm min-w-[520px]">

          <thead className="bg-muted text-left">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3 hidden md:table-cell">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3 hidden sm:table-cell">Stock</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {isLoading ? (
              <tr><td colSpan={5} className="p-6 text-center text-muted-foreground">Loading…</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan={5} className="p-6 text-center text-muted-foreground">No products.</td></tr>
            ) : products.map((p) => (
              <tr key={p.id} className="hover:bg-muted/40">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    {p.image_url && <img src={p.image_url} alt="" className="w-10 h-10 rounded object-cover" />}
                    <div className="min-w-0">
                      <div className="font-medium truncate">{p.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{p.slug}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{p.product_categories?.name ?? "—"}</td>
                <td className="p-3 font-medium">GH₵{Number(p.price).toFixed(2)}</td>
                <td className="p-3 hidden sm:table-cell">{p.stock}</td>
                <td className="p-3 text-right whitespace-nowrap">
                  <Button size="sm" variant="ghost" onClick={() => openEdit(p)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(p.id)}><Trash2 className="w-4 h-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{form.id ? "Edit product" : "Add product"}</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div><Label>Slug (URL)</Label><Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated" /></div>
            <div><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} /></div>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>Price (GH₵)</Label><Input type="number" step="0.01" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} /></div>
              <div><Label>Stock</Label><Input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })} /></div>
            </div>
            <div><Label>Category</Label>
              <Select value={form.category_id} onValueChange={(v) => setForm({ ...form, category_id: v })}>
                <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                <SelectContent>{cats.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <ImageUploader label="Product image" value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} />
            <div><Label>Badge (optional)</Label><Input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} placeholder="e.g. New" /></div>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={form.featured} onCheckedChange={(v) => setForm({ ...form, featured: !!v })} /> Featured on homepage
            </label>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={save} disabled={upsert.isPending}>{upsert.isPending ? "Saving…" : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProducts;
