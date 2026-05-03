# Launch Checklist — Montessori Art Website Redesign

## Pre-Launch Testing

### Forms
- [ ] Newsletter signup form submits successfully
- [ ] Free resource forms submit successfully
- [ ] Contact form submits successfully
- [ ] Form validation works (required fields, email format)
- [ ] Form success states display correctly
- [ ] Form error states display correctly
- [ ] Keap integration receives data (after credentials added)
- [ ] All form UTM parameters preserved

### Checkout
- [ ] All buy buttons link to correct checkout URLs
- [ ] Checkout flow completes end-to-end
- [ ] Product prices are accurate
- [ ] Mobile checkout works smoothly
- [ ] Fallback URLs work if primary checkout fails

### Redirects
- [ ] All old Leadpages URLs 301 redirect to new pages
- [ ] All old Keap page URLs 301 redirect to new pages
- [ ] Domain redirects work (ecokidsart.com, spramani.com, etc.)
- [ ] Query parameters (UTMs) pass through redirects
- [ ] No redirect chains longer than 2 hops

### Responsive
- [ ] Mobile: iPhone SE, iPhone 14, iPhone 14 Pro Max
- [ ] Tablet: iPad Mini, iPad Air, iPad Pro
- [ ] Desktop: 1280px, 1440px, 1920px
- [ ] No horizontal scroll on any device
- [ ] Touch targets minimum 44px
- [ ] Font sizes readable on all devices

### Page Speed
- [ ] Homepage Lighthouse performance score > 90
- [ ] Curriculum pages Lighthouse performance score > 85
- [ ] Images optimized and lazy-loaded
- [ ] Fonts preloaded or use `font-display: swap`
- [ ] No render-blocking resources
- [ ] Core Web Vitals pass (LCP < 2.5s, INP < 200ms, CLS < 0.1)

### SEO
- [ ] All pages have unique title tags
- [ ] All pages have meta descriptions
- [ ] Open Graph tags present on all pages
- [ ] Canonical URLs set correctly
- [ ] Sitemap generated and submitted
- [ ] Robots.txt configured
- [ ] Structured data where appropriate (products, courses)
- [ ] 404 page custom and helpful

### Analytics
- [ ] GA4 page_view firing on all routes
- [ ] Meta Pixel PageView firing
- [ ] Custom events firing:
  - [ ] newsletter_submit
  - [ ] lead_magnet_submit
  - [ ] buy_button_click
  - [ ] checkout_started
  - [ ] certification_interest
  - [ ] curriculum_view
  - [ ] training_view
- [ ] UTM parameters captured
- [ ] Cross-domain tracking configured if needed

### Accessibility
- [ ] WCAG 2.1 AA audit passed
- [ ] Color contrast 4.5:1 minimum on body text
- [ ] Focus indicators visible
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader labels on icons and buttons
- [ ] Alt text on all images
- [ ] `prefers-reduced-motion` respected
- [ ] Form errors announced to screen readers

### Old Domains
- [ ] DNS records point correctly
- [ ] SSL certificates active
- [ ] Old domains redirect to new site
- [ ] No broken external links from old properties

### Backups
- [ ] WordPress database backed up
- [ ] WordPress media library backed up
- [ ] Keap data export completed
- [ ] Old Leadpages exported or documented
- [ ] Store product data exported
- [ ] New site repo pushed to GitHub

## Post-Launch Monitoring

- [ ] Analytics dashboard checked daily for first week
- [ ] Form submissions verified in Keap
- [ ] Checkout completions verified in store
- [ ] 404 errors monitored and fixed
- [ ] Page speed monitored
- [ ] Search Console errors checked
- [ ] Customer support ready for questions

## Sign-Off

| Role | Name | Sign-Off Date |
|---|---|---|
| Design | | |
| Development | | |
| Content | | |
| SEO | | |
| Client (Spramani) | | |
