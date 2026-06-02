import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  return (
    <section id="proyectos" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          id="proyectos"
          title="Proyectos"
          subtitle="Todo lo aprendido, aplicado en mis prácticas"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              className={
                project.gridSpan === "full" ? "md:col-span-2" : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
