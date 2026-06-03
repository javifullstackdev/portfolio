import type { Accent } from "@/lib/accents";

export type AboutAccent = Accent;

export type AboutCard = {
  title: string;
  description: string;
  emphasis?: readonly string[];
  icon: "rocket" | "code" | "target";
  accent: AboutAccent;
};

export const aboutCards: AboutCard[] = [
  {
    title: "Formación DAM",
    description:
      "Tras finalizar el Grado Superior de DAM y las 500 horas de prácticas en empresa, tengo muchísimas ganas de aprender y crecer en equipos que construyan software con impacto.",
    emphasis: ["ganas de aprender"],
    icon: "rocket",
    accent: "cyan",
  },
  {
    title: "Stack y experiencia",
    description:
      "Hasta ahora he trabajado con Java y Python, frameworks como React y Spring Boot, bases de datos tanto relacionales como no relacionales (MongoDB) y entornos de desarrollo como Android Studio.",
    emphasis: ["Java", "Python", "React", "(MongoDB)", "Android Studio"],
      icon: "code",
    accent: "sky",
  },
  {
    title: "Qué busco",
    description:
      "Busco mi primera incorporación en el sector tech, donde pueda seguir formándome y seguir trabajando en proyectos reales como he hecho en mis prácticas con Naviria Labs.",
    emphasis: ["primera incorporación", "formándome", "vacantes en toda España"],
      icon: "target",
    accent: "fuchsia",
  },
];
