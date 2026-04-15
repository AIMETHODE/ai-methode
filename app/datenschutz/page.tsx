import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { siteConfig } from "@/lib/site-config";
import {
  contactEmail,
  llcLegalName,
  llcPrincipalAddress,
} from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung — ${siteConfig.domain}.`,
};

const linkCls =
  "font-medium text-brand underline underline-offset-2 hover:text-brand-hover";

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Diese Datenschutzerklärung klärt über Art, Umfang und Zweck der
        Verarbeitung personenbezogener Daten auf der Website{" "}
        <strong className="text-ink">{siteConfig.domain}</strong> auf.
        Verantwortlich ist:
      </p>
      <p>
        <strong className="text-ink">{llcLegalName}</strong>
        <br />
        {llcPrincipalAddress}
        <br />
        E-Mail:{" "}
        <a className={linkCls} href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Erhebung und Speicherung personenbezogener Daten
      </h2>
      <p>
        Beim Besuch unserer Website werden automatisch Informationen durch
        den Hosting-Anbieter erfasst (sog. Server-Logfiles). Dazu gehören
        unter anderem: IP-Adresse, Datum und Uhrzeit des Zugriffs,
        aufgerufene Seite, verwendeter Browser und Betriebssystem. Diese
        Daten sind technisch erforderlich und werden nicht mit anderen
        Datenquellen zusammengeführt.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Kontaktaufnahme
      </h2>
      <p>
        Wenn du uns per E-Mail oder über ein Kontaktformular kontaktierst,
        werden die von dir mitgeteilten Daten (z.&nbsp;B. Name,
        E-Mail-Adresse, Nachricht) zur Bearbeitung deiner Anfrage
        gespeichert. Eine Weitergabe an Dritte findet nicht statt, sofern
        keine gesetzliche Pflicht besteht.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Cookies und Analyse-Tools
      </h2>
      <p>
        Unsere Website kann technisch notwendige Cookies verwenden, die für
        den Betrieb der Seite erforderlich sind. Analyse-Tools oder
        Marketing-Cookies werden nur mit deiner ausdrücklichen Einwilligung
        eingesetzt.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Hosting</h2>
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet. Die
        Server können sich in den USA befinden. Der Hosting-Anbieter
        verarbeitet Daten in unserem Auftrag und nur nach unserer Weisung.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Datenübermittlung in die USA
      </h2>
      <p>
        Da unser Unternehmen seinen Sitz in den USA hat, können
        personenbezogene Daten in die USA übermittelt werden. Wir treffen
        geeignete Maßnahmen, um den Schutz deiner Daten sicherzustellen.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Speicherdauer
      </h2>
      <p>
        Personenbezogene Daten werden nur so lange gespeichert, wie es für
        den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche
        Aufbewahrungsfristen bestehen.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung und
        Einschränkung der Verarbeitung deiner Daten. Zudem kannst du einer
        Datenverarbeitung widersprechen und hast das Recht auf
        Datenübertragbarkeit. Zur Ausübung deiner Rechte wende dich an:{" "}
        <a className={linkCls} href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>

      <h2 className="mt-10 text-xl font-semibold text-ink">
        Änderung der Datenschutzerklärung
      </h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie
        stets den aktuellen rechtlichen Anforderungen anzupassen oder
        Änderungen unserer Leistungen umzusetzen. Die jeweils aktuelle
        Fassung gilt bei deinem nächsten Besuch.
      </p>
    </LegalLayout>
  );
}
