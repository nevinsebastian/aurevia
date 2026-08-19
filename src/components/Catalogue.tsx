"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type CategoryId } from "@/data/products";

export function Catalogue({ initialCategory = "all" }: { initialCategory?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const list = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = category === "all" || product.category === category;
      const hay = `${product.name} ${product.summary} ${product.composition}`.toLowerCase();
      return matchCategory && hay.includes(query.toLowerCase().trim());
    });
  }, [query, category]);

  return (
    <>
      <input
        className="search"
        placeholder="Search products, packs or composition"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />
      <div className="filters" role="tablist" aria-label="Categories">
        <button className={`chip ${category === "all" ? "active" : ""}`} onClick={() => setCategory("all")}>
          All
        </button>
        {categories.map((item) => (
          <button
            key={item.id}
            className={`chip ${category === item.id ? "active" : ""}`}
            onClick={() => setCategory(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <p className="muted" style={{ marginBottom: 16 }}>
        {list.length} product{list.length === 1 ? "" : "s"}
      </p>
      <div className="grid-3">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}

export type { CategoryId };
