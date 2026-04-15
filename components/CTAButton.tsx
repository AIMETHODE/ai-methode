import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "coral";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold tracking-tight transition-[transform,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.98] sm:min-h-[48px] sm:px-8 sm:text-[17px]";

  const styles: Record<Variant, string> = {
    primary:
      "bg-brand-gradient text-white shadow-[var(--brand-shadow-cta)] hover:shadow-[var(--brand-shadow-cta-hover)]",
    secondary:
      "border border-black/[0.12] bg-white text-ink shadow-sm hover:bg-canvas-muted",
    outline:
      "border-2 border-brand bg-transparent text-brand hover:bg-[#faf6ec]",
    ghost: "min-h-0 rounded-full px-4 py-2 text-[15px] font-semibold text-brand hover:underline",
    coral:
      "!rounded-2xl bg-brand-gradient text-white shadow-[var(--brand-shadow-cta)] hover:shadow-[var(--brand-shadow-cta-hover)]",
  };

  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
