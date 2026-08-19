import Image from "next/image";
import Link from "next/link";
import { waLink } from "@/data/company";
import { getCategory, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <article className="product-card">
      <div className="product-art">
        {product.isNew && <span className="badge">New</span>}
        {product.professional && <span className="badge rx">Rx</span>}
        <Image src={product.image} alt={product.name} width={640} height={640} />
      </div>
      <div className="product-body">
        <div className="cat-label">{category.name}</div>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <p className="pack-line">Pack: {product.pack}</p>
        {product.variants && <p className="pack-line">{product.variants}</p>}
        <div className="product-actions">
          <Link className="btn btn-ghost btn-sm" href={`/products/${product.slug}`}>
            View Product
          </Link>
          <a
            className="btn btn-primary btn-sm"
            href={waLink(`Hello Aurevia, I would like to enquire about ${product.name}.`)}
            target="_blank"
            rel="noreferrer"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
