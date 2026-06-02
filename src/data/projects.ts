export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  /** Una sola captura */
  image?: string;
  /** Varias capturas con transición automática (tiene prioridad sobre image) */
  images?: string[];
  featured?: boolean;
  /** Ocupa las dos columnas del grid (ej. TFG destacado) */
  gridSpan?: "full";
};

export const projects: Project[] = [
  {
    id: "blog-insights",
    title: "Blog Insights | Upgrade Hub",
    description:
      "Sección de blog con hero visual, CTAs de conversión y maquetación responsive integrada en el ecosistema Upgrade Hub",
    stack: ["HTML", "CSS", "Next.js", "TypeScript", "Responsive"],
    demoUrl: "https://www.upgrade-hub.com/insights/",
    images: [
      "/projects/blog-insights.png",
      "/projects/blog-insights-2.png",
    ],
    featured: true,
  },
  {
    id: "landing-csic",
    title: "Landing Page CSIC | Upgrade Hub",
    description:
      "Landing de captación para la formación digital del CSIC: hero con CTA, navegación clara y diseño responsive alineado con la identidad Upgrade Hub",
    stack: ["HTML", "CSS", "Next.js", "TypeScript", "Responsive"],
    demoUrl: "https://landing.upgrade-hub.com/itinerario-csic/",
    images: [
      "/projects/landing-csic.png",
      "/projects/landing-csic-2.png",
    ],
    featured: true,
  },
];

export function getProjectImages(project: Project): string[] {
  if (project.images?.length) return project.images;
  if (project.image) return [project.image];
  return [];
}
