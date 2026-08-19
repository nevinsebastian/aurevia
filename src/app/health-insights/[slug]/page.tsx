import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/data/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  return { title: item?.title ?? "Insight" };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();

  return (
    <section className="section">
      <div className="wrap article">
        <p className="kicker">
          <Link href="/health-insights">Health Insights</Link> / {item.category}
        </p>
        <h1>{item.title}</h1>
        <p className="muted">{item.readTime} read</p>
        {item.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <p className="disclaimer-note">
          This article is educational. It is not a prescription, diagnosis or substitute for a
          clinician’s advice.
        </p>
      </div>
    </section>
  );
}
