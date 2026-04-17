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
    text: "Du entwickelst ein KI-Dienstleistungspaket, das Kunden überzeugt und einen Preis rechtfertigt, der sich lohnt.",
  },
  {
    Icon: IconPhone,
    title: "Kunden gewinnen durch Kaltakquise",
    text: "Du lernst, wie du systematisch Erstgespräche buchst. Strukturiert, direkt und ohne Umwege.",
  },
  {
    Icon: IconCheck,
    title: "Verkaufen auf Augenhöhe",
    text: "Gesprächsleitfäden, die aus Interessenten zahlende Kunden machen. Seriös, strukturiert, ohne Verkäufer-Feeling.",
  },
  {
    Icon: IconSparkles,
    title: "KI als dein Wettbewerbsvorteil",
    text: "Du lieferst in Stunden, was andere Tage brauchen. Deine Kunden merken den Unterschied sofort.",
  },
  {
    Icon: IconClock,
    title: "Nebenberuflich skalierbar",
    text: "1 bis 2 Stunden am Tag reichen für den Aufbau. Kein Kündigen, kein Risiko. Du startest neben dem Job.",
  },
  {
    Icon: IconTrend,
    title: "Planbares Einkommen aufbauen",
    text: "Von der ersten Anfrage bis zum wiederkehrenden Kunden. Ein System, das dir Monat für Monat Umsatz bringt.",
  },
];

function DeviceShowcase({ variant }: { variant: "a" | "b" }) {
  if (variant === "a") {
    return <BookingToPaymentShowcase />;
  }
  return <RecurringRevenueShowcase />;
}

/** Recurring Revenue Dashboard: wiederkehrende Zahlungen im Premium-Banking. */
function RecurringRevenueShowcase() {
  return (
    <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-[1.1rem] border border-black/[0.05] bg-gradient-to-br from-[#f5ecd8] via-[#efe4c8] to-[#e7d9b4] sm:min-h-[240px] sm:rounded-[1.35rem] lg:min-h-[210px]">
      <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#f5e6b8]/60 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-[#d4b44a]/40 blur-2xl" aria-hidden />

      <Image
        src="/program-recurring-revenue.png"
        alt="Wiederkehrende Zahlungen: monatliche Mandate"
        fill
        className="relative z-[1] object-contain object-center p-2 drop-shadow-[0_18px_28px_rgba(120,95,30,0.25)]"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
    </div>
  );
}

/** Zahlungs-Mockup: „Zahlung eingegangen +3.500 €" — echtes Bild. */
function BookingToPaymentShowcase() {
  return (
    <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-[1.1rem] border border-black/[0.05] bg-gradient-to-br from-[#f5ecd8] via-[#efe4c8] to-[#e7d9b4] sm:min-h-[240px] sm:rounded-[1.35rem] lg:min-h-[210px]">
      {/* warme Licht-Glows fürs Ambiente */}
      <div className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#f5e6b8]/60 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-[#d4b44a]/40 blur-2xl" aria-hidden />

      <Image
        src="/program-payment-phone.png"
        alt="Zahlung eingegangen: 3.500 €"
        fill
        className="relative z-[1] object-contain object-center p-2 drop-shadow-[0_18px_28px_rgba(120,95,30,0.25)]"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
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
    <div className="relative h-full min-h-[200px] overflow-hidden rounded-[1.1rem] border border-black/[0.06] bg-gradient-to-br from-[#f5ecd8] via-[#efe4c8] to-[#e7d9b4] shadow-[0_2px_28px_rgba(0,0,0,0.05)] sm:min-h-[260px] sm:rounded-[1.35rem] lg:min-h-[210px]">
      {/* warme Licht-Glows */}
      <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#f5e6b8]/60 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-[#d4b44a]/40 blur-2xl" aria-hidden />

      <Image
        src="/program-calendar-before-after.png"
        alt="Kalender vorher und nachher: von leer zu voll gebucht"
        fill
        className="relative z-[1] object-contain object-center p-2 drop-shadow-[0_14px_24px_rgba(120,95,30,0.2)]"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
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
            Kein Theorie-Überfluss. Nur was du wirklich brauchst, um nebenberuflich eine KI-Agentur
            aufzubauen, die Geld verdient.
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
