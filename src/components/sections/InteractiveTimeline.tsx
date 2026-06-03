"use client";

import { useCallback, useState } from "react";
import {
  Briefcase,
  Dumbbell,
  GraduationCap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { timeline, type TimelineEntry } from "@/data/timeline";
import { cn } from "@/lib/utils";
import { GiBullyMinion, GiMuscleUp, GiMuscularTorso } from "react-icons/gi";

const typeConfig: Record<
  TimelineEntry["type"],
  {
    Icon: LucideIcon;
    dot: string;
    card: string;
    org: string;
  }
> = {
  education: {
    Icon: GraduationCap,
    dot: "border-sky-400/60 bg-sky-400/15 text-sky-400",
    card: cn(
      "border-border-subtle",
      "transition-[box-shadow,border-color,transform] duration-300 ease-out",
      "hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/35",
      "md:hover:scale-[1.01] motion-reduce:md:hover:scale-100",
    ),
    org: "text-cyan-700/90 dark:text-cyan-300/90",
  },
  experience: {
    Icon: Briefcase,
    dot: "border-cyan-400/60 bg-cyan-400/15 text-cyan-400",
    card: cn(
      "border-border-subtle",
      "transition-[box-shadow,border-color,transform] duration-300 ease-out",
      "hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/35",
      "md:hover:scale-[1.01] motion-reduce:md:hover:scale-100",
    ),
    org: "text-cyan-700/90 dark:text-cyan-300/90",
  },
  other: {
    Icon: Dumbbell,
    dot: "border-violet-400/60 bg-violet-400/15 text-violet-400",
    card: cn(
      "border-border-subtle",
      "transition-[box-shadow,border-color,transform] duration-300 ease-out",
      "hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-400/35",
      "md:hover:scale-[1.01] motion-reduce:md:hover:scale-100",
    ),
    org: "text-violet-700/90 dark:text-violet-300/90",
  },
};

function TimelineRow({
  entry,
  index,
  isLast,
  isOpen,
  onToggle,
}: {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const { Icon, dot, card, org } = typeConfig[entry.type];
  const mobileDescOpen = isOpen || !!prefersReducedMotion;
  const descId = `timeline-desc-${entry.id}`;

  const handleSummaryClick = useCallback(() => {
    if (window.matchMedia("(min-width: 768px)").matches) return;
    onToggle(entry.id);
  }, [entry.id, onToggle]);

  const handleSummaryKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (window.matchMedia("(min-width: 768px)").matches) return;
      e.preventDefault();
      onToggle(entry.id);
    },
    [entry.id, onToggle],
  );

  return (
    <FadeIn delay={index * 0.08} className="min-w-0">
      <li className="group/row relative flex gap-4 sm:gap-6">
        <div className="relative z-10 flex w-11 shrink-0 flex-col items-center overflow-visible">
          {!isLast && (
            <span
              className="absolute top-11 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--timeline-line-from)] via-[var(--timeline-line-via)] to-transparent"
              aria-hidden
            />
          )}
          <div
            className={cn(
              "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 shadow-[0_0_0_4px_var(--background)] transition-transform duration-300",
              "group-hover/row:scale-110",
              dot,
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </div>
        </div>

        <article
          className={cn(
            "relative mb-5 flex w-full min-w-0 flex-1 flex-col overflow-hidden rounded-xl border bg-card/90 sm:mb-6",
            "md:origin-left",
            isOpen && "border-divider",
            "hover:z-20",
            card,
          )}
        >
          {/* Escritorio: cabecera + descripción en columna, ancho completo */}
          <div className="hidden w-full flex-col md:flex">
            <header className="space-y-1 px-5 pb-3 pt-4">
              <p className="font-mono text-[11px] leading-none text-muted">
                {entry.period}
              </p>
              <p className="text-base font-semibold leading-tight text-foreground sm:text-lg">
                {entry.title}
              </p>
              <h2
                className={cn(
                  "text-sm font-semibold leading-snug sm:text-base",
                  org,
                )}
              >
                {entry.organization}
              </h2>
            </header>
            <p className="border-t border-divider px-5 py-3.5 text-sm leading-relaxed text-muted">
              {entry.description}
            </p>
          </div>

          {/* Móvil: resumen compacto + descripción al tocar */}
          <div
            role="button"
            tabIndex={0}
            aria-expanded={mobileDescOpen}
            aria-controls={descId}
            onClick={handleSummaryClick}
            onKeyDown={handleSummaryKeyDown}
            className={cn(
              "flex flex-col px-3.5 py-2.5 outline-none sm:px-4 md:hidden",
              "cursor-pointer",
              "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/50",
            )}
          >
            <span className="font-mono text-[11px] leading-none text-muted">
              {entry.period}
            </span>
            <h3 className="mt-1 text-sm font-semibold leading-tight text-foreground sm:text-[15px]">
              {entry.title}
            </h3>
            <p className={cn("mt-0.5 text-xs font-medium leading-snug", org)}>
              {entry.organization}
            </p>
            <span className="mt-2 font-mono text-[10px] text-muted/70">
              {isOpen ? "Toca para cerrar" : "Toca para ver detalle"}
            </span>
          </div>

          <div
            id={descId}
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out md:hidden",
              mobileDescOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <p className="border-t border-divider px-3.5 py-2.5 text-xs leading-relaxed text-muted sm:px-4 sm:py-3">
                {entry.description}
              </p>
            </div>
          </div>
        </article>
      </li>
    </FadeIn>
  );
}

export function InteractiveTimeline() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative max-w-5xl overflow-visible pl-0.5">
      <span
        className="pointer-events-none absolute bottom-0 left-[22px] top-3 w-px bg-gradient-to-b from-cyan-400/35 via-[var(--timeline-line-accent)] to-transparent"
        aria-hidden
      />

      <ol className="relative flex flex-col overflow-visible">
        {timeline.map((entry, index) => (
          <TimelineRow
            key={entry.id}
            entry={entry}
            index={index}
            isLast={index === timeline.length - 1}
            isOpen={openId === entry.id}
            onToggle={handleToggle}
          />
        ))}
      </ol>

      <p className="mt-1 pl-14 font-mono text-[10px] text-muted/60 sm:pl-16">
        <span className="md:hidden">Toca una tarjeta para ver el detalle </span>
      
      </p>
    </div>
  );
}
