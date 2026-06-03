import { Bot, Shield, type LucideIcon } from "lucide-react";

export type CertificationIcon = "bot" | "shield";

export const certificationIcons: Record<CertificationIcon, LucideIcon> = {
  bot: Bot,
  shield: Shield,
};
