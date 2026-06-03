import {
  certifications,
  isCertificationsSectionVisible,
} from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificationCard } from "@/components/ui/CertificationCard";

export function Certifications() {
  if (!isCertificationsSectionVisible()) {
    return null;
  }

  return (
    <section id="certificaciones" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          id="certificaciones"
          title="Certificaciones"
          subtitle="No son certificaciones oficiales, pero... ¡muestran hacia dónde me gustaría avanzar!"
        />
        <div className="grid gap-6 md:grid-cols-2">
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
