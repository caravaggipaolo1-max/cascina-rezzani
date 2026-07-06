import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Cookie Policy | Società Agricola Cascina Rezzani",
  description: "Cookie policy provvisoria di Società Agricola Cascina Rezzani."
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header compact />
      <main className="legal-page">
        <section className="legal-content">
          <p className="eyebrow">Documento provvisorio</p>
          <h1>Cookie Policy</h1>
          <p>
            Questa pagina contiene un testo placeholder da aggiornare prima
            della pubblicazione definitiva del sito.
          </p>
          <h2>Cookie tecnici</h2>
          <p>
            Il sito puo utilizzare cookie tecnici necessari al corretto
            funzionamento delle pagine e alla sicurezza della navigazione.
          </p>
          <h2>Cookie di terze parti</h2>
          <p>
            Se in futuro verranno inseriti strumenti di analisi, mappe, video o
            servizi esterni, sara necessario descriverli e gestire il consenso
            secondo la normativa applicabile.
          </p>
          <h2>Gestione preferenze</h2>
          <p>
            Inserire le modalita con cui l'utente puo modificare o revocare le
            preferenze sui cookie quando saranno presenti strumenti che lo
            richiedono.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
