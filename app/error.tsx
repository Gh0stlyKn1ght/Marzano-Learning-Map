"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="shell">
      <section className="card">
        <div className="eyebrow">System fault</div>
        <h1>Training interrupted.</h1>
        <p className="lead">The learning state was not intentionally changed. Retry this screen.</p>
        <button className="button" onClick={reset}>Retry</button>
      </section>
    </main>
  );
}
