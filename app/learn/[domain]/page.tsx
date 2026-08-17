import Link from "next/link";
import { notFound } from "next/navigation";
import { ftemDomains, getFtemDomain } from "@/content/ftem";

export function generateStaticParams() {
  return ftemDomains.map((domain) => ({ domain: domain.slug }));
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain: slug } = await params;
  const domain = getFtemDomain(slug);

  if (!domain) notFound();

  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/learn" className="brand">← Course map</Link>
        <nav className="nav">
          <Link href="/learn/foundations">Foundations</Link>
          <Link href="/challenge">Practice</Link>
        </nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Domain {domain.number}</div>
          <h1>{domain.title}</h1>
          <p className="lead">{domain.summary}</p>
        </article>
        <aside className="card">
          <div className="eyebrow">Domain size</div>
          <div className="metric">{domain.count}</div>
          <div className="subtle">competencies</div>
          <div className="badge" style={{ display: "inline-block", marginTop: 16 }}>
            {domain.status === "ready" ? "labels verified for course mapping" : "research in progress"}
          </div>
        </aside>
      </section>

      {domain.note && (
        <section className="callout" style={{ marginBottom: 18 }}>
          <div className="eyebrow">Source integrity note</div>
          <p>{domain.note}</p>
        </section>
      )}

      <section className="card">
        <div className="eyebrow">Competency map</div>
        <h2>{domain.title}</h2>
        <div className="stack">
          {domain.elements.map((element, index) => (
            <div className="action" key={element}>
              <div>
                <strong>{String(index + 1).padStart(2, "0")} · {element}</strong>
                <span className="subtle">Full learning page will add mechanism, evidence, false positives, adaptation, CS examples, recall, and defense practice.</span>
              </div>
              <span className="badge">course page next</span>
            </div>
          ))}
        </div>
      </section>

      <section className="card" style={{ marginTop: 18 }}>
        <div className="eyebrow">How this domain will be learned</div>
        <div className="grid">
          <div>
            <h2>Understand</h2>
            <p className="subtle">Purpose, mechanism, desired effect, examples, and non-examples.</p>
          </div>
          <div>
            <h2>Defend</h2>
            <p className="subtle">Compare neighboring practices, analyze evidence, diagnose failure, and answer follow-up questions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
