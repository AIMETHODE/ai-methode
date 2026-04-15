import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    q: "Brauche ich technische Vorkenntnisse oder KI-Erfahrung?",
    a: "Nein. Die AI-Methode ist so aufgebaut, dass du ohne Programmierkenntnisse starten kannst. Wir zeigen dir alles Schritt f\u00FCr Schritt \u2014 von der Positionierung bis zum ersten zahlenden Kunden.",
  },
  {
    q: "Wie viel Zeit muss ich investieren?",
    a: "1\u20132 Stunden am Tag reichen f\u00FCr den Aufbau. Das Programm ist explizit f\u00FCr Berufst\u00E4tige designed, die nebenberuflich starten wollen \u2014 ohne ihren Hauptjob zu gef\u00E4hrden.",
  },
  {
    q: "Was unterscheidet die AI-Methode von Onlinekursen?",
    a: "Pers\u00F6nliche 1:1-Begleitung statt anonymer Videokurs. Du bekommst individuelle Strategien, direktes Feedback und einen Mentor, der dein Business mit dir aufbaut \u2014 nicht nur erkl\u00E4rt.",
  },
  {
    q: "Was kostet die Teilnahme?",
    a: "Die AI-Methode ist ein High-Ticket-Programm mit pers\u00F6nlicher Betreuung. Die genauen Details besprechen wir im kostenlosen Erstgespr\u00E4ch \u2014 dort findest du heraus, ob es f\u00FCr dich passt.",
  },
  {
    q: "Wie schnell kann ich erste Ergebnisse erwarten?",
    a: "Viele Teilnehmer gewinnen innerhalb der ersten Wochen ihren ersten Kunden. Das h\u00E4ngt nat\u00FCrlich von deiner Umsetzung ab \u2014 aber unser System ist darauf ausgelegt, schnell ins Handeln zu kommen.",
  },
  {
    q: "Ist das seri\u00F6s oder wieder so ein \u201ESchnell-reich-werden\u201C-Ding?",
    a: "Wir versprechen dir keinen Reichtum \u00FCber Nacht. Was wir dir geben: ein erprobtes System, pers\u00F6nliche Begleitung und die Werkzeuge, die du brauchst. Dein Ergebnis h\u00E4ngt von deinem Einsatz ab.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              H\u00E4ufig gestellte <span className="text-gold">Fragen</span>
            </>
          }
          subtitle="Alles, was du wissen musst \u2014 bevor du dein Erstgespr\u00E4ch buchst."
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
