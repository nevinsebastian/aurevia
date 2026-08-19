import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Therapeutic Areas" };

export default function TherapeuticAreasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Science</p>
          <h1>Innovative Therapeutic Areas</h1>
          <p className="lead">
            Finding solutions to unmet medical needs puts the patient at the centre.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <p className="muted" style={{ maxWidth: "70ch", marginBottom: 28 }}>
            Aurevia focuses on innovative medicine across urology, neuroscience and immunology —
            tackling some of the most pressing health challenges, including rare and chronic
            disease.
          </p>
          <div className="grid-2">
            <article className="card">
              <p className="kicker">Lead franchise</p>
              <h2>Urology</h2>
              <p className="muted">
                We are building depth in prostate health, urinary flow, overactive bladder,
                kidney-stone care and urinary-tract infection pathways — from marketed generics to
                investigational programmes.
              </p>
              <ul className="muted" style={{ paddingLeft: 18, marginTop: 10 }}>
                <li>Benign prostatic hyperplasia and LUTS</li>
                <li>Overactive bladder</li>
                <li>Nephrolithiasis support</li>
                <li>UTI-related care under professional guidance</li>
              </ul>
            </article>
            <article className="card">
              <p className="kicker">Neuroscience</p>
              <h2>Neuroscience</h2>
              <p className="muted">
                We target debilitating movement disorders, severe mental health conditions and
                migraine — working with partners to bring options where unmet need is high.
              </p>
            </article>
            <article className="card">
              <p className="kicker">Immunology</p>
              <h2>Immunology</h2>
              <p className="muted">
                Gastroenterology, dermatology, respiratory medicine and immuno-oncology, including
                inflammatory bowel disease and related immune conditions.
              </p>
            </article>
            <article className="card">
              <p className="kicker">Access</p>
              <h2>Generics & biosimilars</h2>
              <p className="muted">
                Championing quality generics and biosimilars so that more patients can access
                essential medicines.
              </p>
            </article>
          </div>
          <Link className="btn btn-primary" href="/science/pipeline" style={{ marginTop: 28 }}>
            View the pipeline
          </Link>
        </div>
      </section>
    </>
  );
}
