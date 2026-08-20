import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Contact</p>
        <h1>Contact Us</h1>
        <p className="lead">
          Send an enquiry using the form below. For general medical questions about a specific
          condition, please consult your healthcare provider.
        </p>

        <div className="contact-layout">
          <div className="enquiry-wrap">
            <p className="kicker">Send an enquiry</p>
            <h2>Email us from this page</h2>
            <p className="muted form-intro">
              Enter your name, email and message. It is delivered to {company.inboxEmail}.
            </p>
            <EnquiryForm />
          </div>

          <div>
            <p className="kicker">Our offices</p>
            <h2>Where to find us</h2>
            <div className="office-grid">
              {company.offices.map((office) => (
                <article className="card office-card" key={`${office.entity}-${office.region}`}>
                  <p className="kicker">{office.region}</p>
                  <h3>{office.entity}</h3>
                  {office.lines.map((line) => (
                    <p className="muted" key={line}>
                      {line}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
