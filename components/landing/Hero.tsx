"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "@/components/CTAButton";
import { PlayTriangle } from "@/components/ui/PlayTriangle";

const bullets = [
  "Klares System statt Chaos — du weißt jeden Tag, was der nächste Schritt ist",
  "1–2 Stunden täglich reichen — neben Job, Familie und allem anderen",
  "Kein Vorwissen nötig — persönliche Begleitung auf jedem Schritt",
  "Direkte Antworten, wenn du nicht weiterkommst — kein Alleingang",
];

export function Hero() {
  return (
    <section className="bg-white pb-16 pt-10 sm:pb-20 lg:pt-14">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="font-sans text-[1.75rem] font-bold leading-[1.14] tracking-tight text-ink sm:text-5xl lg:text-[3.1rem]">
            Deine <span className="text-gold-hero">KI-Agentur</span> 2026 —{" "}
            nebenberuflich, ohne Risiko.
          </h1>
          <ul className="mt-8 space-y-4">
            {bullets.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-[#9a7b1a]"
                  style={{ background: "var(--gold-soft)" }}
                >
                  +
                </span>
                <span className="text-[15px] leading-snug text-ink sm:text-[17px]">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CTAButton href={siteConfig.primaryCtaHref} variant="primary">
              Kostenloses Erstgespräch sichern
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative aspect-video overflow-hidden rounded-[16px] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.2)] ring-1 ring-black/[0.06] sm:rounded-[20px]">
            <Image
              src={siteConfig.heroPortraitSrc}
              alt=""
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/95 shadow-lg ring-4 ring-white/80 backdrop-blur-[2px] sm:h-[72px] sm:w-[72px]">
                <PlayTriangle />
              </span>
            </div>
            <p className="absolute bottom-3 left-3 right-3 rounded-lg bg-black/40 px-3 py-2 text-center text-[12px] font-medium text-white backdrop-blur-sm">
              Erfahre, wie der Aufbau funktioniert
            </p>
          </div>

          <div className="mt-4 flex min-h-[4.5rem] items-center justify-between gap-4 rounded-[20px] border border-[#e8e8e8] bg-white px-4 py-4 shadow-sm sm:mt-5 sm:min-h-[6rem] sm:gap-8 sm:rounded-[26px] sm:px-8 sm:py-6">
            <div className="hero-inter-card min-w-0 shrink">
              <p className="hero-inter-name text-[14px] uppercase leading-[1.05] tracking-[-0.02em] text-gold sm:text-[18px]">
                {siteConfig.founderName}
              </p>
              <p className="hero-inter-sub mt-px text-[12px] uppercase leading-[1.1] tracking-[-0.02em] text-ink sm:text-[13px]">
                GRÜNDER · AI-METHODE
              </p>
            </div>
            <Link
              href="#dein-weg"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-[#1c1c1c] px-4 text-[11px] font-bold tracking-[-0.01em] text-white transition-colors hover:bg-[#1c1c1c]/90 sm:h-12 sm:px-7 sm:text-[13px]"
            >
              Mehr erfahren
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
