import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "@/components/CTAButton";

const bullets: { t: string; d: string; icon: "chart" | "medal" | "user" }[] = [
  { t: "Bewiesenes System", d: "In der Praxis entwickelt und immer weiter verfeinert.", icon: "chart" },
  { t: "Persönliche Betreuung", d: "1:1-Begleitung statt anonymer Massenkurs.", icon: "medal" },
  { t: "Praxis vor Theorie", d: "Du setzt ab Tag 1 um. Nicht erst nach Wochen.", icon: "user" },
];

function BulletIcon({ type }: { type: "chart" | "medal" | "user" }) {
  const cls = "h-[18px] w-[18px]";
  if (type === "chart") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "medal") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="9" r="6" />
        <path d="M8.5 14.5L7 21l5-3 5 3-1.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="4" />
      <path d="M17 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AboutTarik() {
  return (
    <section className="border-t border-black/[0.06] bg-canvas-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-muted sm:mb-10">
          Kurz &amp; klar — wer dich begleitet.
        </p>

        <div className="overflow-hidden rounded-[32px] border border-black/[0.06] bg-white shadow-[0_24px_64px_-28px_rgba(0,0,0,0.14)]">
          <div className="grid md:grid-cols-2 md:items-stretch">
            {/* Linke Spalte — hell, Text */}
            <div className="flex flex-col justify-center bg-[#f2f2f7] px-6 py-8 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-14 lg:py-16">
              <p className="mb-3 text-[11px] font-bold uppercase leading-tight tracking-[0.2em] text-ink-muted">
                Dein Mentor für{" "}
                <span className="text-gold">KI-Business-Aufbau</span>
              </p>
              <h2 className="mb-5 font-sans text-[1.75rem] font-bold leading-[1.02] tracking-[-0.03em] text-gold sm:text-[2.5rem] md:text-[2.875rem]">
                {siteConfig.founderName}
              </h2>
              <p className="hero-inter-card mb-9 max-w-xl text-[15px] leading-[1.65] text-ink-muted">
                {siteConfig.founderName} hat die AI-Methode entwickelt, um Menschen wie dir einen
                klaren, wiederholbaren Weg in die KI-Branche zu geben. Persönliche Begleitung statt
                generischer Onlinekurs.
              </p>
              <ul className="space-y-7">
                {bullets.map((b) => (
                  <li key={b.t} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand text-brand">
                      <BulletIcon type={b.icon} />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[15px] font-bold leading-snug text-ink">{b.t}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{b.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechte Spalte — Portrait + Overlay */}
            <div className="relative min-h-[260px] sm:min-h-[380px] md:min-h-full">
              <Image
                src={siteConfig.workPortraitSrc}
                alt={siteConfig.founderName}
                fill
                className="object-cover"
                style={{
                  objectPosition: siteConfig.aboutPortraitObjectPosition,
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-9 md:p-10">
                <div className="flex max-w-md gap-4">
                  <div className="mt-1 h-14 w-0.5 shrink-0 rounded-full bg-gold" aria-hidden />
                  <div>
                    <p className="text-[15px] font-medium italic leading-relaxed text-white">
                      „Du brauchst kein Talent. Du brauchst ein System und den Willen es durchzuziehen.“
                    </p>
                    <p className="mt-4 font-sans text-[17px] font-semibold tracking-tight text-gold">
                      {siteConfig.founderName}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                      GRÜNDER · AI-METHODE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CTAButton
            href={siteConfig.primaryCtaHref}
            variant="primary"
            className="!font-bold"
          >
            Kostenloses Erstgespräch sichern
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
