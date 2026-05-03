# Source Priority Rules — Nature of Art® Website Redesign

> **Purpose:** Define which source wins when content conflicts arise.  
> **Last updated:** 2026-05-02

---

## Priority Hierarchy (Highest to Lowest)

| Rank | Source | When to Use |
|------|--------|-------------|
| 1 | **Backend checkout / product record** (after login) | Final price, SKU, inventory, shipping rules |
| 2 | **Current dedicated sales page** | Product details, features, lesson counts, descriptions |
| 3 | **Current legal / terms page** | Disclaimers, refund policy, usage restrictions, copyright |
| 4 | **Current storefront product page** (Volusion) | Product images, descriptions, category placement |
| 5 | **Current bookstore / catalog summary** (Leadpages) | Catalog listings, cross-references |
| 6 | **Current WordPress page / post** | Blog content, about page text, general site copy |
| 7 | **Old notes or placeholder repo content** | Never use as verified truth — only as draft scaffolding |

---

## Conflict Resolution Rules

1. **Dedicated sales page beats catalog summary** for product details.
   - Example: Clay Modeling sales page says 29 studios. Bookstore catalog says 27 lessons. Sales page wins.

2. **Backend checkout beats public page** for final price.
   - Example: Sales page shows $155. Volusion checkout shows $149. Volusion wins.

3. **Legal page beats reused legal snippets** for exact wording.
   - Example: Curriculum page has a short disclaimer. Terms page has the full legal text. Terms page wins.

4. **WordPress export beats crawler text** for blog content.
   - Example: Crawler extracted truncated text. WordPress export has full article. Export wins.

5. **Most recent visible page beats older page** for current offerings.
   - Example: Waitlist page shows old price. New sales page shows updated price. New sales page wins.

6. **Never use placeholder repo content as verified truth.**
   - All invented stats, testimonials, and claims must be removed or marked as `pending-verification`.

---

## Verification Status Definitions

| Status | Meaning |
|--------|---------|
| `pending-public-extraction` | Not yet scraped from public page |
| `public-content-extracted` | Copied from visible public page |
| `pending-backend-verification` | Needs admin/login access to confirm |
| `migrated-to-template` | Added to redesigned page/template |
| `needs-review` | Conflict detected, awaiting resolution |
| `production-ready` | Verified from highest-priority source |
| `fallback-external` | Using legacy URL until native integration ready |
| `connected` | Backend integration mapped and tested |
| `tested` | End-to-end verified |

---

## Current Known Conflicts

See `contentConflicts.md` for tracked conflicts.
