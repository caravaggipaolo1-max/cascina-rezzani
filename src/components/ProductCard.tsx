"use client";

import Image from "next/image";
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
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 700px) 45vw, 100vw"
        />
      </div>
      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <dl className="product-meta">
          <div>
            <dt>Formati</dt>
            <dd>{product.formats.join(" / ")}</dd>
          </div>
          {product.bottleStyle ? (
            <div>
              <dt>Bottiglia</dt>
              <dd>{product.bottleStyle}</dd>
            </div>
          ) : null}
        </dl>
        <a className="text-button" href="#contatti" onClick={selectProduct}>
          {product.callToAction}
        </a>
      </div>
    </article>
  );
}
