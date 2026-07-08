import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Cookie Policy | Società Agricola Cascina Rezzani",
  description: "Cookie policy di Cascina Rezzani S.R.L. - Società Agricola."
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header compact />
      <main className="legal-page">
        <section className="legal-content">
          <p className="eyebrow">Cookie policy</p>
          <h1>Cookie Policy</h1>
          <p>
            Questa informativa descrive l'utilizzo dei cookie e di strumenti
            analoghi sul sito di Cascina Rezzani S.R.L. - Società Agricola.
          </p>
          <h2>Cookie tecnici</h2>
          <p>
            Al momento il sito utilizza solo cookie tecnici o strumenti
            strettamente necessari al corretto funzionamento delle pagine, alla
            sicurezza e all'erogazione del servizio richiesto dall'utente.
            Questi cookie non richiedono il consenso preventivo.
          </p>
          <h2>Cookie analitici e di profilazione</h2>
          <p>
            Il sito non utilizza, allo stato attuale, cookie di profilazione,
            strumenti di marketing, pixel pubblicitari o sistemi di analytics
            non tecnici.
          </p>
          <h2>Gestione preferenze</h2>
          <p>
            Poiché sono utilizzati solo cookie tecnici, non è presente un
            pannello di consenso. L'utente può comunque gestire o eliminare i
            cookie tramite le impostazioni del proprio browser.
          </p>
          <h2>Aggiornamenti</h2>
          <p>
            Se in futuro verranno introdotti strumenti di analisi, mappe, video,
            social plugin o altri servizi di terze parti, questa policy sarà
            aggiornata e, ove necessario, verrà introdotto un sistema di
            gestione del consenso.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
