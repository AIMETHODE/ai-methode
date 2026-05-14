"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PlayTriangle } from "@/components/ui/PlayTriangle";

/** Poster bleibt YouTube-Thumbnail (wie bisher) */
const JULIAN_VIDEO_THUMBNAIL =
  "https://img.youtube.com/vi/yWTGWVXv88Q/maxresdefault.jpg";
/** Testimonial-Video (Bunny Stream) — iframe nach Klick */
const JULIAN_EMBED_BASE =
  "https://iframe.mediadelivery.net/embed/658848/c130d96e-14ca-42e0-9889-04d1579e739e";

/* ────────────────────────────────────────────────────────────
 * Helpers
 * ────────────────────────────────────────────────────────── */

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <path d="M4 12.5L9 17l11-12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

/* ────────────────────────────────────────────────────────────
 * 1. Featured-Testimonial — Julian D.
 * ────────────────────────────────────────────────────────── */

const julianResults = [
  "Bereits 5-stellige Umsätze erzielt",
  "Aktuell konstante mittlere 4-stellige Einnahmen",
  "Ziel: Skalierung auf 10.000 € pro Monat",
  "Eigene KI-Agentur neben dem Studium",
];

function HeroTestimonial() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[20px] border border-black/[0.06] bg-white shadow-[0_2px_22px_rgba(0,0,0,0.04)] sm:rounded-[24px]"
    >
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[420px_1fr] lg:items-center lg:gap-10 lg:p-8">
        {/* ── Video (kompakt, Querformat) ── */}
        <div className="relative aspect-video overflow-hidden rounded-[14px] lg:rounded-[16px]">
          {isVideoOpen ? (
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={`${JULIAN_EMBED_BASE}?autoplay=true`}
              title="Testimonial von Julian D."
              loading="eager"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Testimonial von Julian D. abspielen"
              className="group/play relative block h-full w-full"
            >
              <img
                src={JULIAN_VIDEO_THUMBNAIL}
                alt="Vorschau zum Testimonial von Julian D."
                className="h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/18 to-black/22" />
              <span
                className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 ring-1 ring-white/40 transition-transform duration-300 group-hover/play:scale-105"
                style={{
                  boxShadow:
                    "0 0 0 6px rgba(255,255,255,0.16), 0 0 28px -2px rgba(212,180,74,0.7)",
                }}
              >
                <PlayTriangle className="ml-0.5" />
              </span>
            </button>
          )}

          {!isVideoOpen ? (
            <div className="absolute inset-x-3 bottom-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f4c430]">
                Julian D.
              </p>
              <p className="mt-0.5 text-[12px] font-medium text-white/85">
                Studiert Wirtschaftsrecht · Führt nebenbei seine KI-Agentur
              </p>
            </div>
          ) : null}
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col">
          <h3 className="font-sans text-[1.35rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[1.6rem] md:text-[1.75rem]">
            Neben dem Studium ein eigenes KI-Business aufgebaut.
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-ink-muted sm:text-[15.5px]">
            Julian studiert Wirtschaftsrecht und hat parallel mit der AI-Methode
            gestartet. Heute arbeitet er mit eigenen Kunden und baut Schritt für
            Schritt seine eigene KI-Agentur auf.
          </p>

          <ul className="mt-5 space-y-2.5">
            {julianResults.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#9a7b1a]"
                  style={{ background: "var(--gold-soft)" }}
                >
                  <CheckIcon />
                </span>
                <span className="text-[13.5px] leading-snug text-ink sm:text-[14.5px]">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

/* ────────────────────────────────────────────────────────────
 * 2. Story-Cards — Daniel · Sophie · Leon
 * ────────────────────────────────────────────────────────── */

type Story = {
  name: string;
  role: string;
  vorher: string;
  problem: string;
  loesung: string;
  ergebnisse: string[];
};

const stories: Story[] = [
  {
    name: "Daniel W.",
    role: "Akademiker",
    vorher: "Fest im klassischen Angestelltenverhältnis.",
    problem: "Keine finanzielle Freiheit trotz Studium.",
    loesung: "Mit der AI-Methode lernte Daniel, AI-Services zu verkaufen.",
    ergebnisse: [
      "Erste Kunden innerhalb weniger Wochen",
      "Zweites Einkommen aufgebaut",
      "Eigene kleine KI-Agentur gestartet",
    ],
  },
  {
    name: "Sophie H.",
    role: "Alleinerziehende Mutter",
    vorher: "Finanzieller Druck und kaum Zeit.",
    problem: "Sie wollte ortsunabhängig arbeiten.",
    loesung:
      "Mit klaren KI-Prozessen konnte sie online Dienstleistungen anbieten.",
    ergebnisse: [
      "Flexible Arbeit von zuhause",
      "Eigene Kunden gewonnen",
      "Neues Einkommen aufgebaut",
    ],
  },
  {
    name: "Leon F.",
    role: "Neustart",
    vorher: "Zu viele Kurse, keine klare Richtung.",
    problem: "Keine Strategie, um online Geld zu verdienen.",
    loesung: "Die AI-Methode gab ihm einen klaren Fahrplan.",
    ergebnisse: [
      "Erste Kunden über Social Media",
      "Klarer Fokus",
      "Eigene AI-Dienstleistung aufgebaut",
    ],
  },
];

function StoryRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-subtle">
        {label}
      </p>
      <p className="mt-1 text-[13.5px] leading-snug text-ink-muted">{text}</p>
    </div>
  );
}

