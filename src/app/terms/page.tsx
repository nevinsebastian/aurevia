import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Terms & Conditions</h1>
        <p>
          This website is an information and enquiry portfolio for {company.name}. Product names,
          pack sizes and compositions are published for general reference and may change with the
          current approved label.
        </p>
        <p>
          Nothing on this site constitutes an offer to sell prescription medicines directly to the
          public. Professional products are listed for qualified enquiry.
        </p>
        <p>By using the site you agree to these terms and the medical disclaimer.</p>
      </div>
    </section>
  );
}
