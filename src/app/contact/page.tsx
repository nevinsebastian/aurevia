import type { Metadata } from "next";
import { company, telLink, waLink } from "@/data/company";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Contact</p>
        <h1>Contact Us</h1>
        <p className="lead">
          To learn more about our company, call or message us. For general medical questions about a
          specific condition, please consult your healthcare provider.
        </p>
        <div className="grid-2" style={{ marginTop: 28 }}>
          <a className="card" href={telLink()}>
            <p className="kicker">Call</p>
            <h2>{company.phone}</h2>
            <p className="muted">Speak with the Aurevia team.</p>
          </a>
          <a className="card" href={waLink()} target="_blank" rel="noreferrer">
            <p className="kicker">WhatsApp</p>
            <h2>{company.phone}</h2>
            <p className="muted">News, careers, science and partnership enquiries.</p>
          </a>
        </div>
        <div className="grid-3" style={{ marginTop: 18 }}>
          {[
            ["Product information", "Ask about our specialty, generic and wellness portfolio."],
            ["News and media", "Press and story enquiries."],
            ["Working at Aurevia", "Careers and collaboration."],
          ].map(([title, text]) => (
            <a
              className="card"
              key={title}
              href={waLink(`Hello Aurevia, ${title}: ${text}`)}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
