import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "accent"
          ? "border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
          : "border border-white/10 bg-white/5 text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
