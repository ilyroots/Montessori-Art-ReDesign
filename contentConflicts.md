# Content Conflicts — Nature of Art® Website Redesign

> **Purpose:** Track all known content discrepancies across sources.  
> **Resolution:** Use `sourcePriority.md` hierarchy.  
> **Last updated:** 2026-05-02

---

## Active Conflicts

### 1. Clay Modeling — Studio Count

| Source | Value | URL |
|--------|-------|-----|
| Bookstore catalog | 27 lessons | `spramani.lpages.co/all-my-books/` |
| Clay Modeling sales page | 29 studio experiences | `spramani.lpages.co/clay-modeling-curriculum/` |

**Resolution:** Dedicated sales page wins over catalog summary.
**Action:** Use 29 studio experiences. Mark bookstore listing as catalog-only summary.
**Status:** `needs-review` — confirm with Spramani before finalizing.

---

### 2. Certification — Pricing

| Source | Option 1 | Option 2 | URL |
|--------|----------|----------|-----|
| arttraining2020-waitlist | $668 | $1,499 | `spramani.lpages.co/arttraining2020-waitlist/` |
| artteachingblueprint | $699 | $1,500 | `spramani.lpages.co/artteachingblueprint/` |

**Resolution:** Most recent visible page wins, but backend checkout is final source.
**Action:** Mark both prices as `pending-backend-verification`. Do not publish final price until confirmed.
**Status:** `needs-review`

---

### 3. Author Bio — Years of Experience

| Source | Value | Context |
|--------|-------|---------|
| Homepage placeholder | "over two decades" | Redesign repo draft |
| Some pages | "20+ years" | Various sales page copy |
| Other references | "30 years" | Possible older bio text |

**Resolution:** Use exact wording from current public About page.
**Action:** Extract from `montessori-art.com/about-2/` and use verbatim.
**Status:** `pending-public-extraction`

---

### 4. Painting Work vs. Kids Painting

| Product | Description | Price |
|---------|-------------|-------|
| Kids Painting | 57 studio experiences, comprehensive curriculum | $155 paperback / $97 digital |
| Painting Work | Companion album, 7 key lessons, best for elementary | $97 printed / $45 digital |

**Resolution:** These are distinct products. Do not merge.
**Action:** Maintain separate product IDs and pages.
**Status:** `resolved`

---

### 5. Drawing Curriculum — Edition Counts

| Edition | Studios | Price (Paperback) | Price (Digital) |
|---------|---------|-------------------|-----------------|
| Early Childhood | 16 | $135.00 | $72.00 |
| Elementary | 47 | $155.00 | $97.00 |

**Resolution:** Sales page clearly shows two editions. Maintain as variants.
**Action:** Use `priceVariants` with edition-specific SKUs.
**Status:** `resolved`

---

### 6. Training Access Periods

| Training | Access Period | Source |
|----------|---------------|--------|
| Art Shelf | 1 year | `keap.page/hj952/new-landing-page3.html` |
| Process-Based Art | 1 year | `keap.page/hj952/process-based-video-training.html` |
| Painting Key Lessons | 1 year | `spramani.lpages.co/october-online-training/` |
| Certification | 3 years | `spramani.lpages.co/artteachingblueprint/` |

**Resolution:** Each training page is its own source of truth.
**Action:** Record access period per product. Do not assume uniform access.
**Status:** `resolved`

---

## Resolved Conflicts

| # | Conflict | Resolution | Date |
|---|----------|------------|------|
| — | — | — | — |

---

## How to Add a New Conflict

1. Assign the next conflict number.
2. Describe the conflicting sources with URLs.
3. Cite the `sourcePriority.md` rule that applies.
4. State the proposed resolution.
5. Set status to `needs-review` or `pending-public-extraction`.
6. Update this doc when resolved.
