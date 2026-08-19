import Link from "next/link";
import { categories } from "@/data/products";

const icons: Record<string, string> = {
  urology: "⊕",
  ayurveda: "🌿",
  "adult-nutrition": "◎",
  "children-nutrition": "♡",
  cosmetic: "◇",
  "beauty-nutrition": "✧",
};

export function CategoryGrid() {
  return (
    <div className="grid-5">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`} className="cat-card">
          <div className="cat-icon" aria-hidden="true">
            {icons[category.id]}
          </div>
          <h3>{category.name}</h3>
          <p className="muted">{category.short}</p>
          <span className="cat-label">Browse category</span>
        </Link>
      ))}
    </div>
  );
}
