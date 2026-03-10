# REBRAND MARKETING WEBSITE: BookingHub → Tournetix
## Execution Prompt for Replit Agent

---

## OBJECTIVE

Execute the complete rebrand of the marketing website from BookingHub to **Tournetix**. 62 occurrences across 22 files. Text and URL replacement only — no layout, design, or functionality changes.

**New brand:**
- Name: **Tournetix**
- Tagline: **The operating system for tour operators**
- Marketing site: `tournetix.com`
- Dashboard app: `app.tournetix.com`
- Contact email: `hello@tournetix.com`

---

## RULES

1. **Text and URL replacement only** — do NOT change any styles, layouts, components, or functionality
2. **Replace ALL variations**: `BookingHub`, `Booking Hub`, `bookinghub`, `booking-hub`, `BOOKINGHUB`
3. **Replace ALL old URLs** with new Tournetix domains
4. **Replace ALL old email addresses** with `@tournetix.com`
5. **Do NOT edit** anything in `node_modules/`, `dist/`, `.next/`, or `attached_assets/`

---

## REPLACEMENT MAP

| Find | Replace With |
|---|---|
| `BookingHub` (brand name) | `Tournetix` |
| `Booking Hub` | `Tournetix` |
| `bookinghub` | `tournetix` |
| `booking-hub` | `tournetix` |
| `BOOKINGHUB` | `TOURNETIX` |
| `https://bookinghub.app` | `https://tournetix.com` |
| `https://app.bookinghub.app/login` | `https://app.tournetix.com/login` |
| `https://app.bookinghub.app/signup` | `https://app.tournetix.com/signup` |
| `app.bookinghub.com` | `app.tournetix.com` |
| `app.bookinghub.app` | `app.tournetix.com` |
| `hello@bookinghub.app` | `hello@tournetix.com` |
| `@bookinghub` (social handles) | `@tournetix` |

---

## FILE-BY-FILE CHANGES

### File 1: `client/index.html` (1 change)

```
Line 7 FIND:    <title>BookingHub - The Booking Platform Built for Tourism</title>
       REPLACE: <title>Tournetix - The Booking Platform Built for Tourism</title>
```

---

### File 2: `client/src/lib/constants.ts` (5 changes)

```
Line 2 FIND:    name: "BookingHub"
       REPLACE: name: "Tournetix"

Line 4 FIND:    url: "https://bookinghub.app"
       REPLACE: url: "https://tournetix.com"

Line 5 FIND:    loginUrl: "https://app.bookinghub.app/login"
       REPLACE: loginUrl: "https://app.tournetix.com/login"

Line 6 FIND:    signupUrl: "https://app.bookinghub.app/signup"
       REPLACE: signupUrl: "https://app.tournetix.com/signup"
```

---

### File 3: `client/src/pages/home.tsx` (1 change)

```
Line 26 FIND:    switched from spreadsheets to BookingHub
        REPLACE: switched from spreadsheets to Tournetix
```

---

### File 4: `client/src/pages/features.tsx` (12 changes)

```
Line 22  FIND:    BookingHub gives you a single source of truth
         REPLACE: Tournetix gives you a single source of truth

Line 38  FIND:    mockupUrl="app.bookinghub.com/bookings"
         REPLACE: mockupUrl="app.tournetix.com/bookings"

Line 40  FIND:    imageAlt="BookingHub Booking Management"
         REPLACE: imageAlt="Tournetix Booking Management"

Line 47  FIND:    BookingHub automates the entire process
         REPLACE: Tournetix automates the entire process

Line 63  FIND:    mockupUrl="app.bookinghub.com/commissions"
         REPLACE: mockupUrl="app.tournetix.com/commissions"

Line 65  FIND:    imageAlt="BookingHub Commission Tracking"
         REPLACE: imageAlt="Tournetix Commission Tracking"

Line 74  FIND:    BookingHub generates beautiful, professional PDF invoices
         REPLACE: Tournetix generates beautiful, professional PDF invoices

Line 85  FIND:    BookingHub calculates tax automatically
         REPLACE: Tournetix calculates tax automatically

Line 90  FIND:    mockupUrl="app.bookinghub.com/invoices"
         REPLACE: mockupUrl="app.tournetix.com/invoices"

Line 92  FIND:    imageAlt="BookingHub Invoice Generation"
         REPLACE: imageAlt="Tournetix Invoice Generation"

Line 115 FIND:    mockupUrl="app.bookinghub.com/analytics"
         REPLACE: mockupUrl="app.tournetix.com/analytics"

Line 117 FIND:    imageAlt="BookingHub Financial Analytics"
         REPLACE: imageAlt="Tournetix Financial Analytics"
```

---

### File 5: `client/src/pages/pricing.tsx` (1 change)

```
Line 26 FIND:    hundreds of tour operators chose BookingHub
        REPLACE: hundreds of tour operators chose Tournetix
```

---

### File 6: `client/src/pages/about.tsx` (1 change)

