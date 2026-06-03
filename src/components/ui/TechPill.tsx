import { accentPill } from "@/lib/accents";
import { getTechAccent } from "@/lib/skillTechAccent";
import { cn } from "@/lib/utils";

type TechPillProps = {
  name: string;
  className?: string;
};

export function TechPill({ name, className }: TechPillProps) {
  const accent = getTechAccent(name);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium",
        accentPill[accent],
        className,
      )}
    >
      {name}
    </span>
  );
}
