import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  /** Inkl. 800/900 — wird u. a. für font-extrabold / font-black auf der Seite benötigt */
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brand} · KI-Agentur nebenberuflich aufbauen | ${siteConfig.domain}`,
    template: `%s · ${siteConfig.brand}`,
  },
  description:
    "Baue dir nebenberuflich deine eigene KI-Agentur auf — mit persönlicher 1:1-Begleitung, erprobtem System und zahlenden Kunden ab dem ersten Monat.",
  keywords: [
    "KI Agentur",
    "Nebeneinkommen",
    "KI Coaching",
    "AI-Methode",
    "ai-methode",
  ],
  authors: [{ name: siteConfig.founderName, url: siteConfig.siteUrl }],
  creator: siteConfig.founderName,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} · Deine KI-Agentur mit Methode`,
    description:
      "Strukturiert die eigene KI-Agentur aufbauen — Angebote, Prozesse, Akquise. Coaching für echte Umsetzung neben Beruf & Alltag.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand} — ${siteConfig.domain}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} · KI-Agentur mit Methode`,
    description:
      "Strukturiert die eigene KI-Agentur aufbauen — nebenberuflich, klar, umsetzbar.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#b8922a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
