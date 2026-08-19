import type { Metadata } from "next";
import { CategoryGrid } from "@/components/CategoryGrid";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Aurevia categories including urology, Ayurveda, adult nutrition, children nutrition, cosmetic and beauty nutrition.",
};

export default function CategoriesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Shop by Category</p>
        <h1>Start with your wellness area</h1>
        <p className="muted" style={{ margin: "8px 0 24px", maxWidth: "62ch" }}>
          Six catalogue categories. Urology sits alongside nutrition, Ayurveda and personal care so
          professional and retail partners can find the right range quickly.
        </p>
        <CategoryGrid />
      </div>
    </section>
  );
}