function StoryCard({ s, delay }: { s: Story; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="flex h-full flex-col rounded-[20px] border border-black/[0.06] bg-white p-5 shadow-[0_2px_22px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_14px_32px_-14px_rgba(0,0,0,0.16)] sm:p-6"
    >
      <header className="flex items-center gap-3.5">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold tracking-wide text-[#9a7b1a] ring-1 ring-black/[0.06]"
          style={{ background: "var(--gold-soft)" }}
          aria-hidden
        >
          {initials(s.name)}
        </span>
        <div className="min-w-0">
          <p className="text-[15px] font-bold leading-tight text-ink">
            {s.name}
          </p>
          <p className="mt-0.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-gold">
            {s.role}
          </p>
        </div>
      </header>

      <div className="mt-5 space-y-3.5 border-t border-black/[0.06] pt-5">
        <StoryRow label="Vorher" text={s.vorher} />
        <StoryRow label="Problem" text={s.problem} />
        <StoryRow label="Lösung" text={s.loesung} />
      </div>

      <div className="mt-5 border-t border-black/[0.06] pt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
          Ergebnis
        </p>
        <ul className="mt-2.5 space-y-2">
          {s.ergebnisse.map((e) => (
            <li key={e} className="flex items-start gap-2.5">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#9a7b1a]"
                style={{ background: "var(--gold-soft)" }}
              >
                <CheckIcon />
              </span>
              <span className="text-[13.5px] leading-snug text-ink">{e}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

/* ────────────────────────────────────────────────────────────
 * Main section
 * ────────────────────────────────────────────────────────── */

export function TestimonialsAbsolventen() {
  return (
    <section
      id="erfolge"
      className="scroll-mt-24 border-t border-black/[0.06] bg-canvas-soft py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Erfolgsgeschichten"
          title={
            <>
              Echte <span className="text-gold">Transformationen</span> mit der
              AI-Methode
            </>
          }
          subtitle="Vom ersten Kunden bis zur eigenen KI-Agentur — so sehen die Ergebnisse aus, wenn Theorie endlich umgesetzt wird."
        />

        <div className="mt-10 sm:mt-14">
          <HeroTestimonial />
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-3">
          {stories.map((s, i) => (
            <StoryCard key={s.name} s={s} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
