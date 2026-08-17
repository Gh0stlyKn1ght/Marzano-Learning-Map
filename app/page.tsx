import Link from "next/link";

const domains = [
  ["Standards-Based Planning", 24],
  ["Standards-Based Instruction", 12],
  ["Conditions for Learning", 18],
  ["Professional Responsibilities", 8],
] as const;

export default function HomePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">Teaching Practice Lab</div>
        <nav className="nav" aria-label="Primary navigation">
          <Link href="/learn/foundations">Learn</Link>
          <Link href="/challenge">Practice</Link>
          <Link href="/mastery">Mastery</Link>
        </nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Current mission</div>
          <h1>Think like the framework.</h1>
          <p className="lead">
            Learn the reasoning loop first: identify the instructional intent, separate activity from evidence, diagnose the desired effect, adapt, and defend the decision.
          </p>
          <Link className="button" href="/learn/foundations">Continue foundations</Link>
        </article>

        <aside className="card">
          <div className="rank">
            <div>
              <div className="eyebrow">Overall rank</div>
              <strong>Novice</strong>
            </div>
            <span className="badge">MVP profile</span>
          </div>
          <div className="metric">0 XP</div>
          <div className="subtle">Next rank: Apprentice I</div>
          <div className="progress" aria-label="Rank progress"><span style={{ width: "3%" }} /></div>
        </aside>
      </section>

      <section className="grid">
        <article className="card">
          <div className="eyebrow">Framework mastery</div>
          <h2>Domain confidence</h2>
          <div className="stack">
            {domains.map(([name, value]) => (
              <div key={name}>
                <div className="row"><span>{name}</span><span>{value}%</span></div>
                <div className="progress"><span style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <div className="eyebrow">Today</div>
          <h2>Training queue</h2>
          <div className="action">
            <div><strong>Foundations</strong><span className="subtle">Learn the evidence loop</span></div>
            <Link className="button secondary" href="/learn/foundations">Open</Link>
          </div>
          <div className="action">
            <div><strong>Evidence vs Activity</strong><span className="subtle">3 playable challenges</span></div>
            <Link className="button secondary" href="/challenge">Train</Link>
          </div>
          <div className="action">
            <div><strong>Mastery Profile</strong><span className="subtle">Nine dimensions</span></div>
            <Link className="button secondary" href="/mastery">Inspect</Link>
          </div>
        </article>
      </section>
    </main>
  );
}
