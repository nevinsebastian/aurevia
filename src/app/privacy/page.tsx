import type { Metadata } from "next";
import { company, telLink, waLink } from "@/data/company";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Privacy Policy</h1>
        <p>
          {company.name} uses this website to publish product information. Enquiries are made by
          phone or WhatsApp at {company.phone}. We do not collect form data on this website.
        </p>
        <p>
          If you call or message us, we use those details only to respond to the enquiry and to
          maintain a professional relationship. We do not sell personal information.
        </p>
        <p>
          For any privacy request, call{" "}
          <a href={telLink()}>{company.phone}</a> or{" "}
          <a href={waLink()}>WhatsApp</a>.
        </p>
      </div>
    </section>
  );
}
