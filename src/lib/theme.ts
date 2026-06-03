export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio-theme";

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function resolveTheme(): Theme {
  return getStoredTheme() ?? "dark";
}
