import Link from "next/link";
import { foundationLessons } from "@/content/foundations-course";

export default function FoundationsPage() {
  return (
    <main className="shell">
      <header className="topbar">
        <Link href="/" className="brand">← Teaching Practice Lab</Link>
        <nav className="nav">
          <Link href="/challenge">Practice</Link>
          <a href="https://github.com/Gh0stlyKn1ght/Marzano-Learning-Map">Source</a>
        </nav>
      </header>

      <section className="hero">
        <article className="card">
          <div className="eyebrow">Module 00 · Foundations</div>
          <h1>Think like the framework.</h1>
          <p className="lead">
            Before memorizing individual competencies, learn the mental loop that makes the framework useful:
            intent → strategy → desired effect → evidence → diagnosis → adaptation → evidence again → defense.
          </p>
          <Link className="button" href={`/learn/foundations/${foundationLessons[0].slug}`}>Start lesson 01</Link>
        </article>
        <aside className="card">
          <div className="eyebrow">How to use this module</div>
          <h2>Read. Close it. Explain it.</h2>
          <p className="subtle">
            There is no completion tracker. Repeat lessons and exercises until you can explain the reasoning without the page in front of you.
          </p>
        </aside>
      </section>

      <section className="card">
        <div className="eyebrow">Module sequence</div>
        <h2>Nine lessons from observation to defense</h2>
        {foundationLessons.map((lesson) => (
          <div className="action" key={lesson.slug}>
            <div>
              <strong>{lesson.number} · {lesson.title}</strong>
              <span className="subtle">{lesson.summary}</span>
            </div>
            <Link className="button secondary" href={`/learn/foundations/${lesson.slug}`}>Read</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
