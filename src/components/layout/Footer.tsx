import Link from "next/link";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.email}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-muted transition-colors hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"
            aria-label="Enviar email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <SocialLinks size="sm" />
          <Link
            href="#inicio"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"
          >
            Volver arriba
          </Link>
        </div>
      </div>
    </footer>
  );
}
