import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Desarrollador DAM recién titulado. Portfolio y CV dinámico con proyectos full-stack, backend y frontend. Buscando primera oportunidad en el sector tech.";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Desarrollador DAM`,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "desarrollador DAM",
    "desarrollo multiplataforma",
    "junior developer",
    "React",
    "Java",
    "Spring Boot",
    "portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: `${profile.name} — Desarrollador DAM`,
    description: siteDescription,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Desarrollador DAM`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
