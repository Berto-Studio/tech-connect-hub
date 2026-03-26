import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: Props) => {
  if (!project) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi! I saw your "${project.title}" project and I'm interested in a similar solution. Can we discuss?`
  )}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="secondary">{project.category}</Badge>
            {project.tags.map((t) => (
              <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
            ))}
          </div>
          <DialogTitle className="font-display text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.shortDesc}</DialogDescription>
        </DialogHeader>

        {/* Image gallery */}
        <div className="grid grid-cols-3 gap-2 my-4">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt={`${project.title} ${i + 1}`} loading="lazy" className="w-full h-32 object-cover rounded-lg" />
          ))}
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="font-display font-semibold text-foreground mb-1">Overview</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.fullDesc}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-1">The Challenge</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-1">Our Solution</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-1 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" /> Results
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.result}</p>
          </div>
        </div>

        <div className="pt-4 border-t mt-4">
          <Button className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground w-full sm:w-auto" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Discuss a Similar Project
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
