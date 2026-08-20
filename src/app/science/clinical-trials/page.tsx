import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Clinical Trials" };

export default function TrialsPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <p className="kicker">Science</p>
        <h1>Learn about Aurevia Clinical Trials</h1>
        <p>
          Voluntary participation in a clinical trial helps determine whether a medicine not yet on
          the market is safe and effective. For some patients, a trial may provide access to
          potential new therapies that are not otherwise available.
        </p>
        <h2>Find a trial</h2>
        <p>
          Search for an active study or results of a completed trial through your clinician, or
          contact Aurevia to ask which programmes are open.
        </p>
        <p>
          There are specific requirements for participation. Only the study investigator can
          determine whether all requirements are met.
        </p>
        <h2>Patient safety</h2>
        <p>
          Before enrolment, the investigator explains purpose, potential benefits and risks, and
          alternative options. Participants are monitored throughout.
        </p>
        <Link className="btn btn-primary" href="/contact" style={{ marginTop: 24 }}>
          Contact us about trials
        </Link>
      </div>
    </section>
  );
}
