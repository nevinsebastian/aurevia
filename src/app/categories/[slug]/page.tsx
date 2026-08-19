import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, productsByCategory, type CategoryId } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.id === slug);
  return { title: category?.name ?? "Category" };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((item) => item.id === slug);
  if (!category) notFound();
  const list = productsByCategory(slug as CategoryId);

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">
          <Link href="/categories">Categories</Link>
        </p>
        <h1>{category.name}</h1>
        <p className="muted" style={{ margin: "8px 0 24px", maxWidth: "62ch" }}>
          {category.description}
        </p>
        <div className="grid-3">
          {list.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
