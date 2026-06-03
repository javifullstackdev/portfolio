"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { accentAbout, accentLink, accentPill } from "@/lib/accents";
import { certificationIcons } from "@/lib/certificationIcons";
import { cn } from "@/lib/utils";
import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  certification: Certification;
  index?: number;
};

export function CertificationCard({
  certification,
  index = 0,
}: CertificationCardProps) {
  const {
    kind,
    title,
    issuer,
    date,
    accent,
    icon,
    credentialUrl,
    badgeImage,
    skills,
    inProgress,
  } = certification;

  const styles = accentAbout[accent];
  const Icon = certificationIcons[icon];

  return (
    <FadeIn delay={index * 0.08}>
      <article
        className={cn(
          "card-glow group flex h-full flex-col rounded-2xl border bg-card p-5 transition-all duration-300 sm:p-6",
          styles.border,
          styles.hover,
          inProgress && "border-violet-400/25",
        )}
      >
        <div className="flex gap-4">
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl",
              inProgress
                ? "bg-violet-400/25 ring-1 ring-violet-400/40"
                : styles.iconWrap,
            )}
          >
            {badgeImage ? (
              <Image
                src={badgeImage}
                alt=""
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            ) : (
              <Icon
                className={cn(
                  "h-6 w-6",
                  inProgress ? "text-violet-400" : styles.icon,
                )}
                aria-hidden
              />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "font-mono text-xs",
                  inProgress ? "text-violet-400/90" : styles.icon,
                )}
              >
                {date}
              </span>
              {inProgress && (
                <span className="rounded-full border border-violet-400/45 bg-violet-400/10 px-2 py-0.5 font-mono text-[10px] text-violet-300">
                  En curso
                </span>
              )}
            </div>
            <h2 className="mt-2 font-mono text-[11px] font-medium uppercase tracking-wider text-muted">
              {kind}
            </h2>
            <p
              className={cn(
                "mt-1 text-lg font-semibold leading-snug transition-colors sm:text-xl",
                inProgress
                  ? "text-foreground group-hover:text-violet-300"
                  : cn(styles.title, "group-hover:brightness-125"),
              )}
            >
              {title}
            </p>
            <p className="mt-1 text-sm text-violet-700/90 dark:text-violet-300/90">
              {issuer}
            </p>
          </div>
        </div>

        {skills && skills.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill}>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium",
                    accentPill[accent],
                  )}
                >
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        )}

        {credentialUrl && !inProgress && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-4 inline-flex items-center gap-1.5 rounded text-sm text-muted transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
              accentLink[accent],
            )}
          >
            <ExternalLink className="h-4 w-4" />
            Ver credencial
          </a>
        )}
      </article>
    </FadeIn>
  );
}
