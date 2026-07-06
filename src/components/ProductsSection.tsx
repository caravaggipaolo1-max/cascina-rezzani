import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductsSection() {
  return (
    <section className="products-section" id="prodotti" aria-labelledby="products-title">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">I prodotti</p>
          <h2 id="products-title">Specialità pensate per degustazioni e convivialità.</h2>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
