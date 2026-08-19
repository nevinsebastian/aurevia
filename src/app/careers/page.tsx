import type { Metadata } from "next";
import { company, telLink, waLink } from "@/data/company";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <section className="section">
      <div className="wrap split">
        <div>
          <p className="kicker">Careers at Aurevia</p>
          <h1>Make a difference to people’s health, every day</h1>
          <p className="lead">
            Working at Aurevia is not just a job. You help people around the world enjoy healthier
            lives — and join a team united by the sense that we are building something greater than
            ourselves.
          </p>
          <p className="muted" style={{ marginTop: 14 }}>
            We hire across medical affairs, R&D coordination, quality, commercial partnerships and
            operations. Ask our team about current openings.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
            <a className="btn btn-primary" href={telLink()}>
              Call {company.phone}
            </a>
            <a className="btn btn-ghost-dark" href={waLink("Hello Aurevia, I would like to enquire about careers.")} target="_blank" rel="noreferrer">
              WhatsApp careers
            </a>
          </div>
        </div>
        <div className="media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/team.jpg" alt="Aurevia team" />
        </div>
      </div>
    </section>
  );
}
