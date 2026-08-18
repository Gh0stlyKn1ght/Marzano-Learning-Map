import Link from "next/link";
import { notFound } from "next/navigation";
import { ftemDomains, getFtemDomain } from "@/content/ftem";
import { getCourseDossierRoutes } from "@/lib/course-dossiers";

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
  const lessonRoutes = getCourseDossierRoutes();

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
          {domain.elements.map((element, index) => {
            const lesson = lessonRoutes.find((item) => item.domain === domain.slug && item.title === element);

            return (
              <div className="action" key={element}>
                <div>
                  <strong>{String(index + 1).padStart(2, "0")} · {element}</strong>
                  <span className="subtle">{lesson ? "Read the source-bound lesson, original scenario, evidence checks, and defense prompts." : "Lesson authoring is sequenced after its public-source basis is verified and reviewed."}</span>
                </div>
                {lesson ? (
                  <Link className="button secondary" href={`/learn/${domain.slug}/${lesson.slug}`}>Read lesson</Link>
                ) : <span className="badge">research-backed map</span>}
              </div>
            );
          })}
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
