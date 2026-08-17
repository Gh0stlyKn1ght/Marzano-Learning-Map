import Link from "next/link";

const lessons = [
  ["01", "Framework Orientation", "Understand the model as a decision system, not a checklist."],
  ["02", "Desired Effect", "Identify what should change in student thinking or performance."],
  ["03", "Evidence vs Activity", "Separate what the teacher did from evidence that learning occurred."],
  ["04", "Not Enough Evidence", "Recognize when the available evidence cannot support a conclusion."],
  ["05", "Adaptation Loop", "Change instruction when the desired effect is not occurring, then check again."],
  ["06", "Distinguish the Concepts", "Tell nearby concepts apart and explain why one fits better."],
  ["07", "Applied Scenario", "Analyze a complete classroom situation."],
  ["08", "Defend the Decision", "Explain and defend instructional reasoning under questioning."],
  ["09", "Integrated Observation", "Combine identification, evidence, diagnosis, adaptation, and defense."],
] as const;

export default function FoundationsPage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">← Teaching Practice Lab</Link>
        <nav className="nav"><Link href="/challenge">Practice</Link><a href="https://github.com/Gh0stlyKn1ght/Marzano-Learning-Map">Source</a></nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Module 00 · Foundations</div>
          <h1>Think like the framework.</h1>
          <p className="lead">Before memorizing individual competencies, learn the mental loop that makes the framework useful: intent → strategy → desired effect → evidence → diagnosis → adaptation → evidence again → defense.</p>
          <Link className="button" href="/challenge">Try the practice set</Link>
        </article>
        <aside className="card">
          <div className="eyebrow">How to use this module</div>
          <h2>Read. Close it. Explain it.</h2>
          <p className="subtle">There is no completion tracker. Repeat lessons and exercises until you can explain the reasoning without the page in front of you.</p>
        </aside>
      </section>

      <section className="card">
        <div className="eyebrow">Module sequence</div>
        <h2>Foundations</h2>
        {lessons.map(([number, title, description]) => (
          <div className="action" key={title}>
            <div>
              <strong>{number} · {title}</strong>
              <span className="subtle">{description}</span>
            </div>
            <span className="badge">open</span>
          </div>
        ))}
      </section>
    </main>
  );
}
