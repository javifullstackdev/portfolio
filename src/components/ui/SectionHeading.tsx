import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";

type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  id,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-12 md:mb-16", className)}>
      {id && (
        <p className="mb-2 font-mono text-sm text-cyan-400/80">{`// ${id}`}</p>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </FadeIn>
  );
}
