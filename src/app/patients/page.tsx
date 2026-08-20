import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Patients" };

export default function PatientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Patients</p>
          <h1>Dedicated to addressing patients’ needs</h1>
          <p className="lead">
            Tools, stories and trial information for people living with chronic conditions — and for
            the people who care for them.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap grid-3">
          <Link className="card" href="/science/clinical-trials">
            <h3>Clinical trials</h3>
            <p className="muted">Learn how trials work and how Aurevia protects participants.</p>
          </Link>
          <Link className="card" href="/science/therapeutic-areas">
            <h3>Conditions we focus on</h3>
            <p className="muted">Urology, neuroscience and immunology, explained for patients.</p>
          </Link>
          <Link className="card" href="/contact">
            <h3>Talk to us</h3>
            <p className="muted">Use the contact form for general company information. For medical advice, see your clinician.</p>
          </Link>
        </div>
        <div className="wrap" style={{ marginTop: 40 }}>
          <h2>Caring for caregivers</h2>
          <p className="lead">
            Chronic urology and neurological conditions affect families as well as patients. We
            publish perspectives intended to support — not replace — the care journey with a
            qualified professional.
          </p>
        </div>
      </section>
    </>
  );
}
