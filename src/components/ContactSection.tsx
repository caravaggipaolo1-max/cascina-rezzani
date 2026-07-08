"use client";

import { FormEvent, useEffect, useState } from "react";
import { products } from "@/data/products";

const COMPANY_NAME = "Cascina Rezzani S.R.L. - Società Agricola";
const ADDRESS = "Via Montorfano, 3 - 25033 Cologne (BS)";
const EMAIL = "info@cascinarezzani.it";
const PHONE = "";
const WHATSAPP = "";

export function ContactSection() {
  const [selectedProduct, setSelectedProduct] = useState("Crème de Cassis");
  const [sent, setSent] = useState(false);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const onProductInterest = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setSelectedProduct(customEvent.detail);
      setHighlight(true);
      window.setTimeout(() => setHighlight(false), 1600);
    };

    window.addEventListener("cascina:product-interest", onProductInterest);

    return () => {
      window.removeEventListener("cascina:product-interest", onProductInterest);
    };
  }, []);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contatti" aria-labelledby="contact-title">
      <div className="section-inner contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contattaci</p>
          <h2 id="contact-title">Raccontaci cosa vorresti scoprire.</h2>
          <address>
            <strong>{COMPANY_NAME}</strong>
            <span>{ADDRESS}</span>
            {PHONE ? <a href={`tel:${PHONE}`}>{PHONE}</a> : null}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </address>
          {WHATSAPP ? (
            <a className="button whatsapp" href={`https://wa.me/${WHATSAPP}`}>
              WhatsApp
              <span>{WHATSAPP}</span>
            </a>
          ) : null}
        </div>
        <form className={highlight ? "contact-form highlighted" : "contact-form"} onSubmit={submitForm}>
          <label>
            Nome
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Prodotto di interesse
            <select
              name="product"
              value={selectedProduct}
              onChange={(event) => setSelectedProduct(event.target.value)}
            >
              {products.map((product) => (
                <option key={product.slug} value={product.name}>
                  {product.name}
                </option>
              ))}
              <option value="Altro">Altro</option>
            </select>
          </label>
          <label>
            Messaggio
            <textarea
              name="message"
              rows={5}
              placeholder="Scrivi qui la tua richiesta"
              required
            />
          </label>
          <button className="button primary form-button" type="submit">
            Invia richiesta
          </button>
          {sent ? (
            <p className="form-message" role="status">
              Grazie, la tua richiesta è stata preparata. Presto sarà collegata
              al sistema di invio.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
