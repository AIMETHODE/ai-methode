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
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/30" />

          <div className="relative z-[1] flex flex-col items-center justify-center lg:min-h-[520px]">
            <motion.div
              className="flex w-full max-w-2xl flex-col items-center px-5 pb-10 pt-10 text-center sm:px-10 sm:pb-14 sm:pt-14 lg:px-12 lg:pb-16 lg:pt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-sans text-[1.75rem] font-bold leading-[1.1] tracking-tight text-white drop-shadow-md sm:text-[2.5rem] sm:leading-tight md:text-[2.85rem]">
                Deine KI-Agentur wartet.
                <br />
                Fang heute an.
              </h2>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/90 drop-shadow sm:mt-4 sm:text-[17px]">
                Buch dir jetzt dein kostenloses Erstgespräch und erfahre ob die AI-Methode zu dir passt.
              </p>
              <div className="mt-6 flex w-full max-w-md flex-col items-stretch gap-2 text-left sm:mt-8 sm:gap-2.5">
                {pills.map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                    className="flex items-center gap-3 rounded-full border border-white/35 bg-white/16 px-4 py-2 text-[13px] font-medium text-white shadow-sm backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-[14px]"
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4d03f] text-[15px] font-semibold leading-none text-white shadow-inner sm:h-7 sm:w-7 sm:text-[17px]"
                      aria-hidden
                    >
                      +
                    </span>
                    <span className="flex-1">{p}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 sm:mt-10">
                <CTAButton
                  href={siteConfig.primaryCtaHref}
                  variant="coral"
                  className="justify-center text-[14px] sm:text-[17px]"
                >
                  Kostenloses Erstgespräch sichern
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
