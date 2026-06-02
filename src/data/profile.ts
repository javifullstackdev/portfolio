import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const profile = {
  name: "Javier Sánchez",
  brand: "javifullstack",
  initials: "JS",
  avatar: "/profile.jpg",
  role: "Jr Full Stack Developer",
  badge: "Jr Full Stack Developer",
  taglineLines: [
    "Recién titulado en DAM y con ganas de crecer en el sector tech.",
    "Me apasiona el desarrollo full-stack y me encantaría formarme sobre inteligencia artificial y ciberseguridad.",
  ] as const,
  graduation: "Grado Superior DAM — Junio 2026",
  location: "España",
  email: "javifullstackdev@gmail.com",
  whatsapp: "+34676888901",
  whatsappMessage:
    "Hola Javier, te escribo desde tu portfolio. Me gustaría contactar contigo",
  github: "https://github.com/javifullstackdev",
  linkedin: "https://linkedin.com/in/javifullstackdev",
  portfolioUrl: "",
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
