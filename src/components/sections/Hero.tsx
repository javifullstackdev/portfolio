"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SocialLinks } from "@/components/ui/SocialLinks";

const TAGLINE_EMPHASIS = /(inteligencia artificial|ciberseguridad)/g;
const TAGLINE_LINE2_SPLIT = " sobre ";

function TaglineLine({ text }: { text: string }) {
  const parts = text.split(TAGLINE_EMPHASIS).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part === "inteligencia artificial" || part === "ciberseguridad" ? (
          <strong
            key={`${part}-${i}`}
            className="font-semibold text-foreground/90"
          >
            {part}
          </strong>
        ) : (
          <span key={`${part}-${i}`}>{part}</span>
        ),
      )}
    </>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleHeight, setTitleHeight] = useState<number | null>(null);

  const measureTitle = () => {
    const el = titleRef.current;
    if (el) setTitleHeight(Math.round(el.offsetHeight));
  };

  useLayoutEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    measureTitle();
    const observer = new ResizeObserver(measureTitle);
    observer.observe(el);

    document.fonts?.ready.then(measureTitle).catch(() => undefined);
    window.addEventListener("resize", measureTitle);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureTitle);
    };
  }, []);

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      };

  const avatarPx = titleHeight ?? undefined;

  const line2Full = profile.taglineLines[1];
  const line2SplitAt = line2Full.indexOf(TAGLINE_LINE2_SPLIT);
  const line2Lead =
    line2SplitAt === -1
      ? line2Full
      : line2Full.slice(0, line2SplitAt + TAGLINE_LINE2_SPLIT.length);
  const line2Tail =
    line2SplitAt === -1 ? "" : line2Full.slice(line2SplitAt + TAGLINE_LINE2_SPLIT.length);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        className="glow-orb -left-32 top-20 h-72 w-72 bg-cyan-500/20"
        aria-hidden
      />
      <div
        className="glow-orb -right-20 top-40 h-96 w-96 bg-violet-500/15"
        aria-hidden
      />
      <div className="grid-bg absolute inset-0" aria-hidden />

      <div className="section-container relative py-20 md:py-28">
        <motion.div
          {...motionProps}
          className="max-w-6xl"
          onAnimationComplete={measureTitle}
        >
          <div className="grid w-full max-w-full grid-cols-[auto_1fr] gap-x-4 gap-y-3 sm:gap-x-5">
            <div
              className="relative col-start-1 row-start-1 self-start rounded-full border-2 border-cyan-400/50 bg-card ring-2 ring-cyan-400/35 transition-[border-color,box-shadow] duration-300 ease-out hover:border-cyan-400 hover:ring-cyan-400/55 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_0_28px_var(--glow-cyan),0_0_48px_rgba(34,211,238,0.22)] motion-reduce:transition-none"
              style={
                avatarPx
                  ? { width: avatarPx, height: avatarPx }
                  : { width: 72, height: 72 }
              }
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                {profile.avatar ? (
                  <Image
                    src={profile.avatar}
                    alt={`Foto de perfil de ${profile.name}`}
                    fill
                    unoptimized
                    className="object-cover object-center"
                    priority
                    sizes={
                      avatarPx
                        ? `${Math.min(avatarPx * 2, 512)}px`
                        : "144px"
                    }
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-400/20 to-violet-400/20 text-xl font-bold text-gradient sm:text-2xl md:text-3xl"
                    aria-hidden
                  >
                    {profile.initials}
                  </div>
                )}
              </div>
            </div>

            <h1
              ref={titleRef}
              className="col-start-2 row-start-1 self-start text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="block">¡Hola!</span>
              <span className="block">
                soy{" "}
                <span className="text-gradient">{profile.name}</span>
              </span>
            </h1>

            <Badge
              variant="accent"
              className="col-start-2 row-start-2 w-fit justify-self-start self-start"
            >
              {profile.badge}
            </Badge>
          </div>

          <SocialLinks className="mt-6" size="lg" />

          <p className="mt-6 w-full text-base leading-relaxed text-pretty text-muted lg:text-lg">
            <span className="block">{profile.taglineLines[0]}</span>
            <span className="block lg:whitespace-nowrap">
              <TaglineLine text={line2Lead} />
              <TaglineLine text={line2Tail} />
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#proyectos">Ver proyectos</Button>
            <Button href={profile.cvUrl} variant="secondary">
              <Download className="h-4 w-4" />
              Descargar CV
            </Button>
          </div>
        </motion.div>

        <motion.a
          href="#sobre-mi"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-cyan-400 md:flex"
          aria-label="Ir a sobre mí"
          {...(prefersReducedMotion
            ? {}
            : {
                animate: { y: [0, 8, 0] },
                transition: { repeat: Infinity, duration: 2 },
              })}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.a>
      </div>
    </section>
  );
}
