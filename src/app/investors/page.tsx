import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Investors" };

export default function InvestorsPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <p className="kicker">Investors</p>
        <h1>Investor information</h1>
        <p>
          For investor and partnership enquiries related to {company.name}, use our contact form.
          We do not publish live market quotations on this site.
        </p>
        <Link className="btn btn-primary" href="/contact" style={{ marginTop: 20 }}>
          Contact us
        </Link>
      </div>
    </section>
  );
}
