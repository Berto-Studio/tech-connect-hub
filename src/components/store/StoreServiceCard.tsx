import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DbService } from "@/hooks/useCatalog";

interface Props {
  service: DbService;
  onClick?: () => void;
}

const StoreServiceCard = ({ service, onClick }: Props) => (
  <div
    onClick={onClick}
    className="group bg-background border rounded-lg overflow-hidden hover:shadow-md hover:border-primary/40 transition-all cursor-pointer"
  >
    <div className="aspect-video overflow-hidden bg-muted">
      {service.image_url && (
        <img src={service.image_url} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      )}
    </div>
    <div className="p-4">
      {service.service_categories && (
        <p className="text-[11px] text-primary uppercase tracking-wide font-semibold mb-1">
          {service.service_categories.name}
        </p>
      )}
      <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{service.description}</p>
      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:bg-transparent">
        Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </Button>
    </div>
  </div>
);

export default StoreServiceCard;
