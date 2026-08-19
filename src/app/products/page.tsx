import type { Metadata } from "next";
import { Catalogue } from "@/components/Catalogue";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore the Aurevia Life Sciences product portfolio across urology, nutrition, Ayurveda, cosmetic and beauty-nutrition categories.",
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Product catalogue</p>
        <h1>Explore our product portfolio</h1>
        <p className="muted" style={{ margin: "8px 0 20px", maxWidth: "62ch" }}>
          Browse six catalogue categories with clear product, format, pack and enquiry information.
          Urology is listed first.
        </p>
        <Catalogue />
      </div>
    </section>
  );
}
