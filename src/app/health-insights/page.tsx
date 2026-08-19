import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Health Insights",
  description: "Practical articles on urology, nutrition and everyday wellness from Aurevia Life Sciences.",
};

export default function InsightsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Health Insights</p>
        <h1>Practical reading, not a diagnosis</h1>
        <p className="muted" style={{ margin: "8px 0 24px", maxWidth: "62ch" }}>
          Short notes on urinary health, nutrition and children’s wellness. Always read with current
          labels and professional advice.
        </p>
        <div className="grid-3">
          {insights.map((item) => (
            <Link key={item.slug} href={`/health-insights/${item.slug}`} className="info-card">
              <p className="cat-label">{item.category}</p>
              <h3 style={{ marginTop: 8 }}>{item.title}</h3>
              <p className="muted" style={{ marginTop: 8 }}>
                {item.excerpt}
              </p>
              <p className="pack-line" style={{ marginTop: 10 }}>
                {item.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
