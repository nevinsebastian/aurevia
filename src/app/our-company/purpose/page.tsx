import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Our Purpose" };

export default function PurposePage() {
  return (
    <section className="section">
      <div className="wrap article">
        <p className="kicker">Our Purpose</p>
        <h1>{company.purpose}</h1>
        <p>
          At Aurevia, our purpose drives innovation, improves healthcare access, and enhances
          patient outcomes. This ethos shapes every aspect of our operations — from research and
          development to our portfolio of specialty, generic and wellness medicines.
        </p>
        <p>
          Our commitment goes beyond producing high-quality generic medicines. We also drive
          innovation in specialty and biopharmaceutical treatments, with a particular focus on
          urology alongside neuroscience and immunology.
        </p>
        <p>
          We focus on sustainability, advancing medical science, and making a positive societal
          impact. This is the Aurevia legacy — stronger, bolder and simpler in how we operate, and
          relentless in understanding what is next for patients, people and society.
        </p>
        <Link className="btn btn-primary" href="/our-company" style={{ marginTop: 24 }}>
          Back to Our Company
        </Link>
      </div>
    </section>
  );
}
