"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "@/components/CTAButton";

const BG_SRC = "/bottom-hero-city.jpg";

const pills = [
  "Kostenloses Erstgespräch ohne Kaufzwang",
  "Wir schauen gemeinsam ob es passt",
  "Bei Interesse bekommst du deinen individuellen Plan",
];

export function BottomHero() {
  return (
    <section id="dein-weg" className="scroll-mt-24 bg-canvas-soft pb-16 pt-4 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.25rem] ring-1 ring-black/[0.08] sm:rounded-[2rem]">
          {/* Stadt / Weg — Vollfläche */}
          <Image
            src={BG_SRC}
            alt=""
            fill
            className="object-cover object-[center_40%] sm:object-[center_36%]"
            sizes="(max-width: 1280px) 100vw, 1152px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10 sm:from-black/78 sm:via-black/38 sm:to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/18" />

          {/* Content — relativ, kein absolute CTA mehr */}
          <div className="relative z-[1] flex flex-col lg:min-h-[520px] lg:flex-row lg:items-stretch">
            {/* Text + Pills + CTA */}
            <motion.div
              className="flex flex-1 flex-col justify-center px-5 pb-8 pt-8 sm:px-10 sm:pb-12 sm:pt-12 lg:max-w-[56%] lg:px-12 lg:pb-14 lg:pt-14"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-sans text-[1.5rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-md sm:text-4xl sm:leading-tight">
                Deine KI-Agentur wartet.
                <br />
                Fang heute an.
              </h2>
              <p className="mt-2 max-w-md text-[14px] leading-snug text-white/90 drop-shadow sm:mt-3 sm:text-[17px]">
                Buch dir jetzt dein kostenloses Erstgespräch und erfahre ob die AI-Methode zu dir passt.
              </p>
              <div className="mt-5 flex max-w-md flex-col gap-2 sm:mt-6 sm:gap-2.5">
                {pills.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                    className="flex items-center gap-2.5 rounded-full border border-white/35 bg-white/16 px-3 py-2 text-[13px] font-medium text-white shadow-sm backdrop-blur-md sm:gap-3 sm:px-4 sm:py-2.5 sm:text-[14px]"
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4d03f] text-[15px] font-semibold leading-none text-white shadow-inner sm:h-7 sm:w-7 sm:text-[17px]"
                      aria-hidden
                    >
                      +
                    </span>
                    {p}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8">
                <CTAButton
                  href={siteConfig.primaryCtaHref}
                  variant="coral"
                  className="w-full justify-center text-[14px] sm:w-auto sm:text-[17px]"
                >
                  Kostenloses Erstgespräch sichern
                </CTAButton>
              </div>
            </motion.div>

            {/* Portrait — nur ab sm sichtbar, rechts unten */}
            <motion.div
              className="pointer-events-none relative hidden shrink-0 sm:flex sm:justify-center lg:pointer-events-auto lg:w-[min(44%,400px)] lg:justify-end"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-[300px] w-full max-w-[340px] sm:mt-auto lg:absolute lg:bottom-0 lg:right-0 lg:h-[min(100%,500px)] lg:w-[min(100%,380px)] lg:max-w-[380px]">
                <Image
                  src={siteConfig.workPortraitSrc}
                  alt={siteConfig.founderName}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 340px, 380px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
