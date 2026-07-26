import { useRef, useState } from "react";
import { Upload, X, Loader2, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const BUCKET = "catalog-images";
const TEN_YEARS = 60 * 60 * 24 * 365 * 10;
const MAX_BYTES = 5 * 1024 * 1024;

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

const ImageUploader = ({ value, onChange, label = "Image" }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const upload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      toast.error("Please choose an image file");
      return;
    }
    if (file.size > MAX_BYTES) {
      toast.error("Image must be smaller than 5MB");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from(BUCKET)
        .upload(path, file, { cacheControl: "31536000", upsert: false, contentType: file.type });
      if (upErr) throw upErr;

      const { data, error: signErr } = await supabase.storage.from(BUCKET).createSignedUrl(path, TEN_YEARS);
      if (signErr) throw signErr;

      onChange(data.signedUrl);
      toast.success("Image uploaded");
    } catch (e: any) {
      toast.error(e.message ?? "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">{label}</div>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const file = e.dataTransfer.files?.[0];
          if (file) upload(file);
        }}
        onClick={() => !uploading && inputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed p-4 text-center cursor-pointer transition-colors ${
          dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-muted/30"
        }`}
      >
        {value ? (
          <>
            <img src={value} alt="Selected" className="max-h-40 w-auto rounded object-contain" />
            <Button
              type="button"
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 h-7 w-7"
              onClick={(e) => { e.stopPropagation(); onChange(""); }}
              aria-label="Remove image"
            >
              <X className="w-4 h-4" />
            </Button>
            <span className="text-xs text-muted-foreground">Click or drop to replace</span>
          </>
        ) : (
          <>
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImageIcon className="w-5 h-5 text-muted-foreground" />}
            </div>
            <div className="text-sm font-medium">{uploading ? "Uploading…" : "Drag & drop an image"}</div>
            <div className="text-xs text-muted-foreground">or click to browse (max 5MB)</div>
          </>
        )}
        {uploading && value && (
          <div className="absolute inset-0 bg-background/70 flex items-center justify-center rounded-lg">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        )}
      </div>
      <Button type="button" variant="outline" size="sm" className="w-full" disabled={uploading} onClick={() => inputRef.current?.click()}>
        <Upload className="w-4 h-4 mr-2" /> {value ? "Choose another image" : "Select from device"}
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) upload(f); }}
      />
    </div>
  );
};

export default ImageUploader;
