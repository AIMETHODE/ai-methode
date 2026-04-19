import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "Brauche ich Vorkenntnisse?",
    a: "Nein. Kein Vorwissen, keine Technik, keine Erfahrung mit KI nötig. Du lernst alles was du zum Start brauchst.",
  },
  {
    q: "Ist das neben dem Job machbar?",
    a: "Ja. Das Programm ist für Menschen gebaut die nebenberuflich starten. Du bestimmst dein Tempo.",
  },
  {
    q: "Was macht die AI-Methode anders als ein Kurs?",
    a: "Kein anonymes Video das du alleine durchklickst. Du bekommst persönliche Begleitung, direktes Feedback und einen Ansprechpartner wenn du nicht weiterkommst.",
  },
  {
    q: "Für wen ist das Programm?",
    a: "Für alle die nebenberuflich starten wollen. Egal ob angestellt, selbstständig, Student oder Elternteil. Vorwissen spielt keine Rolle.",
  },
  {
    q: "Wie läuft der Start ab?",
    a: "Zuerst ein kostenloses Erstgespräch. Wir schauen gemeinsam ob es passt. Wenn ja, erstellen wir in einem zweiten Gespräch deinen individuellen Plan.",
  },
  {
    q: "Bekomme ich laufende Unterstützung?",
    a: "Ja. Du hast Zugang zur Community, persönliche Betreuung und direkte Antworten wenn du irgendwo nicht weiterkommst.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Häufig gestellte <span className="text-gold">Fragen</span>
            </>
          }
          subtitle="Alles was du wissen willst bevor du dein Erstgespräch buchst."
        />
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[14px] border border-black/[0.06] bg-canvas-muted px-3.5 py-3 open:bg-white open:shadow-sm sm:px-4"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <span className="mt-0.5 text-brand">+</span>
                <span className="flex-1">{item.q}</span>
              </summary>
              <p className="mt-3 border-t border-black/[0.06] pt-3 pl-7 text-[15px] leading-relaxed text-ink-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
