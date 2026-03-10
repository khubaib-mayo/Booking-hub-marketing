# MARKETING WEBSITE — CONTENT & TAGLINE UPDATE
## Implementation Prompt for Replit Agent

---

## OBJECTIVE

Update the marketing website with the new brand tagline and refresh copy across all pages to position Tournetix as **"The operating system for tour operators"** — not just a booking tool, but the central platform that runs your entire tour business. Also apply several improvements identified from review.

---

## CRITICAL RULES

1. **Text and content changes only** — do NOT change layouts, components, colors, or animations
2. **PRESERVE all functionality** — links, forms, navigation, scroll behavior
3. **The new tagline is: "The operating system for tour operators."**
4. **Tone: Confident, clear, short sentences. Not salesy or hype-y.**

---

## CHANGES BY FILE

---

### 1. PAGE TITLE & META — `client/index.html`

```
FIND:    <title>Tournetix - The Booking Platform Built for Tourism</title>
REPLACE: <title>Tournetix — The Operating System for Tour Operators</title>
```

Also update the meta description and OG tags in this file (or in `client/src/app/layout.tsx` if using Next.js metadata):

```
Meta description:
FIND:    whatever the current description is
REPLACE: Tournetix is the all-in-one platform for tour operators. Manage bookings, commissions, invoices, analytics, and teams — from one dashboard.

OG title:
REPLACE: Tournetix — The Operating System for Tour Operators

OG description:
REPLACE: Manage bookings, commissions, invoices, analytics, and teams — from one dashboard. Built for tour operators who want to spend less time on admin.
```

---

### 2. HERO SECTION — `client/src/components/sections/Hero.tsx`

Update the hero to lead with the new tagline:

```
CURRENT HEADLINE (approximate):
  "The booking platform built for tourism"

NEW HEADLINE:
  "The operating system for tour operators"

  — The word "tour operators" should be in amber/brand color with the wavy underline (same treatment as before).
```

```
CURRENT SUBTITLE (approximate):
  "Manage bookings, track commissions, generate invoices, and grow your tour business — all in one place."

NEW SUBTITLE:
  "Bookings, commissions, invoices, analytics, and team management — all from one dashboard. So you can focus on your guests, not your admin."
```

```
CURRENT BADGE:
  "✨ Now with AI-powered insights"

NEW BADGE:
  "✨ Trusted by operators in 20+ countries"
```

---

### 3. LOGO CLOUD — `client/src/components/sections/LogoCloud.tsx`

```
CURRENT TEXT:
  "Trusted by tour operators in 20+ countries"

NEW TEXT:
  "Powering tour operations in 20+ countries"
```

---

### 4. PROBLEM STATEMENT — `client/src/components/sections/ProblemStatement.tsx`

```
CURRENT TITLE:
  "Running a tour business shouldn't mean drowning in admin"

NEW TITLE:
  "You didn't start a tour company to do paperwork"

CURRENT DESCRIPTION:
  "Tour operators spend 40% of their time on operations that should be automated. Sound familiar?"

NEW DESCRIPTION:
  "Spreadsheets for bookings. Calculators for commissions. Word docs for invoices. You're running 5 tools to do one job."
```

---

### 5. FEATURE SHOWCASE — `client/src/components/sections/FeatureShowcase.tsx`

```
CURRENT SECTION TITLE:
  "Everything you need, nothing you don't"

NEW SECTION TITLE:
  "One platform. Every workflow."

CURRENT SECTION DESCRIPTION:
  "Tournetix replaces your spreadsheets, calculators, invoice templates, and email chains with one intelligent platform."

NEW SECTION DESCRIPTION:
  "Tournetix replaces the 5 tools you're juggling with one platform that handles bookings, commissions, invoices, analytics, and team management."
```

---

### 6. HOW IT WORKS — `client/src/components/sections/HowItWorks.tsx`

