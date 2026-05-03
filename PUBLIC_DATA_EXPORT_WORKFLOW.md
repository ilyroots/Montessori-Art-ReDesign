# Public Data Export Workflow — Montessori Art Website Redesign

> **Purpose:** Standardized workflow for extracting, verifying, and importing public content from the existing Montessori Art ecosystem into the redesign.  
> **Rule:** Only extract what is publicly visible. Never invent content. Mark all gaps for backend verification.  
> **Last updated:** 2026-05-02

---

## 1. Export Workflow (4 Steps)

### Step 1: Identify Source
- Find the legacy URL from `src/config/existingSiteMap.ts`
- Open the page in an incognito/private browser window
- Document the platform (Leadpages, Keap, WordPress, Volusion)

### Step 2: Extract Content
- Copy all visible text: headlines, body copy, bullet lists, pricing, CTAs, disclaimers, FAQs
- Do NOT copy hidden or gated content
- Note any images, videos, or downloadable assets
- Save a local screenshot for reference

### Step 3: Verify & Structure
- Paste extracted content into `src/config/publicContentExtract.ts`
- Use the appropriate type: `CurriculumExtract`, `BookstoreProduct`, or `ExtractedPage`
- Mark each field:
  - `verified-public` — you saw it on the public page
  - `pending-backend` — not visible publicly, needs admin access
- Cross-check pricing with at least 2 sources if available

### Step 4: Import into Redesign
- Update `src/config/products.ts` with verified pricing and features
- Update the relevant page component in `src/app/.../page.tsx`
- Remove all invented claims (numbers, testimonials, features not on public page)
- Add `sourceUrl` as fallback until native checkout is ready
- Add disclaimer and refund policy from `GLOBAL_CURRICULUM_DISCLAIMERS`

---

## 2. Extraction Types Reference

### Curriculum Page
```ts
export interface CurriculumExtract extends ExtractedPage {
  subtitle: string;           // e.g. "A Science Art Method™ ..."
  summary: string;            // 1–2 sentence description
  offers: string[];           // Key selling points
  features: string[];         // What's included
  formats: {                  // Pricing options
    format: string;           // "Paperback", "Digital PDF"
    price: string;            // "$155.00"
    verified: VerificationStatus;
    notes?: string;           // "Free U.S. shipping"
  }[];
  ctaLabels: string[];        // Exact button text
  disclaimers: string[];      // Legal disclaimers
  refundPolicy: string;       // Exact refund language
  contactEmail: string;       // Support email
  studioCount: number;        // Number of lessons/studios
  ageRange?: string;          // Target age
}
```

### Bookstore / Catalog Page
```ts
export interface BookstoreProduct {
  id: string;
  name: string;
  category: "book" | "curriculum" | "bundle";
  priceStatus: VerificationStatus;
  price?: string;
  productUrl?: string;
  notes: string;
}
```

---

## 3. Content Integrity Rules

### ✅ DO
- Extract exactly what is visible on the public page
- Use the exact wording for disclaimers, refund policies, and legal text
- Note the source URL and extraction date
- Mark unverified fields as `pending-backend`
- Keep original formatting for pricing (e.g. "$155.00")

### ❌ DO NOT
- Invent testimonials, numbers, or claims not on the public page
- Change pricing without backend verification
- Add "video lessons included" unless explicitly stated
- Round studio counts or lesson numbers
- Copy content from memory — always check the live page

---

## 4. Import Checklist per Page

Before marking a page as `native-page-built`:

- [ ] All text extracted from public page
- [ ] Pricing verified from public page (or marked pending)
- [ ] Features list matches public page
- [ ] Disclaimers and refund policy included verbatim
- [ ] No invented testimonials (use real ones or omit)
- [ ] No invented stats ("20+ countries", "2,000+ alumni", etc.)
- [ ] CTA buttons use verified labels or fallback URL
- [ ] `siteMapEntry` linked for fallback external URL
- [ ] `integrationStatus` updated in `existingSiteMap.ts`

---

## 5. Pages Extracted So Far

| Page | Source URL | Status | Extracted By |
|------|------------|--------|-------------|
| Painting Curriculum | `spramani.lpages.co/painting-curriculum-sales-page-/` | ✅ Complete | AI |
| Drawing Curriculum | `spramani.lpages.co/drawing-curriculum/` | ✅ Complete | AI |
| Color Theory | `spramani.lpages.co/color-theory-curriculum-sales-page/` | ✅ Complete | AI |
| Clay Modeling | `spramani.lpages.co/clay-modeling-curriculum/` | ✅ Complete | AI |
| Bookstore Catalog | `spramani.lpages.co/all-my-books/` | ✅ Partial (prices pending) | AI |
| Certification | `spramani.lpages.co/artteachingblueprint/` | ⏳ Not yet extracted | — |
| Training Pages | Various Keap pages | ⏳ Not yet extracted | — |

---

## 6. Syncing with `products.ts`

When a curriculum extract is updated, always sync `src/config/products.ts`:

```ts
// Example: Painting Curriculum
{
  id: "painting-curriculum",
  title: "Kids Painting",
  price: "$155",        // Match the PRIMARY format (paperback)
  priceVariants: [      // NEW: support dual pricing
    { format: "Paperback", price: "$155.00" },
    { format: "Digital PDF", price: "$97.00" },
  ],
  features: [
    "57 painting studio experiences",
    "Spiral-bound printed book OR digital PDF",
    "Organized scope and sequence",
    "Materials lists with photo examples",
  ],
  format: "Paperback or Digital PDF",
  // ...
}
```

---

## 7. Updating This Document

After each extraction session:
1. Update the "Pages Extracted So Far" table
2. Update `publicContentExtract.ts` with new data
3. Update `products.ts` with synced pricing
4. Update the page-level `page.tsx` with verified content
5. Commit with message: `content(extract): <page-name> verified content synced`
