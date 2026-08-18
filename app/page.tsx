import Link from "next/link";

const courseSections = [
  ["00", "Foundations", "Learn the reasoning loop behind the framework before studying individual competencies.", "/learn/foundations"],
  ["01", "Standards-Based Planning", "Plan targets, tasks, resources, and evidence around the intended learning.", "/learn/standards-based-planning"],
  ["02", "Standards-Based Instruction", "Study the instructional practices used to build, deepen, and apply knowledge.", "/learn/standards-based-instruction"],
  ["03", "Conditions for Learning", "Study feedback, interaction, engagement, relationships, expectations, and classroom conditions.", "/learn/conditions-for-learning"],
  ["04", "Professional Responsibilities", "Connect instructional expertise to professional practice, collaboration, and responsibility.", "/learn/professional-responsibilities"],
] as const;

const reasoningSteps = [
  ["01", "Name the intent", "What should students come to understand or do?"],
  ["02", "Read the evidence", "What did students actually say, make, or demonstrate?"],
  ["03", "Diagnose the gap", "What is supported, uncertain, or still missing?"],
  ["04", "Adapt and defend", "What changes next, and why does that response fit?"],
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

      <section className="home-hero">
        <article className="hero-copy">
          <div className="eyebrow">Independent study · no account required</div>
          <h1>Make instructional decisions you can explain.</h1>
          <p className="lead">
            Teaching Practice Lab turns framework language into a repeatable habit: identify the learning intent, inspect student evidence, diagnose what it means, and choose a defensible next move.
          </p>
          <div className="row" style={{ justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap" }}>
            <Link className="button" href="/learn/foundations">Start with Foundations</Link>
            <Link className="text-link" href="/challenge">Try a practice case <span aria-hidden="true">→</span></Link>
          </div>
        </article>

        <aside className="reasoning-panel" aria-label="The instructional reasoning cycle">
          <div className="eyebrow">The learning loop</div>
          <ol className="reasoning-list">
            {reasoningSteps.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><small>{description}</small></div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="orientation-grid" aria-label="Ways to begin">
        <article className="card compact-card">
          <div className="eyebrow">Start here</div>
          <h2>Learn the method first.</h2>
          <p className="subtle">Nine short Foundation lessons establish the evidence-and-adaptation reasoning used throughout the course.</p>
          <Link className="text-link" href="/learn/foundations">Open Foundations <span aria-hidden="true">→</span></Link>
        </article>
        <article className="card compact-card">
          <div className="eyebrow">Use it now</div>
          <h2>Test a conclusion.</h2>
          <p className="subtle">Practice cases ask what the available classroom evidence really supports. Nothing is saved or scored.</p>
          <Link className="text-link" href="/challenge">Open practice <span aria-hidden="true">→</span></Link>
        </article>
        <article className="card compact-card">
          <div className="eyebrow">Explore the model</div>
          <h2>Find the right domain.</h2>
          <p className="subtle">The current learning map organizes the 23 competencies without copying proprietary protocols.</p>
          <Link className="text-link" href="/learn">View course map <span aria-hidden="true">→</span></Link>
        </article>
      </section>

      <section className="card course-map-card">
        <div className="section-heading">
          <div><div className="eyebrow">Course map</div><h2>From foundations to framework fluency</h2></div>
          <span className="badge">23 competencies · 4 domains</span>
        </div>
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

      <section className="boundary-note">
        <div className="eyebrow">Independent educational project</div>
        <p>Teaching Practice Lab is not affiliated with or endorsed by the Marzano Evaluation Center, and it is not an evaluator certification or district evaluation instrument.</p>
      </section>

      <footer className="site-footer">
        <span>Teaching Practice Lab</span>
        <span>© 2026 @Gh0stlyKn1ght · All Rights Reserved</span>
      </footer>
    </main>
  );
}
