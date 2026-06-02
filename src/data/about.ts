import type { Accent } from "@/lib/accents";

export type AboutAccent = Accent;

export type AboutCard = {
  title: string;
  description: string;
  icon: "rocket" | "code" | "target";
  accent: AboutAccent;
};

export const aboutCards: AboutCard[] = [
  {
    title: "Formación DAM",
    description:
      "Acabo de finalizar el Grado Superior de Desarrollo de Aplicaciones Multiplataforma (DAM) y tengo muchísimas ganas de aprender y crecer en equipos que construyan software con impacto.",
    icon: "rocket",
    accent: "cyan",
  },
  {
    title: "Stack y experiencia",
    description:
      "Durante el grado he trabajado con lenguajes como Java y Python, frameworks como React y Spring Boot, bases de datos tanto relacionales como no relacionales (MongoDB) y entornos de desarrollo como Android Studio.",
    icon: "code",
    accent: "sky",
  },
  {
    title: "Qué busco",
    description:
      "Busco mi primera incorporación en el sector tech, donde pueda seguir formándome y aplicar lo aprendido en proyectos reales. Tengo muchísimas ganas de crecer y aprender en un entorno de trabajo colaborativo.",
    icon: "target",
    accent: "purple",
  },
];
