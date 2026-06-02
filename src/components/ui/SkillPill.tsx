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
        "inline-flex shrink-0 items-center gap-2 rounded-full border border-white/12 bg-zinc-950/90 font-mono font-medium text-white/90",
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
      )}
    >
      {level && <SkillLevelIcon level={level} />}
      {name}
    </span>
  );
}
