import Link from "next/link";
import ChallengeRunner from "./ChallengeRunner";

export default function ChallengePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">← Teaching Practice Lab</Link>
        <nav className="nav">
          <Link href="/learn/foundations">Learn</Link>
          <Link href="/mastery">Mastery</Link>
        </nav>
      </header>
      <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <div className="eyebrow">Practice run</div>
          <h1>Evidence before confidence.</h1>
          <p className="lead">The first playable loop trains one habit: do not confuse visible classroom activity with evidence that the intended learning effect occurred.</p>
        </div>
      </section>
      <ChallengeRunner />
    </main>
  );
}
