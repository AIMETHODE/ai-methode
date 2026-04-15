import { siteConfig } from "@/lib/site-config";
import { CTAButton } from "@/components/CTAButton";

export function MidCta() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-4 text-[14px] font-medium text-ink-muted sm:text-[15px]">
          Begrenzte Plätze pro Monat — sichere dir deinen Termin.
        </p>
        <CTAButton href={siteConfig.primaryCtaHref} variant="primary" className="w-full sm:w-auto">
          Jetzt Erstgespräch sichern
        </CTAButton>
      </div>
    </section>
  );
}
