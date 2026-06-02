export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "experience" | "other";
};

/**
 * Orden: más reciente arriba, más antiguo abajo (se muestra en columna).
 */
export const timeline: TimelineEntry[] = [
  {
    id: "practicas",
    period: "2026",
    title: "Prácticas en empresa",
    organization: "Naviria Labs",
    description:
      "Participación en el ciclo de desarrollo: revisiones de código, tareas en backlog y colaboración con el equipo técnico.",
    type: "experience",
  },
  {
    id: "dam",
    period: "2024 — 2026",
    title: "Grado Superior DAM",
    organization: "Upgrade Hub",
    description:
      "Desarrollo de Aplicaciones Multiplataforma: programación orientada a objetos, bases de datos, desarrollo web y móvil, entornos de desarrollo, proyectos en equipo y prácticas en empresa.",
    type: "education",
  },
  {
    id: "synergym",
    period: "febrero 2023 — mayo 2026",
    title: "Club Manager",
    organization: "Synergym",
    description:
      "El deporte siempre ha sido una de mis grandes pasiones, y en Synergym tuve la oportunidad de crecer como profesional y llegar a ser Club Manager de uno de los clubs más grandes de España.",
    type: "other",
  },
];
