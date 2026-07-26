import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  useServices, useServiceCategories, useUpsertService, useDeleteService, type DbService,
} from "@/hooks/useCatalog";
import ImageUploader from "@/components/admin/ImageUploader";
import { toast } from "sonner";

const emptyForm = { id: "", title: "", slug: "", description: "", image_url: "", category_id: "", featured: false };
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const AdminServices = () => {
  const { data: services = [], isLoading } = useServices();
  const { data: cats = [] } = useServiceCategories();
  const upsert = useUpsertService();
  const del = useDeleteService();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const openNew = () => { setForm({ ...emptyForm }); setOpen(true); };
  const openEdit = (s: DbService) => {
    setForm({
      id: s.id, title: s.title, slug: s.slug, description: s.description ?? "",
      image_url: s.image_url ?? "", category_id: s.category_id ?? "", featured: s.featured,
    });
    setOpen(true);
  };

  const save = async () => {
    if (!form.title.trim()) { toast.error("Title is required"); return; }
    const payload: any = {
      title: form.title.trim(),
      slug: form.slug.trim() || slugify(form.title),
      description: form.description || null,
      image_url: form.image_url || null,
      category_id: form.category_id || null,
      featured: form.featured,
    };
    if (form.id) payload.id = form.id;
    try { await upsert.mutateAsync(payload); toast.success("Saved"); setOpen(false); }
    catch (e: any) { toast.error(e.message); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    try { await del.mutateAsync(id); toast.success("Deleted"); } catch (e: any) { toast.error(e.message); }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-bold">Services</h2>
        <Button onClick={openNew}><Plus className="w-4 h-4 mr-1" /> Add service</Button>
      </div>

      <div className="bg-background border rounded-lg overflow-x-auto">
        <table className="w-full text-sm min-w-[480px]">

          <thead className="bg-muted text-left">
            <tr><th className="p-3">Service</th><th className="p-3 hidden md:table-cell">Category</th><th className="p-3">Featured</th><th className="p-3"></th></tr>
          </thead>
          <tbody className="divide-y">
            {isLoading ? <tr><td colSpan={4} className="p-6 text-center text-muted-foreground">Loading…</td></tr> :
            services.length === 0 ? <tr><td colSpan={4} className="p-6 text-center text-muted-foreground">No services.</td></tr> :
            services.map((s) => (
              <tr key={s.id} className="hover:bg-muted/40">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    {s.image_url && <img src={s.image_url} alt="" className="w-10 h-10 rounded object-cover" />}
                    <div><div className="font-medium">{s.title}</div><div className="text-xs text-muted-foreground">{s.slug}</div></div>
                  </div>
                </td>
                <td className="p-3 hidden md:table-cell text-muted-foreground">{s.service_categories?.name ?? "—"}</td>
                <td className="p-3">{s.featured ? "Yes" : "—"}</td>
                <td className="p-3 text-right whitespace-nowrap">
                  <Button size="sm" variant="ghost" onClick={() => openEdit(s)}><Pencil className="w-4 h-4" /></Button>
                  <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(s.id)}><Trash2 className="w-4 h-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{form.id ? "Edit service" : "Add service"}</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <div><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} /></div>
            <div><Label>Slug</Label><Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="auto-generated" /></div>
            <div><Label>Description</Label><Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={4} /></div>
            <div><Label>Category</Label>
              <Select value={form.category_id} onValueChange={(v) => setForm({ ...form, category_id: v })}>
                <SelectTrigger><SelectValue placeholder="Select…" /></SelectTrigger>
                <SelectContent>{cats.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <ImageUploader label="Service image" value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url })} />
            <label className="flex items-center gap-2 text-sm">
              <Checkbox checked={form.featured} onCheckedChange={(v) => setForm({ ...form, featured: !!v })} /> Featured
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

export default AdminServices;
