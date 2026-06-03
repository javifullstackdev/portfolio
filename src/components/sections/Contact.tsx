import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const mailtoSubject = encodeURIComponent("Contacto desde portfolio");
  const mailtoBody = encodeURIComponent(
    "¡Hola Javi!, he visto tu portfolio y me gustaría contactar contigo",
  );
  const mailtoHref = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          id="contacto"
          title="Contacto"
          subtitle="¿Tienes una vacante junior o quieres hablar de un proyecto? ¡Escríbeme!"
        />
        <FadeIn>
          <div className="card-glow mx-auto max-w-xl rounded-2xl border border-border-subtle bg-card p-8 text-center sm:p-10">
            <p className="text-sm leading-relaxed text-muted">
              {profile.workAvailability.detail}
            </p>
            <p className="mt-6 text-muted">Puedes hacerlo a través de:</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button href={mailtoHref} variant="primary">
                <Mail className="h-4 w-4" />
                {profile.email}
              </Button>
            </div>
            <SocialLinks className="mt-8 justify-center" size="lg" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
