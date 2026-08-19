import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Page not found</h1>
        <p className="lead">The page you requested is not on the Aurevia website.</p>
        <Link className="btn btn-primary" href="/" style={{ marginTop: 20 }}>
          Back home
        </Link>
      </div>
    </section>
  );
}
