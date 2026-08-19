import type { Metadata } from "next";
import Link from "next/link";
import { company, waLink } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description: "Mission, vision and values of Aurevia Life Sciences — a healthcare marketing organisation.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Our company</p>
          <h1>About {company.name}</h1>
          <p>
            A healthcare marketing organisation built around responsible communication, relevant
            products — including a dedicated urology range — and dependable professional partnerships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <article className="prose">
            <h2>Who we are</h2>
            <p>
              {company.name} is a professionally driven healthcare marketing organisation focused on
              making carefully selected healthcare, nutritional, Ayurvedic and urology products
              accessible through clear information and responsive customer support.
            </p>
            <p>
              Aurevia does not manufacture the products it markets. Products are supplied through
              qualified third-party manufacturing partners selected for the relevant product category,
              while Aurevia coordinates marketing, professional enquiries and channel relationships.
            </p>
            <h2>Our story</h2>
            <p>
              The organisation was built around a professionally led, customer-focused approach to
              healthcare marketing. Its work combines market awareness, product relevance and a social
              commitment to more accessible and responsible wellness communication.
            </p>
          </article>
          <aside className="info-card">
            <p className="kicker">At a glance</p>
            <h3>{company.tagline}</h3>
            <p className="muted" style={{ marginTop: 10 }}>
              Portfolio across Urology, Ayurveda, Adult Nutrition, Children Nutrition, Cosmetic and
              Beauty Nutrition.
            </p>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">
          <article className="info-card">
            <p className="kicker">Our Mission</p>
            <h2>Accessible, responsible healthcare marketing</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              To support access to relevant healthcare and wellness products through responsible
              marketing, dependable partnerships, customer-focused service and a consistent commitment
              to quality — including specialist urology care products that doctors and partners can
              enquire about with confidence.
            </p>
          </article>
          <article className="info-card">
            <p className="kicker">Our Vision</p>
            <h2>Trusted products made easier to access</h2>
            <p className="muted" style={{ marginTop: 10 }}>
              To grow as a trusted healthcare marketing organisation that connects product quality,
              practical affordability and clear communication for customers and professional partners
              — from everyday nutrition to urinary, prostate and kidney-wellness care.
            </p>
          </article>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="kicker">Our Values</p>
          <h2>Principles that guide how we work</h2>
          <div className="values" style={{ marginTop: 20 }}>
            {[
              ["Quality focus", "A considered approach to product selection, source information and partner relationships."],
              ["Trust", "Clear communication, responsible public wording and dependable enquiry support."],
              ["Reliability", "Disciplined processes and practical coordination across the product and partner network."],
              ["Accessibility", "A commitment to making relevant healthcare and wellness options easier to understand and access."],
            ].map(([title, text]) => (
              <article className="info-card" key={title}>
                <h3>{title}</h3>
                <p className="muted" style={{ marginTop: 8 }}>
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap prose">
          <h2>Our product approach</h2>
          <p>
            The portfolio is organised across Urology, Ayurveda, Adult Nutrition, Children Nutrition,
            Cosmetic and Beauty Nutrition. Current products are added only to categories supported by
            an approved product record, with public information kept measured and relevant to the
            available label details.
          </p>
          <h2>Our partner network</h2>
          <p>
            Aurevia works through qualified third-party manufacturing partners and professional
            distribution relationships suited to each product category. This partner-led model keeps
            the company’s role clear: Aurevia markets and supports the portfolio; it does not claim to
            own manufacturing facilities.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="hero-actions">
            <a className="btn btn-green" href={waLink()} target="_blank" rel="noreferrer">
              WhatsApp enquiry
            </a>
            <Link className="btn btn-ghost" href="/products">
              Explore products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
