import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import type { DbService } from "@/hooks/useCatalog";

interface Props {
  service: DbService | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StoreServiceModal = ({ service, open, onOpenChange }: Props) => {
  if (!service) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {service.service_categories && <Badge variant="secondary" className="w-fit mb-1">{service.service_categories.name}</Badge>}
          <DialogTitle className="font-display text-2xl">{service.title}</DialogTitle>
          <DialogDescription className="sr-only">{service.title}</DialogDescription>
        </DialogHeader>
        {service.image_url && (
          <img src={service.image_url} alt={service.title} className="w-full h-64 object-cover rounded-lg my-3" />
        )}
        <p className="text-sm text-foreground leading-relaxed mb-6">{service.description}</p>
        <Button asChild size="lg" className="w-full">
          <Link to="/contact"><Phone className="w-4 h-4 mr-2" /> Request a quote</Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default StoreServiceModal;
