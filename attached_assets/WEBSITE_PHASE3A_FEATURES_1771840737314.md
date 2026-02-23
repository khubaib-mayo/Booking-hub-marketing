# BOOKINGHUB MARKETING WEBSITE — PHASE 3A: FEATURES PAGE
## Implementation Prompt for Replit Agent

---

## OBJECTIVE

Build the Features page (`/features`) — a comprehensive showcase of everything BookingHub can do. This page serves two audiences: visitors who clicked "See All Features" from the homepage (already interested, need details), and SEO traffic landing directly here (need context first, then details).

---

## CRITICAL RULES

1. **PRESERVE all existing foundation** — Navbar, Footer, all UI components, AnimateOnScroll
2. **Light mode only** — Same alternating white / off-white pattern as homepage
3. **Mobile-first responsive**
4. **Use real product screenshots** — Reference images from `public/images/mockups/` (the ones you replaced with real screenshots). If a specific screenshot doesn't exist for a section, use the MockupFrame with a gradient+icon placeholder
5. **No AI image generation** — Use only real screenshots or HTML/CSS fallbacks

---

## FILE TO MODIFY

```
src/app/features/page.tsx    — COMPLETE REWRITE (replace placeholder)
```

**New files to create:**
```
src/components/features/FeaturesHero.tsx
src/components/features/FeatureGrid.tsx
src/components/features/FeatureDeepDive.tsx
src/components/features/IntegrationPreview.tsx
```

---

## PAGE STRUCTURE (scroll order)

```
1. FeaturesHero         — Title + subtitle + overview stats
2. FeatureGrid          — 8 feature cards in a grid (quick scan)
3. FeatureDeepDive ×4   — 4 flagship deep-dives with screenshots
4. IntegrationPreview   — Coming soon integrations
5. CTABanner            — Final conversion push
```

---

## FILE 1: Features Hero

**File:** `src/components/features/FeaturesHero.tsx`

The hero is shorter than the homepage hero — visitors already know what BookingHub is. Get to the point fast.

