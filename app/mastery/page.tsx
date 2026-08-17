import Link from "next/link";

const dimensions = [
  ["Recall", 0],
  ["Recognition", 0],
  ["Discrimination", 0],
  ["Application", 0],
  ["Diagnosis", 0],
  ["Adaptation", 0],
  ["Defense", 0],
  ["Transfer", 0],
  ["Teach", 0],
] as const;

export default function MasteryPage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">← Teaching Practice Lab</Link>
        <nav className="nav"><Link href="/learn/foundations">Learn</Link><Link href="/challenge">Practice</Link></nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Profile</div>
          <div className="rank">
            <div><h1 style={{ marginBottom: 8 }}>Novice</h1><div className="subtle">0 XP · Level 1</div></div>
            <span className="badge">Local prototype</span>
          </div>
          <p className="lead">This screen will eventually be driven by persisted attempts, spaced review, boss clears, and verified mastery. The MVP intentionally starts at zero instead of inventing progress.</p>
        </article>
        <aside className="card">
          <div className="eyebrow">Next gate</div>
          <h2>Apprentice I</h2>
          <div className="action"><span className="subtle">Complete Foundations checkpoint</span><span>○</span></div>
          <div className="action"><span className="subtle">Earn first challenge XP</span><span>○</span></div>
          <div className="action"><span className="subtle">Demonstrate diagnosis</span><span>○</span></div>
        </aside>
      </section>

      <section className="card">
        <div className="eyebrow">Mastery dimensions</div>
        <h2>Your current reasoning profile</h2>
        <div className="stack">
          {dimensions.map(([name, value]) => (
            <div key={name}>
              <div className="row"><span>{name}</span><span>{value}%</span></div>
              <div className="progress"><span style={{ width: `${value}%` }} /></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
