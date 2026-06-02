export type SkillLevel = "aprendiendo" | "intermedio" | "avanzado";

export const skillLevelLabels: Record<SkillLevel, string> = {
  aprendiendo: "Aprendiendo",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

export const skillLevelStars: Record<SkillLevel, 1 | 2 | 3> = {
  aprendiendo: 1,
  intermedio: 2,
  avanzado: 3,
};