```
Line 26 FIND:    Take BookingHub for a spin
        REPLACE: Take Tournetix for a spin
```

---

### File 7: `client/src/components/sections/Hero.tsx` (1 change)

```
Line 96 FIND:    url="app.bookinghub.com/dashboard"
        REPLACE: url="app.tournetix.com/dashboard"
```

---

### File 8: `client/src/components/sections/FeatureShowcase.tsx` (5 changes)

```
Line 24 FIND:    mockupUrl: "app.bookinghub.com/bookings"
        REPLACE: mockupUrl: "app.tournetix.com/bookings"

Line 38 FIND:    mockupUrl: "app.bookinghub.com/commissions"
        REPLACE: mockupUrl: "app.tournetix.com/commissions"

Line 52 FIND:    mockupUrl: "app.bookinghub.com/invoices"
        REPLACE: mockupUrl: "app.tournetix.com/invoices"

Line 66 FIND:    mockupUrl: "app.bookinghub.com/analytics"
        REPLACE: mockupUrl: "app.tournetix.com/analytics"

Line 79 FIND:    BookingHub replaces your spreadsheets
        REPLACE: Tournetix replaces your spreadsheets
```

---

### File 9: `client/src/components/sections/Testimonials.tsx` (1 change)

```
Line 8 FIND:    BookingHub pays for itself 10x over
       REPLACE: Tournetix pays for itself 10x over
```

---

### File 10: `client/src/components/sections/HowItWorks.tsx` (1 change)

```
Line 35 FIND:    BookingHub gets you up and running fast
        REPLACE: Tournetix gets you up and running fast
```

---

### File 11: `client/src/components/sections/PricingPreview.tsx` (1 change)

```
Line 65 FIND:    BookingHub is a flat monthly fee
        REPLACE: Tournetix is a flat monthly fee
```

---

### File 12: `client/src/components/sections/FAQ.tsx` (4 changes)

```
Line 12 FIND:    how BookingHub fits your business
        REPLACE: how Tournetix fits your business

Line 16 FIND:    BookingHub is a flat monthly subscription
        REPLACE: Tournetix is a flat monthly subscription

Line 32 FIND:    BookingHub supports all major currencies
        REPLACE: Tournetix supports all major currencies

Line 54 FIND:    Everything you need to know about BookingHub
        REPLACE: Everything you need to know about Tournetix
```

---

### File 13: `client/src/components/pricing/PricingFAQ.tsx` (2 changes)

```
Line 20 FIND:    BookingHub is a flat monthly fee
        REPLACE: Tournetix is a flat monthly fee

Line 40 FIND:    We're confident you'll love BookingHub
        REPLACE: We're confident you'll love Tournetix
```

---

### File 14: `client/src/components/mockups/InvoiceMockup.tsx` (1 change)

```
Line 31 FIND:    <span>BookingHub</span>
        REPLACE: <span>Tournetix</span>
```

---

### File 15: `client/src/components/marketing/ui/MockupFrame.tsx` (1 change)

```
Line 12 FIND:    url = "app.bookinghub.com/dashboard"
        REPLACE: url = "app.tournetix.com/dashboard"
```

---

### File 16: `client/src/components/marketing/shared/CTABanner.tsx` (1 change)

```
Line 12 FIND:    switched from spreadsheets to BookingHub
        REPLACE: switched from spreadsheets to Tournetix
```

---

### File 17: `client/src/components/contact/ContactInfo.tsx` (5 changes)

```
Line 8  FIND:    detail: "hello@bookinghub.app"
        REPLACE: detail: "hello@tournetix.com"

Line 32 FIND:    label: "@bookinghub"
        REPLACE: label: "@tournetix"

Line 33 FIND:    label: "BookingHub"
        REPLACE: label: "Tournetix"

Line 34 FIND:    label: "@bookinghub"
        REPLACE: label: "@tournetix"
```

---

### File 18: `client/src/components/contact/DemoBooking.tsx` (4 changes)

```
Line 27 FIND:    how BookingHub
        REPLACE: how Tournetix

Line 41 FIND:    href="mailto:hello@bookinghub.app?subject=Demo%20Request"
        REPLACE: href="mailto:hello@tournetix.com?subject=Demo%20Request"

Line 48 FIND:    href="mailto:hello@bookinghub.app"
        REPLACE: href="mailto:hello@tournetix.com"

Line 49 FIND:    hello@bookinghub.app
        REPLACE: hello@tournetix.com
```

---

### File 19: `client/src/components/features/IntegrationPreview.tsx` (1 change)

```
Line 13 FIND:    Connect BookingHub to 5,000+ other apps
        REPLACE: Connect Tournetix to 5,000+ other apps
```

---

### File 20: `client/src/components/about/AboutHero.tsx` (1 change)

```
Line 25 FIND:    BookingHub started with a simple frustration
        REPLACE: Tournetix started with a simple frustration
```

---

### File 21: `client/src/components/about/OurStory.tsx` (3 changes)

