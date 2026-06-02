"use client";

import { useState } from "react";
import { Code2, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { ProjectCardImages } from "@/components/ui/ProjectCardImages";
import type { Project } from "@/data/projects";
import { getProjectImages } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({
  project,
  index = 0,
  className,
}: ProjectCardProps) {
  const isWide = project.gridSpan === "full";
  const images = getProjectImages(project);
  const sizes = isWide
    ? "(max-width: 768px) 100vw, 1280px"
    : "(max-width: 768px) 100vw, 50vw";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08} className={className}>
      <article
        className="group card-glow flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-br from-cyan-950/50 to-violet-950/50",
            isWide ? "aspect-[2/1] md:aspect-[21/9]" : "aspect-video",
          )}
        >
          {images.length > 0 ? (
            <ProjectCardImages
              images={images}
              alt={`Captura del proyecto ${project.title}`}
              isWide={isWide}
              sizes={sizes}
              isHovered={isHovered}
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-sm text-muted">
              {project.title}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} className="font-mono text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-auto flex gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"
                aria-label={`Ver código de ${project.title} en GitHub`}
              >
                <Code2 className="h-4 w-4" />
                Código
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 rounded"
                aria-label={`Ver demo de ${project.title}`}
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
