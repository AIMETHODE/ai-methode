"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RoadmapIllustration } from "@/components/landing/roadmap/roadmap-illustrations";

const steps = [
  {
    n: 1,
    title: "Positionierung & Nische",
    text: "Du weißt wer deine Kunden sind, was du anbietest und warum jemand bei dir kauft.",
  },
  {
    n: 2,
    title: "Angebot entwickeln",
    text: "Du baust ein fertiges KI-Dienstleistungspaket mit klarem Preis und klarem Versprechen.",
  },
  {
    n: 3,
    title: "Erste Kunden ansprechen",
    text: "Du lernst wie du systematisch Erstgespräche buchst — direkt, strukturiert, ohne Umwege.",
  },
  {
    n: 4,
    title: "Erstgespräch & Abschluss",
    text: "Du führst Gespräche mit einem erprobten Leitfaden der aus Interesse eine Entscheidung macht.",
  },
  {
    n: 5,
    title: "Lieferung mit KI",
    text: "Du lieferst schnell und professionell — mit KI als deinem Wettbewerbsvorteil gegenüber anderen.",
  },
  {
    n: 6,
    title: "Wiederkehrende Mandate",
    text: "Aus einem Kunden werden monatliche Einnahmen. Planbar, wiederholbar, skalierbar.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    filter: "blur(10px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.06,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function StepCard({
  title,
  text,
  align,
}: {
  title: string;
  text: string;
  align: "left" | "right";
}) {
  return (
    <motion.div
      className={`rounded-[20px] border border-black/[0.06] bg-white/90 p-6 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.08)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_12px_48px_-12px_rgba(47,124,230,0.14)] sm:p-7 ${
        align === "right" ? "md:ml-auto md:max-w-xl md:text-right" : "md:mr-auto md:max-w-xl md:text-left"
      }`}
      whileHover={{ y: -2 }}
    >
      <h3
        className={`font-sans text-[1.375rem] font-bold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[1.625rem] md:text-[1.75rem] md:leading-[1.1] ${
          align === "right" ? "md:text-right" : "md:text-left"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-4 text-[15px] leading-[1.65] text-ink-muted sm:text-[16px] sm:leading-[1.7] ${
          align === "right" ? "md:text-right" : "md:text-left"
        }`}
      >
        {text}
      </p>
    </motion.div>
  );
}

function IllustrationFrame({ step, i }: { step: number; i: number }) {
  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      className="group overflow-hidden rounded-[20px] border border-black/[0.06] bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-black/[0.04] transition-shadow duration-500 hover:shadow-[0_16px_48px_-16px_rgba(47,124,230,0.18)]"
    >
      <div className="bg-gradient-to-br from-[#f0f5fc] via-white to-[#eef3fb] p-3 sm:p-4">
        <RoadmapIllustration step={step} className="h-auto w-full" />
      </div>
    </motion.div>
  );
}

export function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.35"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 32,
    mass: 0.9,
  });
  const lineOpacity = useTransform(smooth, [0, 0.15, 1], [0.35, 0.95, 1]);

  return (
    <section
      ref={sectionRef}
      id="fahrplan"
      className="scroll-mt-24 overflow-hidden bg-canvas-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            title={
              <>
                Dein Fahrplan zur eigenen{" "}
                <span className="text-gold">KI-Agentur</span>
              </>
            }
            subtitle="Sechs Schritte. Klare Reihenfolge. Kein Rätselraten."
            size="large"
          />
        </motion.div>

        <div className="relative mt-16 lg:mt-20">
          {/* Zentrale Timeline — nur Desktop */}
          <div
            className="absolute bottom-8 left-1/2 top-8 hidden w-0.5 -translate-x-1/2 overflow-hidden rounded-full bg-black/[0.06] md:block"
            aria-hidden
          >
            <motion.div
              className="h-full w-full origin-top rounded-full"
              style={{
                scaleY: smooth,
                opacity: lineOpacity,
                background:
                  "linear-gradient(to bottom, #8a6d1a 0%, #c9a227 50%, #b8922a 100%)",
              }}
            />
          </div>

          <ol className="relative space-y-0">
            {steps.map((step, i) => {
              const isTextLeft = i % 2 === 0;
              return (
                <li
                  key={step.n}
                  className="relative pb-16 last:pb-4 md:pb-24 md:last:pb-8"
                >
                  {/* Mobile: Nummer + Text, dann Illustration */}
                  <div className="flex flex-col gap-4 md:hidden">
                    <div className="flex gap-4">
                      <motion.div
                        className="relative z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[16px] font-bold text-white ring-4 ring-[#f9f9f9]"
                        style={{
                          backgroundColor: "var(--brand)",
                          boxShadow: "0 8px 28px -6px rgba(160, 120, 20, 0.5)",
                        }}
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 24 }}
                      >
                        {step.n}
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <motion.div
                          custom={i}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
                        >
                          <StepCard title={step.title} text={step.text} align="left" />
                        </motion.div>
                      </div>
                    </div>
                    <IllustrationFrame step={step.n} i={i} />
                  </div>

                  {/* Desktop: Zigzag */}
                  <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:items-center md:gap-x-8 lg:gap-x-12">
                    {isTextLeft ? (
                      <>
                        <motion.div
                          custom={i}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
                          className="min-w-0 justify-self-end"
                        >
                          <StepCard title={step.title} text={step.text} align="right" />
                        </motion.div>
                        <div className="relative z-[2] flex justify-center">
                          <motion.div
                            className="flex h-14 w-14 items-center justify-center rounded-full text-[17px] font-bold text-white ring-[6px] ring-[#f9f9f9]"
                            style={{
                              backgroundColor: "var(--brand)",
                              boxShadow: "0 8px 28px -6px rgba(160, 120, 20, 0.5)",
                            }}
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 400, damping: 24 }}
                          >
                            {step.n}
                          </motion.div>
                        </div>
                        <div className="min-w-0 justify-self-start">
                          <IllustrationFrame step={step.n} i={i} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="min-w-0 justify-self-end md:order-1">
                          <IllustrationFrame step={step.n} i={i} />
                        </div>
                        <div className="relative z-[2] flex justify-center md:order-2">
                          <motion.div
                            className="flex h-14 w-14 items-center justify-center rounded-full text-[17px] font-bold text-white ring-[6px] ring-[#f9f9f9]"
                            style={{
                              backgroundColor: "var(--brand)",
                              boxShadow: "0 8px 28px -6px rgba(160, 120, 20, 0.5)",
                            }}
                            whileHover={{ scale: 1.06 }}
                            transition={{ type: "spring", stiffness: 400, damping: 24 }}
                          >
                            {step.n}
                          </motion.div>
                        </div>
                        <motion.div
                          custom={i}
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
                          className="min-w-0 justify-self-start md:order-3"
                        >
                          <StepCard title={step.title} text={step.text} align="left" />
                        </motion.div>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
