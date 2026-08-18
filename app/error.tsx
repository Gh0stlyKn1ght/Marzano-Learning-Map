"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="shell">
      <section className="card">
        <div className="eyebrow">Something went wrong</div>
        <h1>This page could not load.</h1>
        <p className="lead">No learning activity is stored here. Please retry the screen.</p>
        <button className="button" onClick={reset}>Retry</button>
      </section>
    </main>
  );
}
