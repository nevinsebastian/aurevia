import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Supply & Access" };

export default function ShippingPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Supply & Access</h1>
        <p>
          {company.name} is a biopharmaceutical organisation. Patient access is through healthcare
          professionals, authorised channels and partners — not through an online shop on this site.
        </p>
        <p>
          Professional and distribution enquiries: use our{" "}
          <Link href="/contact">contact form</Link>.
        </p>
      </div>
    </section>
  );
}
