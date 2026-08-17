import Link from "next/link";
import ChallengeRunner from "./ChallengeRunner";

export default function ChallengePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">← Teaching Practice Lab</Link>
        <nav className="nav">
          <Link href="/learn/foundations">Foundations</Link>
          <Link href="/learn/foundations/integrated-observation">Observation case</Link>
        </nav>
      </header>
      <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <div className="eyebrow">Practice · Foundations</div>
          <h1>Evidence before confidence.</h1>
          <p className="lead">Use these exercises to separate visible classroom activity from evidence, diagnose weak claims, and choose a defensible next instructional move. Nothing is saved or scored.</p>
        </div>
      </section>
      <ChallengeRunner />
    </main>
  );
}
