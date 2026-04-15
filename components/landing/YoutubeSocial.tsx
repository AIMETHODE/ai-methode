import { siteConfig } from "@/lib/site-config";

export function YoutubeSocial() {
  return (
    <section className="border-t border-black/[0.06] bg-canvas-muted py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 rounded-[20px] border border-black/[0.06] bg-white px-5 py-4 shadow-sm">
          <div className="h-14 w-14 shrink-0 rounded-full bg-[#d8d8dd]" />
          <div>
            <p className="text-[16px] font-bold text-ink">{siteConfig.founderName}</p>
            <p className="text-[13px] text-ink-muted">Kanal · Platzhalter</p>
          </div>
          <span className="rounded-full border border-black/20 bg-black px-3 py-1.5 text-[12px] font-semibold text-white">
            Abonnieren
          </span>
        </div>
        <div className="max-w-md flex-1 rounded-[20px] border border-black/[0.06] bg-white p-5 shadow-sm">
          <p className="text-[14px] font-semibold text-ink">
            MIT NUR 1 KLAREN ANGEBOT
          </p>
          <ul className="mt-3 space-y-2 text-[13px] text-ink-muted">
            <li>✓ Checkliste · Platzhalter</li>
            <li>✓ Ergebnis-Story · Platzhalter</li>
          </ul>
          <div className="mt-4 aspect-video rounded-xl bg-[#e8e8ed]">
            <div className="flex h-full items-center justify-center text-[12px] text-ink-muted">
              Promo-Grafik Platzhalter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
