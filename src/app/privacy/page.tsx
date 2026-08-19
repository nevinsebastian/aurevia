import type { Metadata } from "next";
import { company, telLink, waLink } from "@/data/company";

export const metadata: Metadata = { title: "Data Privacy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Data Privacy</h1>
        <p>
          {company.name} uses this website to publish company, science and news information.
          You can enquire by phone, WhatsApp, or the contact form. Form submissions are sent to our
          inbox so we can reply. We do not sell personal information.
        </p>
        <p>
          If you call or message us, we use those details only to respond. We do not sell personal
          information.
        </p>
        <p>
          Contact us on <a href={telLink()}>{company.phone}</a> or{" "}
          <a href={waLink()}>WhatsApp</a> for any privacy request.
        </p>
      </div>
    </section>
  );
}
