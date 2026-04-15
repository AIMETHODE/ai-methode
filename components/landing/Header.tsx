"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "@/components/CTAButton";

const nav = [
  { href: "#methode", label: "Methode" },
  { href: "#fahrplan", label: "Fahrplan" },
  { href: "#erfolge", label: "Erfolge" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between px-4 py-3 sm:min-h-[80px] sm:px-6 sm:py-4 lg:min-h-[84px] lg:px-8">
        <Link href="/" className="relative block h-[28px] w-[88px] shrink-0 sm:h-[32px] sm:w-[100px]">
          <Image
            src="/logo-aim.png"
            alt={siteConfig.brand}
            fill
            className="object-contain object-left"
            sizes="100px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink/85 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton
            href={siteConfig.primaryCtaHref}
            variant="primary"
            className="!min-h-[40px] !px-6 !py-2 !text-[15px]"
          >
            Jetzt starten
          </CTAButton>
        </div>

        <button
          type="button"
          className="text-[15px] font-medium text-brand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-black/[0.06] bg-white px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-[17px] font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <CTAButton href={siteConfig.primaryCtaHref} variant="primary" className="mt-2 w-full">
              Jetzt starten
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
