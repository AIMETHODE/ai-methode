import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const statCards: {
  icon: "users" | "chart" | "award" | "clock";
  stat: string;
  title: string;
  text: string;
}[] = [
  {
    icon: "users",
    stat: "24/7",
    title: "Community",
    text: "Du baust nicht alleine. Austausch und Unterstützung jederzeit.",
  },
  {
    icon: "chart",
    stat: "1:1",
    title: "Persönliche Betreuung",
    text: "Kein Massenkurs. Du bekommst individuelle Begleitung.",
  },
  {
    icon: "award",
    stat: "A–Z",
    title: "Komplettes System",
    text: "Positionierung, Angebot, Akquise. Alles in einem Programm.",
  },
  {
    icon: "clock",
    stat: "1–2 h",
    title: "Pro Tag reichen",
    text: "Nebenberuflich starten, ohne den Hauptjob zu gefährden.",
  },
];

function StatIcon({ type }: { type: (typeof statCards)[number]["icon"] }) {
  const cls = "h-9 w-9 shrink-0 text-gold sm:h-10 sm:w-10";
  if (type === "users") {
    return (
      <svg className={cls} viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="16" cy="14" r="5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M8 32v-1.5c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6V32"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M28 12v6M25 15h6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg className={cls} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M8 28l8-10 6 6 10-14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 32h26"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "award") {
    return (
      <svg className={cls} viewBox="0 0 40 40" fill="none" aria-hidden>
        <path
          d="M12 10h16l-2 10h-12L12 10z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M16 28v6l4-2 4 2v-6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 40 40" fill="none" aria-hidden>
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M20 14v7l5 3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const avatarPeople = [
  { initials: "JK", bg: "#b8922a" },
  { initials: "SR", bg: "#6b7280" },
  { initials: "LM", bg: "#3b82a0" },
  { initials: "DF", bg: "#a16b3d" },
];

/** Eine Spaltenbreite: obere Karte und untere 4 Karten exakt gleich breit (Referenz). */
const CONTENT = "mx-auto w-full max-w-[1040px]";

export function WhatIsMethod() {
  return (
    <section id="methode" className="scroll-mt-24 bg-canvas-soft py-16 sm:py-24">
      <div className={`${CONTENT} px-4 sm:px-6`}>
        {/* Hero: ca. 2:1 (breit : hoch), Bild bündig rechts/oben/unten */}
        <div className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_24px_64px_-28px_rgba(0,0,0,0.14)] sm:rounded-[32px]">
          <div className="grid md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col justify-center px-7 py-9 sm:px-9 sm:py-11 md:min-h-[min(52vw,520px)] md:px-10 md:py-12 lg:px-12 lg:py-14">
              <div className="max-w-[440px]">
                <h2 className="font-sans text-[1.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.1rem] md:text-[2.45rem] lg:text-[2.65rem]">
                  Was ist die{" "}
                  <span className="font-black tracking-[-0.035em] text-gold">AI-Methode</span>?
                </h2>
                <div className="hero-inter-card mt-4 space-y-4 text-[16px] font-normal leading-[1.72] text-ink-muted antialiased sm:text-[17px] sm:leading-[1.75]">
                  <p>
                    Kein Kurs. Ein komplettes System für deine KI-Agentur.
                    Von der Positionierung bis zum ersten zahlenden Kunden.
                  </p>
                  <p>
                    Du bekommst alles, was du brauchst: Strategien, Vorlagen und persönliche
                    Begleitung — damit du KI-Dienstleistungen professionell verkaufst,
                    auch neben dem Hauptjob.
                  </p>
                  <p>
                    Das Ziel: ein schlankes Business, das sich wiederholt.
                    Planbares Zusatzeinkommen ohne Chaos.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
                  <div className="flex -space-x-2">
                    {avatarPeople.map((p, i) => (
                      <div
                        key={i}
                        className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white text-[13px] font-bold text-white shadow-sm sm:h-11 sm:w-11 sm:text-[14px]"
                        style={{ background: p.bg }}
                        aria-hidden
                      >
                        {p.initials}
                      </div>
                    ))}
                  </div>
                  <p className="hero-inter-card text-[14px] font-normal leading-snug text-ink sm:text-[15px]">
                    <span className="font-black tracking-tight text-gold text-[1.125rem] sm:text-[1.25rem]">
                      Große Community
                    </span>
                    <br />
                    von Gleichgesinnten, die dranbleiben.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[240px] w-full sm:min-h-[280px] md:min-h-0">
              <div className="absolute inset-0 bg-[#e8e8ed]">
                <Image
                  src="/tarik-methode.png"
                  alt={`${siteConfig.founderName} — AI-Methode`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center center" }}
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Untere Reihe — Referenz: hellgraue Kacheln, fast quadratisch, kompakte Abstände */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:mt-10 lg:grid-cols-4 lg:gap-4">
          {statCards.map((c) => (
            <div
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white px-5 py-6 text-left shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)] sm:px-6 sm:py-7"
            >
              <div className="absolute right-4 top-4 font-sans text-[2.5rem] font-black leading-none tracking-tighter text-gold/[0.08] sm:text-[3rem]">
                {c.stat}
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5e6b8]/60 sm:h-11 sm:w-11">
                <StatIcon type={c.icon} />
              </div>
              <p className="mt-3 text-[1.1rem] font-black leading-tight tracking-tight text-ink sm:text-[1.2rem]">{c.stat}</p>
              <p className="mt-0.5 text-[14px] font-semibold leading-snug text-ink sm:text-[15px]">{c.title}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-muted sm:text-[13px]">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
