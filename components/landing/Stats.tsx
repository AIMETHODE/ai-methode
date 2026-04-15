"use client";

import type { ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5e6b8] text-gold">
      {children}
    </span>
  );
}

const stats = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: "250+",
    label: "Aktive",
    sub: "Teilnehmende",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    value: "3+",
    label: "Jahre",
    sub: "Praxis & Methode",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    value: "6",
    label: "Module",
    sub: "Kernprogramm",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "14",
    label: "Tage Ø",
    sub: "bis erster Meilenstein",
  },
];

export function Stats() {
  return (
    <section className="border-y border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Worauf es im Alltag ankommt"
            subtitle="Orientierung statt Zufall — Bausteine, die wir in der Begleitung immer wieder sehen."
          />
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <article className="flex h-full flex-col rounded-[18px] border border-black/[0.06] bg-white p-6 shadow-sm transition hover:shadow-md">
                <IconCircle>{s.icon}</IconCircle>
                <p className="font-sans text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {s.value}
                </p>
                <h3 className="mt-1 text-[17px] font-bold text-ink">{s.label}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {s.sub}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
