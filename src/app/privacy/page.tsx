import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Data Privacy" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Data Privacy</h1>
        <p>
          {company.name} uses this website to publish company, science and news information. You can
          enquire through the contact form. Form submissions are sent to our inbox so we can reply.
          We do not sell personal information.
        </p>
        <p>
          If you write to us, we use those details only to respond. For any privacy request, use the
          contact form or email {company.inboxEmail}.
        </p>
      </div>
    </section>
  );
}
