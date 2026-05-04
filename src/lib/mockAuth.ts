// ============================================================
// Mock Auth — TEMPORARY PROTOTYPE ONLY
// ============================================================
// This is a front-end-only fake auth system using localStorage.
// It exists solely for the concept demo and MUST be replaced
// with real auth (Supabase Auth, Auth.js, or custom backend)
// before any production launch.
//
// TODO: Replace with:
// - Supabase Auth (recommended)
// - Auth.js / NextAuth
// - Clerk
// - Custom JWT backend
// ============================================================

import type { AcademyTier } from "@/config/academyLessons";

export type MockUserRole = "parent" | "homeschool" | "teacher" | "school" | "artist";

export interface MockUser {
  name: string;
  email: string;
  role: MockUserRole;
  tier: AcademyTier;
  completedLessons: string[];
  activePath: string;
  isAdminDemo?: boolean;
}

const STORAGE_KEY = "noa_mock_user";

const DEFAULT_DEMO_USER: MockUser = {
  name: "Demo Parent",
  email: "demo@natureofart.local",
  role: "parent",
  tier: "free",
  completedLessons: ["welcome-to-color-mixing"],
  activePath: "color-mixing-starter",
  isAdminDemo: true,
};

// ── Helpers ─────────────────────────────────────────────────

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// ── Get / Set User ──────────────────────────────────────────

export function getMockUser(): MockUser | null {
  if (!isBrowser()) return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MockUser;
  } catch {
    return null;
  }
}

export function setMockUser(user: MockUser): void {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

// ── Create / Logout ─────────────────────────────────────────

export interface MockSignupData {
  name: string;
  email: string;
  role: MockUserRole;
  wantsHomeIdeas?: boolean;
  isClassroom?: boolean;
}

export function createMockUser(data: MockSignupData): MockUser {
  const user: MockUser = {
    name: data.name,
    email: data.email,
    role: data.role,
    tier: "free",
    completedLessons: [],
    activePath: "color-mixing-starter",
    isAdminDemo: true,
  };
  setMockUser(user);
  return user;
}

export function logoutMockUser(): void {
  if (!isBrowser()) return;
  localStorage.removeItem(STORAGE_KEY);
  // Also clear progress data tied to this user
  localStorage.removeItem("noa_lesson_progress");
}

// ── Tier Management ─────────────────────────────────────────

export function upgradeMockTier(tier: AcademyTier): MockUser | null {
  const user = getMockUser();
  if (!user) return null;
  const updated = { ...user, tier };
  setMockUser(updated);
  return updated;
}

// ── Demo Seeding ────────────────────────────────────────────

export function seedDemoUser(): MockUser {
  setMockUser(DEFAULT_DEMO_USER);
  return DEFAULT_DEMO_USER;
}

export function resetDemoProgress(): MockUser | null {
  const user = getMockUser();
  if (!user) return null;
  const updated: MockUser = {
    ...user,
    completedLessons: [],
    activePath: "color-mixing-starter",
  };
  setMockUser(updated);
  if (isBrowser()) {
    localStorage.removeItem("noa_lesson_progress");
  }
  return updated;
}

// ── Auth Guard Hook (client-side redirect helper) ───────────

export function requireMockUser(): MockUser | null {
  return getMockUser();
}
