import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const profile = {
  name: "Javier Sánchez",
  brand: "javifullstack",
  initials: "JS",
  avatar: "/profile.jpg",
  role: "Jr Full Stack Developer",
  badge: "Jr Full Stack Developer",
  badgeMobile: "Jr Full Stack Dev",
  taglineLines: [
    "De gestionar operativas y equipos a construir soluciones de software.",
    "Tras graduarme en DAM, busco aportar mi madurez profesional y mi visión de producto a un equipo tecnológico.",
    "Me apasiona el desarrollo web, la automatización y explorar cómo integrar la Inteligencia Artificial en el día a día.",
  ] as const,
  graduation: "Grado Superior DAM — Junio 2026",
  location: "Benalmádena (Málaga)",
  workAvailability: {
    short: "Remoto en España · Híbrido o presencial en Málaga",
    detail:
      "",
  },
  email: "javifullstackdev@gmail.com",
  whatsapp: "+34676888901",
  whatsappMessage:
    "¡Hola Javi! te escribo desde tu portfolio. Me gustaría contactar contigo",
  github: "https://github.com/javifullstackdev",
  linkedin: "https://linkedin.com/in/javifullstackdev",
  portfolioUrl: "https://javifullstackdev.vercel.app",
  cvUrl: "/api/cv",
} as const;

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#skills", label: "Skills" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
] as const;

export type NavLink = (typeof navLinks)[number];

export function getWhatsAppHref(): string | null {
  return buildWhatsAppUrl(profile.whatsapp, profile.whatsappMessage);
}
