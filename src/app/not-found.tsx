import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Page not found</h1>
        <p className="muted" style={{ margin: "8px 0 20px" }}>
          The page you are looking for is not in the Aurevia portfolio.
        </p>
        <Link className="btn btn-green" href="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
