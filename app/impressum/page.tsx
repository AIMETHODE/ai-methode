import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-config";
import {
  contactEmail,
  llcLegalName,
  llcPrincipalAddress,
} from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung — ${siteConfig.domain}.`,
};

const linkCls =
  "font-medium text-brand underline underline-offset-2 hover:text-brand-hover";

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <p className="text-ink">
        Angaben gemäß § 5 TMG
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Anbieter</h2>
      <p>
        <strong className="text-ink">{llcLegalName}</strong>
        <br />
        {llcPrincipalAddress}
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a className={linkCls} href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Haftung für Inhalte
      </h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
        Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
        können wir jedoch keine Gewähr übernehmen.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Haftung für Links
      </h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter verantwortlich. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links
        umgehend entfernen.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
        diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalLayout>
  );
}
