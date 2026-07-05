import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  useProductCategories, useUpsertProductCategory, useDeleteProductCategory,
  useServiceCategories, useUpsertServiceCategory, useDeleteServiceCategory,
  type DbCategory,
} from "@/hooks/useCatalog";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

interface Props { kind: "product" | "service" }

const CategoryManager = ({ kind }: Props) => {
  const productHooks = { list: useProductCategories, upsert: useUpsertProductCategory, del: useDeleteProductCategory };
  const serviceHooks = { list: useServiceCategories, upsert: useUpsertServiceCategory, del: useDeleteServiceCategory };
  const h = kind === "product" ? productHooks : serviceHooks;

  const { data: cats = [], isLoading } = h.list();
  const upsert = h.upsert();
  const del = h.del();

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ id: "", name: "", slug: "" });

  const openNew = () => { setForm({ id: "", name: "", slug: "" }); setOpen(true); };
  const openEdit = (c: DbCategory) => { setForm({ id: c.id, name: c.name, slug: c.slug }); setOpen(true); };

  const save = async () => {
    if (!form.name.trim()) { toast.error("Name required"); return; }
    const payload: any = { name: form.name.trim(), slug: form.slug.trim() || slugify(form.name) };
    if (form.id) payload.id = form.id;
    try { await upsert.mutateAsync(payload); toast.success("Saved"); setOpen(false); }
    catch (e: any) { toast.error(e.message); }
  };
  const remove = async (id: string) => {
    if (!confirm("Delete this category?")) return;
    try { await del.mutateAsync(id); toast.success("Deleted"); } catch (e: any) { toast.error(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold">
          {kind === "product" ? "Product" : "Service"} Categories
        </h2>
        <Button onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add category</Button>
      </div>

      <div className="bg-background border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted text-left"><tr><th className="p-3">Name</th><th className="p-3">Slug</th><th className="p-3"></th></tr></thead>
          <tbody className="divide-y">
            {isLoading ? <tr><td colSpan={3} className="p-6 text-center text-muted-foreground">Loading…</td></tr> :
            cats.length === 0 ? <tr><td colSpan={3} className="p-6 text-center text-muted-foreground">No categories.</td></tr> :
            cats.map((c) => (
              <tr key={c.id} className="hover:bg-muted/40">
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3 text-muted-foreground">{c.slug}</td>
                <td className="p-3 text-right whitespace-nowrap">
                  <Button size="sm" variant="ghost" onClick={() => openEdit(c)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(c.id)}><Trash2 className="w-4 h-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>{form.id ? "Edit category" : "Add category"}</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div><Label>Slug</Label><Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated" /></div>
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

export default CategoryManager;
