/**
 * Zentrale URLs — per .env.local überschreibbar.
 */
export const siteConfig = {
  brand: "AI-Methode",
  /** Produkt-/Methodenname (z. B. Programm, Überschriften) */
  methodName: process.env.NEXT_PUBLIC_METHOD_NAME?.trim() || "AI-Methode",
  domain: "ai-methode.de",
  siteUrl: "https://ai-methode.de",
  founderName: "Tarik Dzelic",
  primaryCtaLabel: "Kostenloses Erstgespräch",
  secondaryCtaLabel: "Programm ansehen",
  primaryCtaHref:
    process.env.NEXT_PUBLIC_PRIMARY_CTA_URL?.trim() || "https://cal.eu/ai-methode-erstgesprach/30min",
  secondaryCtaHref:
    process.env.NEXT_PUBLIC_SECONDARY_CTA_URL?.trim() || "#programm",
  /** Portrait / Hero-Karte (öffentlich/tarik-hero.png) */
  heroPortraitSrc:
    process.env.NEXT_PUBLIC_HERO_IMAGE?.trim() || "/tarik-hero.png",
  /** Arbeits-Situation, About, ggf. zweite Spalte (tarik-work.png) */
  workPortraitSrc:
    process.env.NEXT_PUBLIC_WORK_IMAGE?.trim() || "/tarik-work.png",
  /**
   * CSS object-position für das About-Portrait (rechte Spalte).
   * Mit object-cover: zweiter Wert ~45–50% = Gesicht optisch zentrierter;
   * kleinere Werte (z. B. 10%) verankern stärker am oberen Bildrand → Gesicht wirkt oft zu tief.
   */
  aboutPortraitObjectPosition:
    process.env.NEXT_PUBLIC_ABOUT_PORTRAIT_POSITION?.trim() || "center 45%",
} as const;
