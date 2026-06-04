import { profile } from "@/data/profile";

export type ProjectImageSource =
  | string
  | {
      src: string;
      src2x?: string;
    };

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: ProjectImageSource;
  images?: ProjectImageSource[];
  featured?: boolean;
  gridSpan?: "full";
  imageFit?: "cover" | "contain";
  imageLayout?: "frame" | "intrinsic";
  imageDimensions?: { width: number; height: number };
  imageForTheme?: {
    light: ProjectImageSource;
    dark: ProjectImageSource;
  };
};

export function resolveProjectImage(source: ProjectImageSource): {
  src: string;
  srcSet?: string;
} {
  if (typeof source === "string") {
    return { src: source };
  }
  const srcSet = source.src2x
    ? `${source.src} 1x, ${source.src2x} 2x`
    : undefined;
  return { src: source.src, srcSet };
}

export function getProjectImageList(
  project: Project,
  theme?: "light" | "dark",
): {
  src: string;
  srcSet?: string;
}[] {
  if (project.imageForTheme) {
    const active = theme ?? "dark";
    const source =
      active === "light"
        ? project.imageForTheme.light
        : project.imageForTheme.dark;
    return [resolveProjectImage(source)];
  }
  if (project.images?.length) {
    return project.images.map(resolveProjectImage);
  }
  if (project.image) {
    return [resolveProjectImage(project.image)];
  }
  return [];
}

export const projects: Project[] = [
  {
    id: "portfolio-javifullstack",
    title: "javifullstack.dev | Portfolio personal",
    description:
      "Portfolio dinámico y modular diseñado con arquitectura App Router. Desarrollado con Next.js y TypeScript, integrando modo oscuro, animaciones con Framer Motion y generación automática de CV en PDF a partir de los datos de la app.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React PDF",
      "App Router",
    ],
    githubUrl: "https://github.com/javifullstackdev/portfolio",
    demoUrl: profile.portfolioUrl || undefined,
    imageForTheme: {
      light: "/projects/portfolio/heroPortfolioDarkMode.webp",
      dark: "/projects/portfolio/heroPortfolioLightMode.webp",
    },
    imageLayout: "intrinsic",
    imageDimensions: { width: 1920, height: 900 },
    featured: true,
    gridSpan: "full",
  },
  {
    id: "blog-insights",
    title: "Blog Insights | Upgrade Hub",
    description:
      "Desarrollo frontend de un blog corporativo integrado con un CMS Headless para la gestión dinámica de contenidos. Incluye filtrado avanzado de artículos, optimización de CTAs y diseño 100% responsive.",
    stack: ["HTML5", "CSS3", "Next.js", "TypeScript", "Tailwind CSS", "Responsive"],
    demoUrl: "https://www.upgrade-hub.com/insights/",
    images: [
      "/projects/blog-insights/blog-insights.png",
      "/projects/blog-insights/blog-insights-2.png",
    ],
    featured: true,
  },
  {
    id: "landing-csic",
    title: "Landing Page CSIC | Upgrade Hub",
    description:
      "Landing page institucional enfocada a la captación para la formación digital del CSIC. Maquetación píxel-perfect alineada con la identidad de marca, navegación optimizada y desarrollo de componentes reutilizables.",
    stack: ["HTML5", "CSS3", "Next.js", "TypeScript", "Tailwind CSS", "Responsive"],
    demoUrl: "https://landing.upgrade-hub.com/itinerario-csic/",
    images: [
      "/projects/landing-csic/landing-csic-hero.png",
      "/projects/landing-csic/landing-csic-especializaciones.png",
      "/projects/landing-csic/landing-csic-bootcamp-data-ia.png",
      "/projects/landing-csic/landing-csic-narrativa-datos.png",
    ],
    featured: true,
  },
];

export function getProjectImages(project: Project): string[] {
  return getProjectImageList(project).map((img) => img.src);
}
