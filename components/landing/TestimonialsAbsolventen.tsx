"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { PlayTriangle } from "@/components/ui/PlayTriangle";

const items = [
  { name: "Jannik", tag: "Teilnehmer", quote: "\u201EIch hatte null Erfahrung mit KI \u2014 nach 3 Wochen hatte ich meinen ersten zahlenden Kunden.\u201C" },
  { name: "Andi", tag: "Teilnehmer", quote: "\u201EDie Vorlagen und die 1:1-Begleitung haben den Unterschied gemacht. Alleine h\u00E4tte ich ewig gebraucht.\u201C" },
  { name: "Lina", tag: "Teilnehmerin", quote: "\u201ENeben dem Vollzeitjob \u2014 und trotzdem echte Ergebnisse. Der Fahrplan funktioniert.\u201C" },
  { name: "David", tag: "Teilnehmer", quote: "\u201EEndlich ein Programm, das nicht nur Theorie ist. Ich wusste nach Tag 1, was zu tun ist.\u201C" },
];

export function TestimonialsAbsolventen() {
  return (
    <section
      id="erfolge"
      className="scroll-mt-24 border-t border-black/[0.06] bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Das sagen unsere <span className="text-gold">Teilnehmer</span>
            </>
          }
          subtitle="Erfahrungen von Teilnehmern, die mit der AI-Methode gestartet sind."
        />
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {items.map((x) => (
            <article
              key={x.name}
              className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-white shadow-sm"
            >
              <div className="relative aspect-video bg-gradient-to-br from-[#b0b8c9] to-[#8a93a8]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                    <PlayTriangle />
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[17px] font-bold text-gold">{x.name}</p>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
                  {x.tag}
                </p>
                <p className="mt-2 text-[14px] italic text-ink-muted">{x.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
