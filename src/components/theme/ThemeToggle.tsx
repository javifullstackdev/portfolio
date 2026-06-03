"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, mounted } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border-subtle bg-surface-muted p-1 shadow-sm",
        className,
      )}
      role="group"
      aria-label="Tema de la interfaz"
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          "relative flex h-8 w-9 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400",
          isLight
            ? "bg-gradient-to-br from-cyan-400/25 to-violet-400/25 text-cyan-600 shadow-sm dark:text-cyan-300"
            : "text-muted hover:text-foreground",
        )}
        aria-pressed={isLight}
        aria-label="Tema claro"
      >
        <Sun className="h-4 w-4" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "relative flex h-8 w-9 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400",
          !isLight
            ? "bg-gradient-to-br from-cyan-400/25 to-violet-400/25 text-cyan-300 shadow-sm"
            : "text-muted hover:text-foreground",
        )}
        aria-pressed={!isLight}
        aria-label="Tema oscuro"
      >
        <Moon className="h-4 w-4" aria-hidden />
      </button>
      <span className="sr-only">
        {mounted ? (isLight ? "Tema claro activo" : "Tema oscuro activo") : "Cargando tema"}
      </span>
    </div>
  );
}
