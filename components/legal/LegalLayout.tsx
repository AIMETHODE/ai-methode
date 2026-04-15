import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-border bg-canvas-elevated">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-6 sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold text-brand hover:text-brand-hover"
          >
            ← Zur Startseite
          </Link>
          <Link href="/" className="relative block h-[26px] w-[82px] shrink-0">
            <Image
              src="/logo-aim.png"
              alt={siteConfig.brand}
              fill
              className="object-contain object-right"
              sizes="82px"
            />
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-ink">
          {title}
        </h1>
        <div className="mt-8 max-w-none space-y-4 text-[15px] leading-relaxed text-ink-muted [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_strong]:text-ink">
          {children}
        </div>
      </article>
    </div>
  );
}
