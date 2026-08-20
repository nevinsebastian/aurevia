import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Research & Development" };

export default function SciencePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Science</p>
          <h1>Stepping Up Innovation</h1>
          <p className="lead">
            At Aurevia Life Sciences, we innovate at every stage of drug development and delivery.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap split">
          <div className="prose">
            <p>
              Aurevia research and development is at the forefront of our healthcare innovation. Our
              strategic pillar of Stepping Up Innovation guides us as we enhance patient care and
              expand access.
            </p>
            <p>
              From in-house innovation to strategic partnerships, we persist in creating innovative
              medicines, generics and biosimilars to increase the accessibility and affordability of
              existing medicines.
            </p>
          </div>
          <div className="media">
            <Image src="/media/science.jpg" alt="Aurevia laboratory science" width={720} height={480} />
          </div>
        </div>
        <div className="wrap grid-3" style={{ marginTop: 40 }}>
          <Link className="card" href="/science/pipeline">
            <p className="kicker">Pipeline</p>
            <h3>Our R&D Pipeline</h3>
            <p className="muted">Explore innovative medicine and biosimilar programmes.</p>
          </Link>
          <Link className="card" href="/science/therapeutic-areas">
            <p className="kicker">Focus</p>
            <h3>Therapeutic Areas</h3>
            <p className="muted">Urology, neuroscience and immunology.</p>
          </Link>
          <Link className="card" href="/science/clinical-trials">
            <p className="kicker">Trials</p>
            <h3>Clinical Trials</h3>
            <p className="muted">How we contribute to the development of new medicines.</p>
          </Link>
        </div>
      </section>
      <section className="section mist">
        <div className="wrap prose">
          <h2>Pushing innovation boundaries</h2>
          <p>
            Our team is agile and curious, using deep scientific knowledge to uncover pathways and
            make bold discoveries. Continuous investment in breakthrough science allows us to
            identify more potential treatments for patients worldwide.
          </p>
          <h2>Cultivating collaboration</h2>
          <p>
            Solving problems means bringing the best minds together. We seek partners who share our
            vision of bringing new therapies to market faster. Together, we are all in for better
            health.
          </p>
        </div>
      </section>
    </>
  );
}
