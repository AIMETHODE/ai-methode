import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/[0.06] bg-white py-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <Link href="/" className="relative block h-[26px] w-[82px] shrink-0">
            <Image
              src="/logo-aim.png"
              alt={siteConfig.brand}
              fill
              className="object-contain object-left"
              sizes="82px"
            />
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <nav className="flex flex-wrap gap-6 text-[12px]" aria-label="Rechtliches">
            <Link href="/impressum" className="text-ink-muted hover:text-brand">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-ink-muted hover:text-brand">
              Datenschutz
            </Link>
            <Link href="/agb" className="text-ink-muted hover:text-brand">
              AGB
            </Link>
          </nav>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-[10px] text-ink-subtle sm:mt-10 sm:text-[11px] sm:px-6 lg:px-8">
        © {year} {siteConfig.brand}. Alle Rechte vorbehalten. · {siteConfig.domain}
      </p>
    </footer>
  );
}
