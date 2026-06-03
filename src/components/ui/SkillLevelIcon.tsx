import { LuStar } from "react-icons/lu";
import {
  skillLevelLabels,
  skillLevelStars,
  type SkillLevel,
} from "@/lib/skillLevel";
import { cn } from "@/lib/utils";

const STAR_SLOTS = [1, 2, 3] as const;

type SkillLevelIconProps = {
  level: SkillLevel;
  className?: string;
  iconClassName?: string;
  variant?: "pill" | "legend";
};

export function SkillLevelIcon({
  level,
  className,
  iconClassName = "h-3 w-3",
  variant = "pill",
}: SkillLevelIconProps) {
  const filled = skillLevelStars[level];
  const label = skillLevelLabels[level];
  const filledStar =
    variant === "pill" ? "fill-current text-white" : "fill-current text-muted";
  const emptyStar =
    variant === "pill" ? "text-muted/40" : "text-muted/35";

  return (
    <span
      className={cn("inline-flex shrink-0 items-center gap-0.5", className)}
      title={label}
      aria-label={label}
    >
      {STAR_SLOTS.map((slot) => (
        <LuStar
          key={slot}
          className={cn(
            iconClassName,
            slot <= filled ? filledStar : emptyStar,
          )}
          aria-hidden
        />
      ))}
    </span>
  );
}
