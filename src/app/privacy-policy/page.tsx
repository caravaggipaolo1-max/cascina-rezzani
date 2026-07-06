import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Privacy Policy | Società Agricola Cascina Rezzani",
  description: "Informativa privacy provvisoria di Società Agricola Cascina Rezzani."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header compact />
      <main className="legal-page">
        <section className="legal-content">
          <p className="eyebrow">Documento provvisorio</p>
          <h1>Privacy Policy</h1>
          <p>
            Questa pagina contiene un testo placeholder pensato per essere
            sostituito con l'informativa privacy definitiva della Società
            Agricola Cascina Rezzani.
          </p>
          <h2>Titolare del trattamento</h2>
          <p>
            Inserire i dati completi del titolare del trattamento, inclusi
            ragione sociale, indirizzo, recapiti e riferimenti aggiornati.
          </p>
          <h2>Dati trattati</h2>
          <p>
            Il sito e pensato come vetrina informativa. Eventuali dati inviati
            tramite form di contatto dovranno essere trattati solo per gestire
            richieste commerciali o informative.
          </p>
          <h2>Finalita e base giuridica</h2>
          <p>
            Inserire finalita, base giuridica, tempi di conservazione e diritti
            dell'interessato secondo le indicazioni del consulente legale.
          </p>
          <h2>Aggiornamenti</h2>
          <p>
            Prima della pubblicazione definitiva, verificare questo testo con un
            professionista e completare ogni dato mancante.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
