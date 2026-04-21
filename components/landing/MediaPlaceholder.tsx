import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

type MediaItem = {
  src?: string;
  alt?: string;
  label: string;
};

const items: MediaItem[] = [
  { label: "Medienartikel 1" },
  {
    src: "/media-gewinner.png",
    alt: "Gewinner.de — Tarik Dzelic im Interview: Was hinter dem Erfolg der AI-Methode steckt",
    label: "Medienartikel 2",
  },
  { label: "Medienartikel 3" },
];

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
          {items.map((item, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-gradient-to-br from-[#ececee] to-[#d5d5db] ring-1 ring-black/[0.06]"
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt ?? item.label}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-[13px] font-medium text-ink-muted">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
