/** Play-Indikator (Markengold). */
export function PlayTriangle({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-0 w-0 border-y-[11px] border-y-transparent border-l-[18px] ${className}`}
      style={{ borderLeftColor: "var(--brand)" }}
      aria-hidden
    />
  );
}
