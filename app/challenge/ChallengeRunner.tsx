"use client";

import { useMemo, useState } from "react";
import { foundationsChallenges } from "@/content/foundations";

export default function ChallengeRunner() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const challenge = foundationsChallenges[index];
  const complete = selected !== null;
  const correct = selected === challenge.answer;
  const progress = Math.round(((index + (complete ? 1 : 0)) / foundationsChallenges.length) * 100);

  const resultLabel = useMemo(() => {
    if (!complete) return null;
    return correct ? "Evidence accepted" : "Reasoning gap detected";
  }, [complete, correct]);

  function choose(id: string) {
    if (complete) return;
    setSelected(id);
    if (id === challenge.answer) setScore((value) => value + 1);
  }

  function next() {
    if (index === foundationsChallenges.length - 1) {
      setIndex(0);
      setSelected(null);
      setScore(0);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
  }

  return (
    <article className="card">
      <div className="row">
        <div>
          <div className="eyebrow">{challenge.difficulty} · {challenge.dimension}</div>
          <h2>{challenge.title}</h2>
        </div>
        <span className="badge">{index + 1} / {foundationsChallenges.length}</span>
      </div>

      <div className="progress"><span style={{ width: `${progress}%` }} /></div>
      <p className="question">{challenge.prompt}</p>

      <div className="choices">
        {challenge.choices.map((choice) => {
          let state: string | undefined;
          if (complete && choice.id === challenge.answer) state = "correct";
          else if (complete && choice.id === selected) state = "wrong";

          return (
            <button
              key={choice.id}
              className="choice"
              data-state={state}
              onClick={() => choose(choice.id)}
              disabled={complete}
            >
              {choice.id.toUpperCase()}. {choice.label}
            </button>
          );
        })}
      </div>

      {complete && (
        <div className="feedback">
          <strong>{resultLabel}</strong>
          <p>{challenge.explanation}</p>
          <div className="row">
            <span>Session score: {score} / {index + 1}</span>
            <button className="button" onClick={next}>
              {index === foundationsChallenges.length - 1 ? "Restart run" : "Next challenge"}
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
