import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  size = "default",
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  size?: "default" | "large";
  /** Wenn gesetzt, ersetzt die Standard-Titel-Typo (z. B. eine Zeile + fluid scale). */
  titleClassName?: string;
}) {
  const wrap =
    align === "center" ? "mx-auto max-w-[820px] text-center" : "max-w-[820px] text-left";
  const titleCls =
    size === "large"
      ? "text-[1.5rem] font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]"
      : "text-[1.35rem] font-bold leading-snug tracking-tight sm:text-3xl md:text-[2.25rem]";

  const h2Class = titleClassName
    ? `font-sans text-ink ${titleClassName}`
    : `font-sans ${titleCls} text-ink`;

  return (
    <div className={wrap}>
      {eyebrow ? (
        <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={h2Class}>{title}</h2>
      {subtitle ? (
        <p
          className={`mt-3 text-[15px] font-normal leading-relaxed text-ink-muted sm:mt-4 sm:text-[17px] ${align === "center" ? "mx-auto max-w-2xl" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
