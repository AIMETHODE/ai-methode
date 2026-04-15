import { SectionHeading } from "@/components/SectionHeading";

const groups = [
  { title: "Angestellte", text: "Du willst raus aus der Abhängigkeit — und dir nebenberuflich etwas Eigenes aufbauen." },
  { title: "Quereinsteiger", text: "Keine Tech-Erfahrung? Kein Problem. Du bekommst alles Schritt für Schritt." },
  { title: "Selbstständige", text: "Du hast schon ein Business und willst KI als lukrativen Bereich dazunehmen." },
  { title: "Ambitionierte Starter", text: "Du wartest nicht auf den perfekten Moment — du willst jetzt loslegen." },
];

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
          subtitle="Wenn du nicht l\u00E4nger zuschauen willst, wie andere mit KI Geld verdienen \u2014 sondern selbst starten."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-[14px] border border-black/[0.06] bg-canvas-muted p-4 sm:rounded-[18px] sm:p-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5e6b8] text-[14px] font-bold text-[#9a7b1a]">
                +
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
