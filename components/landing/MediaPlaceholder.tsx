import { SectionHeading } from "@/components/SectionHeading";

export function MediaPlaceholder() {
  return (
    <section className="border-t border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Unsere <span className="text-gold">Medien</span> &amp; Auftritte
            </>
          }
          subtitle="Platzhalter für Presse-Screenshots oder Logos — ersetze durch echte Assets."
        />
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-[#ececee] to-[#d5d5db] ring-1 ring-black/[0.06]"
            >
              <div className="flex h-full items-center justify-center text-[13px] font-medium text-ink-muted">
                Screenshot {i}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] text-ink-subtle">
          Keine fremden Marken-Logos ohne Freigabe — Platzhalter nur zur Layout-Vorschau.
        </p>
      </div>
    </section>
  );
}
