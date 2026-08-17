import Link from "next/link";
import { notFound } from "next/navigation";
import { foundationLessons, getFoundationLesson } from "@/content/foundations-course";

export function generateStaticParams() {
  return foundationLessons.map((lesson) => ({ slug: lesson.slug }));
}

export default async function FoundationLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getFoundationLesson(slug);

  if (!lesson) notFound();

  const currentIndex = foundationLessons.findIndex((item) => item.slug === lesson.slug);
  const previous = foundationLessons[currentIndex - 1];
  const next = foundationLessons[currentIndex + 1];

  return (
    <main className="shell lesson-shell">
      <header className="topbar">
        <Link href="/learn/foundations" className="brand">← Foundations</Link>
        <nav className="nav">
          <Link href="/challenge">Practice</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="lesson-hero">
        <div className="eyebrow">Foundation {lesson.number}</div>
        <h1>{lesson.title}</h1>
        <p className="lead">{lesson.summary}</p>
        <div className="lesson-objective">
          <span className="eyebrow">Objective</span>
          <strong>{lesson.objective}</strong>
        </div>
      </section>

      <div className="lesson-grid">
        <article className="lesson-content">
          <section className="callout">
            <div className="eyebrow">Key idea</div>
            <p>{lesson.keyIdea}</p>
          </section>

          {lesson.sections.map((section) => (
            <section className="lesson-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}

          <section className="card lesson-check">
            <div className="eyebrow">Close the page and recall</div>
            <h2>Can you answer these without looking back?</h2>
            <ol>
              {lesson.recall.map((prompt) => <li key={prompt}>{prompt}</li>)}
            </ol>
          </section>

          <section className="card lesson-check">
            <div className="eyebrow">Defense practice</div>
            <h2>Say the answer out loud.</h2>
            <ol>
              {lesson.defense.map((prompt) => <li key={prompt}>{prompt}</li>)}
            </ol>
          </section>
        </article>

        <aside className="lesson-side card">
          <div className="eyebrow">Reasoning loop</div>
          <div className="reasoning-chain" aria-label="Instructional reasoning loop">
            <span>Intent</span>
            <b>↓</b>
            <span>Strategy</span>
            <b>↓</b>
            <span>Desired effect</span>
            <b>↓</b>
            <span>Evidence</span>
            <b>↓</b>
            <span>Diagnosis</span>
            <b>↓</b>
            <span>Adaptation</span>
            <b>↓</b>
            <span>New evidence</span>
          </div>
        </aside>
      </div>

      <nav className="lesson-pager" aria-label="Lesson navigation">
        {previous ? (
          <Link className="button secondary" href={`/learn/foundations/${previous.slug}`}>← {previous.title}</Link>
        ) : <span />}
        {next ? (
          <Link className="button" href={`/learn/foundations/${next.slug}`}>{next.title} →</Link>
        ) : (
          <Link className="button" href="/challenge">Practice Foundations →</Link>
        )}
      </nav>
    </main>
  );
}
