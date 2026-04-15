import type { ReactNode } from "react";

/**
 * Flache Vektor-Illustrationen für den Fahrplan — Gold-Palette,
 * Thema: KI-Agentur Schritt für Schritt (keine externen Assets).
 */
const B = "#b8922a";
const B2 = "#8a6d1a";
const BL = "#faf4e0";
const G = "#c9a227";
const G2 = "#f5e6b8";
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
      {children}
    </svg>
  );
}

/** 1 — Grundlagen: Überblick, Methode, „Landkarte“ */
function Illu1({ className }: Props) {
  return (
    <SvgFrame className={className}>
      <rect x="32" y="36" width="336" height="168" rx="16" fill={BL} stroke="rgba(0,0,0,0.06)" />
      <rect x="52" y="56" width="120" height="88" rx="8" fill="white" stroke={B} strokeWidth="1.5" />
      <circle cx="92" cy="88" r="14" fill={B} opacity="0.2" />
      <path d="M82 108h40v6h-40z" fill={B} opacity="0.35" />
      <path d="M82 120h28v4h-28z" fill={MUTED} opacity="0.4" />
      <rect x="188" y="56" width="156" height="88" rx="8" fill="white" stroke={G} strokeWidth="1.5" />
      <circle cx="220" cy="88" r="6" fill={G} />
      <path d="M236 84h88v8h-88zM236 98h64v6h-64zM236 110h72v6h-72z" fill={B} opacity="0.45" />
      <rect x="52" y="156" width="292" height="36" rx="8" fill="white" stroke={B2} strokeWidth="1.25" />
      <path
        d="M68 172h40c6 0 10-4 10-10v-4"
        stroke={B}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="200" cy="174" r="10" fill={B} opacity="0.15" />
      <path d="M196 174l4 4 8-10" stroke={B2} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="220" y="174" width="88" height="12" rx="2" fill={B} opacity="0.2" />
    </SvgFrame>
  );
}

/** 2 — Technik: Setup, Geräte, APIs */
function Illu2({ className }: Props) {
  return (
    <SvgFrame className={className}>
      <rect x="24" y="44" width="352" height="152" rx="16" fill={BL} />
      <rect x="48" y="68" width="130" height="96" rx="10" fill="white" stroke={B} strokeWidth="1.5" />
      <rect x="60" y="82" width="106" height="56" rx="4" fill={B} opacity="0.12" />
      <circle cx="112" cy="108" r="14" fill={B} />
      <path d="M104 118h16v8h-16z" fill={B2} />
      <rect x="222" y="68" width="130" height="96" rx="10" fill="white" stroke={B2} strokeWidth="1.5" />
      <rect x="234" y="82" width="106" height="56" rx="4" fill={B} opacity="0.08" />
      <path
        d="M176 116h46"
        stroke={G}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 5"
      />
      <circle cx="199" cy="116" r="8" fill={G2} stroke={G} strokeWidth="1.5" />
      <path d="M196 116l4 3 6-8" stroke={G} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="260" y="96" width="54" height="28" rx="4" fill={G} opacity="0.25" />
      <path d="M272 108h28v4h-28z" fill={B2} opacity="0.5" />
      <circle cx="72" y="188" r="14" fill={B} opacity="0.2" />
      <path d="M68 188h8M72 184v8" stroke={B2} strokeWidth="2" strokeLinecap="round" />
      <path d="M92 186h120v6H92zM92 196h72v4H92z" fill={MUTED} opacity="0.35" />
    </SvgFrame>
  );
}

/** 3 — Inhalte strukturieren */
function Illu3({ className }: Props) {
  return (
    <SvgFrame className={className}>
      <rect x="28" y="40" width="344" height="160" rx="16" fill={BL} />
      <rect x="48" y="60" width="200" height="120" rx="10" fill="white" stroke={B} strokeWidth="1.5" />
      <rect x="64" y="76" width="56" height="36" rx="6" fill={B} opacity="0.15" />
      <rect x="128" y="76" width="56" height="36" rx="6" fill={B} opacity="0.1" />
      <rect x="192" y="76" width="48" height="36" rx="6" fill={G} opacity="0.2" />
      <path d="M120 94h8M136 94h8" stroke={B2} strokeWidth="2" strokeLinecap="round" />
      <path d="M88 130h120v8H88zM88 146h96v6H88z" fill={B} opacity="0.25" />
      <circle cx="260" cy="100" r="28" fill="white" stroke={G} strokeWidth="2" />
      <path d="M248 100h24M260 88v24" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M268 76l16-12v24z" fill={G} opacity="0.5" />
      <rect x="260" y="132" width="92" height="40" rx="8" fill="white" stroke={B2} strokeWidth="1.25" />
      <path d="M268 148h72v6h-72z" fill={G} opacity="0.35" />
    </SvgFrame>
  );
}

