export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeImage?: string;
  skills?: string[];
  inProgress?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "ejemplo-aws-cloud",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    credentialUrl: "https://www.credly.com/",
    skills: ["Cloud", "AWS"],
    inProgress: true,
  },
  {
    id: "ejemplo-git-github",
    title: "Git y GitHub para desarrollo",
    issuer: "Plataforma online",
    date: "2025",
    credentialUrl: "#",
    skills: ["Git", "GitHub"],
  },
];
