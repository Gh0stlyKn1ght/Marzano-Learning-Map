import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell">
      <section className="card">
        <div className="eyebrow">404</div>
        <h1>Page not found.</h1>
        <p className="lead">That route is not part of the current learning map.</p>
        <Link className="button" href="/">Return home</Link>
      </section>
    </main>
  );
}
