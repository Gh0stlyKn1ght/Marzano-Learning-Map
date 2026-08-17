import Link from "next/link";

const steps = [
  ["01", "Framework Orientation", "Understand the model as a decision system, not a checklist."],
  ["02", "Desired Effect", "Identify what should change in student thinking or performance."],
  ["03", "Evidence vs Activity", "Separate what the teacher did from evidence that learning occurred."],
  ["04", "Not Enough Evidence", "Recognize when the available evidence cannot support a conclusion."],
  ["05", "Adaptation Loop", "Change instruction when the desired effect is not occurring, then check again."],
  ["06", "Distinguish", "Tell nearby concepts apart and explain why one fits better."],
  ["07", "Applied Scenario", "Analyze a complete classroom situation."],
  ["08", "Defense", "Explain and defend the instructional reasoning."],
  ["BOSS", "The Observation", "Integrate identification, evidence, diagnosis, adaptation, and defense."],
] as const;

export default function FoundationsPage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">← Teaching Practice Lab</Link>
        <nav className="nav"><Link href="/challenge">Practice</Link><Link href="/mastery">Mastery</Link></nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Path 00 · Foundations</div>
          <h1>Think like the framework.</h1>
          <p className="lead">Before memorizing individual competencies, learn the mental loop that makes the framework useful: intent → strategy → desired effect → evidence → diagnosis → adaptation → evidence again → defense.</p>
          <Link className="button" href="/challenge">Start playable checkpoint</Link>
        </article>
        <aside className="card">
          <div className="eyebrow">Path status</div>
          <div className="metric">0 / 9</div>
          <div className="subtle">Mastery is earned through challenges, not reading.</div>
          <div className="progress"><span style={{ width: "2%" }} /></div>
        </aside>
      </section>

      <section className="card">
        <div className="eyebrow">Mission sequence</div>
        <h2>Foundations path</h2>
        {steps.map(([number, title, description], index) => (
          <div className="action" key={title}>
            <div>
              <strong>{number} · {title}</strong>
              <span className="subtle">{description}</span>
            </div>
            <span className="badge">{index < 3 ? "prototype" : "locked"}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
