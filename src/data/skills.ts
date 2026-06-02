import type { Accent } from "@/lib/accents";

import type { SkillLevel } from "@/lib/skillLevel";

export type SkillItem = {
  name: string;
  level?: SkillLevel;
};

export type SkillAccent = Accent;

export type SkillCategory = {
  title: string;
  items: SkillItem[];
  accent: SkillAccent;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    accent: "teal",
    items: [
      { name: "Java", level: "intermedio" },
      { name: "Python", level: "aprendiendo" },
      { name: "TypeScript", level: "intermedio" },
      { name: "JavaScript", level: "intermedio" },
      { name: "SQL", level: "intermedio" },
    ],
  },
  {
    title: "Frameworks",
    accent: "cyan",
    items: [
      { name: "React", level: "intermedio" },
      { name: "Next.js", level: "intermedio" },
      { name: "Spring Boot", level: "intermedio" },
      { name: "Android Studio", level: "aprendiendo" },
    ],
  },
  {
    title: "Bases de datos",
    accent: "sky",
    items: [
      { name: "PostgreSQL", level: "intermedio" },
      { name: "MySQL", level: "intermedio" },
      { name: "MongoDB", level: "aprendiendo" },
    ],
  },
  {
    title: "Herramientas y DevOps",
    accent: "purple",
    items: [
      { name: "GitHub", level: "intermedio" },
      { name: "Docker", level: "aprendiendo" },
      { name: "Postman", level: "intermedio" },
      { name: "Linux", level: "aprendiendo" },
    ],
  },
  {
    title: "Soft skills",
    accent: "fuchsia",
    items: [
      { name: "Trabajo en equipo" },
      { name: "Comunicación" },
      { name: "Aprendizaje continuo" },
      { name: "Resolución de problemas" },
    ],
  },
];
