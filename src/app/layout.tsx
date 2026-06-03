import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
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
  "Desarrollador DAM recién titulado en Benalmádena (Málaga). Portfolio y CV con proyectos full-stack. Disponible remoto en España o híbrido/presencial en Málaga.";

const rawSiteUrl = profile.portfolioUrl || "https://javifullstackdev.vercel.app";
const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl
  : `https://${rawSiteUrl}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeScript />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
