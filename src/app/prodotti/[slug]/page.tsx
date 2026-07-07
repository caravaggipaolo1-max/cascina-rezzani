import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Prodotto non trovato | Cascina Rezzani"
    };
  }

  return {
    title: `${product.name} | Cascina Rezzani`,
    description: product.shortDescription
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header compact />
      <main className="product-detail-page">
        <section className="product-detail-hero">
          <div className="section-inner product-detail-grid">
            <div className="product-detail-image">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(min-width: 900px) 44vw, 100vw"
              />
            </div>
            <div className="product-detail-copy">
              <Link className="back-link" href="/#prodotti">
                Torna ai prodotti
              </Link>
              <p className="eyebrow">{product.category}</p>
              <h1>{product.name}</h1>
              <p className="product-lead">{product.shortDescription}</p>
              <div className="product-detail-actions">
                <a className="button primary" href="/#contatti">
                  Richiedi informazioni
                </a>
                <Link className="button detail-secondary" href="/#prodotti">
                  Tutti i prodotti
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="product-detail-section">
          <div className="section-inner product-info-grid">
            <div className="product-description">
              <h2>Descrizione</h2>
              {product.detailDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <aside className="product-detail-panel" aria-label="Scheda prodotto">
              <h2>Scheda prodotto</h2>
              <dl>
                <div>
                  <dt>Formato</dt>
                  <dd>{product.formats.join(" / ")}</dd>
                </div>
                <div>
                  <dt>Grado alcolico</dt>
                  <dd>{product.alcohol}</dd>
                </div>
                <div>
                  <dt>Prezzo al dettaglio</dt>
                  <dd>{product.retailPrice}</dd>
                </div>
                <div>
                  <dt>Disponibilità</dt>
                  <dd>{product.availability}</dd>
                </div>
                <div>
                  <dt>Origine</dt>
                  <dd>{product.origin}</dd>
                </div>
                <div>
                  <dt>Temperatura di servizio</dt>
                  <dd>{product.servingTemperature}</dd>
                </div>
                {product.bottleStyle ? (
                  <div>
                    <dt>Bottiglia</dt>
                    <dd>{product.bottleStyle}</dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          </div>
        </section>

        <section className="product-detail-section muted">
          <div className="section-inner product-lists-grid">
            <div>
              <h2>Note</h2>
              <ul>
                {product.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Abbinamenti</h2>
              <ul>
                {product.pairings.map((pairing) => (
                  <li key={pairing}>{pairing}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
