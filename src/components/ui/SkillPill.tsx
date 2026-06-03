import type { SkillLevel } from "@/lib/skillLevel";
import { SkillLevelIcon } from "@/components/ui/SkillLevelIcon";
import { cn } from "@/lib/utils";

type SkillPillProps = {
  name: string;
  level?: SkillLevel;
  size?: "sm" | "md";
};

export function SkillPill({ name, level, size = "md" }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border border-border-subtle bg-card font-mono font-medium text-foreground shadow-sm",
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
      )}
    >
      {level && <SkillLevelIcon level={level} />}
      {name}
    </span>
  );
}
