"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const selectProduct = () => {
    window.dispatchEvent(
      new CustomEvent("cascina:product-interest", {
        detail: product.name
      })
    );
  };

  return (
    <article className="product-card">
      <Link className="product-image" href={`/prodotti/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 700px) 45vw, 100vw"
        />
      </Link>
      <div className="product-content">
        <h3>
          <Link href={`/prodotti/${product.slug}`}>{product.name}</Link>
        </h3>
        <dl className="product-meta">
          <div>
            <dt>Formati</dt>
            <dd>{product.formats.join(" / ")}</dd>
          </div>
        </dl>
        <div className="product-actions">
          <Link className="text-button" href={`/prodotti/${product.slug}`}>
            Scheda prodotto
          </Link>
          <a className="text-button" href="#contatti" onClick={selectProduct}>
            {product.callToAction}
          </a>
        </div>
      </div>
    </article>
  );
}
