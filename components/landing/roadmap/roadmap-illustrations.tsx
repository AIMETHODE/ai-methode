import type { ReactNode } from "react";

/**
 * Flache Line-Drawing-Illustrationen für den Fahrplan zur eigenen KI-Agentur.
 * Gold-Palette, jeweils thematisch passend zum Schritt — keine externen Assets.
 */
const B = "#b8922a";
const B2 = "#8a6d1a";
const BL = "#faf4e0";
const G = "#c9a227";
const G2 = "#f5e6b8";
const INK = "#2b2b30";
const MUTED = "#6e6e73";

type Props = { className?: string };

export function RoadmapIllustration({ step, className }: Props & { step: number }) {
  switch (step) {
    case 1:
      return <Illu1 className={className} />;
    case 2:
      return <Illu2 className={className} />;
    case 3:
      return <Illu3 className={className} />;
    case 4:
      return <Illu4 className={className} />;
    case 5:
      return <Illu5 className={className} />;
    case 6:
      return <Illu6 className={className} />;
    default:
      return null;
  }
}

function SvgFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="0" y="0" width="400" height="240" rx="14" fill={BL} />
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 1 — Positionierung & Nische: Zielscheibe + Wunschkunden-Persona     */
/* ------------------------------------------------------------------ */
function Illu1({ className }: Props) {
  return (
    <SvgFrame className={className}>
      {/* Zielscheibe */}
      <g transform="translate(110 120)">
        <circle r="62" fill="white" stroke={B2} strokeWidth="1.6" />
        <circle r="46" fill="none" stroke={B} strokeWidth="1.4" opacity="0.7" />
        <circle r="30" fill="none" stroke={B} strokeWidth="1.4" opacity="0.85" />
        <circle r="14" fill={G2} stroke={B2} strokeWidth="1.4" />
        <circle r="4" fill={B2} />
      </g>
      {/* Pfeil im Zentrum */}
      <g stroke={INK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <line x1="184" y1="58" x2="118" y2="118" />
        <path d="M118 118 l10 -2 l-2 10 z" fill={INK} />
        <path d="M188 50 l-12 4 M188 50 l-4 12" />
      </g>
      {/* Persona-Karte */}
      <g transform="translate(228 56)">
        <rect width="140" height="128" rx="12" fill="white" stroke={B} strokeWidth="1.5" />
        <circle cx="36" cy="36" r="14" fill="none" stroke={INK} strokeWidth="1.6" />
        <path
          d="M16 66 c0 -10 8 -18 18 -18 h4 c10 0 18 8 18 18"
          stroke={INK}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="62" y="26" width="64" height="8" rx="3" fill={B} opacity="0.25" />
        <rect x="62" y="40" width="48" height="6" rx="3" fill={MUTED} opacity="0.35" />
        {/* Tags */}
        <rect x="14" y="82" width="58" height="20" rx="10" fill={G2} stroke={B} strokeWidth="1.2" />
        <text x="43" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill={B2}>
          Nische
        </text>
        <rect x="78" y="82" width="48" height="20" rx="10" fill="white" stroke={B2} strokeWidth="1.2" />
        <text x="102" y="96" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill={INK}>
          Wer?
        </text>
        <path d="M14 112 h112" stroke={B} strokeWidth="1" opacity="0.3" />
      </g>
    </SvgFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 2 — Angebot entwickeln: Pricing-Karte mit Paket & Preis             */
/* ------------------------------------------------------------------ */
function Illu2({ className }: Props) {
  return (
    <SvgFrame className={className}>
      {/* Hauptangebot-Karte */}
      <g transform="translate(108 36)">
        <rect width="184" height="172" rx="14" fill="white" stroke={B} strokeWidth="1.6" />
        {/* Header-Tab */}
        <rect x="20" y="-10" width="84" height="22" rx="11" fill={B} />
        <text x="62" y="6" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="800" fill="white">
          KI-PAKET
        </text>
        {/* Titel */}
        <rect x="20" y="28" width="100" height="10" rx="3" fill={INK} opacity="0.85" />
        <rect x="20" y="44" width="68" height="6" rx="3" fill={MUTED} opacity="0.5" />
        {/* Preis */}
        <text x="20" y="84" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="900" fill={B2}>
          2.490
        </text>
        <text x="98" y="84" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill={B2}>
          €
        </text>
        <text x="118" y="84" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill={MUTED}>
          / Projekt
        </text>
        <line x1="20" y1="98" x2="164" y2="98" stroke={B} strokeWidth="1" opacity="0.25" />
        {/* Bullet-Liste */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(20 ${112 + i * 14})`}>
            <circle cx="6" cy="6" r="6" fill={G2} stroke={B} strokeWidth="1.2" />
            <path d="M3 6 l2.5 2.5 L9 4" stroke={B2} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="18" y="3" width={i === 3 ? 80 : 120} height="6" rx="3" fill={MUTED} opacity="0.45" />
          </g>
        ))}
      </g>
      {/* Preis-Sticker */}
      <g transform="translate(280 38) rotate(14)">
        <path
          d="M0 16 L16 0 L70 0 L70 32 L16 32 Z"
          fill={G}
          stroke={B2}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="16" r="3" fill="white" />
        <text x="44" y="21" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="900" fill="white">
          NEU
        </text>
      </g>
      {/* Stützelemente links */}
      <g stroke={B} strokeWidth="1.4" fill="none" opacity="0.5" strokeLinecap="round">
        <path d="M40 90 h44" />
        <path d="M40 110 h36" />
        <path d="M40 130 h28" />
      </g>
    </SvgFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 3 — Erste Kunden ansprechen: Smartphone, Nachrichten, Kalender      */
/* ------------------------------------------------------------------ */
function Illu3({ className }: Props) {
  return (
    <SvgFrame className={className}>
      {/* Smartphone */}
      <g transform="translate(56 32)">
        <rect width="120" height="180" rx="18" fill="white" stroke={INK} strokeWidth="1.8" />
        <rect x="10" y="10" width="100" height="160" rx="10" fill={BL} />
        <rect x="44" y="4" width="32" height="4" rx="2" fill={INK} opacity="0.4" />
        {/* Chat-Bubbles */}
        <g transform="translate(18 24)">
          <path d="M0 10 a10 10 0 0 1 10 -10 h44 a10 10 0 0 1 10 10 v8 a10 10 0 0 1 -10 10 H14 l-6 8 v-8 a10 10 0 0 1 -8 -8 z" fill="white" stroke={B} strokeWidth="1.2" />
          <rect x="10" y="10" width="42" height="4" rx="2" fill={B2} opacity="0.6" />
          <rect x="10" y="18" width="32" height="4" rx="2" fill={MUTED} opacity="0.4" />
        </g>
        <g transform="translate(28 76)">
          <path d="M64 10 a10 10 0 0 0 -10 -10 H10 a10 10 0 0 0 -10 10 v8 a10 10 0 0 0 10 10 H50 l6 8 v-8 a10 10 0 0 0 8 -8 z" fill={G2} stroke={B} strokeWidth="1.2" />
          <rect x="10" y="10" width="44" height="4" rx="2" fill={B2} opacity="0.7" />
          <rect x="10" y="18" width="28" height="4" rx="2" fill={B2} opacity="0.5" />
        </g>
        <g transform="translate(18 128)">
          <path d="M0 10 a10 10 0 0 1 10 -10 h36 a10 10 0 0 1 10 10 v6 a10 10 0 0 1 -10 10 H10 a10 10 0 0 1 -10 -10 z" fill="white" stroke={B} strokeWidth="1.2" />
          <rect x="10" y="9" width="34" height="4" rx="2" fill={MUTED} opacity="0.5" />
          <rect x="10" y="17" width="22" height="4" rx="2" fill={MUTED} opacity="0.35" />
        </g>
      </g>

      {/* Verbindungslinie */}
      <g stroke={B} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M186 122 C 210 122 210 122 230 122" strokeDasharray="5 5" />
        <path d="M226 118 l6 4 -6 4" />
      </g>

      {/* Kalender */}
      <g transform="translate(236 50)">
        <rect width="124" height="140" rx="12" fill="white" stroke={B2} strokeWidth="1.6" />
        <rect width="124" height="28" rx="12" fill={B} />
        <rect y="16" width="124" height="12" fill={B} />
        <text x="62" y="20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="800" fill="white">
          ERSTGESPRÄCH
        </text>
        {/* Ringe oben */}
        <circle cx="28" cy="-2" r="4" fill="white" stroke={INK} strokeWidth="1.4" />
        <circle cx="96" cy="-2" r="4" fill="white" stroke={INK} strokeWidth="1.4" />
        {/* Tagesraster */}
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => {
            const isPick = (row === 1 && col === 2) || (row === 2 && col === 0) || (row === 3 && col === 3);
            const x = 12 + col * 22;
            const y = 42 + row * 22;
            return (
              <g key={`${row}-${col}`}>
                <rect x={x} y={y} width="18" height="18" rx="4" fill={isPick ? G : "white"} stroke={isPick ? B2 : B} strokeWidth="1" opacity={isPick ? 1 : 0.6} />
                {isPick && (
                  <path d={`M${x + 4} ${y + 9} l3 3 l7 -7`} stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </g>
            );
          })
        )}
      </g>
    </SvgFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 4 — Erstgespräch & Abschluss: Zwei Sprecher, Handshake/Vertrag      */
/* ------------------------------------------------------------------ */
function Illu4({ className }: Props) {
  return (
    <SvgFrame className={className}>
      {/* Linker Sprecher */}
      <g transform="translate(48 78)">
        <circle cx="44" cy="32" r="28" fill="white" stroke={INK} strokeWidth="1.7" />
        <circle cx="44" cy="26" r="9" fill="none" stroke={INK} strokeWidth="1.5" />
        <path d="M28 50 c0 -8 6 -14 14 -14 h4 c8 0 14 6 14 14" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Sprechblase */}
        <g transform="translate(60 -22)">
          <path d="M0 12 a12 12 0 0 1 12 -12 h40 a12 12 0 0 1 12 12 v10 a12 12 0 0 1 -12 12 H22 l-8 10 v-10 a12 12 0 0 1 -14 -12 z" fill={G2} stroke={B} strokeWidth="1.4" />
          <circle cx="20" cy="17" r="2.4" fill={B2} />
          <circle cx="32" cy="17" r="2.4" fill={B2} />
          <circle cx="44" cy="17" r="2.4" fill={B2} />
        </g>
      </g>

      {/* Vertrag in der Mitte */}
      <g transform="translate(168 56)">
        <rect width="64" height="88" rx="6" fill="white" stroke={B2} strokeWidth="1.6" />
        <rect x="10" y="10" width="44" height="6" rx="2" fill={INK} opacity="0.7" />
        <rect x="10" y="22" width="36" height="4" rx="2" fill={MUTED} opacity="0.45" />
        <rect x="10" y="32" width="44" height="4" rx="2" fill={MUTED} opacity="0.45" />
        <rect x="10" y="42" width="40" height="4" rx="2" fill={MUTED} opacity="0.45" />
        {/* Signatur-Linie */}
        <path d="M10 64 h44" stroke={B} strokeWidth="1.2" />
        <path
          d="M14 62 c4 -4 8 0 12 -3 c4 -3 10 4 16 -2 c5 -5 10 1 12 0"
          stroke={B2}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Stempel/Check */}
        <circle cx="50" cy="78" r="9" fill={G} stroke={B2} strokeWidth="1.4" />
        <path d="M46 78 l3 3 l6 -6" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Rechter Sprecher */}
      <g transform="translate(264 78)">
        <circle cx="44" cy="32" r="28" fill="white" stroke={INK} strokeWidth="1.7" />
        <circle cx="44" cy="26" r="9" fill="none" stroke={INK} strokeWidth="1.5" />
        <path d="M28 50 c0 -8 6 -14 14 -14 h4 c8 0 14 6 14 14" stroke={INK} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Sprechblase */}
        <g transform="translate(-60 -22)">
          <path d="M64 12 a12 12 0 0 0 -12 -12 h-40 a12 12 0 0 0 -12 12 v10 a12 12 0 0 0 12 12 H42 l8 10 v-10 a12 12 0 0 0 14 -12 z" fill="white" stroke={B2} strokeWidth="1.4" />
          <rect x="14" y="14" width="36" height="4" rx="2" fill={B2} opacity="0.6" />
          <rect x="14" y="22" width="24" height="4" rx="2" fill={MUTED} opacity="0.5" />
        </g>
      </g>

      {/* Bodenlinie */}
      <line x1="40" y1="200" x2="360" y2="200" stroke={B} strokeWidth="1" opacity="0.3" />
    </SvgFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 5 — Lieferung mit KI: Laptop mit AI-Sparkles & Output              */
/* ------------------------------------------------------------------ */
function Illu5({ className }: Props) {
  return (
    <SvgFrame className={className}>
      {/* Laptop */}
      <g transform="translate(56 50)">
        {/* Display */}
        <rect width="180" height="118" rx="10" fill="white" stroke={INK} strokeWidth="1.8" />
        <rect x="8" y="8" width="164" height="102" rx="6" fill={BL} />
        {/* Browser-/App-Header */}
        <g transform="translate(16 18)">
          <circle cx="4" cy="4" r="3" fill={B} opacity="0.5" />
          <circle cx="14" cy="4" r="3" fill={B} opacity="0.35" />
          <circle cx="24" cy="4" r="3" fill={B} opacity="0.25" />
          <rect x="38" y="0" width="100" height="8" rx="4" fill="white" stroke={B} strokeWidth="0.8" />
        </g>
        {/* Output-Zeilen */}
        <g transform="translate(16 38)">
          <rect width="148" height="6" rx="3" fill={MUTED} opacity="0.35" />
          <rect y="12" width="120" height="6" rx="3" fill={MUTED} opacity="0.35" />
          <rect y="24" width="140" height="6" rx="3" fill={MUTED} opacity="0.35" />
          <rect y="36" width="92" height="6" rx="3" fill={MUTED} opacity="0.35" />
          {/* Generierter Block */}
          <rect y="52" width="148" height="22" rx="6" fill={G2} stroke={B} strokeWidth="1.2" />
          <rect x="8" y="58" width="84" height="4" rx="2" fill={B2} opacity="0.7" />
          <rect x="8" y="66" width="60" height="4" rx="2" fill={B2} opacity="0.5" />
        </g>
        {/* Tastatur-Sockel */}
        <path d="M-8 118 h196 l-12 14 H4 z" fill="white" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="76" y="124" width="28" height="3" rx="1.5" fill={INK} opacity="0.3" />
      </g>

      {/* AI-Sparkle Badge */}
      <g transform="translate(216 36)">
        <circle r="22" fill={G} stroke={B2} strokeWidth="1.5" />
        <path
          d="M0 -12 L3 -3 L12 0 L3 3 L0 12 L-3 3 L-12 0 L-3 -3 Z"
          fill="white"
        />
        <text x="0" y="34" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" fill={B2}>
          KI
        </text>
      </g>

      {/* Output-Pfeil + Dokument */}
      <g transform="translate(252 110)">
        <path
          d="M0 18 C 18 18 18 18 36 18"
          stroke={B}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="5 5"
        />
        <path d="M30 14 l8 4 l-8 4" stroke={B} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g transform="translate(296 60)">
        <rect width="68" height="86" rx="8" fill="white" stroke={B} strokeWidth="1.5" />
        <path d="M52 0 L68 16 H56 a4 4 0 0 1 -4 -4 z" fill={G2} stroke={B} strokeWidth="1.2" />
        <rect x="10" y="26" width="48" height="5" rx="2" fill={MUTED} opacity="0.45" />
        <rect x="10" y="36" width="40" height="5" rx="2" fill={MUTED} opacity="0.45" />
        <rect x="10" y="46" width="44" height="5" rx="2" fill={MUTED} opacity="0.45" />
        <circle cx="34" cy="68" r="9" fill={G} stroke={B2} strokeWidth="1.2" />
        <path d="M30 68 l3 3 l6 -6" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Sparkles drumherum */}
      <g stroke={B2} strokeWidth="1.4" fill="none" strokeLinecap="round">
        <path d="M250 60 l0 8 M246 64 l8 0" />
        <path d="M40 168 l0 6 M37 171 l6 0" />
      </g>
    </SvgFrame>
  );
}

/* ------------------------------------------------------------------ */
/* 6 — Wiederkehrende Mandate: Recurring-Loop & Wachstumschart         */
/* ------------------------------------------------------------------ */
function Illu6({ className }: Props) {
  return (
    <SvgFrame className={className}>
      {/* Chart-Karte links */}
      <g transform="translate(40 40)">
        <rect width="180" height="160" rx="12" fill="white" stroke={B2} strokeWidth="1.6" />
        <rect x="14" y="14" width="80" height="8" rx="3" fill={INK} opacity="0.7" />
        <rect x="14" y="28" width="60" height="6" rx="3" fill={MUTED} opacity="0.45" />
        {/* Achsen */}
        <line x1="20" y1="132" x2="166" y2="132" stroke={INK} strokeWidth="1.2" opacity="0.5" />
        <line x1="20" y1="48" x2="20" y2="132" stroke={INK} strokeWidth="1.2" opacity="0.5" />
        {/* Bars */}
        {[
          { x: 30, h: 24 },
          { x: 52, h: 38 },
          { x: 74, h: 44 },
          { x: 96, h: 58 },
          { x: 118, h: 70 },
          { x: 140, h: 82 },
        ].map((b, i) => (
          <g key={i}>
            <rect
              x={b.x}
              y={132 - b.h}
              width="14"
              height={b.h}
              rx="3"
              fill={i === 5 ? G : G2}
              stroke={B}
              strokeWidth="1.1"
            />
          </g>
        ))}
        {/* Trendlinie */}
        <path
          d="M30 116 L52 100 L74 92 L96 76 L118 64 L140 50"
          stroke={B2}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          { x: 30, y: 116 },
          { x: 52, y: 100 },
          { x: 74, y: 92 },
          { x: 96, y: 76 },
          { x: 118, y: 64 },
          { x: 140, y: 50 },
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="white" stroke={B2} strokeWidth="1.2" />
        ))}
      </g>

      {/* Recurring Loop rechts */}
      <g transform="translate(300 120)">
        <circle r="54" fill="white" stroke={B} strokeWidth="1.6" />
        {/* Pfeile im Kreis */}
        <path
          d="M -36 -8 A 38 38 0 1 1 36 -8"
          stroke={B2}
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M30 -14 l8 6 l-10 4" stroke={B2} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M 36 8 A 38 38 0 1 1 -36 8"
          stroke={G}
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M-30 14 l-8 -6 l10 -4" stroke={G} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* Euro-Zentrum */}
        <circle r="18" fill={G2} stroke={B2} strokeWidth="1.4" />
        <text x="0" y="6" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="22" fontWeight="900" fill={B2}>
          €
        </text>
        {/* Monatsmarker */}
        <text x="0" y="-66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800" fill={B2}>
          MTL.
        </text>
      </g>
    </SvgFrame>
  );
}