/** 4 — Praxis: Gespräche, Feedback */
function Illu4({ className }: Props) {
  return (
    <SvgFrame className={className}>
      <rect x="24" y="36" width="352" height="168" rx="16" fill={BL} />
      <ellipse cx="120" cy="118" rx="36" ry="44" fill="white" stroke={B} strokeWidth="1.5" />
      <circle cx="120" cy="104" r="18" fill={B} opacity="0.2" />
      <path d="M108 128h24c8 0 14-6 14-14" stroke={B2} strokeWidth="1.5" fill="none" />
      <ellipse cx="280" cy="118" rx="36" ry="44" fill="white" stroke={B2} strokeWidth="1.5" />
      <circle cx="280" cy="104" r="18" fill={B} opacity="0.25" />
      <path d="M268 128h24c8 0 14-6 14-14" stroke={B2} strokeWidth="1.5" fill="none" />
      <rect x="168" y="148" width="64" height="40" rx="8" fill="white" stroke={G} strokeWidth="1.5" />
      <path d="M184 160h32M184 170h24" stroke={B} strokeWidth="2" strokeLinecap="round" />
      <rect x="88" y="168" width="224" height="28" rx="8" fill="white" stroke={B} strokeWidth="1.25" opacity="0.9" />
      <path d="M104 180h192v4H104zM104 188h140v3H104z" fill={MUTED} opacity="0.35" />
    </SvgFrame>
  );
}

/** 5 — Routinen & Zeit */
function Illu5({ className }: Props) {
  return (
    <SvgFrame className={className}>
      <rect x="32" y="40" width="336" height="160" rx="16" fill={BL} />
      <circle cx="200" cy="108" r="52" fill="white" stroke={G} strokeWidth="3" />
      <circle cx="200" cy="108" r="44" stroke={B} strokeWidth="1.5" opacity="0.2" />
      <path d="M200 76v16M200 124v16M168 108h16M216 108h16" stroke={B2} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M200 108l28-20" stroke={G} strokeWidth="3" strokeLinecap="round" />
      <circle cx="200" cy="108" r="5" fill={B2} />
      <rect x="72" y="64" width="72" height="88" rx="8" fill="white" stroke={B} strokeWidth="1.5" />
      <path d="M84 80h48M84 94h40M84 108h44M84 122h36" stroke={B} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <rect x="88" y="132" width="40" height="10" rx="2" fill={G} opacity="0.35" />
      <rect x="256" y="64" width="72" height="88" rx="8" fill="white" stroke={B2} strokeWidth="1.5" />
      <path d="M268 80h16l12 12-12 12h-16l-12-12z" fill={G} opacity="0.25" />
      <path d="M272 112h32M272 126h24" stroke={B} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </SvgFrame>
  );
}

/** 6 — Prozesse: Whiteboard, Team */
function Illu6({ className }: Props) {
  return (
    <SvgFrame className={className}>
      <rect x="28" y="44" width="344" height="152" rx="16" fill={BL} />
      <rect x="56" y="60" width="200" height="112" rx="8" fill="white" stroke={B2} strokeWidth="2" />
      <rect x="72" y="76" width="40" height="28" rx="4" fill={B} opacity="0.2" />
      <path d="M124 88h112M124 104h96M124 120h104" stroke={B} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <path d="M132 84l8 8 12-16 10 12 14-20" stroke={G} strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="300" cy="96" r="14" fill={B} opacity="0.2" />
      <path d="M292 118h16l6 22h-28l6-22z" fill={B} opacity="0.35" />
      <circle cx="332" cy="100" r="10" fill={B} opacity="0.18" />
      <path d="M326 116h12l4 16h-20l4-16z" fill={B2} opacity="0.4" />
      <rect x="88" y="184" width="224" height="28" rx="8" fill="white" stroke={G} strokeWidth="1.25" />
      <path d="M104 196h180v6H104z" fill={B} opacity="0.25" />
    </SvgFrame>
  );
}
