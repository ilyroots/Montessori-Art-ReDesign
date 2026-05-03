# Content Migration Plan — Montessori Art Website Redesign

## Philosophy

This is a **content-preserving redesign**, not a brand-new website with invented content. The current live websites are the source of truth. Every piece of content, every CTA, every sales path must be accounted for.

**Golden rule:** Do not remove current sales paths before native replacements are live and tested.

## Migration Strategy

### Phase 1: Preserve & Map (Current)
- [x] Document all known existing URLs
- [x] Map each URL to a new native page, merge, or retirement decision
- [x] Build integration-ready placeholder system
- [x] Create reusable page templates
- [x] Build 3 prototype pages with fallback URLs

### Phase 2: Build Native Replacements
- [ ] Build all curriculum pages using CurriculumSalesPageTemplate
- [ ] Build all training pages using TrainingSalesPageTemplate
- [ ] Build certification detail page using CertificationPageTemplate
- [ ] Build all free resource pages using LeadMagnetPageTemplate
- [ ] Build bookstore using ProductCollectionTemplate
- [ ] Build art-supplies using ProductCollectionTemplate
- [ ] Migrate blog posts (preserve slugs, categories, SEO)

### Phase 3: Connect Integrations
- [ ] Obtain Keap login credentials
- [ ] Map Keap forms to native form components
- [ ] Map Keap checkout URLs to BuyButton config
- [ ] Connect analytics (GA4, Meta Pixel)
- [ ] Test all forms, checkouts, tracking

### Phase 4: Redirect & Launch
- [ ] Implement 301 redirects from all old URLs
- [ ] Verify UTM parameters pass through redirects
- [ ] Test redirect chains
- [ ] Launch on montessori-art.com
- [ ] Monitor analytics and fix issues

## Content Preservation Rules

### WordPress Content
- Preserve all blog post slugs for SEO value
- Preserve category structure
- Preserve meta descriptions where quality
- Migrate featured images or use new art-directed placeholders

### Leadpages Content
- Recreate sales copy on native pages (do not lose conversion language)
- Preserve offer structure (price, bonuses, guarantees)
- Maintain CTA placement and frequency
- Document all Leadpages URLs before disabling

### Keap Content
- Preserve form fields and validation rules
- Preserve thank-you page behavior
- Preserve email automation triggers
- Map tags and campaigns to new form submissions

### Volusion/Store Content
- Preserve product names, descriptions, SKUs
- Preserve product images
- Maintain pricing accuracy
- Keep checkout URLs functional during transition

## Fallback URL Strategy

Until native integrations are connected, every CTA uses a **fallback URL** that preserves the current sales path:

| Page Type | Fallback Strategy |
|---|---|
| Curriculum | Link to legacy Leadpages URL |
| Training | Link to legacy Keap page URL |
| Certification | Link to legacy Leadpages URL |
| Free Resources | LeadMagnetForm submits to placeholder (simulated success) |
| Books/Supplies | Link to Volusion store URL |

This means:
- The site looks complete and professional
- No broken CTAs or checkout flows
- Sales continue through existing paths
- Integration can be swapped in later without redesigning pages

## Risk Mitigation

| Risk | Mitigation |
|---|---|
| Lost SEO from URL changes | 301 redirects, preserve slugs, sitemap submission |
| Broken checkout during transition | Fallback URLs keep existing paths alive |
| Lost form submissions | Placeholder forms show success state, log intent |
| Missing content | Every old page mapped; nothing deleted before replacement |
| Design feels generic | Strict design system, art-directed components, editorial typography |

## Checklist Before Disabling Any Old Page

- [ ] Native replacement page is built
- [ ] Native replacement page is tested on mobile
- [ ] 301 redirect is implemented and tested
- [ ] CTA on native page works (even if fallback)
- [ ] Analytics event tracking is in place
- [ ] UTM parameters pass through redirect
