export function TeamPhotoBanner() {
  return (
    <section className="bg-canvas-soft py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-sm">
          <div className="border-b border-black/[0.06] px-6 py-4 text-center">
            <h3 className="font-sans text-[1.35rem] font-bold text-ink">
              Mehr als <span className="text-gold">8 Experten</span> im Team
            </h3>
            <p className="mt-1 text-[14px] text-ink-muted">
              Gruppenfoto — Platzhalter bis euer Shooting fertig ist
            </p>
          </div>
          <div className="aspect-[21/9] min-h-[200px] bg-gradient-to-br from-[#d8dce3] to-[#aeb6c4]">
            <div className="flex h-full items-center justify-center text-[15px] font-medium text-ink-muted">
              Team-Foto Platzhalter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
