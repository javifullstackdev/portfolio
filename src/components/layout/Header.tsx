"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 z-50 w-full glass">
      <div className="section-container flex h-16 items-center justify-between">
        <Link
          href="#inicio"
          className="font-mono text-xs font-semibold text-foreground transition-colors hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 rounded sm:text-sm"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-gradient">{profile.brand}</span>
          <span className="text-muted">.dev</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400",
                  isActive
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-muted hover:bg-cyan-400/10 hover:text-cyan-400",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-foreground transition-colors hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-white/10 bg-background/95 px-4 py-4 md:hidden"
          aria-label="Menú móvil"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-base transition-colors",
                      activeSection === id
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "text-muted hover:bg-cyan-400/10 hover:text-cyan-400",
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
