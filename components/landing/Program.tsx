import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

/** Korall für Titel-Akzent — abgestimmt an BottomHero-CTA, nicht „KI-Lila“ */
const accent = "text-gold";

type IconProps = { className?: string };

function IconDoc({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 4h6l4 4v12a1 1 0 0 1-1 1H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 4v4h4M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12.5 8.5 17 20 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSparkles({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="m4.9 4.9 2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 8.5c.8 2.2 2.3 3.7 4.5 4.5-2.2.8-3.7 2.3-4.5 4.5-.8-2.2-2.3-3.7-4.5-4.5 2.2-.8 3.7-2.3 4.5-4.5Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTrend({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 16l4-4 4 3 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const iconClass = "h-6 w-6 shrink-0 text-[#b8942a]";

const cells: {
  Icon: (p: IconProps) => React.ReactElement;
  title: string;
  text: string;
}[] = [
  {
    Icon: IconDoc,
    title: "Dein Hochpreis-Angebot",
    text: "Du baust ein KI-Dienstleistungspaket, das Kunden 3.000\u20135.000\u00A0\u20AC wert ist \u2014 mit klarer Positionierung, die Vertrauen schafft.",
  },
  {
    Icon: IconPhone,
    title: "Kundengewinnung ohne Kaltakquise",
    text: "Wie du mit der richtigen Ansprache qualifizierte Erstgespräche bekommst — ohne Spam, ohne Betteln, ohne peinliche DMs.",
  },
  {
    Icon: IconCheck,
    title: "Verkaufen auf Augenh\u00F6he",
    text: "Gespr\u00E4chsleitf\u00E4den, die aus Interessenten zahlende Kunden machen \u2014 seri\u00F6s, strukturiert und mit starken Abschlussquoten.",
  },
  {
    Icon: IconSparkles,
    title: "KI als Wettbewerbsvorteil",
    text: "Setze KI so ein, dass du in Stunden lieferst, wof\u00FCr andere Tage brauchen \u2014 deine Kunden sp\u00FCren den Unterschied sofort.",
  },
  {
    Icon: IconClock,
    title: "Nebenberuflich skalierbar",
    text: "Der gesamte Aufbau funktioniert mit 1\u20132\u00A0h am Tag. Kein K\u00FCndigen, kein Risiko \u2014 bis du bereit bist, voll durchzustarten.",
  },
  {
    Icon: IconTrend,
    title: "Planbares Einkommen aufbauen",
    text: "Von der ersten Anfrage bis zum wiederkehrenden Mandat: ein System, das dir Monat f\u00FCr Monat Umsatz bringt \u2014 messbar und vorhersehbar.",
  },
];

function DeviceShowcase({ variant }: { variant: "a" | "b" }) {
  const isA = variant === "a";
  return (
    <div
      className={`relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-[1.1rem] border border-black/[0.05] p-5 sm:min-h-[220px] sm:rounded-[1.35rem] sm:p-8 lg:min-h-[210px] ${
        isA ? "bg-[#e9e5df]" : "bg-[#e4e0d9]"
      }`}
    >
      <div
        className={`relative flex items-end ${isA ? "gap-3 sm:gap-5" : "gap-4 sm:gap-6"} ${isA ? "translate-x-0" : "-translate-x-1"}`}
      >
        {/* Phone */}
        <div
          className={`relative z-[2] w-[4.5rem] shrink-0 rounded-[1.15rem] border border-black/[0.07] bg-white p-[5px] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.22)] sm:w-[5rem] ${isA ? "-rotate-[10deg]" : "-rotate-[7deg]"}`}
        >
          <div className="aspect-[9/18] w-full overflow-hidden rounded-[0.85rem] bg-gradient-to-b from-[#f4f6f8] via-[#eef1f5] to-[#dfe6ee]">
            <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-black/[0.08]" />
            <div className="mx-2 mt-3 space-y-1.5">
              <div className="h-1.5 w-3/4 rounded bg-black/[0.06]" />
              <div className="h-1.5 w-1/2 rounded bg-black/[0.05]" />
              <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-[#c9a227]/25 to-[#b8922a]/15" />
            </div>
          </div>
        </div>
        {/* Tablet */}
        <div
          className={`relative z-[1] w-[6.5rem] shrink-0 rounded-[0.95rem] border border-black/[0.07] bg-white p-[6px] shadow-[0_22px_48px_-14px_rgba(0,0,0,0.2)] sm:w-[7.25rem] ${isA ? "rotate-[6deg] -translate-y-1" : "rotate-[9deg] translate-y-0.5"}`}
        >
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[0.55rem] bg-gradient-to-br from-[#f8f9fb] to-[#e8ecf2]">
            <div className="flex gap-1.5 border-b border-black/[0.06] px-2 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]/70" />
              <span className="h-1.5 w-8 rounded bg-black/[0.06]" />
            </div>
            <div className="p-2">
              <div className="mb-1.5 h-1 w-2/3 rounded bg-black/[0.07]" />
              <div className="grid grid-cols-2 gap-1">
                <div className="h-10 rounded-md bg-white shadow-sm ring-1 ring-black/[0.04]" />
                <div className="h-10 rounded-md bg-gradient-to-br from-[#d4b44a]/20 to-[#c9a227]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({
  Icon,
  title,
  text,
}: {
  Icon: (p: IconProps) => React.ReactElement;
  title: string;
  text: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.1rem] border border-black/[0.06] bg-white p-4 shadow-[0_2px_28px_rgba(0,0,0,0.04)] sm:rounded-[1.35rem] sm:p-6 lg:p-6">
      <Icon className={iconClass} />
      <h3 className="mt-2.5 text-[15px] font-bold leading-snug tracking-tight text-ink sm:mt-3 sm:text-[17px]">{title}</h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-muted sm:mt-2.5 sm:text-[14px]">{text}</p>
    </article>
  );
}

function PortraitTile() {
  return (
    <div className="relative h-full min-h-[200px] overflow-hidden rounded-[1.1rem] border border-black/[0.06] bg-[#e8e4df] shadow-[0_2px_28px_rgba(0,0,0,0.05)] sm:min-h-[260px] sm:rounded-[1.35rem] lg:min-h-[210px]">
      <Image
        src={siteConfig.heroPortraitSrc}
        alt={siteConfig.founderName}
        fill
        className="object-cover object-[center_18%]"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
    </div>
  );
}

export function Program() {
  const [c0, c1, c2, c3, c4, c5] = cells;

  return (
    <section id="programm" className="scroll-mt-24 bg-[#f7f7f5] py-14 sm:py-20 lg:py-[5.25rem]">
      <div className="mx-auto max-w-[58rem] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-[42rem] text-center">
          <h2 className="font-sans text-[1.35rem] font-bold leading-[1.12] tracking-tight text-ink sm:text-3xl md:text-[2.1rem]">
            Dein Lernprogramm in der{" "}
            <span className={accent}>{siteConfig.methodName}</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
            Alles, was du brauchst, um von null auf eine profitable KI-Agentur zu kommen — Modul für Modul,
            mit persönlicher Begleitung und erprobten Vorlagen.
          </p>
        </header>

        {/* 3×3 wie Referenz: Mockup | Karte | Karte / Karte | Karte | Portrait / Mockup | Karte | Karte */}
        <div className="mt-11 grid grid-cols-1 gap-3.5 sm:mt-14 sm:gap-4 lg:mt-16 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
          <DeviceShowcase variant="a" />
          <ProgramCard {...c0} />
          <ProgramCard {...c1} />

          <ProgramCard {...c2} />
          <ProgramCard {...c3} />
          <PortraitTile />

          <DeviceShowcase variant="b" />
          <ProgramCard {...c4} />
          <ProgramCard {...c5} />
        </div>
      </div>
    </section>
  );
}
