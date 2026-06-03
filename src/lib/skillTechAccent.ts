import { skillCategories } from "@/data/skills";
import type { Accent } from "@/lib/accents";

/** Nombres del stack que no están en skills.ts pero comparten categoría */
const STACK_ALIASES: Record<string, Accent> = {
  html: "teal",
  html5: "teal",
  css: "teal",
  css3: "teal",
  responsive: "cyan",
  "responsive design": "cyan",
  node: "teal",
  "node.js": "teal",
  git: "purple",
  github: "purple",
  tailwind: "cyan",
  "tailwind css": "cyan",
};

const DEFAULT_ACCENT: Accent = "cyan";

function normalizeTech(name: string): string {
  return name.trim().toLowerCase();
}

const accentByTech = (() => {
  const map = new Map<string, Accent>();

  for (const category of skillCategories) {
    for (const item of category.items) {
      map.set(normalizeTech(item.name), category.accent);
    }
  }

  for (const [alias, accent] of Object.entries(STACK_ALIASES)) {
    map.set(alias, accent);
  }

  return map;
})();

export function getTechAccent(tech: string): Accent {
  return accentByTech.get(normalizeTech(tech)) ?? DEFAULT_ACCENT;
}
