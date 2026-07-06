import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Privacy Policy | Società Agricola Cascina Rezzani",
  description: "Informativa privacy di Cascina Rezzani S.R.L. - Società Agricola."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header compact />
      <main className="legal-page">
        <section className="legal-content">
          <p className="eyebrow">Informativa privacy</p>
          <h1>Privacy Policy</h1>
          <p>
            La presente informativa descrive il trattamento dei dati personali
            effettuato attraverso questo sito web, ai sensi del Regolamento
            (UE) 2016/679.
          </p>
          <h2>Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento e Cascina Rezzani S.R.L. - Società
            Agricola, con sede legale in Via Montorfano, 3 - 25033 Cologne
            (BS), P.IVA e C.F. 04623470988, REA BS - 628704, PEC
            cascinarezzani@lamiapec.it.
          </p>
          <h2>Dati trattati</h2>
          <p>
            Il sito ha finalita informative. I dati eventualmente comunicati
            tramite email, PEC o modulo di contatto possono includere nome,
            recapiti e contenuto del messaggio. Il modulo attualmente presente
            sul sito non e collegato a un sistema di invio esterno.
          </p>
          <h2>Finalita e base giuridica</h2>
          <p>
            I dati sono trattati per rispondere a richieste informative,
            commerciali o di contatto. La base giuridica e l'esecuzione di
            misure precontrattuali o il legittimo interesse del titolare a
            gestire le comunicazioni ricevute.
          </p>
          <h2>Conservazione</h2>
          <p>
            I dati sono conservati per il tempo necessario a gestire la
            richiesta e, se necessario, per adempiere a obblighi di legge o
            tutelare i diritti del titolare.
          </p>
          <h2>Diritti dell'interessato</h2>
          <p>
            L'interessato puo chiedere accesso, rettifica, cancellazione,
            limitazione, opposizione al trattamento e portabilita dei dati nei
            casi previsti dalla normativa. Le richieste possono essere inviate
            alla PEC cascinarezzani@lamiapec.it.
          </p>
          <h2>Aggiornamenti</h2>
          <p>
            Questa informativa potra essere aggiornata in caso di modifica dei
            servizi del sito o dei trattamenti effettuati.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
