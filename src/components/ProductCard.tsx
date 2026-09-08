import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const productImage = (
    <Image
      src={product.image}
      alt={product.imageAlt}
      fill
      sizes="(min-width: 1024px) 30vw, (min-width: 700px) 45vw, 100vw"
    />
  );

  return (
    <article className={product.comingSoon ? "product-card coming-soon" : "product-card"}>
      {product.comingSoon ? (
        <div className="product-image product-image-coming-soon">
          {productImage}
          <span className="product-coming-soon-badge">Prossimamente</span>
        </div>
      ) : (
        <Link className="product-image" href={`/prodotti/${product.slug}`}>
          {productImage}
        </Link>
      )}
      <div className="product-content">
        <h3>
          {product.comingSoon ? (
            product.name
          ) : (
            <Link href={`/prodotti/${product.slug}`}>{product.name}</Link>
          )}
        </h3>
        <dl className="product-meta">
          <div>
            <dt>{product.comingSoon ? "Stato" : "Formati"}</dt>
            <dd>{product.comingSoon ? "In arrivo" : product.formats.join(" / ")}</dd>
          </div>
        </dl>
        {product.comingSoon ? null : (
          <div className="product-actions">
            <Link className="text-button" href={`/prodotti/${product.slug}`}>
              Scheda prodotto
            </Link>
            <a className="text-button" href="#contatti">
              {product.callToAction}
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
