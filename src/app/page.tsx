import Link from "next/link";
import { company } from "@/data/company";
import { news, stories } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="kicker">Aurevia in 2026</p>
          <h1>Building sustainable, innovation-driven growth</h1>
          <p>
            Long-term value creation for patients — from specialty urology and neuroscience to
            accessible generics and wellness care.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/news/pivot-to-growth">
              View the latest update
            </Link>
            <Link className="btn btn-ghost" href="/our-company">
              Get to know Aurevia
            </Link>
          </div>
        </div>
      </section>

      <section className="tri">
        <Link href="/our-company">
          <h2>We Are All In for Better Health</h2>
          <p>
            {company.name} is a leading innovative biopharmaceutical company, enabled by a
            world-class generics business.
          </p>
          <span>Get to know Aurevia</span>
        </Link>
        <Link href="/science/therapeutic-areas">
          <h2>Finding solutions to unmet medical needs</h2>
          <p>
            We focus on innovative medicine for urology, neuroscience and immunology.
          </p>
          <span>Learn about our latest innovations</span>
        </Link>
        <Link href="/solutions">
          <h2>Dedicated to addressing patients’ needs</h2>
          <p>
            Developing innovative medicines for the future while championing generics and
            biosimilars.
          </p>
          <span>Learn about our solutions</span>
        </Link>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">It’s Time to Talk About Now</p>
            <h2>An innovative biopharmaceutical leader, powered by generics</h2>
            <p className="lead">
              We deliver generics and biosimilars at scale and we are focused on developing new
              medicines in areas of greatest unmet need — including urology, neuroscience and
              immunology.
            </p>
            <p className="muted" style={{ marginTop: 14 }}>
              It looks like progress in prostate and urinary care. Progress for movement disorders.
              And a promising pipeline poised to bring treatments to patients and caregivers. At
              Aurevia, progress is undeniable. {company.purpose}
            </p>
          </div>
          <div className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/lab.jpg" alt="Aurevia research and operations" />
          </div>
        </div>
      </section>

      <section className="section mist">
        <div className="wrap">
          <p className="kicker">News</p>
          <h2>Latest from Aurevia</h2>
          <div className="news-row" style={{ marginTop: 24 }}>
            {news.slice(0, 3).map((item) => (
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
          <Link className="btn btn-ghost-dark" href="/news" style={{ marginTop: 24 }}>
            Visit the newsroom
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/research.jpg" alt="Neuroscience and specialty research" />
          </div>
          <div>
            <p className="kicker">Specialty care</p>
            <h2>Driving the next chapter of urology and neuroscience</h2>
            <p className="lead">
              We focus on some of the most complex challenges in urinary, prostate and neurological
              care today.
            </p>
            <Link className="btn btn-primary" href="/science/therapeutic-areas" style={{ marginTop: 20 }}>
              Read more
            </Link>
          </div>
        </div>
      </section>

      <section className="section purple">
        <div className="wrap split">
          <div>
            <p className="kicker" style={{ color: "#d7c6ee" }}>Stepping Up Innovation</p>
            <h2>Innovation for patients is at the heart of what we do</h2>
            <p>
              From in-house innovation to strategic partnerships, we persist in creating innovative
              medicines, generics and biologics to increase accessibility and affordability.
            </p>
            <Link className="btn btn-ghost" href="/science/pipeline" style={{ marginTop: 20 }}>
              Explore the Aurevia R&D pipeline
            </Link>
          </div>
          <div>
            <p className="kicker" style={{ color: "#d7c6ee" }}>Press Releases</p>
            <div className="news-row">
              {news.slice(0, 3).map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`}>
                  <time>{item.date}</time>
                  <div>
                    <h3>{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section mist">
        <div className="wrap">
          <p className="kicker">Healthy Future</p>
          <h2>Sustainability at Aurevia</h2>
          <p className="lead">
            Our Healthy Future work shows the steps we take for the health of people, the planet and
            our business.
          </p>
          <Link className="btn btn-ghost-dark" href="/sustainability" style={{ marginTop: 18 }}>
            Healthy Future
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Take a closer look</p>
          <h2>What we do</h2>
          <div className="grid-2" style={{ marginTop: 24 }}>
            {stories.map((item) => (
              <Link key={item.href} className="card" href={item.href}>
                <h3>{item.title}</h3>
                <span className="kicker">Read story</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section mist">
        <div className="wrap split">
          <div>
            <p className="kicker">Careers at Aurevia</p>
            <h2>Make a difference to people’s health, every day</h2>
            <p className="lead">
              Working at Aurevia is not just a job. You spend each day helping people enjoy healthier
              lives — united by the sense that we are building something greater than ourselves.
            </p>
            <Link className="btn btn-primary" href="/careers" style={{ marginTop: 18 }}>
              Explore an Aurevia career
            </Link>
          </div>
          <div className="media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/team.jpg" alt="Aurevia colleagues" />
          </div>
        </div>
      </section>

      <section className="section purple">
        <div className="wrap">
          <p className="kicker" style={{ color: "#d7c6ee" }}>Our Purpose</p>
          <h2>{company.purpose}</h2>
          <p>Our colleagues embody this purpose in their work every day.</p>
          <Link className="btn btn-ghost" href="/our-company/purpose" style={{ marginTop: 20 }}>
            Discover our purpose
          </Link>
        </div>
      </section>
    </>
  );
}
