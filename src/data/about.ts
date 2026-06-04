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
    title: "De la gestión al código",
    description:
      "Tras varios años liderando equipos y coordinando instalaciones deportivas, di el salto al desarrollo de software graduándome en DAM. Esa experiencia previa me ha dado una visión de negocio y una capacidad para resolver problemas bajo presión que ahora aplico al código.",
    icon: "rocket",
    accent: "cyan",
  },
  {
    title: "Mi stack tecnológico",
    description:
      "En el frontend trabajo principalmente con React, TypeScript y Tailwind CSS. En el backend y bases de datos tengo experiencia con Java, Spring Boot y MongoDB, además de manejar CMS Headless en arquitecturas desacopladas.",
      icon: "code",
    accent: "sky",
  },
  {
    title: "Qué busco aportar",
    description:
      "Tras terminar mis prácticas, busco un entorno donde consolidar mi perfil Full Stack. Me gustaría integrarme en un equipo donde pueda aportar mis habilidades de comunicación, mi autonomía y mis ganas de construir proyectos con impacto real.",
      icon: "target",
    accent: "fuchsia",
  },
];
