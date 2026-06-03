import { aboutCards } from "@/data/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutCard } from "@/components/ui/AboutCard";

export function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-card/30">
      <div className="section-container">
        <SectionHeading
          id="sobre-mi"
          title="Sobre mí"
          subtitle={
            <>
              <span className="block sm:inline">Algunos detalles sobre</span>{" "}
              <span className="block sm:inline">
                quién soy y qué objetivos tengo
              </span>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-3">
          {aboutCards.map((card, index) => (
            <AboutCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
