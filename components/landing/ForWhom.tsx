import { SectionHeading } from "@/components/SectionHeading";

type IconType = "briefcase" | "graduation" | "family" | "compass";

const groups: { title: string; text: string; icon: IconType }[] = [
  {
    icon: "briefcase",
    title: "Angestellte & Azubis",
    text: "Du hast einen festen Job oder stehst am Anfang deiner Karriere. Du willst nebenher etwas Eigenes aufbauen ohne etwas zu riskieren.",
  },
  {
    icon: "graduation",
    title: "Studenten",
    text: "Du willst nicht warten bis du fertig bist. Neben dem Studium aufbauen bedeutet früher finanziell unabhängig sein.",
  },
  {
    icon: "family",
    title: "Eltern",
    text: "Wenig Zeit, viel Verantwortung. 1–2 Stunden am Tag reichen um nebenher ein eigenes Business aufzubauen.",
  },
  {
    icon: "compass",
    title: "Quereinsteiger",
    text: "Kein Vorwissen, kein Netzwerk, kein Problem. Du bekommst alles was du brauchst um von null anzufangen.",
  },
];

function GroupIcon({ type }: { type: IconType }) {
  const cls = "h-5 w-5 text-[#9a7b1a] sm:h-[22px] sm:w-[22px]";
  if (type === "briefcase") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="7.5"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M3 12.5h18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M11 12v2h2v-2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "graduation") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M2.5 9.5 12 5l9.5 4.5L12 14 2.5 9.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 11.5v4.2c0 .8.4 1.5 1.1 1.9 1.2.7 2.7 1.4 4.4 1.4s3.2-.7 4.4-1.4c.7-.4 1.1-1.1 1.1-1.9v-4.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M20.5 9.8v5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "family") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="7" cy="7.5" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17" cy="7.5" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M2.5 19v-1c0-2.2 1.8-4 4-4h1c2.2 0 4 1.8 4 4v1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12.5 19v-1c0-2.2 1.8-4 4-4h1c2.2 0 4 1.8 4 4v1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 17.5c-.55-.5-2-1.7-2-3 0-.83.67-1.5 1.5-1.5.4 0 .77.16 1 .43.23-.27.6-.43 1-.43.83 0 1.5.67 1.5 1.5 0 1.3-1.45 2.5-2 3Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m15.5 8.5-2 5-5 2 2-5 5-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function ForWhom() {
  return (
    <section className="border-t border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Für wen ist{" "}
              <span className="text-brand">AI-Methode</span> gedacht?
            </>
          }
          subtitle="Für alle die nebenbei starten wollen — egal wo du gerade stehst."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-[14px] border border-black/[0.06] bg-canvas-muted p-4 sm:rounded-[18px] sm:p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5e6b8] sm:h-10 sm:w-10">
                <GroupIcon type={g.icon} />
              </span>
              <h3 className="mt-3 text-[15px] font-bold text-ink sm:mt-4 sm:text-[17px]">{g.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted sm:mt-2 sm:text-[14px]">
                {g.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
