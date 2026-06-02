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
          subtitle="Algunos detalles sobre quién soy y qué objetivos tengo"
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
