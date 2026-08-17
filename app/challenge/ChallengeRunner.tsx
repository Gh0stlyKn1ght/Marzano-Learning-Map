"use client";

import { useMemo, useState } from "react";
import { foundationsChallenges } from "@/content/foundations";

export default function ChallengeRunner() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const challenge = foundationsChallenges[index];
  const complete = selected !== null;
  const correct = selected === challenge.answer;

  const resultLabel = useMemo(() => {
    if (!complete) return null;
    return correct ? "Reasoning supported" : "Reconsider the evidence";
  }, [complete, correct]);

  function choose(id: string) {
    if (complete) return;
    setSelected(id);
  }

  function next() {
    setIndex((value) => (value + 1) % foundationsChallenges.length);
    setSelected(null);
  }

  return (
    <article className="card">
      <div className="row">
        <div>
          <div className="eyebrow">{challenge.difficulty} · {challenge.dimension}</div>
          <h2>{challenge.title}</h2>
        </div>
        <span className="badge">practice {index + 1} / {foundationsChallenges.length}</span>
      </div>

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
            <span className="subtle">No score is stored. Use the explanation to test your reasoning.</span>
            <button className="button" onClick={next}>
              {index === foundationsChallenges.length - 1 ? "Start again" : "Next practice"}
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