```tsx
import { Container } from "@/components/ui/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { CalendarCheck, Users, FileText, TrendingUp, Mail, LayoutGrid, Shield, Zap } from "lucide-react";

const quickStats = [
  { icon: CalendarCheck, label: "Booking Management" },
  { icon: Users, label: "Commission Tracking" },
  { icon: FileText, label: "PDF Invoicing" },
  { icon: TrendingUp, label: "Financial Analytics" },
  { icon: Mail, label: "Email Automation" },
  { icon: LayoutGrid, label: "Form Builder" },
  { icon: Shield, label: "Role-Based Access" },
  { icon: Zap, label: "AI Insights" },
];

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container>
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <SectionBadge>Features</SectionBadge>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 text-balance">
              Everything you need to run your tour business
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              One platform replaces your spreadsheets, calculators, invoice templates, and email chains. Here&apos;s what&apos;s inside.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Quick capability pills */}
        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-200"
              >
                <stat.icon className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                <span className="font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 2: Feature Grid

**File:** `src/components/features/FeatureGrid.tsx`

8 features in a clean grid — this gives visitors a quick scan of everything before the deep dives.

```tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import {
  CalendarCheck,
  Users,
  FileText,
  TrendingUp,
  Mail,
  LayoutGrid,
  Shield,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Bookings",
    description:
      "Create, edit, filter, and bulk-update bookings with full status and payment tracking. Search by anything — date, agent, customer, trip type.",
  },
  {
    icon: Users,
    title: "Auto Commissions",
    description:
      "Commissions calculate automatically from each booking. Track pending vs paid, run bulk payouts, and see per-agent breakdowns.",
  },
  {
    icon: FileText,
    title: "Invoice Generator",
    description:
      "Generate professional PDF invoices from any booking in one click. Email them to customers directly with payment status tracking.",
  },
  {
    icon: TrendingUp,
    title: "Financial Dashboard",
    description:
      "Revenue trends, cash flow projections, payment breakdowns, and overdue alerts. Know exactly where your money is at all times.",
  },
  {
    icon: BarChart3,
    title: "Tour Analytics",
    description:
      "See which tours perform best, compare completion rates, track monthly trends, and get AI-powered recommendations to grow.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "SMTP integration for automated review requests, payment reminders, and booking confirmations. Customizable templates for your brand.",
  },
  {
    icon: LayoutGrid,
    title: "Custom Form Builder",
    description:
      "Drag-and-drop builder with 19 field types. Create customer intake forms, waivers, or feedback forms. Share via public links.",
  },
  {
    icon: Shield,
    title: "Team Management",
    description:
      "4 user roles with granular permissions. Agents see only their data. Admins see everything. Full audit trail for accountability.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Platform Overview"
            title="A complete toolkit, not just a booking form"
            description="Every feature is designed to save you time and give you clarity on your business."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature, i) => (
            <AnimateOnScroll key={feature.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-zinc-200 hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 transition-colors group-hover:bg-brand-100">
                  <feature.icon className="h-5 w-5 text-brand-500" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## FILE 3: Feature Deep Dives

**File:** `src/components/features/FeatureDeepDive.tsx`

This is a reusable component that renders a single deep-dive section. The page will use it 4 times with different content. Each deep dive has: text on one side, real screenshot on the other, plus a detail grid below.

```tsx
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DetailItem {
  title: string;
  description: string;
}

interface FeatureDeepDiveProps {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  details: DetailItem[];
  mockupUrl: string;
  imageSrc?: string;
  imageAlt: string;
  icon: React.ElementType;
  reversed?: boolean;
  bgClass?: string;
}

export function FeatureDeepDive({
  badge,
  title,
  description,
  bullets,
  details,
  mockupUrl,
  imageSrc,
  imageAlt,
  icon: Icon,
  reversed = false,
  bgClass = "",
}: FeatureDeepDiveProps) {
  return (
    <section className={cn("py-24 lg:py-32", bgClass)}>
      <Container>
        {/* Top: Text + Screenshot side by side */}
        <div
          className={cn(
            "flex flex-col gap-12 lg:gap-16 lg:items-center",
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
        >
          {/* Text side */}
          <AnimateOnScroll
            className="flex-1 lg:max-w-lg"
            direction={reversed ? "right" : "left"}
          >
            <SectionBadge>{badge}</SectionBadge>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 text-balance">
              {title}
            </h2>
            <p className="mt-5 text-base text-zinc-500 leading-relaxed">
              {description}
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-600 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          {/* Screenshot side */}
          <AnimateOnScroll
            className="flex-1"
            direction={reversed ? "left" : "right"}
          >
            <MockupFrame url={mockupUrl}>
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1920}
                  height={1200}
                  className="w-full h-auto"
                />
              ) : (
                <div className="aspect-[16/10] bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-zinc-200" />
                </div>
              )}
            </MockupFrame>
          </AnimateOnScroll>
        </div>

        {/* Bottom: Detail grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, i) => (
            <AnimateOnScroll key={detail.title} delay={i * 0.08}>
              <div className="rounded-xl bg-white border border-zinc-100 p-5 transition-all duration-200 hover:shadow-md hover:border-zinc-200">
                <h4 className="text-sm font-semibold text-zinc-900">
                  {detail.title}
                </h4>
                <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## FILE 4: Integration Preview

**File:** `src/components/features/IntegrationPreview.tsx`

```tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { CreditCard, MessageCircle, Globe, Plug, Mail, Smartphone } from "lucide-react";

const integrations = [
  { icon: CreditCard, name: "Stripe", status: "Coming Q2 2026", description: "Accept payments directly through booking forms" },
  { icon: MessageCircle, name: "WhatsApp", status: "Coming Q2 2026", description: "Send booking confirmations via WhatsApp" },
  { icon: Globe, name: "Booking Widget", status: "Coming Q3 2026", description: "Embed a booking form on your own website" },
  { icon: Mail, name: "Mailchimp", status: "Coming Q3 2026", description: "Sync customers to your email marketing lists" },
  { icon: Smartphone, name: "Mobile App", status: "Coming Q2 2026", description: "Manage bookings on the go with iOS and Android" },
  { icon: Plug, name: "Zapier", status: "Coming Q4 2026", description: "Connect BookingHub to 5,000+ other apps" },
];

export function IntegrationPreview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Integrations"
            title="Connects with the tools you already use"
            description="We're building integrations with the platforms tour operators use most. Here's what's coming."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {integrations.map((integration, i) => (
            <AnimateOnScroll key={integration.name} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-white p-5 transition-all duration-200 hover:shadow-md hover:border-zinc-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-50 border border-zinc-100 flex-shrink-0">
                  <integration.icon className="h-5 w-5 text-zinc-400" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-zinc-900">{integration.name}</h3>
                    <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600 ring-1 ring-inset ring-amber-500/10">
                      {integration.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{integration.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Request integration CTA */}
        <AnimateOnScroll delay={0.3}>
          <p className="mt-10 text-center text-sm text-zinc-400">
            Need a specific integration?{" "}
            <a href="/contact" className="text-brand-600 font-medium hover:text-brand-700 transition-colors">
              Let us know →
            </a>
          </p>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FINAL: Assemble the Features Page

**File:** `src/app/features/page.tsx` — REPLACE ENTIRELY

```tsx
import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { FeatureDeepDive } from "@/components/features/FeatureDeepDive";
import { IntegrationPreview } from "@/components/features/IntegrationPreview";
import { CTABanner } from "@/components/shared/CTABanner";
import { CalendarCheck, Users, FileText, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Booking management, commission tracking, PDF invoicing, financial analytics, email automation, and more. See everything BookingHub can do.",
};

export default function Features() {
  return (
    <>
      {/* 1. Hero — quick overview with capability pills */}
      <FeaturesHero />

      {/* 2. Grid — 8 features at a glance */}
      <FeatureGrid />

      {/* 3. Deep Dive: Booking Management */}
      <FeatureDeepDive
        badge="Booking Management"
        title="Every booking, one place, total control"
        description="Stop chasing bookings across WhatsApp, email, and spreadsheets. BookingHub gives you a single source of truth with powerful search, filters, and bulk actions."
        bullets={[
          "Create bookings with an intuitive multi-step form",
          "Track status: Upcoming, Completed, Cancelled",
          "Monitor payments: Unpaid, Deposit Paid, Fully Paid",
          "Bulk update statuses or export to CSV/PDF",
          "Assign bookings to agents automatically",
        ]}
        details={[
          { title: "Smart Search", description: "Search by customer name, booking reference, trip type, or date range. Find any booking in seconds." },
          { title: "Tabbed Views", description: "Switch between All, Upcoming, Completed, and Cancelled bookings with one click." },
          { title: "Bulk Actions", description: "Select multiple bookings and update their status, export them, or send reminders in bulk." },
          { title: "Guest Details", description: "Track adults, children, and special requirements per booking with automatic pricing." },
          { title: "Deposit Tracking", description: "Record partial payments and track remaining balances. See at a glance what's still owed." },
          { title: "Mobile Friendly", description: "Create and manage bookings from any device. The responsive design works on phones and tablets." },
        ]}
        mockupUrl="app.bookinghub.com/bookings"
        imageSrc="/images/mockups/bookings-mockup.png"
        imageAlt="BookingHub Booking Management"
        icon={CalendarCheck}
      />

      {/* 4. Deep Dive: Commission Tracking */}
      <FeatureDeepDive
        badge="Commission Tracking"
        title="Pay your agents right, without the spreadsheet"
        description="Commissions are the #1 pain point for tour operators with teams. BookingHub automates the entire process — from calculation to payout."
        bullets={[
          "Auto-calculated when bookings are created",
          "Configurable commission percentage per agent or globally",
          "Track Pending, Paid, and Cancelled commissions",
          "Bulk mark-as-paid for payroll runs",
          "Full per-agent earnings reports and exports",
        ]}
        details={[
          { title: "Automatic Calculation", description: "Set your commission rate once. Every new booking automatically generates the correct commission entry." },
          { title: "Bulk Payouts", description: "Select all pending commissions and mark them as paid in one action. Perfect for weekly or monthly payroll." },
          { title: "Agent Dashboard", description: "Each agent sees their own earnings, pending amounts, and payment history. Full transparency." },
          { title: "Payout History", description: "Complete audit trail of every commission paid — when, how much, and for which booking." },
          { title: "Performance Insights", description: "See which agents bring the most revenue, highest booking counts, and best conversion rates." },
          { title: "Export Reports", description: "Download commission reports as CSV or PDF for your accountant or payroll system." },
        ]}
        mockupUrl="app.bookinghub.com/commissions"
        imageAlt="BookingHub Commission Tracking"
        icon={Users}
        reversed
        bgClass="bg-zinc-50/50"
      />

      {/* 5. Deep Dive: Invoicing */}
      <FeatureDeepDive
        badge="Invoicing"
        title="Professional invoices without the copy-paste"
        description="Stop creating invoices one by one in Word. BookingHub generates beautiful, professional PDF invoices from your booking data — and emails them to customers directly."
        bullets={[
          "One-click invoice generation from any booking",
          "Automatic line items, tax calculations, and totals",
          "Your company logo, name, and branding on every invoice",
          "Email invoices directly to customers",
          "Track payment status: Draft, Sent, Paid, Overdue",
        ]}
        details={[
          { title: "PDF Generation", description: "Clean, professional invoices generated as PDF. Download or email them instantly." },
          { title: "Auto-Fill from Bookings", description: "Customer details, trip info, pricing, and tax all pull from the booking. Zero manual entry." },
          { title: "Tax Configuration", description: "Set your tax rate in settings. BookingHub calculates tax automatically on every invoice." },
          { title: "Email Delivery", description: "Send invoices directly from the platform. Track whether they've been sent and when." },
          { title: "Payment Tracking", description: "Mark invoices as paid when payment arrives. See outstanding amounts at a glance." },
          { title: "Invoice History", description: "Full list of all invoices with search, filter by status, and quick actions." },
        ]}
        mockupUrl="app.bookinghub.com/invoices"
        imageSrc="/images/mockups/invoice-mockup.png"
        imageAlt="BookingHub Invoice Generation"
        icon={FileText}
      />

      {/* 6. Deep Dive: Financial Analytics */}
      <FeatureDeepDive
        badge="Financial Analytics"
        title="See your money. Know your business."
        description="Real-time dashboards that show exactly where your business stands — revenue, cash flow, what's overdue, and what's coming in. No more guessing."
        bullets={[
          "Revenue trends with monthly and quarterly views",
          "Cash flow projections for the next 30 days",
          "Payment status breakdown (Paid, Deposit, Unpaid)",
          "Overdue payment alerts with bulk reminder emails",
          "Tour-by-tour performance rankings with AI insights",
        ]}
        details={[
          { title: "Revenue Dashboard", description: "Total revenue, collected, pending, and net (after commissions). Updated in real time." },
          { title: "Cash Flow Forecast", description: "See expected incoming and outgoing for the next 30 days. Plan ahead with confidence." },
          { title: "Overdue Alerts", description: "Automatically flags overdue payments. Send bulk reminders to customers with one click." },
          { title: "Tour Performance", description: "Compare tours by revenue, booking count, and completion rate. Find your winners." },
          { title: "AI Smart Insights", description: "AI analyzes your data and surfaces actionable recommendations — like which tours to promote." },
          { title: "Export Everything", description: "Download financial reports as PDF or CSV. Ready for your accountant or tax filing." },
        ]}
        mockupUrl="app.bookinghub.com/analytics"
        imageSrc="/images/mockups/financial-mockup.png"
        imageAlt="BookingHub Financial Analytics"
        icon={TrendingUp}
        reversed
        bgClass="bg-zinc-50/50"
      />

      {/* 7. Integrations coming soon */}
      <IntegrationPreview />

      {/* 8. Final CTA */}
      <CTABanner
        title="See it all in action"
        description="Start your 14-day free trial and explore every feature. No credit card required. Set up in minutes."
      />
    </>
  );
}
```

---

## SECTION FLOW AND BACKGROUNDS

```
FeaturesHero       → white with subtle amber glow
FeatureGrid        → zinc-50/50 (off-white)
DeepDive: Bookings → white
DeepDive: Commiss  → zinc-50/50
DeepDive: Invoices → white
DeepDive: Analytic → zinc-50/50
IntegrationPreview → white
CTABanner          → white
Footer             → zinc-50/50
```

---

## VERIFICATION CHECKLIST

```
HERO:
□ Badge "Features" shows
□ Title "Everything you need to run your tour business"
□ Subtitle explains the one-platform concept
□ 8 capability pills below (Booking Management, Commission Tracking, etc.)
□ Pills have amber icons and hover effect
□ Subtle amber gradient background

FEATURE GRID:
□ 8 feature cards in grid: 1 col (mobile), 2 col (tablet), 4 col (desktop)
□ Each card has amber icon, title, description
□ Cards have hover lift + shadow
□ Icons have amber background that darkens on hover

DEEP DIVE — BOOKINGS:
□ Badge "Booking Management"
□ Title + description + 5 bullet points with amber checkmarks
□ Real screenshot in MockupFrame on the right
□ 6 detail cards below in 3-column grid (1 col mobile, 2 tablet, 3 desktop)
□ White background

DEEP DIVE — COMMISSIONS:
□ Same layout but REVERSED (text right, mockup left)
□ Off-white background
□ 5 bullet points + 6 detail cards

DEEP DIVE — INVOICING:
□ Normal layout (text left, mockup right)
□ White background
□ Real invoice screenshot if available

DEEP DIVE — ANALYTICS:
□ Reversed layout
□ Off-white background
□ Real financial dashboard screenshot if available

INTEGRATIONS:
□ 6 integration cards: Stripe, WhatsApp, Booking Widget, Mailchimp, Mobile App, Zapier
□ Each has "Coming Q_ 2026" amber badge
□ "Need a specific integration? Let us know →" link at bottom

CTA:
□ "See it all in action" title
□ Two buttons: Start Free Trial + Talk to Sales

RESPONSIVE (375px, 768px, 1024px, 1440px):
□ Capability pills wrap on mobile
□ Feature grid: 1→2→4 columns
□ Deep dive sections stack (image above text) on mobile
□ Detail grids: 1→2→3 columns
□ Integration cards: 1→2→3 columns

GENERAL:
□ All scroll animations work
□ All screenshots display (or graceful fallbacks)
□ Page metadata shows "Features | BookingHub" in browser tab
□ No console errors
□ No TypeScript errors
□ Footer shows at bottom
```

---

## FILES SUMMARY

| Action | File |
|---|---|
| CREATE | `src/components/features/FeaturesHero.tsx` |
| CREATE | `src/components/features/FeatureGrid.tsx` |
| CREATE | `src/components/features/FeatureDeepDive.tsx` |
| CREATE | `src/components/features/IntegrationPreview.tsx` |
| REPLACE | `src/app/features/page.tsx` |

**Total: 5 files.**

---

*Phase 3A Features Page Complete. Proceed to Phase 3B (Pricing Page) once verified.*
