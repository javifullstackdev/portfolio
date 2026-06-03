"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Braces,
  Database,
  Layers,
  Terminal,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { SkillPill } from "@/components/ui/SkillPill";
import { SkillLevelIcon } from "@/components/ui/SkillLevelIcon";
import { accentTab } from "@/lib/accents";
import { skillLevelLabels, type SkillLevel } from "@/lib/skillLevel";
import { cn } from "@/lib/utils";

const CAROUSEL_INTERVAL_MS = 5500;

const categoryIcons: Record<string, LucideIcon> = {
  Lenguajes: Braces,
  Frameworks: Layers,
  "Bases de datos": Database,
  "Herramientas y DevOps": Terminal,
  "Soft skills": Users,
};

const levelOrder: SkillLevel[] = ["aprendiendo", "intermedio", "avanzado"];

const panelVariants: Variants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? -56 : 56,
    opacity: 0,
  }),
};

function CategoryPanel({ category }: { category: SkillCategory }) {
  const styles = accentTab[category.accent];
  const Icon = categoryIcons[category.title] ?? Braces;

  return (
    <div
      className={cn(
        "rounded-2xl border bg-card/90 p-6 sm:p-8",
        styles.panel,
        styles.panelHover,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl",
              styles.iconWrap,
            )}
          >
            <Icon className={cn("h-5 w-5", styles.icon)} aria-hidden />
          </div>
          <div>
            <h3 className={cn("text-lg font-semibold", styles.title)}>
              {category.title}
            </h3>
            <p className="text-sm text-muted">
              {category.items.length} tecnologías
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-[10px] font-mono text-muted">
          {levelOrder.map((level) => (
            <span key={level} className="inline-flex items-center gap-1.5">
              <SkillLevelIcon level={level} variant="legend" />
              {skillLevelLabels[level]}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-6 flex flex-wrap gap-3">
        {category.items.map((item) => (
          <li key={item.name}>
            <SkillPill name={item.name} level={item.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsExplorer() {
  const tabListRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const active = skillCategories[activeIndex];
  const count = skillCategories.length;

  const goToIndex = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  useEffect(() => {
    if (prefersReducedMotion || paused || count <= 1) return;

    const timer = window.setInterval(goToNext, CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused, prefersReducedMotion, goToNext, count]);

  /** Solo desplaza la barra horizontal de pestañas; no hace scroll de la página. */
  useEffect(() => {
    const container = tabListRef.current;
    const tab = document.getElementById(`skill-tab-${activeIndex}`);
    if (!container || !tab) return;

    const padding = 12;
    const tabStart = tab.offsetLeft;
    const tabEnd = tabStart + tab.offsetWidth;
    const viewStart = container.scrollLeft;
    const viewEnd = viewStart + container.clientWidth;

    if (tabStart < viewStart + padding) {
      container.scrollTo({
        left: Math.max(0, tabStart - padding),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    } else if (tabEnd > viewEnd - padding) {
      container.scrollTo({
        left: tabEnd - container.clientWidth + padding,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [activeIndex, prefersReducedMotion]);

  return (
    <div>
      <div className="relative -mx-1 mb-6">
        <div
          ref={tabListRef}
          className="flex gap-2 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
          role="tablist"
          aria-label="Categorías de skills"
        >
          {skillCategories.map((category, index) => {
            const isActive = index === activeIndex;
            const styles = accentTab[category.accent];
            const Icon = categoryIcons[category.title] ?? Braces;

            return (
              <button
                key={category.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`skill-panel-${index}`}
                id={`skill-tab-${index}`}
                onClick={() => goToIndex(index)}
                className={cn(
                  "snap-start shrink-0 inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  isActive
                    ? styles.tabActive
                    : "border-border-subtle bg-surface-muted text-muted hover:border-divider hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {category.title}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`skill-panel-${activeIndex}`}
        aria-labelledby={`skill-tab-${activeIndex}`}
        aria-live="polite"
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        {prefersReducedMotion ? (
          <CategoryPanel category={active} />
        ) : (
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.title}
              custom={direction}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <CategoryPanel category={active} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
