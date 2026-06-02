import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { SkillsExplorer } from "@/components/sections/SkillsExplorer";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-500/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/4 top-20 h-64 w-64 rounded-full bg-violet-500/12 blur-3xl"
        aria-hidden
      />
      <div className="section-container relative">
        <SectionHeading
          id="skills"
          title="Stack técnico"
          subtitle="Tecnologías que uso y en las que sigo formándome"
        />
        <FadeIn>
          <SkillsExplorer />
        </FadeIn>
      </div>
    </section>
  );
}
