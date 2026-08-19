import type { Metadata } from "next";
import { company, telLink, waLink } from "@/data/company";

export const metadata: Metadata = { title: "Returns, Refunds & Cancellations" };

export default function ReturnsPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Returns, Refunds & Cancellations</h1>
        <p>
          Marketplace purchases follow the return rules of the storefront where the order was placed.
          For wholesale enquiries, call <a href={telLink()}>{company.phone}</a> or{" "}
          <a href={waLink()}>WhatsApp</a>.
        </p>
        <p>
          Opened medicines and nutraceuticals are generally not returnable except where required by
          applicable law or where the product arrived damaged or incorrect.
        </p>
      </div>
    </section>
  );
}
