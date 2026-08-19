import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Medical Disclaimer" };

export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Medical Disclaimer</h1>
        <p>
          Information on this website is provided for general reference. It should not be considered
          a substitute for diagnosis, treatment or professional medical advice. Product suitability
          varies. Consult a qualified healthcare professional.
        </p>
        <p>
          {company.name} works with qualified third-party manufacturing and research partners and
          does not claim to own every facility referenced in partnered programmes.
        </p>
      </div>
    </section>
  );
}
