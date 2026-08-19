import type { Metadata } from "next";
import { company, telLink, waLink } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or WhatsApp Aurevia Life Sciences for product, professional, retail or distribution enquiries.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Get in touch</p>
        <h1>Contact {company.name}</h1>
        <p className="muted" style={{ margin: "8px 0 28px", maxWidth: "62ch" }}>
          Call or message us on WhatsApp for a product, professional, retail or distribution enquiry.
        </p>
        <div className="grid-2">
          <a className="info-card" href={telLink()}>
            <p className="cat-label">Call</p>
            <h2>{company.phone}</h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Speak with the Aurevia team.
            </p>
            <span className="btn btn-ghost btn-sm" style={{ marginTop: 16 }}>
              Call now
            </span>
          </a>
          <a className="info-card" href={waLink()} target="_blank" rel="noreferrer">
            <p className="cat-label">WhatsApp</p>
            <h2>{company.phone}</h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Send a product or partnership enquiry.
            </p>
            <span className="btn btn-green btn-sm" style={{ marginTop: 16 }}>
              Chat on WhatsApp
            </span>
          </a>
        </div>
        <div className="enquiry-grid" style={{ marginTop: 28 }}>
          {[
            ["For Doctors", "Request product information for professional reference."],
            ["For Retailers", "Discuss product information and retail enquiries."],
            ["For Distributors", "Connect regarding distribution opportunities."],
            ["For Urology desks", "Ask about the urinary, prostate and stone-care range."],
          ].map(([title, text]) => (
            <a className="enquiry-card" key={title} href={waLink(`Hello Aurevia, ${title}: ${text}`)} target="_blank" rel="noreferrer">
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
  );
}
