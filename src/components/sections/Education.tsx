import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveTimeline } from "@/components/sections/InteractiveTimeline";

export function Education() {
  return (
    <section id="formacion" className="overflow-visible bg-card/30 py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          id="formacion"
          title="Formación y experiencia"
          subtitle={
            <>
              <span className="inline sm:block">
                ¿Por qué dar el salto al código tras varios años gestionando
                equipos en el sector fitness?
              </span>{" "}
              <span className="inline sm:block">
                Porque la tecnología y la optimización de procesos siempre
                fueron mi verdadera vocación.
              </span>
            </>
          }
        />
        <InteractiveTimeline />
      </div>
    </section>
  );
}
