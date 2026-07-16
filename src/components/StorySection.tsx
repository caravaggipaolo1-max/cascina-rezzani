import Image from "next/image";

const values = ["Uva", "Ribes", "Fichi"];

export function StorySection() {
  return (
    <section className="story-section" id="storia" aria-labelledby="story-title">
      <div className="section-inner story-grid">
        <div className="story-image">
          <Image
            src="/images/cascina/portico-cascina.jpg"
            alt="Portico di Cascina Rezzani affacciato sul paesaggio del Montorfano"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">La nostra storia</p>
          <h2 id="story-title">
            Una realtà in crescita, costruita passo dopo passo.
          </h2>
          <p>
            Cascina Rezzani è un'azienda agricola giovane, ma con radici
            profonde nel territorio. Il progetto nasce ai piedi del Montorfano,
            dove la cura della terra incontra l'idea di trasformare i suoi
            frutti in prodotti unici. Una realtà in crescita, costruita passo
            dopo passo, con attenzione alla qualità, alla semplicità e
            all'identità locale.
          </p>
          <div className="values-list" aria-label="Valori aziendali">
            {values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
