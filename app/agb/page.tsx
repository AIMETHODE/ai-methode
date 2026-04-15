import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-config";
import { contactEmail, llcLegalName, llcPrincipalAddress } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "AGB",
  description: `Allgemeine Geschäftsbedingungen — ${siteConfig.domain}.`,
};

const linkCls =
  "font-medium text-brand underline underline-offset-2 hover:text-brand-hover";

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <p>
        Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Website{" "}
        <strong className="text-ink">{siteConfig.domain}</strong> sowie die
        Inanspruchnahme von Leistungen der{" "}
        <strong className="text-ink">{llcLegalName}</strong>,{" "}
        {llcPrincipalAddress}.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Geltungsbereich</h2>
      <p>
        Diese Bedingungen gelten für alle Verträge über Coaching- und
        Beratungsleistungen zwischen {llcLegalName} (nachfolgend „Anbieter")
        und dem Kunden, sofern nicht schriftlich etwas Abweichendes
        vereinbart wurde. Abweichende Bedingungen des Kunden werden nicht
        anerkannt, es sei denn, der Anbieter stimmt ihnen ausdrücklich zu.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Vertragsschluss</h2>
      <p>
        Angebote auf der Website sind freibleibend und stellen keine
        verbindlichen Angebote dar. Ein Vertrag kommt erst durch die
        Buchung und Bezahlung einer Leistung oder durch ausdrückliche
        schriftliche Bestätigung durch den Anbieter zustande.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Leistungen</h2>
      <p>
        Umfang, Dauer und Form der Leistung (z.&nbsp;B. Coaching-Calls,
        Kursmaterialien, Community-Zugang) ergeben sich aus der jeweiligen
        Leistungsbeschreibung zum Zeitpunkt der Buchung. Der Anbieter
        behält sich vor, Leistungen in gleichwertiger Form anzupassen,
        sofern dies für den Kunden zumutbar ist.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Preise und Zahlung
      </h2>
      <p>
        Alle Preise verstehen sich in der jeweils angegebenen Währung.
        Die Zahlung ist mit Buchung fällig, sofern nichts anderes
        vereinbart wurde. Bei Zahlungsverzug behält sich der Anbieter vor,
        den Zugang zu Leistungen vorübergehend einzuschränken.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Kein Erfolgsversprechen
      </h2>
      <p>
        Die angebotenen Leistungen dienen der Weiterbildung und Beratung.
        Der Anbieter gibt keine Garantie für bestimmte wirtschaftliche
        Ergebnisse. Ergebnisse hängen von der individuellen Umsetzung des
        Kunden ab. Die Leistungen ersetzen keine Rechts-, Steuer- oder
        Anlageberatung.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Haftung</h2>
      <p>
        Der Anbieter haftet nur für Schäden, die auf vorsätzlichem oder
        grob fahrlässigem Verhalten beruhen. Eine weitergehende Haftung
        ist ausgeschlossen, soweit gesetzlich zulässig. Die Haftung für
        indirekte Schäden, entgangenen Gewinn oder Datenverlust wird
        ausgeschlossen.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Geistiges Eigentum
      </h2>
      <p>
        Sämtliche Inhalte, Materialien und Kurse sind urheberrechtlich
        geschützt. Die Weitergabe, Vervielfältigung oder Veröffentlichung
        — auch auszugsweise — ist ohne schriftliche Genehmigung des
        Anbieters nicht gestattet.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Kündigung</h2>
      <p>
        Soweit nicht anders vereinbart, können beide Parteien den Vertrag
        mit einer Frist von 14 Tagen zum Monatsende in Textform kündigen.
        Bereits gezahlte Beträge für laufende Leistungszeiträume werden
        nicht erstattet, sofern nichts anderes vereinbart wurde.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Anwendbares Recht
      </h2>
      <p>
        Es gilt das Recht des US-Bundesstaates Wyoming. Gerichtsstand ist
        Sheridan, Wyoming, USA, soweit gesetzlich zulässig.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Schlussbestimmungen
      </h2>
      <p>
        Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
        werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        An die Stelle der unwirksamen Bestimmung tritt eine Regelung, die
        dem wirtschaftlichen Zweck am nächsten kommt.
      </p>

      <p className="mt-8">
        Bei Fragen zu diesen AGB erreichst du uns unter:{" "}
        <a className={linkCls} href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>
    </LegalLayout>
  );
}
