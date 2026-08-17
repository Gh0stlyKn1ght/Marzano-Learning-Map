import Link from "next/link";
import type { ReactNode } from "react";
import { foundationLessons } from "@/content/foundations-course";

export default function FoundationsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <aside className="course-rail shell" aria-label="Foundations lesson navigation">
        <div className="card">
          <div className="eyebrow">Foundations · lesson index</div>
          <div className="lesson-index">
            {foundationLessons.map((lesson) => (
              <Link key={lesson.slug} href={`/learn/foundations/${lesson.slug}`} className="lesson-link">
                <span>{lesson.number}</span>
                <strong>{lesson.title}</strong>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
