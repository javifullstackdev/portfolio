"use client";

import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/Badge";
import type { Certification } from "@/data/certifications";

type CertificationCardProps = {
  certification: Certification;
  index?: number;
};

export function CertificationCard({
  certification,
  index = 0,
}: CertificationCardProps) {
  const { title, issuer, date, credentialUrl, badgeImage, skills, inProgress } =
    certification;

  return (
    <FadeIn delay={index * 0.08}>
      <article className="card-glow group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 transition-all duration-300 sm:p-6">
        <div className="flex gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border ${
              inProgress
                ? "border-violet-400/30 bg-violet-400/10"
                : "border-cyan-400/30 bg-cyan-400/10"
            }`}
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
              <Award
                className={`h-6 w-6 ${inProgress ? "text-violet-400" : "text-cyan-400"}`}
                aria-hidden
              />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-cyan-400/90">{date}</span>
              {inProgress && (
                <Badge variant="accent" className="text-[10px]">
                  En curso
                </Badge>
              )}
            </div>
            <h3 className="mt-1 font-semibold leading-snug text-foreground group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            <p className="mt-0.5 text-sm text-violet-300/90">{issuer}</p>
          </div>
        </div>

        {skills && skills.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill}>
                <Badge className="font-mono text-[11px]">{skill}</Badge>
              </li>
            ))}
          </ul>
        )}

        {credentialUrl && !inProgress && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded"
          >
            <ExternalLink className="h-4 w-4" />
            Ver credencial
          </a>
        )}
      </article>
    </FadeIn>
  );
}
