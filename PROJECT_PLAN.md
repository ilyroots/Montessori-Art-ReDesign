# Project Plan — Montessori Art Website Redesign

## Project Goal

Create a premium, modern, creative, art-directed, high-converting custom website that consolidates a fragmented ecosystem currently spread across WordPress, Bluehost, Leadpages, Keap, Volusion/storefront pages, and multiple domains.

Use `https://montessori-art.com/` as the master-domain architecture concept.

## Phases

### Phase 1: Foundation & Prototype (Current)
- [x] Initialize Next.js + TypeScript + Tailwind project
- [x] Create documentation files
- [ ] Establish design tokens and global styles
- [ ] Build reusable component library
- [ ] Build integration-ready config and utilities
- [ ] Prototype 3 core pages:
  - Homepage
  - `/curriculum/painting`
  - `/certification`

### Phase 2: Page Expansion
- [ ] Build all curriculum pages (`/curriculum/*`)
- [ ] Build all training pages (`/training/*`)
- [ ] Build certification sub-page (`/certification/art-teaching-blueprint`)
- [ ] Build bookstore (`/bookstore`)
- [ ] Build art supplies (`/art-supplies`)
- [ ] Build free resources (`/free-resources/*`)
- [ ] Build newsletter (`/newsletter`)
- [ ] Build about (`/about`)
- [ ] Build contact (`/contact`)

### Phase 3: Blog & Content
- [ ] Build blog index (`/blog`)
- [ ] Build blog article template (`/blog/[slug]`)
- [ ] Migrate or recreate key blog posts
- [ ] Set up MDX or headless CMS

### Phase 4: Integration
- [ ] Obtain login access to Keap, Leadpages, Volusion, Bluehost, WordPress
- [ ] Map and configure all Keap forms, campaigns, tags
- [ ] Configure store/checkout URLs
- [ ] Set up analytics (GA4, Meta Pixel)
- [ ] Implement redirect rules from old URLs
- [ ] Test all forms, checkouts, and tracking

### Phase 5: Launch
- [ ] Final QA across devices
- [ ] Page speed optimization
- [ ] SEO audit
- [ ] Accessibility audit
- [ ] Launch on `montessori-art.com`
- [ ] Monitor analytics and fix issues

## Current Systems

| Platform | Purpose | Domain / URL |
|---|---|---|
| WordPress | Main CMS / blog | montessori-art.com |
| Bluehost | Hosting | — |
| Leadpages | Landing pages | spramani.lpages.co |
| Keap | CRM, forms, checkout | keap.page, keap.app |
| Volusion | Store / ecommerce | atosb-raxtf.volusion.store, store.ecokidsart.com |
| Additional domains | Redirects / legacy | ecokidsart.com, spramani.com, artteachingblueprint.com, nature-of-art-kids.com |

## Master Domain Strategy

All traffic and SEO authority should consolidate to `https://montessori-art.com/`.

- Other domains become redirects or microsites only where necessary.
- All Leadpages landers are rebuilt as native pages.
- All Keap pages are rebuilt as native pages with embedded Keap forms.
- Store functionality may remain on external platform initially, linked via clean URLs.

## Risks

| Risk | Mitigation |
|---|---|
| No login access to existing systems yet | Build integration-ready placeholders; map all integration points in config |
| Large amount of legacy content | Prioritize high-traffic pages; use redirect mapping |
| Multiple disconnected domains | Plan 301 redirect strategy before launch |
| Store platform uncertainty | Abstract commerce layer; support multiple backends |
| Design must feel premium, not generic | Strict design system; art-directed photography; warm textures |

## Next Steps

1. Complete 3 prototype pages with full design system.
2. Present prototypes for feedback.
3. Obtain login credentials to existing systems.
4. Fill in integration config with real IDs and URLs.
5. Expand to remaining pages.
