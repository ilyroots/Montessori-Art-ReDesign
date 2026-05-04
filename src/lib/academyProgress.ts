// ============================================================
// Academy Progress — localStorage-only prototype
// ============================================================
// Tracks lesson completion, path progress, and next lessons.
// TODO: Replace with Supabase / database when backend ready.
// ============================================================

import {
  getAcademyPathBySlug,
  getAcademyLessonBySlug,
  getLessonsByPathSlug,
  canAccessLesson,
  type AcademyTier,
  type AcademyLesson,
} from "@/config/academyLessons";
import { getMockUser } from "./mockAuth";

const PROGRESS_KEY = "noa_lesson_progress";

interface LessonProgress {
  completedSlugs: string[];
  checklists: Record<string, boolean[]>;
  quizResults: Record<string, { answeredIndex: number; correct: boolean }>;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function getProgress(): LessonProgress {
  if (!isBrowser()) return { completedSlugs: [], checklists: {}, quizResults: {} };
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return { completedSlugs: [], checklists: {}, quizResults: {} };
    return JSON.parse(raw) as LessonProgress;
  } catch {
    return { completedSlugs: [], checklists: {}, quizResults: {} };
  }
}

function saveProgress(progress: LessonProgress): void {
  if (!isBrowser()) return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

// ── Completion ──────────────────────────────────────────────

export function isLessonComplete(slug: string): boolean {
  const user = getMockUser();
  const progress = getProgress();
  const userCompleted = user?.completedLessons.includes(slug) ?? false;
  const localCompleted = progress.completedSlugs.includes(slug);
  return userCompleted || localCompleted;
}

export function markLessonComplete(slug: string): void {
  const progress = getProgress();
  if (!progress.completedSlugs.includes(slug)) {
    progress.completedSlugs.push(slug);
    saveProgress(progress);
  }
  // Also sync to mock user
  const user = getMockUser();
  if (user && !user.completedLessons.includes(slug)) {
    user.completedLessons.push(slug);
    // Re-serialize user
    localStorage.setItem("noa_mock_user", JSON.stringify(user));
  }
}

export function unmarkLessonComplete(slug: string): void {
  const progress = getProgress();
  progress.completedSlugs = progress.completedSlugs.filter((s) => s !== slug);
  saveProgress(progress);

  const user = getMockUser();
  if (user) {
    user.completedLessons = user.completedLessons.filter((s) => s !== slug);
    localStorage.setItem("noa_mock_user", JSON.stringify(user));
  }
}

// ── Checklist ───────────────────────────────────────────────

export function getLessonChecklist(slug: string): boolean[] {
  const progress = getProgress();
  return progress.checklists[slug] ?? [];
}

export function setLessonChecklist(slug: string, checklist: boolean[]): void {
  const progress = getProgress();
  progress.checklists[slug] = checklist;
  saveProgress(progress);
}

export function toggleChecklistItem(slug: string, index: number): boolean[] {
  const progress = getProgress();
  const current = progress.checklists[slug] ? [...progress.checklists[slug]] : [];
  current[index] = !current[index];
  progress.checklists[slug] = current;
  saveProgress(progress);
  return current;
}

// ── Quiz ────────────────────────────────────────────────────

export function getQuizResult(slug: string) {
  const progress = getProgress();
  return progress.quizResults[slug] ?? null;
}

export function saveQuizResult(
  slug: string,
  answeredIndex: number,
  correct: boolean
): void {
  const progress = getProgress();
  progress.quizResults[slug] = { answeredIndex, correct };
  saveProgress(progress);
}

// ── Path Progress ───────────────────────────────────────────

export function getPathProgress(pathSlug: string): {
  completed: number;
  total: number;
  percent: number;
  nextLesson: AcademyLesson | null;
} {
  const lessons = getLessonsByPathSlug(pathSlug);
  const total = lessons.length;
  if (total === 0) return { completed: 0, total: 0, percent: 0, nextLesson: null };

  const completed = lessons.filter((l) => isLessonComplete(l.slug)).length;
  const percent = Math.round((completed / total) * 100);

  const nextLesson =
    lessons.find((l) => !isLessonComplete(l.slug)) ?? null;

  return { completed, total, percent, nextLesson };
}

// ── Locking ─────────────────────────────────────────────────

export function isLessonLocked(lesson: AcademyLesson, userTier: AcademyTier): boolean {
  return !canAccessLesson(lesson.tierRequired, userTier);
}

// ── Next Lesson ─────────────────────────────────────────────

export function getNextLesson(pathSlug: string): AcademyLesson | null {
  const lessons = getLessonsByPathSlug(pathSlug);
  return lessons.find((l) => !isLessonComplete(l.slug)) ?? null;
}

// ── Reset ───────────────────────────────────────────────────

export function resetPathProgress(pathSlug: string): void {
  const lessons = getLessonsByPathSlug(pathSlug);
  const slugs = lessons.map((l) => l.slug);

  const progress = getProgress();
  progress.completedSlugs = progress.completedSlugs.filter(
    (s) => !slugs.includes(s)
  );
  slugs.forEach((s) => {
    delete progress.checklists[s];
    delete progress.quizResults[s];
  });
  saveProgress(progress);

  const user = getMockUser();
  if (user) {
    user.completedLessons = user.completedLessons.filter(
      (s) => !slugs.includes(s)
    );
    localStorage.setItem("noa_mock_user", JSON.stringify(user));
  }
}
