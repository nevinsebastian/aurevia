import type { Metadata } from "next";
import Link from "next/link";

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
          <Link className="btn btn-primary" href="/contact" style={{ marginTop: 22 }}>
            Contact us about careers
          </Link>
        </div>
        <div className="media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/team.jpg" alt="Aurevia team" />
        </div>
      </div>
    </section>
  );
}
