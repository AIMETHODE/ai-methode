/**
 * Rechtliche Angaben — per .env.local befüllen, wenn die US-LLC final ist.
 * Keine Rechtsberatung: Texte sind Vorlagen; prüfen lassen (US + EU/DE).
 */
import { siteConfig } from "@/lib/site-config";

function env(key: string): string | undefined {
  const v = process.env[key]?.trim();
  return v || undefined;
}

/** Offizieller Name der LLC (wie Certificate of Formation). */
export const llcLegalName =
  env("NEXT_PUBLIC_LLC_LEGAL_NAME") ?? "AIM Advisory LLC";

/** Bundesstaat der Gründung (z. B. Delaware, Wyoming). */
export const llcFormationState =
  env("NEXT_PUBLIC_LLC_FORMATION_STATE") ?? "Wyoming";

/**
 * Principal place of business / Geschäftsadresse (eine Zeile oder mit Kommas).
 * Mehrzeilig: in .env als eine Zeile mit \\n oder Kommas.
 */
export const llcPrincipalAddress =
  env("NEXT_PUBLIC_LLC_PRINCIPAL_ADDRESS") ??
  "30 N Gould St Ste N, Sheridan, WY 82801, USA";

/** Optional: Registered Agent (wenn öffentlich angegeben werden soll). */
export const llcRegisteredAgent =
  env("NEXT_PUBLIC_LLC_REGISTERED_AGENT") ?? "";

/** Öffentliche Kontakt-E-Mail der Gesellschaft. */
export const contactEmail =
  env("NEXT_PUBLIC_CONTACT_EMAIL") ?? "info@ai-methode.de";

/**
 * Optional: EU-/EWR-Vertreter nach Art. 27 DSGVO (nur falls für euch zutreffend).
 * Leer lassen, wenn kein Vertreter benannt wird — dann Klärung mit Jurist.
 */
export const euRepresentative =
  env("NEXT_PUBLIC_EU_REPRESENTATIVE") ?? "";

/** Geschäftsführer / Managing Member (Anzeige im Impressum). */
export const managingMember =
  env("NEXT_PUBLIC_MANAGING_MEMBER")?.trim() ?? siteConfig.founderName;

/** Footer & Metadaten: Anzeigename (Marketing bleibt siteConfig.brand). */
export const copyrightEntityName =
  env("NEXT_PUBLIC_COPYRIGHT_ENTITY")?.trim() ?? llcLegalName;
