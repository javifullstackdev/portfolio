import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveTimeline } from "@/components/sections/InteractiveTimeline";

export function Education() {
  return (
    <section id="formacion" className="overflow-visible py-20 md:py-28 bg-card/30">
      <div className="section-container">
        <SectionHeading
          id="formacion"
          title="Formación y experiencia"
          subtitle="De lo más reciente a lo más antiguo"
        />
        <InteractiveTimeline />
      </div>
    </section>
  );
}