```
CURRENT TITLE:
  "From signup to insights in three steps"

NEW TITLE:
  "Live in minutes, not weeks"

CURRENT DESCRIPTION:
  "Tournetix gets you up and running fast — not in weeks, in minutes."

NEW DESCRIPTION:
  "Most operators are fully set up before their first coffee gets cold."
```

---

### 7. STATS BAR — `client/src/components/sections/Stats.tsx`

Update stat labels to be more compelling:

```
CURRENT:                          NEW:
"10,000+" Bookings managed   →    "10,000+" Bookings processed
"500+" Tour operators        →    "500+" Tour operators
"20+" Countries              →    "20+" Countries served  
"99.9%" Uptime               →    "0%" Per-booking fees
```

The last stat change is strategic — "0% per-booking fees" is a competitive differentiator that hits hard in a stats bar.

---

### 8. TESTIMONIALS — `client/src/components/sections/Testimonials.tsx`

No text changes needed — testimonials already say "Tournetix" after the rebrand. But verify all three testimonials read naturally with the new name.

---

### 9. PRICING PREVIEW — `client/src/components/sections/PricingPreview.tsx`

```
CURRENT TITLE:
  "Simple pricing, no per-booking fees"

NEW TITLE:
  "Flat pricing. Your revenue stays yours."

CURRENT DESCRIPTION:
  "Unlike competitors who take 3-6% of every booking, Tournetix is a flat monthly fee. Your revenue stays yours."

NEW DESCRIPTION:
  "Other platforms take 3–6% of every booking. Tournetix charges a flat monthly fee — whether you have 10 bookings or 10,000."
```

---

### 10. FAQ — `client/src/components/sections/FAQ.tsx`

No structural changes. Just verify the first FAQ answer mentions the correct trial length and all answers read naturally with "Tournetix".

---

### 11. FINAL CTA — `client/src/components/marketing/shared/CTABanner.tsx`

```
CURRENT DEFAULT TITLE:
  "Ready to simplify your tour business?"

NEW DEFAULT TITLE:
  "Ready to run your tour business from one dashboard?"

CURRENT DEFAULT DESCRIPTION:
  "Join hundreds of tour operators who switched from spreadsheets to Tournetix. Start your free 14-day trial — no credit card required."

NEW DEFAULT DESCRIPTION:
  "Join 500+ tour operators who ditched spreadsheets for Tournetix. Start free — no credit card, no setup fees, no per-booking charges."
```

---

### 12. FEATURES PAGE HERO — `client/src/components/features/FeaturesHero.tsx`

```
CURRENT TITLE:
  "Everything you need to run your tour business"

NEW TITLE:
  "The complete toolkit for tour operators"

CURRENT SUBTITLE:
  "One platform replaces your spreadsheets, calculators, invoice templates, and email chains. Here's what's inside."

NEW SUBTITLE:
  "Every feature built for how tour operators actually work — from first booking to end-of-month reports."
```

---

### 13. FEATURE GRID — `client/src/components/features/FeatureGrid.tsx`

```
CURRENT TITLE:
  "A complete toolkit, not just a booking form"

NEW TITLE:
  "Eight systems. One login."

CURRENT DESCRIPTION:
  "Every feature is designed to save you time and give you clarity on your business."

NEW DESCRIPTION:
  "Booking management, commission tracking, invoicing, analytics, email automation, form builder, team roles, and AI insights — all built in."
```

---

### 14. ABOUT PAGE HERO — `client/src/components/about/AboutHero.tsx`

```
CURRENT TITLE:
  "We're building the tools we wished existed"

KEEP THIS — it's strong. No change needed.

CURRENT SUBTITLE:
  "Tournetix started with a simple frustration: why is running a tour business still so manual? We set out to change that."

NEW SUBTITLE:
  "Tournetix started with a frustration every tour operator knows: too many tools, too much admin, too little time for guests."
```

---

### 15. ABOUT STORY — `client/src/components/about/OurStory.tsx`

