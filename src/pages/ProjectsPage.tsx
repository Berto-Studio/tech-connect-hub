import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import { projects, projectCategories, type Project } from "@/data/projects";

const ProjectsPage = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <div className="bg-dark py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-dark-foreground mb-2">Our Projects</h1>
            <p className="text-dark-foreground/60 max-w-lg">
              Explore our portfolio of completed installations and solutions across Ghana.
            </p>
          </div>
        </div>

        <div className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelected(p)}
                  className="rounded-xl overflow-hidden border bg-card group cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img src={p.images[0]} alt={p.title} loading="lazy" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{p.shortDesc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal project={selected} open={!!selected} onOpenChange={(o) => !o && setSelected(null)} />
      <Footer />
    </>
  );
};

export default ProjectsPage;
