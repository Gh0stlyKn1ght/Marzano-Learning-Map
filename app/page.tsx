import Link from "next/link";

const courseSections = [
  ["00", "Foundations", "Learn the reasoning loop behind the framework before studying individual competencies.", "/learn/foundations"],
  ["01", "Standards-Based Planning", "Plan targets, tasks, resources, and evidence around the intended learning.", "/learn/standards-based-planning"],
  ["02", "Standards-Based Instruction", "Study the instructional practices used to build, deepen, and apply knowledge.", "/learn/standards-based-instruction"],
  ["03", "Conditions for Learning", "Study feedback, interaction, engagement, relationships, expectations, and classroom conditions.", "/learn/conditions-for-learning"],
  ["04", "Professional Responsibilities", "Connect instructional expertise to professional practice, collaboration, and responsibility.", "/learn/professional-responsibilities"],
] as const;

export default function HomePage() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">Teaching Practice Lab</div>
        <nav className="nav" aria-label="Primary navigation">
          <Link href="/learn">Course</Link>
          <Link href="/challenge">Practice</Link>
          <a href="https://github.com/Gh0stlyKn1ght/Marzano-Learning-Map">Project</a>
        </nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Public learning platform · no account required</div>
          <h1>Learn the framework deeply enough to explain your decisions.</h1>
          <p className="lead">
            Read concise lessons, compare similar practices, analyze classroom scenarios, test your reasoning, and practice defending instructional decisions. The course is publicly accessible while the original platform, content, exercises, diagrams, and design remain privately owned by @Gh0stlyKn1ght.
          </p>
          <div className="row" style={{ justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
            <Link className="button" href="/learn/foundations">Start with Foundations</Link>
            <Link className="button secondary" href="/learn">View course map</Link>
          </div>
        </article>

        <aside className="card">
          <div className="eyebrow">Course principle</div>
          <h2>Reasoning over completion.</h2>
          <p className="subtle">There is nothing to grind and nothing to unlock. Use the course in order, jump directly to a concept, or repeat an exercise until you can defend the reasoning without notes.</p>
        </aside>
      </section>

      <section className="card">
        <div className="eyebrow">Course map</div>
        <h2>From foundations to full-framework reasoning</h2>
        <div className="stack">
          {courseSections.map(([number, title, description, href]) => (
            <div className="action" key={title}>
              <div>
                <strong>{number} · {title}</strong>
                <span className="subtle">{description}</span>
              </div>
              <Link className="button secondary" href={href}>{number === "00" ? "Start" : "Explore"}</Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>Teaching Practice Lab</span>
        <span>© 2026 @Gh0stlyKn1ght · All Rights Reserved</span>
      </footer>
    </main>
  );
}