```
Line 30 FIND:    So we built BookingHub — the platform we wished existed
        REPLACE: So we built Tournetix — the platform we wished existed

Line 59 FIND:    The BookingHub Team
        REPLACE: The Tournetix Team
```

Search for any other "BookingHub" in this file and replace.

---

### File 22: `client/src/components/about/Team.tsx` (2 changes)

```
Line 10 FIND:    Built BookingHub from the ground up
        REPLACE: Built Tournetix from the ground up

Line 27 FIND:    The people behind BookingHub
        REPLACE: The people behind Tournetix
```

---

### File 23: `client/src/components/about/Values.tsx` (2 changes)

```
Line 11 FIND:    every workflow in BookingHub is designed
        REPLACE: every workflow in Tournetix is designed

Line 41 FIND:    decisions we make every day when building BookingHub
        REPLACE: decisions we make every day when building Tournetix
```

---

### File 24: `replit.md` (3 changes)

```
Line 1 FIND:    # BookingHub Marketing Website
       REPLACE: # Tournetix Marketing Website

Line 5 FIND:    BookingHub is a marketing website
       REPLACE: Tournetix is a marketing website

Line 71 FIND:   app.bookinghub.app
        REPLACE: app.tournetix.com
```

---

## VERIFICATION

After all changes, run:

```bash
grep -ri "BookingHub\|Booking Hub\|bookinghub\|booking-hub\|BOOKINGHUB" --include="*.ts" --include="*.tsx" --include="*.html" --include="*.json" --include="*.md" --include="*.css" client/ . | grep -v node_modules | grep -v .next | grep -v dist | grep -v attached_assets
```

**Expected result: 0 matches.**

Also run:

```bash
grep -ri "bookinghub.app\|bookinghub.com" --include="*.ts" --include="*.tsx" --include="*.html" --include="*.json" client/ . | grep -v node_modules | grep -v .next | grep -v dist | grep -v attached_assets
```

**Expected result: 0 matches.**

---

## CHECKLIST

```
□ Browser tab shows "Tournetix - The Booking Platform..."
□ Navbar logo says "Tournetix"
□ Footer says "Tournetix"
□ Hero mockup URL shows "app.tournetix.com/dashboard"
□ All feature mockup URLs show "app.tournetix.com/..."
□ All CTA banners say "Tournetix" not "BookingHub"
□ All FAQ answers say "Tournetix"
□ All testimonials say "Tournetix"
□ About page says "Tournetix" throughout
□ About page team bio says "Tournetix"
□ About page story says "Tournetix"
□ Contact email shows "hello@tournetix.com"
□ Demo booking email links use "hello@tournetix.com"
□ Social handles show "@tournetix"
□ Invoice mockup shows "Tournetix"
□ Pricing pages say "Tournetix"
□ Integration description says "Tournetix"
□ grep returns 0 results for any BookingHub variation
□ Site builds without errors
□ All pages load correctly
□ All links work
```

---

## FILES SUMMARY (22 files)

| # | Action | File |
|---|---|---|
| 1 | MODIFY | `client/index.html` |
| 2 | MODIFY | `client/src/lib/constants.ts` |
| 3 | MODIFY | `client/src/pages/home.tsx` |
| 4 | MODIFY | `client/src/pages/features.tsx` |
| 5 | MODIFY | `client/src/pages/pricing.tsx` |
| 6 | MODIFY | `client/src/pages/about.tsx` |
| 7 | MODIFY | `client/src/components/sections/Hero.tsx` |
| 8 | MODIFY | `client/src/components/sections/FeatureShowcase.tsx` |
| 9 | MODIFY | `client/src/components/sections/Testimonials.tsx` |
| 10 | MODIFY | `client/src/components/sections/HowItWorks.tsx` |
| 11 | MODIFY | `client/src/components/sections/PricingPreview.tsx` |
| 12 | MODIFY | `client/src/components/sections/FAQ.tsx` |
| 13 | MODIFY | `client/src/components/pricing/PricingFAQ.tsx` |
| 14 | MODIFY | `client/src/components/mockups/InvoiceMockup.tsx` |
| 15 | MODIFY | `client/src/components/marketing/ui/MockupFrame.tsx` |
| 16 | MODIFY | `client/src/components/marketing/shared/CTABanner.tsx` |
| 17 | MODIFY | `client/src/components/contact/ContactInfo.tsx` |
| 18 | MODIFY | `client/src/components/contact/DemoBooking.tsx` |
| 19 | MODIFY | `client/src/components/features/IntegrationPreview.tsx` |
| 20 | MODIFY | `client/src/components/about/AboutHero.tsx` |
| 21 | MODIFY | `client/src/components/about/OurStory.tsx` |
| 22 | MODIFY | `client/src/components/about/Team.tsx` |
| 23 | MODIFY | `client/src/components/about/Values.tsx` |
| 24 | MODIFY | `replit.md` |

**Total: 62 replacements across 24 files (22 source + replit.md + index.html).**

---

*Marketing Website Rebrand: BookingHub → Tournetix — Complete.*
