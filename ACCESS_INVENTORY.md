# Backend Access Inventory — Montessori Art Website Redesign

> **Status:** Living document. Updated after every access change.  
> **Last updated:** 2026-05-02  
> **Rule:** No production integrations without verification that credentials are valid.

---

## 1. Integration Matrix

| System | Purpose | Current Host | Access Status | Credentials Location | Notes |
|--------|---------|--------------|---------------|----------------------|-------|
| **Keap** | CRM, forms, email automation, some checkout | api.infusionsoft.com | 🔴 Not obtained | `.env.local` (server-only `KEAP_API_KEY`) | Account owner: Spramani. Need login + API key + form IDs |
| **Volusion** | Ecommerce store | atosb-raxtf.volusion.store | 🔴 Not obtained | Not yet needed | Storefront still live. Need admin login to map SKUs/URLs |
| **WordPress** | Blog, main site CMS | montessori-art.com | 🔴 Not obtained | Hosting likely on Bluehost | Need admin login. Blog posts need migration audit |
| **Leadpages** | Landing pages | spramani.lpages.co | 🟡 Public access only | N/A (public pages scraped) | No backend login needed for content extraction. Pages are public. Need login only to disable after redirect |
| **Bluehost** | Domain + possible WordPress hosting | montessori-art.com | 🔴 Not obtained | N/A | Need to manage DNS when ready for launch. NOT changing now |
| **Vercel** | Hosting for redesign | (new project) | 🟢 Obtained | Team/个人账户 | Project created. Env vars to be configured after credential inventory |
| **GitHub** | Source control | ilyroots/Montessori-Art-ReDesign | 🟢 Obtained | Personal account | Repo created, commits pushed |

---

## 2. Keap CRM — Detailed Inventory

### What Keap Currently Handles
- Newsletter signup forms
- Contact/lead capture forms
- Free resource delivery (lead magnets)
- Some product checkout pages (keap.page)
- Email automation sequences (welcome, follow-up)
- Tag-based segmentation

### What We Need from Keap
1. **API Key** (`KEAP_API_KEY`) — server-only env var
2. **Form IDs** for:
   - Newsletter signup
   - Contact form
   - Free resource opt-ins (color mixing, phases of development, storybook art, painting checklist)
3. **Tag IDs** for:
   - Newsletter subscriber
   - Lead magnet downloader
   - Curriculum interest
   - Certification interest
4. **Campaign IDs** for:
   - Welcome sequence
   - Lead magnet delivery
5. **Checkout URLs** for each product (if checkout runs through Keap)
6. **App ID / Client ID** if using OAuth instead of API key

### Keap Pages Currently Live (Known)
- `https://keap.app/contact-us/5358701398091591` — Contact/Newsletter
- `https://keap.page/hj952/painting-work-art-album.html` — Painting Work
- `https://keap.page/hj952/homeschooling-art-where-to-start.html` — Training
- `https://keap.page/hj952/infant-toddler-webinar.html` — Training
- `https://keap.page/hj952/new-landing-page3.html` — Art Shelf
- `https://keap.page/hj952/process-based-video-training.html` — Training
- `https://keap.page/hj952/positive-artful-talk-vide-training.html` — Training
- `https://keap.page/hj952/theming-art-the-natural-world.html` — Training

### Verification Steps (DO BEFORE GOING LIVE)
- [ ] Log into Keap dashboard
- [ ] Generate/retrieve API key
- [ ] Test API key with `/contacts` endpoint
- [ ] Map form IDs for each opt-in
- [ ] Map tag IDs for each segment
- [ ] Map campaign IDs for automation
- [ ] Verify checkout URLs for each product
- [ ] Test end-to-end form submission
- [ ] Verify email delivery for welcome sequence

---

## 3. Volusion Store — Detailed Inventory

### What Volusion Currently Handles
- Product catalog and inventory
- Shopping cart and checkout
- Order management
- Some product pages

### Current Store URL
- `https://atosb-raxtf.volusion.store/`
- Also referenced: `store.ecokidsart.com`

### What We Need from Volusion
1. **Admin login** to view product catalog
2. **Product SKUs** and their mapping to curriculum names
3. **Purchase URLs** for direct product links
4. **Checkout flow URL** pattern
5. **Shipping configuration** (free U.S. shipping confirmed for printed books)

### Verification Steps
- [ ] Log into Volusion admin
- [ ] Export product catalog with SKUs and prices
- [ ] Verify prices match public Leadpages data
- [ ] Test checkout flow
- [ ] Decide: keep Volusion, migrate to Shopify, or build native checkout

---

## 4. WordPress — Detailed Inventory

### What WordPress Currently Handles
- Main website (`montessori-art.com`)
- Blog posts and categories
- About page, legal pages
- SEO and permalinks

### What We Need from WordPress
1. **Admin login** to export content
2. **Blog export** (posts, categories, featured images, authors, slugs)
3. **Page content** export for About, Terms, Accessibility
4. **Media library** export or URL mapping
5. **Plugin list** (SEO, forms, analytics)
6. **Theme and custom code** audit

