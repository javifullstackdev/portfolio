import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveTimeline } from "@/components/sections/InteractiveTimeline";

export function Education() {
  return (
    <section id="formacion" className="overflow-visible py-20 md:py-28 bg-card/30">
      <div className="section-container">
        <SectionHeading
          id="formacion"
          title="Formación y experiencia"
          subtitle="¿Por qué decidí estudiar DAM tras más de 8 años en el sector del fitness? Renovarse o morir."
        />
        <InteractiveTimeline />
      </div>
    </section>
  );
}
