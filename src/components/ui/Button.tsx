import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-violet-400 text-zinc-950 font-semibold hover:opacity-90 shadow-lg shadow-cyan-500/20",
  secondary:
    "border border-border-subtle bg-surface-muted text-foreground hover:border-cyan-400/40 hover:bg-hover",
  ghost: "text-muted hover:text-foreground hover:bg-surface-muted",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  className,
  children,
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    const isPdfDownload =
      href.endsWith(".pdf") || href === "/api/cv" || href.startsWith("/api/cv");
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      isPdfDownload;

    if (isExternal) {
      const openInNewTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(isPdfDownload ? { download: true } : {})}
          {...(openInNewTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