### Verification Steps
- [ ] Log into WordPress admin
- [ ] Export all posts via Tools → Export
- [ ] Document all active plugins
- [ ] Map all blog post slugs for redirect preservation
- [ ] Identify custom post types or taxonomies
- [ ] Plan: keep WordPress as headless CMS, or migrate content to Next.js?

---

## 5. DNS & Domain — Detailed Inventory

### Current State
- Domain: `montessori-art.com`
- DNS managed likely via Bluehost or domain registrar
- No changes to be made until launch

### What We Need
1. **DNS provider login**
2. **Current DNS records** (A, CNAME, MX, TXT)
3. **Email hosting** configuration (MX records)
4. **SSL certificate** status

### Launch Steps (ONLY AT LAUNCH)
- [ ] Verify Vercel production domain setup
- [ ] Update A record to point to Vercel
- [ ] Verify email still works after DNS change
- [ ] Set up redirects from old WordPress URLs
- [ ] Verify SSL on new domain

---

## 6. Environment Variables Needed

### Server-Only (Never Exposed to Browser)
```
KEAP_API_KEY=               # Keap REST API key
KEAP_ENABLED=true|false     # Master switch for Keap integration
```

### Public (Safe for Browser)
```
NEXT_PUBLIC_GA4_ID=                          # Google Analytics 4
NEXT_PUBLIC_META_PIXEL_ID=                   # Meta/Facebook Pixel
NEXT_PUBLIC_KEAP_TRACKING_ID=                # Keap tracking script ID
NEXT_PUBLIC_KEAP_NEWSLETTER_FORM_ID=         # Keap form embed ID
NEXT_PUBLIC_KEAP_CONTACT_FORM_ID=            # Keap form embed ID
NEXT_PUBLIC_KEAP_COLOR_MIXING_FORM_ID=       # Keap form embed ID
NEXT_PUBLIC_KEAP_PHASES_FORM_ID=             # Keap form embed ID
NEXT_PUBLIC_KEAP_STORYBOOK_FORM_ID=          # Keap form embed ID
NEXT_PUBLIC_KEAP_CHECKLIST_FORM_ID=          # Keap form embed ID
NEXT_PUBLIC_CHECKOUT_PAINTING=               # Product checkout URL
NEXT_PUBLIC_CHECKOUT_DRAWING=                # Product checkout URL
NEXT_PUBLIC_CHECKOUT_COLOR_THEORY=           # Product checkout URL
NEXT_PUBLIC_CHECKOUT_CLAY=                   # Product checkout URL
NEXT_PUBLIC_CHECKOUT_CERTIFICATION=          # Product checkout URL
NEXT_PUBLIC_CHECKOUT_URL=                    # Default checkout URL
NEXT_PUBLIC_STORE_URL=                       # Current store URL
NEXT_PUBLIC_FUTURE_STORE_URL=                # Future store URL (if migrating)
NEXT_PUBLIC_PRODUCT_URL_PAINTING=            # Direct product URL
NEXT_PUBLIC_PRODUCT_URL_DRAWING=             # Direct product URL
NEXT_PUBLIC_PRODUCT_URL_COLOR_THEORY=        # Direct product URL
NEXT_PUBLIC_PRODUCT_URL_CLAY=                # Direct product URL
NEXT_PUBLIC_PRODUCT_URL_CERTIFICATION=       # Direct product URL
NEXT_PUBLIC_KEAP_TAG_NEWSLETTER=             # Tag ID
NEXT_PUBLIC_KEAP_TAG_LEAD_MAGNET=            # Tag ID
NEXT_PUBLIC_KEAP_TAG_CURRICULUM=             # Tag ID
NEXT_PUBLIC_KEAP_TAG_CERTIFICATION=          # Tag ID
NEXT_PUBLIC_KEAP_CAMPAIGN_WELCOME=           # Campaign ID
NEXT_PUBLIC_KEAP_CAMPAIGN_LEAD_MAGNET=       # Campaign ID
```

---

## 7. Security Checklist

- [x] `KEAP_API_KEY` is server-only (not `NEXT_PUBLIC_`)
- [x] API route at `/api/keap` proxies all Keap calls
- [x] Browser never sees API key
- [ ] `.env.local` added to `.gitignore` (verify)
- [ ] No secrets in commit history (scan before open-sourcing)
- [ ] Rate limiting on `/api/keap` (add before production)
- [ ] Input validation on all form submissions
- [ ] CORS configured correctly for API routes

---

## 8. Action Log

| Date | Action | Owner | Status |
|------|--------|-------|--------|
| 2026-05-02 | Repo created, foundation built, 3 commits pushed | AI | Done |
| 2026-05-02 | Public content extracted from 5 Leadpages sources | AI | Done |
| 2026-05-02 | Security fix: Keap key moved to server-only | AI | Done |
| 2026-05-02 | `ACCESS_INVENTORY.md` created | AI | Done |
| TBD | Obtain Keap login credentials | Spramani | Pending |
| TBD | Obtain Volusion admin login | Spramani | Pending |
| TBD | Obtain WordPress admin login | Spramani | Pending |
| TBD | Obtain Bluehost/DNS access | Spramani | Pending |
| TBD | Configure all env vars in Vercel | Dev | Pending |
| TBD | Test all integrations end-to-end | Dev | Pending |
