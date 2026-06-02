import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { getWhatsAppHref, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const iconSizes = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
} as const;

type SocialLinksProps = {
  className?: string;
  size?: keyof typeof iconSizes;
};

const githubHandle = profile.github.replace(
  /^https?:\/\/(www\.)?github\.com\//,
  "",
);

export function SocialLinks({ className, size = "md" }: SocialLinksProps) {
  const whatsappHref = getWhatsAppHref();
  const iconClass = iconSizes[size];

  const linkBase =
    "inline-flex shrink-0 items-center justify-center rounded-lg text-muted transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`GitHub @${githubHandle}`}
        className={cn(linkBase, "hover:text-foreground focus-visible:outline-cyan-400")}
      >
        <FaGithub className={iconClass} aria-hidden />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={cn(linkBase, "hover:text-[#0A66C2] focus-visible:outline-[#0A66C2]")}
      >
        <FaLinkedin className={iconClass} aria-hidden />
      </a>
      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={cn(
            linkBase,
            "hover:text-[#25D366] focus-visible:outline-emerald-400",
          )}
        >
          <FaWhatsapp className={iconClass} aria-hidden />
        </a>
      )}
    </div>
  );
}
