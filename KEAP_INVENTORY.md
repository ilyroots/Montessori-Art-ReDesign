# Keap Inventory — Montessori Art Website Redesign

> **Status:** Placeholder document. This will be populated after Keap login access is obtained.

## Inventory Columns

| Column | Description |
|---|---|
| Keap Asset Name | Human-readable name of the asset |
| Asset Type | Form / Checkout / Campaign / Tag / Email Sequence / Thank-You Page |
| Current URL or Embed Code | Where it lives now |
| New Website Page | The native page that replaces or hosts it |
| Action | Embed / Link / Replace / Retire |
| Required Tags | Tags to apply on submit |
| Post-Submit Action | Redirect, thank-you message, email sequence trigger |
| Owner Notes | Context, decisions, blockers |

## Asset List (To Be Filled)

| Keap Asset Name | Asset Type | Current URL or Embed Code | New Website Page | Action | Required Tags | Post-Submit Action | Owner Notes |
|---|---|---|---|---|---|---|---|
| Newsletter Signup | Form | TBD | `/newsletter` | Embed | TBD | Thank-you + welcome sequence | — |
| Free Resource — Color Mixing | Form | TBD | `/free-resources/color-mixing-video` | Embed | TBD | Download link / email delivery | — |
| Free Resource — Phases of Development | Form | TBD | `/free-resources/phases-of-art-development` | Embed | TBD | Download link / email delivery | — |
| Free Resource — Storybook Art | Form | TBD | `/free-resources/storybook-art-video` | Embed | TBD | Download link / email delivery | — |
| Free Resource — Painting Checklist | Form | TBD | `/free-resources/painting-checklist` | Embed | TBD | Download link / email delivery | — |
| Painting Curriculum Checkout | Checkout | TBD | `/curriculum/painting` | Link | TBD | Purchase confirmation | — |
| Drawing Curriculum Checkout | Checkout | TBD | `/curriculum/drawing` | Link | TBD | Purchase confirmation | — |
| Color Theory Checkout | Checkout | TBD | `/curriculum/color-theory` | Link | TBD | Purchase confirmation | — |
| Clay Modeling Checkout | Checkout | TBD | `/curriculum/clay-modeling` | Link | TBD | Purchase confirmation | — |
| Certification Interest | Form | TBD | `/certification` | Embed | TBD | Follow-up sequence | — |
| Art Teaching Blueprint Checkout | Checkout | TBD | `/certification/art-teaching-blueprint` | Link | TBD | Purchase confirmation | — |
| Homeschooling Art Training Checkout | Checkout | TBD | `/training/homeschooling-art` | Link | TBD | Purchase confirmation | — |
| Infant Toddler Training Checkout | Checkout | TBD | `/training/infant-toddler-art` | Link | TBD | Purchase confirmation | — |
| Art Shelf Training Checkout | Checkout | TBD | `/training/art-shelf` | Link | TBD | Purchase confirmation | — |
| Process-Based Art Training Checkout | Checkout | TBD | `/training/process-based-art` | Link | TBD | Purchase confirmation | — |
| Positive Art Talk Training Checkout | Checkout | TBD | `/training/positive-art-talk` | Link | TBD | Purchase confirmation | — |
| Nature Art Training Checkout | Checkout | TBD | `/training/nature-art` | Link | TBD | Purchase confirmation | — |

## Next Steps

1. Obtain Keap login credentials.
2. Export full list of forms, campaigns, tags, and email sequences.
3. Map each asset to the new website page.
4. Decide embed vs. link vs. replace vs. retire for each asset.
5. Configure `src/config/integrations.ts` with real IDs and URLs.
