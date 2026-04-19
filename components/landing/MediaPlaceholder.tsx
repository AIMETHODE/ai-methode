import { SectionHeading } from "@/components/SectionHeading";

export function MediaPlaceholder() {
  return (
    <section className="border-t border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Tarik in den <span className="text-gold">Medien</span>
            </>
          }
          subtitle="Interviews, Podcasts und Auftritte rund um KI, Business-Aufbau und die AI-Methode."
        />
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-[#ececee] to-[#d5d5db] ring-1 ring-black/[0.06]"
            >
              <div className="flex h-full items-center justify-center text-[13px] font-medium text-ink-muted">
                Medienartikel {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
