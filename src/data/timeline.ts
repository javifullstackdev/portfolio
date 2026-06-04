export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "experience" | "other";
};


export const timeline: TimelineEntry[] = [
  {
    id: "practicas",
    period: "2026",
    title: "Frontend Developer Trainee",
    organization: "Naviria Labs",
    description:
      "Desarrollo frontend y maquetación responsive para proyectos corporativos, como el blog Insights de Upgrade Hub y la landing page del CSIC. Trabajo directo con Next.js, Tailwind CSS y consumo de datos mediante CMS Headless (Sanity) en un entorno real de producción",
    type: "experience",
  },
  {
    id: "dam",
    period: "2024 — 2026",
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    organization: "Upgrade Hub",
    description:
      "Especialización práctica en desarrollo web y móvil (React, Java, Spring Boot, bases de datos). Como proyecto final, co-desarrollé Zendr, una aplicación multiplataforma para reservas y geolocalización deportiva, gestionando la arquitectura, la división de tareas y el control de versiones con Git.",
    type: "education",
  },
  {
    id: "synergym",
    period: "febrero 2023 — mayo 2026",
    title: "Club Manager",
    organization: "Synergym",
    description:
      "Gestión integral de la operativa diaria en un club de gran volumen. Liderazgo de equipos, resolución de incidencias en tiempo real, análisis de KPIs de negocio y atención directa al cliente. Habilidades de organización y resolución de problemas bajo presión que ahora aplico al ciclo de desarrollo de software.",
    type: "other",
  },
];
