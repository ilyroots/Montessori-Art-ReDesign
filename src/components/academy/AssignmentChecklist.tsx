"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { getLessonChecklist, setLessonChecklist } from "@/lib/academyProgress";

interface AssignmentChecklistProps {
  lessonSlug: string;
  items: string[];
}

export function AssignmentChecklist({ lessonSlug, items }: AssignmentChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    const saved = getLessonChecklist(lessonSlug);
    if (saved.length > 0) {
      setChecked(saved);
    } else {
      setChecked(new Array(items.length).fill(false));
    }
  }, [lessonSlug, items.length]);

  const toggle = (index: number) => {
    const next = [...checked];
    next[index] = !next[index];
    setChecked(next);
    setLessonChecklist(lessonSlug, next);
  };

  const allChecked = checked.length > 0 && checked.every(Boolean);

  return (
    <div className="bg-paper border border-linen rounded-card p-5 sm:p-6">
      <h3 className="font-semibold text-ink mb-4">Assignment Checklist</h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`flex items-start gap-3 w-full text-left p-3 rounded-lg transition-colors ${
              checked[i] ? "bg-sage/5" : "bg-canvas/50 hover:bg-canvas"
            }`}
          >
            <div
              className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                checked[i] ? "bg-sage border-sage" : "border-linen bg-paper"
              }`}
            >
              {checked[i] && <Check size={12} className="text-white" />}
            </div>
            <span className={`text-sm ${checked[i] ? "text-charcoal/50 line-through" : "text-charcoal/80"}`}>
              {item}
            </span>
          </button>
        ))}
      </div>
      {allChecked && (
        <p className="mt-4 text-sm text-sage font-medium text-center">All tasks complete! Great work.</p>
      )}
    </div>
  );
}
