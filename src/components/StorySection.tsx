import Image from "next/image";

const values = ["Territorio", "Materia prima", "Lavorazione artigianale"];

export function StorySection() {
  return (
    <section className="story-section" id="storia" aria-labelledby="story-title">
      <div className="section-inner story-grid">
        <div className="story-image">
          <Image
            src="/images/cascina/cascina-placeholder.jpg"
            alt="Cascina agricola italiana immersa nel paesaggio naturale"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">La nostra storia</p>
          <h2 id="story-title">Tradizione agricola e visione contemporanea.</h2>
          <p>
            La Società Agricola Cascina Rezzani unisce tradizione agricola e
            visione contemporanea. Dalla cura della terra alla trasformazione dei
            prodotti, l'obiettivo è creare specialità riconoscibili, autentiche
            e legate al territorio.
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
