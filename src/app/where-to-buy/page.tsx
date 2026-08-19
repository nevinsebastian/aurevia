import type { Metadata } from "next";
import { telLink, waLink } from "@/data/company";

export const metadata: Metadata = {
  title: "Where to Buy",
  description: "Selected purchase channels for Aurevia Life Sciences products.",
};

export default function WhereToBuyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Availability</p>
        <h1>Where to buy</h1>
        <p className="muted" style={{ margin: "8px 0 28px", maxWidth: "62ch" }}>
          Aurevia products are available through selected online marketplaces, authorised pharmacies
          and direct enquiry.
        </p>
        <p className="kicker">Selected channels</p>
        <h2>Online Marketplaces</h2>
        <p className="muted" style={{ margin: "8px 0 20px" }}>
          Visit official storefronts to view currently available products.
        </p>
        <div className="grid-2">
          <article className="buy-card">
            <p className="cat-label">Official Storefront</p>
            <h3>Amazon</h3>
            <p className="muted">Browse Aurevia products on our Amazon storefront.</p>
          </article>
          <article className="buy-card">
            <p className="cat-label">Official Marketer Page</p>
            <h3>Tata 1mg</h3>
            <p className="muted">Browse products listed under Aurevia Life Sciences on Tata 1mg.</p>
          </article>
          <article className="buy-card">
            <h3>Authorised pharmacies</h3>
            <p className="muted">
              Call or WhatsApp us to confirm pharmacy availability in your area, including the urology
              range.
            </p>
            <a className="btn btn-ghost btn-sm" href={telLink()} style={{ marginTop: 14 }}>
              Call {`+91 99959 99000`}
            </a>
          </article>
          <article className="buy-card">
            <h3>Retailers & distributors</h3>
            <p className="muted">Retail and distribution partners can message us to begin a business enquiry.</p>
            <a className="btn btn-green btn-sm" href={waLink("Hello Aurevia, I would like to discuss a retail or distribution enquiry.")} target="_blank" rel="noreferrer" style={{ marginTop: 14 }}>
              WhatsApp enquiry
            </a>
          </article>
        </div>
        <p className="muted" style={{ marginTop: 20 }}>
          Product availability may vary by location, platform and stock status.
        </p>
      </div>
    </section>
  );
}
