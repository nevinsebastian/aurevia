import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { company, waLink, whyPoints } from "@/data/company";
import { featuredProducts, newProducts } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-card">
            <div>
              <span className="eyebrow">{company.heroEyebrow}</span>
              <h1>{company.heroTitle}</h1>
              <p>{company.heroLead}</p>
              <div className="hero-actions">
                <Link className="btn btn-green" href="/products">
                  Explore Products
                </Link>
                <Link className="btn btn-ghost" href="/categories" style={{ color: "#0a2340" }}>
                  Shop by Category
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <Image src="/logo.png" alt="Aurevia Life Sciences logo" width={360} height={360} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Shop by Category</p>
              <h2>Start with your wellness area</h2>
              <p className="muted">
                Browse the approved portfolio through six clear healthcare, nutrition, personal-care
                and urology categories.
              </p>
            </div>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Featured Products</p>
              <h2>A focused look at the portfolio</h2>
              <p className="muted">
                Explore selected products with clear pack, product and enquiry information — including
                the urology range.
              </p>
            </div>
            <Link className="btn btn-ghost" href="/products">
              View All Products
            </Link>
          </div>
          <div className="grid-3">
            {featuredProducts().map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">New Launches</p>
              <h2>Latest additions to explore</h2>
              <p className="muted">
                Products currently marked as new within the approved Aurevia portfolio.
              </p>
            </div>
            <Link className="btn btn-ghost" href="/new-products">
              View New Products
            </Link>
          </div>
          <div className="grid-4">
            {newProducts()
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Why {company.shortName}</p>
              <h2>A practical, partner-led approach</h2>
              <p className="muted">
                {company.name} is a healthcare marketing organisation focused on making relevant
                product information and reliable enquiry channels easier to access.
              </p>
            </div>
            <Link className="btn btn-ghost" href="/about">
              About Us
            </Link>
          </div>
          <div className="why-grid">
            {whyPoints.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted" style={{ marginTop: 8 }}>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Online marketplaces</p>
              <h2>Where to Buy</h2>
              <p className="muted">
                Aurevia products are available through selected online marketplaces and authorised
                professional channels.
              </p>
            </div>
          </div>
          <div className="buy-grid">
            <article className="buy-card">
              <p className="cat-label">Official Storefront</p>
              <h3>Amazon</h3>
              <p className="muted">Browse products currently listed through our Amazon storefront.</p>
              <Link className="btn btn-ghost btn-sm" href="/where-to-buy" style={{ marginTop: 14 }}>
                Visit guidance
              </Link>
            </article>
            <article className="buy-card">
              <p className="cat-label">Official Marketer Page</p>
              <h3>Tata 1mg</h3>
              <p className="muted">Selected listings under Aurevia Life Sciences on Tata 1mg.</p>
              <Link className="btn btn-ghost btn-sm" href="/where-to-buy" style={{ marginTop: 14 }}>
                Visit guidance
              </Link>
            </article>
            <article className="buy-card">
              <h3>Authorised retailer guidance</h3>
              <p className="muted">Contact Aurevia to confirm current retail availability in your area.</p>
              <Link className="btn btn-ghost btn-sm" href="/where-to-buy" style={{ marginTop: 14 }}>
                View purchase guidance
              </Link>
            </article>
            <article className="buy-card">
              <h3>Direct enquiry</h3>
              <p className="muted">Ask about a product, pack and current purchase-channel availability.</p>
              <a className="btn btn-green btn-sm" href={waLink()} target="_blank" rel="noreferrer" style={{ marginTop: 14 }}>
                Enquire on WhatsApp
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">Professional Enquiries</p>
              <h2>Start the right conversation</h2>
            </div>
          </div>
          <div className="enquiry-grid">
            {[
              ["For Doctors", "Request approved product information for professional reference."],
              ["For Retailers", "Discuss product information and potential retail enquiries."],
              ["For Distributors", "Connect regarding distribution-related opportunities."],
              ["For Urology desks", "Ask about the urinary, prostate and stone-care range."],
            ].map(([title, text]) => (
              <a
                className="enquiry-card"
                key={title}
                href={waLink(`Hello Aurevia, ${title}: ${text}`)}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{title}</h3>
                <p className="muted">{text}</p>
                <span className="btn btn-ghost btn-sm" style={{ marginTop: 14 }}>
                  WhatsApp enquiry
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap cta-band">
          <div>
            <h2>Find the right product or enquiry route</h2>
            <p>
              Browse the full portfolio or connect with {company.name} for product, retail,
              professional or distribution enquiries.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="btn btn-green" href="/products">
              Explore Products
            </Link>
            <a className="btn btn-ghost" href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
