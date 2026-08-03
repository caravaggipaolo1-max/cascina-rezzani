import Image from "next/image";

export function IntroSection() {
  return (
    <section className="intro-section" aria-labelledby="intro-title">
      <div className="section-inner intro-grid">
        <div className="intro-copy">
          <p className="eyebrow">Territorio</p>
          <h2 id="intro-title">
            Una azienda agricola ai piedi del Montorfano che trasforma i frutti
            della terra in prodotti unici.
          </h2>
          <p>
            Cascina Rezzani nasce dal desiderio di valorizzare i prodotti della
            terra. Ogni prodotto racconta un legame con la Franciacorta.
          </p>
        </div>
        <div className="intro-image">
          <Image
            src="/images/cascina/vigneto-montorfano.jpg"
            alt="Grappoli d'uva nei vigneti ai piedi del Montorfano"
            fill
            sizes="(min-width: 900px) 42vw, calc(100vw - 36px)"
          />
        </div>
      </div>
    </section>
  );
}
