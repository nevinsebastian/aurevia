import type { Metadata } from "next";
import Link from "next/link";
import { news } from "@/data/site";

export const metadata: Metadata = { title: "Newsroom" };

export default function NewsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">News and Media</p>
        <h1>Newsroom</h1>
        <p className="lead">
          Press releases, stories and contacts for reporting on Aurevia Life Sciences.
        </p>
        <div className="news-row" style={{ marginTop: 28 }}>
          {news.map((item) => (
            <Link key={item.slug} href={`/news/${item.slug}`}>
              <time>{item.date}</time>
              <div>
                <p className="kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
