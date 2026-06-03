import { profile } from "@/data/profile";
import { timeline, type TimelineEntry } from "@/data/timeline";

export function getCvContactLines(): { label: string; value: string }[] {
  const lines: { label: string; value: string }[] = [
    { label: "Email", value: profile.email },
    { label: "Ubicación", value: profile.location },
    {
      label: "Disponibilidad",
      value: profile.workAvailability.short,
    },
  ];

  if (profile.whatsapp) {
    lines.push({ label: "Teléfono", value: profile.whatsapp });
  }
  if (profile.linkedin) {
    lines.push({ label: "LinkedIn", value: profile.linkedin });
  }
  if (profile.github) {
    lines.push({ label: "GitHub", value: profile.github });
  }
  if (profile.portfolioUrl) {
    lines.push({ label: "Portfolio", value: profile.portfolioUrl });
  }

  return lines;
}

export function buildCvSummary(): string {
  return profile.taglineLines.join(" ");
}

export function getExperienceEntries(): TimelineEntry[] {
  return timeline.filter(
    (e) => e.type === "experience" || e.type === "other",
  );
}

export function getEducationEntries(): TimelineEntry[] {
  return timeline.filter((e) => e.type === "education");
}
