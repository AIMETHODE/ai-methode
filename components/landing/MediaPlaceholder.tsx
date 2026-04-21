import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

type MediaItem = {
  src?: string;
  alt?: string;
  label: string;
};

const items: MediaItem[] = [
  {
    src: "/media-gewinner.png",
    alt: "Gewinner.de — Tarik Dzelic im Interview: Was hinter dem Erfolg der AI-Methode steckt",
    label: "Gewinner.de",
  },
  {
    src: "/media-ntv.png",
    alt: "n-tv.de — Tarik Dzelic: Wie die AI-Methode Unternehmern zu mehr Effizienz und nachhaltigem Wachstum verhilft",
    label: "n-tv.de",
  },
  {
    src: "/media-kurier.png",
    alt: "KURIER — Tarik Dzelic: Die AI-Methode und das große Business",
    label: "KURIER",
  },
  {
    src: "/media-forbes.png",
    alt: "Forbes Austria — KI ist das Thema, das die Wirtschaftswelt gerade auf den Kopf stellt",
    label: "Forbes Austria",
  },
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
        <div
          className="group relative mt-8 overflow-hidden sm:mt-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee-soft gap-4 group-hover:[animation-play-state:paused] sm:gap-6">
            {[...items, ...items].map((item, i) => (
              <div
                key={i}
                className="relative w-[78vw] max-w-[360px] shrink-0 overflow-hidden rounded-[16px] ring-1 ring-black/[0.06] sm:w-[360px] lg:w-[380px]"
                aria-hidden={i >= items.length ? true : undefined}
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt ?? item.label}
                    width={1004}
                    height={1024}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 78vw, 380px"
                  />
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#ececee] to-[#d5d5db] text-[13px] font-medium text-ink-muted">
                    {item.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
