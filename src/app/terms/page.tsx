import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="section">
      <div className="wrap article">
        <h1>Terms of Use</h1>
        <p>
          This website is an information resource for {company.name}. Pipeline, science and news
          content may change. Nothing on this site is an offer to sell prescription medicines
          directly to the public.
        </p>
        <p>By using the site you agree to these terms and the medical disclaimer.</p>
      </div>
    </section>
  );
}
