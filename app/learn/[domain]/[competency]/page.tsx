import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseDossier, getCourseDossierRoutes } from "@/lib/course-dossiers";
import styles from "./CompetencyLesson.module.css";

export function generateStaticParams() {
  return getCourseDossierRoutes().map(({ domain, slug }) => ({ domain, competency: slug }));
}

export default async function CompetencyLessonPage({
  params,
}: {
  params: Promise<{ domain: string; competency: string }>;
}) {
  const { domain, competency } = await params;
  const lesson = getCourseDossier(domain, competency);

  if (!lesson) notFound();

  return (
    <main className="shell lesson-shell">
      <header className="topbar">
        <Link href={`/learn/${lesson.domain}`} className="brand">← Standards-Based Instruction</Link>
        <nav className="nav" aria-label="Lesson navigation">
          <Link href="/learn/foundations">Foundations</Link>
          <Link href="/challenge">Practice</Link>
        </nav>
      </header>

      <section className="lesson-hero">
        <div className="eyebrow">Standards-Based Instruction · Competency lesson</div>
        <h1>{lesson.title}</h1>
        <p className="lead">Work from public-source claims through original analysis, classroom evidence, adaptation questions, and defense prompts.</p>
        <div className={styles.statusLine}>
          <span className="badge">{lesson.status}</span>
          <span>Rendered from the research dossier</span>
        </div>
      </section>

      <div className="lesson-grid">
        <article className="lesson-content">
          {lesson.sections.map((section) => {
            const label = section.heading === "Teaching Practice Lab interpretation" ? "Original course analysis" : section.heading === "Computer science example" ? "Original classroom scenario" : undefined;
            const className = section.heading === "Verified public-source claims" ? "callout" : section.heading.includes("Computer science example") ? styles.scenario : "lesson-section";

            return (
              <section key={section.heading} className={className}>
                {label && <div className="eyebrow">{label}</div>}
                <h2>{section.heading}</h2>
                {section.blocks.map((block, index) => {
                  if (block.type === "paragraph") return <p key={`${section.heading}-${index}`}>{block.value}</p>;
                  if (block.type === "subheading") return <h3 key={`${section.heading}-${index}`}>{block.value}</h3>;
                  return <ul key={`${section.heading}-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
                })}
              </section>
            );
          })}
        </article>

        <aside className="lesson-side card">
          <div className="eyebrow">Source boundary</div>
          <p className={styles.sideCopy}>This page reads directly from the Markdown research dossier. It keeps public-source claims, original analysis, original examples, and unresolved items visibly separate.</p>
          <div className={styles.sourceList}><strong>Source IDs</strong>{lesson.sources.map((source) => <span key={source}>{source}</span>)}</div>
          <Link className="text-link" href="/learn/standards-based-instruction">Back to domain <span aria-hidden="true">→</span></Link>
        </aside>
      </div>
    </main>
  );
}
