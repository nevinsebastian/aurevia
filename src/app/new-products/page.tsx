import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { newProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "New Products",
  description: "Latest additions in the Aurevia Life Sciences portfolio, including new urology launches.",
};

export default function NewProductsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Latest additions</p>
        <h1>New products</h1>
        <p className="muted" style={{ margin: "8px 0 24px", maxWidth: "62ch" }}>
          A focused view of products currently marked as new within the Aurevia portfolio.
        </p>
        <div className="grid-3">
          {newProducts().map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
