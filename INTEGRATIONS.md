# Integrations Plan — Montessori Art Website Redesign

## Overview

This website is built **integration-ready**. All external systems (Keap, store, analytics) are abstracted into reusable components and central config files. Real credentials and IDs will be added after login access is available.

**Critical rule:** Never commit API keys, secrets, or real credentials to the repository. Use environment variables only.

## Keap Placeholder Plan

Keap handles CRM, forms, email campaigns, and some checkouts.

### Placeholder Config (`src/config/integrations.ts`)

| Config Key | Purpose | Status |
|---|---|---|
| `KEAP_NEWSLETTER_FORM_ID` | Newsletter signup form | placeholder |
| `KEAP_FREE_RESOURCE_FORM_IDS` | Map of free resource → form ID | placeholder |
| `KEAP_CHECKOUT_URLS` | Product checkout URLs | placeholder |
| `KEAP_TAGS` | Tag IDs for segmentation | placeholder |
| `KEAP_CAMPAIGNS` | Campaign IDs | placeholder |

### What We Need After Login Access

- Keap API key (stored in `NEXT_PUBLIC_KEAP_API_KEY` or server-side secret)
- Form embed codes or form IDs for each lead magnet
- Checkout page URLs for each product
- Tag names/IDs for segmentation
- Campaign IDs for automation sequences
- Thank-you page URLs

### Current Behavior

- Forms display polished placeholder UI.
- On submit, forms show success state and log event to console (dev) or analytics helper.
- No real Keap API calls are made until credentials are configured.

## Store / Checkout Placeholder Plan

### Current Store

- Volusion/storefront: `https://atosb-raxtf.volusion.store/` or `store.ecokidsart.com`

### Future Possibilities

- Shopify
- WooCommerce
- Native checkout

### Placeholder Config (`src/config/integrations.ts`)

| Config Key | Purpose | Status |
|---|---|---|
| `STORE_URL` | Current store base URL | placeholder |
| `PRODUCT_PURCHASE_URLS` | Map of SKU → purchase URL | placeholder |
| `CHECKOUT_URL` | Default checkout URL | placeholder |
| `FUTURE_CHECKOUT_URL` | Future platform checkout URL | placeholder |

### Current Behavior

- Buy buttons link to placeholder URLs or external store.
- Analytics events track clicks for later funnel analysis.
- Product cards display price and CTA with fallback behavior.

## Analytics Placeholder Plan

### Supported Platforms

| Platform | Env Variable | Event Support |
|---|---|---|
| Google Analytics 4 | `NEXT_PUBLIC_GA4_ID` | page_view, custom events |
| Meta Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | PageView, custom events |
| Keap Tracking | `NEXT_PUBLIC_KEAP_TRACKING_ID` | If available |

### Analytics Events (`src/lib/analytics.ts`)

| Event Name | Trigger | Payload |
|---|---|---|
| `newsletter_submit` | Newsletter form submit | { email, source } |
| `lead_magnet_submit` | Free resource form submit | { resource, email } |
| `buy_button_click` | Product CTA click | { product, price, location } |
| `checkout_started` | Checkout link click | { product, url } |
| `certification_interest` | Certification CTA click | { page } |
| `bookstore_click` | Bookstore link click | { book } |
| `art_supply_click` | Art supply link click | { product } |
| `contact_submit` | Contact form submit | { subject } |
| `free_resource_view` | Free resource page view | { resource } |
| `curriculum_view` | Curriculum page view | { curriculum } |
| `training_view` | Training page view | { training } |

### Current Behavior

- **Development:** Events are `console.log`ged with full payload.
- **Production:** Events fire only if tracking IDs are configured. Otherwise, they are no-ops.

## Leadpages Migration Plan

Old Leadpages URLs should be redirected to new native pages.

See `REDIRECTS.md` for full mapping.

## What Information Is Needed After Login Access

### Keap
- [ ] API key or OAuth credentials
- [ ] Form IDs for each lead magnet
- [ ] Checkout URLs for each product
- [ ] Tag list and IDs
- [ ] Campaign IDs
- [ ] Thank-you page paths
- [ ] Email sequence details

### Store / Volusion
- [ ] Current product catalog
- [ ] SKU list
- [ ] Purchase URLs
- [ ] Future platform decision (Shopify / WooCommerce / native)

### WordPress / Bluehost
- [ ] Admin access
- [ ] Blog post export
- [ ] Media library export
- [ ] Plugin list
- [ ] Existing redirect rules

### Analytics
- [ ] GA4 property ID
- [ ] Meta Pixel ID
- [ ] Existing event configuration
- [ ] Custom dimension definitions

### Domains
- [ ] DNS access for all domains
- [ ] Current redirect rules
- [ ] SSL certificate status
