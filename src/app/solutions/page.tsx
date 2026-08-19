import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Solutions" };

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Our Solutions</p>
          <h1>Innovative specialty treatments and quality generic medicines</h1>
          <p className="lead">
            We provide medicines and wellness care that touch lives — not a retail shop, a
            professional portfolio organised by how we serve patients.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap grid-3">
          <article className="card">
            <h3>Generic medicines</h3>
            <p className="muted">
              Affordable, accessible treatment options for patients and healthcare providers,
              including established urology generics.
            </p>
          </article>
          <article className="card">
            <h3>Innovative medicines</h3>
            <p className="muted">
              Specialty programmes designed around unmet need in urology, neuroscience and
              immunology.
            </p>
          </article>
          <article className="card">
            <h3>Biosimilars</h3>
            <p className="muted">
              Pioneering access and affordability through biosimilar development with qualified
              partners.
            </p>
          </article>
        </div>
        <div className="wrap" style={{ marginTop: 36 }}>
          <h2>Medicine safety and you</h2>
          <p className="lead">
            Become a well-informed patient. Read the current label, store medicines as directed, and
            report side effects to your clinician. For product information, call or WhatsApp Aurevia.
          </p>
          <Link className="btn btn-primary" href="/contact" style={{ marginTop: 18 }}>
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
