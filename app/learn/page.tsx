import Link from "next/link";
import { ftemDomains } from "@/content/ftem";

export default function LearnPage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">← Teaching Practice Lab</Link>
        <nav className="nav">
          <Link href="/learn/foundations">Foundations</Link>
          <Link href="/challenge">Practice</Link>
        </nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Course map</div>
          <h1>Marzano FTEM learning track.</h1>
          <p className="lead">
            Start with the reasoning foundations, then work through the four current FTEM domains. The course teaches the framework through original explanations, examples, comparisons, scenarios, and defense prompts rather than reproducing proprietary evaluator materials.
          </p>
          <Link className="button" href="/learn/foundations">Start with Foundations</Link>
        </article>
        <aside className="card">
          <div className="eyebrow">Current research target</div>
          <div className="metric">23</div>
          <div className="subtle">competencies across four domains</div>
          <p className="subtle" style={{ marginTop: 18 }}>
            Framework labels are encoded only when verified by the project source registry. Unresolved labels stay unresolved.
          </p>
        </aside>
      </section>

      <section className="card">
        <div className="eyebrow">Module 00</div>
        <div className="action">
          <div>
            <strong>Foundations · Think Like the Framework</strong>
            <span className="subtle">Nine lessons covering desired effects, evidence, uncertainty, adaptation, discrimination, scenarios, and defense.</span>
          </div>
          <Link className="button secondary" href="/learn/foundations">Open</Link>
        </div>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <div className="eyebrow">FTEM domains</div>
        <h2>Current framework</h2>
        {ftemDomains.map((domain) => (
          <div className="action" key={domain.slug}>
            <div>
              <strong>{domain.number} · {domain.title}</strong>
              <span className="subtle">{domain.summary}</span>
            </div>
            <div className="row" style={{ alignItems: "center" }}>
              <span className="badge">{domain.count} competencies</span>
              <Link className="button secondary" href={`/learn/${domain.slug}`}>Explore</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
