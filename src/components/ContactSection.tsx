import { InstagramLink } from "./InstagramLink";

const COMPANY_NAME = "Cascina Rezzani S.R.L. - Società Agricola";
const ADDRESS = "Via Montorfano, 3 - 25033 Cologne (BS)";
const EMAIL = "info@cascinarezzani.it";

export function ContactSection() {
  return (
    <section className="contact-section" id="contatti" aria-labelledby="contact-title">
      <div className="section-inner contact-content">
        <p className="eyebrow">Contattaci</p>
        <h2 id="contact-title">Resta in contatto con noi.</h2>
        <p className="contact-lead">
          Per informazioni sui prodotti e sulla cascina, scrivici o seguici su Instagram.
        </p>
        <address className="contact-details">
          <strong>{COMPANY_NAME}</strong>
          <span>{ADDRESS}</span>
          <a href={`mailto:${EMAIL}`}>E-mail: {EMAIL}</a>
          <InstagramLink />
        </address>
      </div>
    </section>
  );
}
