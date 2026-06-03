import type { Accent } from "@/lib/accents";
import type { CertificationIcon } from "@/lib/certificationIcons";

export type Certification = {
  id: string;
  kind: string;
  title: string;
  issuer: string;
  date: string;
  accent: Accent;
  icon: CertificationIcon;
  credentialUrl?: string;
  badgeImage?: string;
  skills?: string[];
  inProgress?: boolean;
};

export const certificationsSectionEnabled = true;

export const certifications: Certification[] = [
  {
    id: "big-school-ia-asistencia",
    kind: "Certificado de asistencia",
    title: "Curso de IA (De 0 a Agentes)",
    issuer: "BIG school",
    date: "Jun 2026",
    accent: "purple",
    icon: "bot",
    credentialUrl: "/certifications/desarrollo-ia-big-school.pdf",
    skills: [
      "Agentes de IA",
      "Automatización",
      "Productividad con IA",
      "Inteligencia artificial",
      "Desarrollo de aplicaciones con IA",
    ],
  },
  {
    id: "big-school-ciberseguridad-asistencia",
    kind: "Certificado de asistencia",
    title: "Ciberseguridad y Hacking Ético",
    issuer: "BIG school",
    date: "Abr 2026",
    accent: "teal",
    icon: "shield",
    credentialUrl: "/certifications/ciberseguridad-big-school.pdf",
    skills: [
      "Ciberseguridad",
      "Hacking ético",
      "Defensa digital",
      "Detección de vulnerabilidades",
    ],
  },
];

export function isCertificationsSectionVisible(): boolean {
  return certificationsSectionEnabled && certifications.length > 0;
}
