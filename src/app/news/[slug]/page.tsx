import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return { title: item?.title ?? "News" };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <section className="section">
      <div className="wrap article">
        <p className="kicker">
          <Link href="/news">Newsroom</Link> / {item.kicker}
        </p>
        <p className="muted">{item.date}</p>
        <h1>{item.title}</h1>
        {item.body.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </section>
  );
}
