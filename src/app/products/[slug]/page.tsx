import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { waLink } from "@/data/company";
import { getCategory, getProduct, products } from "@/data/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "Product" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">
          <Link href="/products">Products</Link> / {category.name}
        </p>
        <div className="detail" style={{ marginTop: 16 }}>
          <div className="detail-art">
            {product.isNew && <span className="badge">New</span>}
            {product.professional && <span className="badge rx">Rx</span>}
            <Image src={product.image} alt={product.name} width={720} height={720} priority />
          </div>
          <div className="prose">
            <h1>{product.name}</h1>
            <p className="muted">{product.summary}</p>
            <p>
              <strong>Pack:</strong> {product.pack}
            </p>
            <p>
              <strong>Format:</strong> {product.format}
            </p>
            {product.variants && <p>{product.variants}</p>}
            <p>
              <strong>Composition:</strong> {product.composition}
            </p>
            <div>
              <strong>Intended use context</strong>
              <ul>
                {product.uses.map((use) => (
                  <li key={use}>{use}</li>
                ))}
              </ul>
            </div>
            {product.notes && <p className="disclaimer-note">{product.notes}</p>}
            <p className="muted">
              Always read the current label and pack insert. This page is for general reference, not
              personalised medical advice.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-green"
                href={waLink(`Hello Aurevia, I would like to enquire about ${product.name}.`)}
                target="_blank"
                rel="noreferrer"
              >
                Enquire on WhatsApp
              </a>
              <Link className="btn btn-ghost" href={`/categories/${product.category}`}>
                More in {category.name}
              </Link>
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div style={{ marginTop: 48 }}>
            <h2>Related products</h2>
            <div className="grid-3" style={{ marginTop: 16 }}>
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