Find and update the attribution at the bottom:

```
CURRENT:
  "The Tournetix Team"
  "Founded 2025 · Building from Portugal"

NEW:
  "The Tournetix Team"
  "Founded 2025 · The operating system for tour operators"
```

---

### 16. CONTACT HERO — `client/src/components/contact/ContactHero.tsx`

```
CURRENT TITLE:
  "Let's talk about your tour business"

NEW TITLE:
  "Let's get your operation running smoother"

CURRENT SUBTITLE:
  "Whether you have a question, want a demo, or just want to say hello — we'd love to hear from you. We typically respond within a few hours."

NEW SUBTITLE:
  "Questions, demo requests, or just curious — we'd love to hear from you. Most replies within 2 hours."
```

---

### 17. FOOTER — `client/src/components/layout/Footer.tsx` (or wherever footer is)

Find the footer description/tagline:

```
CURRENT (approximate):
  "The all-in-one booking platform built for tourism businesses. Manage bookings, track commissions, and grow your business."

NEW:
  "The operating system for tour operators. Bookings, commissions, invoices, analytics, and team management — from one dashboard."
```

---

## VERIFICATION CHECKLIST

```
HERO:
□ Headline reads "The operating system for tour operators"
□ "tour operators" is in amber with underline decoration
□ Subtitle mentions "one dashboard" and "focus on guests"
□ Badge says "Trusted by operators in 20+ countries"

HOMEPAGE SECTIONS:
□ Logo cloud: "Powering tour operations in 20+ countries"
□ Problem: "You didn't start a tour company to do paperwork"
□ Features: "One platform. Every workflow."
□ How it works: "Live in minutes, not weeks"
□ Stats: Last stat shows "0% Per-booking fees"
□ Pricing: "Flat pricing. Your revenue stays yours."
□ CTA: "Ready to run your tour business from one dashboard?"

FEATURES PAGE:
□ Hero: "The complete toolkit for tour operators"
□ Grid: "Eight systems. One login."

ABOUT PAGE:
□ Subtitle updated
□ Story attribution: "The operating system for tour operators"

CONTACT PAGE:
□ Title: "Let's get your operation running smoother"

META/SEO:
□ Browser tab: "Tournetix — The Operating System for Tour Operators"
□ Meta description updated
□ OG tags updated

FOOTER:
□ Tagline updated to "The operating system for tour operators"

GENERAL:
□ All pages load without errors
□ No broken text or missing content
□ All links still work
□ Mobile responsive still works
□ No console errors
```

---

## FILES SUMMARY

| # | File | Changes |
|---|---|---|
| 1 | `client/index.html` | Title, meta, OG tags |
| 2 | `client/src/components/sections/Hero.tsx` | Headline, subtitle, badge |
| 3 | `client/src/components/sections/LogoCloud.tsx` | Text |
| 4 | `client/src/components/sections/ProblemStatement.tsx` | Title, description |
| 5 | `client/src/components/sections/FeatureShowcase.tsx` | Title, description |
| 6 | `client/src/components/sections/HowItWorks.tsx` | Title, description |
| 7 | `client/src/components/sections/Stats.tsx` | Last stat label + value |
| 8 | `client/src/components/sections/PricingPreview.tsx` | Title, description |
| 9 | `client/src/components/marketing/shared/CTABanner.tsx` | Title, description |
| 10 | `client/src/components/features/FeaturesHero.tsx` | Title, subtitle |
| 11 | `client/src/components/features/FeatureGrid.tsx` | Title, description |
| 12 | `client/src/components/about/AboutHero.tsx` | Subtitle |
| 13 | `client/src/components/about/OurStory.tsx` | Attribution |
| 14 | `client/src/components/contact/ContactHero.tsx` | Title, subtitle |
| 15 | `client/src/components/layout/Footer.tsx` | Tagline |

**Total: ~30 text changes across 15 files. Content only — no code changes.**
