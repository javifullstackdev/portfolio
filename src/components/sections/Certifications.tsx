import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationCard } from "@/components/ui/CertificationCard";

export function Certifications() {
  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certificaciones" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          id="certificaciones"
          title="Certificaciones"
          subtitle="Porque la formación nunca termina"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
