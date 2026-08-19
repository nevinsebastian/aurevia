import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Medical / Product Disclaimer" };

export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Medical / Product Disclaimer</h1>
        <p>
          Product information on this website is provided for general reference and should be read
          together with the current product label. Nutraceutical, nutritional, Ayurvedic, cosmetic,
          urology and wellness products should not be considered substitutes for diagnosis, treatment
          or professional medical advice.
        </p>
        <p>
          Prescription-marked (Rx) items are listed for professional reference only. Product
          suitability varies between individuals. Consult a qualified healthcare professional before
          use, especially in pregnancy, childhood, kidney disease and when other medicines are taken.
        </p>
        <p>
          {company.name} markets products supplied by qualified third-party manufacturers and does
          not claim to own manufacturing facilities.
        </p>
      </div>
    </section>
  );
}
