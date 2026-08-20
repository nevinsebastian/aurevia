import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { values } from "@/data/site";

export const metadata: Metadata = { title: "Our Company" };

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="kicker">Our Company</p>
          <h1>We are all in for better health.</h1>
          <p className="lead">
            Moving forward together with science that treats, inspired by the people we serve.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 12 }}>
        <div className="wrap split">
          <div className="prose">
            <p>
              {company.legalName} is a leading innovative biopharmaceutical company, enabled by a
              world-class generics business.
            </p>
            <p>
              From innovating in urology, neuroscience and immunology to providing generic medicines,
              biosimilars and wellness brands, Aurevia is dedicated to addressing patients’ needs,
              now and in the future.
            </p>
            <p>
              We do this by following the science to create the medicines needed today; driving the
              discovery and development of modern therapies; innovating throughout our established
              portfolio and promising pipeline; and leveraging strategic partnerships to accelerate
              development.
            </p>
            <p>
              For healthcare professionals, patients, caregivers and families, we commit to push the
              boundaries to help deliver quality medicine wherever it is needed. Because when it
              comes to health, good is not enough for us.
            </p>
          </div>
          <div className="media">
            <Image src="/media/team.jpg" alt="Aurevia colleagues" width={720} height={480} />
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="wrap">
          <p className="kicker">Our Core Values</p>
          <h2>The cornerstones that shape our journey</h2>
          <div className="grid-3" style={{ marginTop: 24 }}>
            {values.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="grid-3" style={{ marginTop: 18 }}>
            <Link className="card" href="/our-company/purpose">
              <h3>Our Purpose</h3>
              <p className="muted">{company.purpose}</p>
            </Link>
            <Link className="card" href="/sustainability">
              <h3>Compliance and integrity</h3>
              <p className="muted">Ethical practices and responsibility in every operation.</p>
            </Link>
            <Link className="card" href="/science">
              <h3>Science that treats</h3>
              <p className="muted">R&D across urology, neuroscience and immunology.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
