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
    title: "Prácticas en empresa",
    organization: "Naviria Labs",
    description:
      "Como parte del equipo de Naviria Labs, participé en el diseño íntegro del blog Insights de Upgrade Hub y en el desarrollo de la landing page para la formación tech de los miembros del CSIC (Consejo Superior de Investigaciones Científicas).",
    type: "experience",
  },
  {
    id: "dam",
    period: "2024 — 2026",
    title: "Grado Superior DAM",
    organization: "Upgrade Hub",
    description:
      "Después de tantos años trabajando en el sector del fitness, decidí dar un giro a mi carrera y dedicarme al desarrollo de software. En el grado superior de DAM me he formado en el desarrollo web y móvil, programación orientada a objetos con Java y Python, bases de datos y entornos de desarrollo.",
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
