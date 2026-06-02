import { Code2, Rocket, Target, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import type { AboutCard } from "@/data/about";
import { accentAbout } from "@/lib/accents";
import { cn } from "@/lib/utils";

const icons: Record<AboutCard["icon"], LucideIcon> = {
  rocket: Rocket,
  code: Code2,
  target: Target,
};

type AboutCardProps = {
  card: AboutCard;
  index?: number;
};

export function AboutCard({ card, index = 0 }: AboutCardProps) {
  const Icon = icons[card.icon];
  const styles = accentAbout[card.accent];

  return (
    <FadeIn delay={index * 0.1}>
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card/80 p-6 sm:p-7",
          styles.border,
          styles.hover,
        )}
      >
        <span
          className={cn(
            "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
            styles.bar,
          )}
          aria-hidden
        />
        <div
          className={cn(
            "mb-5 flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-transform duration-300 group-hover:scale-105",
            styles.iconWrap,
          )}
        >
          <Icon className={cn("h-6 w-6", styles.icon)} aria-hidden />
        </div>
        <h3
          className={cn(
            "font-semibold uppercase tracking-wider",
            styles.title,
          )}
        >
          {card.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {card.description}
        </p>
      </article>
    </FadeIn>
  );
}
