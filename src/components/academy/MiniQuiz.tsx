"use client";

import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { getQuizResult, saveQuizResult } from "@/lib/academyProgress";
import type { AcademyQuiz } from "@/config/academyLessons";

interface MiniQuizProps {
  lessonSlug: string;
  quiz: AcademyQuiz;
}

export function MiniQuiz({ lessonSlug, quiz }: MiniQuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = getQuizResult(lessonSlug);
    if (saved) {
      setSelected(saved.answeredIndex);
      setSubmitted(true);
    }
  }, [lessonSlug]);

  const handleSelect = (index: number) => {
    if (submitted) return;
    setSelected(index);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === quiz.correctIndex;
    setSubmitted(true);
    saveQuizResult(lessonSlug, selected, correct);
  };

  const isCorrect = submitted && selected === quiz.correctIndex;

  return (
    <div className="bg-paper border border-linen rounded-card p-5 sm:p-6">
      <h3 className="font-semibold text-ink mb-4">Mini Quiz</h3>
      <p className="text-sm text-charcoal/80 mb-5">{quiz.question}</p>

      <div className="space-y-2 mb-5">
        {quiz.options.map((option, i) => {
          const isSelected = selected === i;
          const isCorrectAnswer = i === quiz.correctIndex;
          const showCorrect = submitted && isCorrectAnswer;
          const showWrong = submitted && isSelected && !isCorrectAnswer;

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={submitted}
              className={`flex items-center gap-3 w-full text-left p-3 rounded-lg border transition-all ${
                showCorrect
                  ? "border-sage bg-sage/5"
                  : showWrong
                  ? "border-red-300 bg-red-50"
                  : isSelected
                  ? "border-honey bg-honey/5"
                  : "border-linen bg-canvas/30 hover:bg-canvas"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 text-xs font-semibold ${
                  showCorrect
                    ? "bg-sage border-sage text-white"
                    : showWrong
                    ? "bg-red-400 border-red-400 text-white"
                    : isSelected
                    ? "bg-honey border-honey text-white"
                    : "border-linen bg-paper text-charcoal/50"
                }`}
              >
                {showCorrect ? <Check size={14} /> : showWrong ? <X size={14} /> : String.fromCharCode(65 + i)}
              </div>
              <span className="text-sm text-charcoal/80">{option}</span>
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="rounded-button bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-charcoal disabled:opacity-50 transition-colors"
        >
          Check Answer
        </button>
      ) : (
        <div className={`text-sm font-medium ${isCorrect ? "text-sage" : "text-red-oxide"}`}>
          {isCorrect ? "Correct! Well done." : "Not quite. Review the lesson and try again."}
        </div>
      )}
    </div>
  );
}
