import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sustainability & Impact" };

export default function SustainabilityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Our Company</p>
          <h1>Sustainability & Impact</h1>
          <p className="lead">
            Healthy Future guides Aurevia in creating a healthy future: healthy people, a healthy
            planet and a healthy business.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap grid-3">
          {[
            ["Protecting our planet", "Minimizing our environmental footprint with partners."],
            ["Responsible supply chain", "Working with suppliers aligned with quality and ethics."],
            ["Caring for employees", "Empowering our people and promoting growth."],
            ["Health equity and access", "Increasing access to quality medicines."],
            ["Medicines people can trust", "Quality and safety in every programme we market."],
            ["Doing business the right way", "Prioritizing ethics and compliance."],
          ].map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 32 }}>
          <Link className="btn btn-ghost-dark" href="/news/healthy-future-report">
            Read the Healthy Future update
          </Link>
        </div>
      </section>
    </>
  );
}
