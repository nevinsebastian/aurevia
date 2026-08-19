import type { Metadata } from "next";
import { company, telLink, waLink } from "@/data/company";

export const metadata: Metadata = { title: "Investors" };

export default function InvestorsPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <p className="kicker">Investors</p>
        <h1>Investor information</h1>
        <p>
          For investor and partnership enquiries related to {company.name}, call or message the
          Aurevia team. We do not publish live market quotations on this site.
        </p>
        <p>
          <a className="text-cta" href={telLink()}>Call {company.phone} →</a>
        </p>
        <p>
          <a className="text-cta" href={waLink("Hello Aurevia, investor enquiry.")} target="_blank" rel="noreferrer">
            WhatsApp the team →
          </a>
        </p>
      </div>
    </section>
  );
}
