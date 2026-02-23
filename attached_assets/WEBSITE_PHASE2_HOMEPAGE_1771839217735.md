# BOOKINGHUB MARKETING WEBSITE — PHASE 2: HOMEPAGE (Part 1 of 2)
## Implementation Prompt for Replit Agent

---

## OBJECTIVE

Build the complete homepage for BookingHub. This is split into 2 parts for clarity. Part 1 covers the top half: Hero, Logo Cloud, Problem Statement, Feature Showcase, How It Works, and Stats. Part 2 covers: Testimonials, Pricing Preview, FAQ, Final CTA, and the page assembly.

---

## CRITICAL RULES

1. **PRESERVE all existing foundation** — Navbar, Footer, Button, Container, SectionHeader, MockupFrame, CTABanner
2. **Light mode only** — White + warm off-white alternating backgrounds
3. **Mobile-first responsive**
4. **Use Framer Motion** for scroll-triggered fade-up animations
5. **Generate images with AI** where specified — use Replit's AI image generation. Save to `public/images/mockups/`

---

## AI IMAGE GENERATION

Generate these product mockup images using Replit's AI image generation and save them to `public/images/mockups/`:

**Image 1** — `dashboard-hero.png`
Prompt: "A clean modern SaaS dashboard screenshot, light theme, white background. Four stat cards at top showing revenue $12,450, bookings 156, commissions $890, upcoming trips 23. Bar chart showing monthly revenue trending upward. Data table below with booking rows. Amber gold accent color on buttons and icons. Professional minimal design like Linear or Stripe dashboard. 16:10 aspect ratio, high resolution."

**Image 2** — `bookings-mockup.png`
Prompt: "A SaaS booking management table screenshot, light theme. Table with columns customer name, trip type like Diving and Whale Watching, date, guests, amount, status badges in amber and green. Search bar and filter dropdowns at top. Clean modern design with amber accent color. 16:10 aspect ratio."

**Image 3** — `financial-mockup.png`
Prompt: "A SaaS financial analytics dashboard, light theme. Revenue trend line chart, payment status breakdown bars, cash flow projection cards showing incoming and outgoing. Overdue payments section. Amber gold accent color. Professional data visualization. 16:10 aspect ratio."

**Image 4** — `invoice-mockup.png`
Prompt: "A professional invoice document preview inside a SaaS app, light theme. Shows INVOICE header, company name, customer billing details, line items table with descriptions quantities and prices, subtotal, tax, total. Clean typography. 16:10 aspect ratio."

If AI image generation doesn't produce good results, the components include HTML/CSS fallback mockups that look like real product UI.

---

## FILES TO CREATE

```
src/components/shared/AnimateOnScroll.tsx
src/components/sections/Hero.tsx
src/components/sections/LogoCloud.tsx
src/components/sections/ProblemStatement.tsx
src/components/sections/FeatureShowcase.tsx
src/components/sections/HowItWorks.tsx
src/components/sections/Stats.tsx
```

---

## FILE 1: AnimateOnScroll Wrapper

**File:** `src/components/shared/AnimateOnScroll.tsx`

Reusable wrapper that fades content up when it scrolls into the viewport.

```tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  const directionOffset = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = { opacity: 0, ...directionOffset[direction] };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

---

## FILE 2: Hero Section

**File:** `src/components/sections/Hero.tsx`

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>✨ Now with AI-powered insights</SectionBadge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The booking platform{" "}
            <span className="relative inline-block">
              <span className="text-brand-500">built for tourism</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8"
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Manage bookings, track commissions, generate invoices, and grow your
            tour business — all in one place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="primary" size="lg" href={siteConfig.signupUrl}>
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" href="/features">
              See All Features
            </Button>
          </motion.div>

          {/* Trust text */}
          <motion.p
            className="mt-5 text-sm text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            No credit card required. 14-day free trial.
          </motion.p>
        </div>

        {/* Hero Dashboard Mockup */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MockupFrame url="app.bookinghub.com/dashboard">
            {/*
              Try to use AI-generated image first:
              <Image src="/images/mockups/dashboard-hero.png" alt="BookingHub Dashboard" width={1920} height={1200} className="w-full h-auto" priority />

              If no image available, use the HTML fallback below:
            */}
            <div className="p-4 sm:p-6 bg-white min-h-[300px] sm:min-h-[450px]">
              {/* Fake stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: "Total Revenue", value: "$12,450" },
                  { label: "Bookings", value: "156" },
                  { label: "Commissions", value: "$890" },
                  { label: "Upcoming", value: "23" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-zinc-100 p-3">
                    <p className="text-[10px] text-zinc-400 uppercase tracking-wide">{stat.label}</p>
                    <p className="text-lg font-bold text-zinc-900 mt-0.5">{stat.value}</p>
                  </div>
                ))}
              </div>
              {/* Fake chart */}
              <div className="rounded-lg border border-zinc-100 p-4 mb-5 h-36 sm:h-48 flex items-end gap-[3px]">
                {[20, 35, 28, 45, 38, 50, 42, 55, 48, 65, 58, 70, 85, 78, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-amber-200/80 rounded-t transition-all"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              {/* Fake table rows */}
              <div className="hidden sm:block space-y-2">
                {[
                  { name: "Sarah Johnson", trip: "Whale Watching", amount: "$240", status: "Upcoming" },
                  { name: "Carlos Rivera", trip: "Sunset Cruise", amount: "$180", status: "Completed" },
                  { name: "Anna Mueller", trip: "Diving Tour", amount: "$320", status: "Upcoming" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 p-2.5 rounded-lg bg-zinc-50/80">
                    <div className="w-7 h-7 rounded-full bg-zinc-200 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-zinc-700 truncate">{row.name}</p>
                      <p className="text-[10px] text-zinc-400">{row.trip}</p>
                    </div>
                    <p className="text-xs font-semibold text-zinc-700">{row.amount}</p>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      row.status === "Upcoming" ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                    }`}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MockupFrame>
        </motion.div>
      </Container>
    </section>
  );
}
```

---

## FILE 3: Logo Cloud

**File:** `src/components/sections/LogoCloud.tsx`

```tsx
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const trustedBy = [
  "Ocean Tours",
  "Reef Adventures",
  "Sunset Cruises",
  "Mountain Treks",
  "Safari Kings",
  "Island Hopper",
];

export function LogoCloud() {
  return (
    <section className="py-14 border-y border-zinc-100 bg-zinc-50/50">
      <Container>
        <AnimateOnScroll>
          <p className="text-center text-sm font-medium text-zinc-400 mb-8">
            Trusted by tour operators in 20+ countries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {trustedBy.map((name) => (
              <span key={name} className="text-lg font-display font-bold text-zinc-200 select-none hover:text-zinc-300 transition-colors">
                {name}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 4: Problem Statement

**File:** `src/components/sections/ProblemStatement.tsx`

```tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { CalendarX, Calculator, FileX, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: CalendarX,
    title: "Bookings everywhere",
    description: "WhatsApp, emails, notebooks, spreadsheets — your bookings live in 5 different places. Nothing syncs. Things get missed.",
  },
  {
    icon: Calculator,
    title: "Commissions by hand",
    description: "Calculating who earned what, tracking deposits, managing payouts. Hours of manual work every week — and mistakes cost trust.",
  },
  {
    icon: FileX,
    title: "Invoices one by one",
    description: "Creating each invoice in Word or Excel, emailing them manually, then hoping customers pay. No tracking, no automation.",
  },
  {
    icon: BarChart3,
    title: "No visibility",
    description: "Which tours are profitable? What's your cash flow? How much is overdue? You don't know until it's too late.",
  },
];

export function ProblemStatement() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="The Problem"
            title="Running a tour business shouldn't mean drowning in admin"
            description="Tour operators spend 40% of their time on operations that should be automated. Sound familiar?"
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <AnimateOnScroll key={problem.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-zinc-200 hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <problem.icon className="h-5 w-5 text-red-400" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900">{problem.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{problem.description}</p>
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

## FILE 5: Feature Showcase

**File:** `src/components/sections/FeatureShowcase.tsx`

4 features with alternating text-left/mockup-right and text-right/mockup-left layout.

```tsx
"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { CalendarCheck, Users, FileText, TrendingUp, CheckCircle } from "lucide-react";

const features = [
  {
    badge: "Bookings",
    title: "Smart booking management that actually works",
    description: "Create, search, filter, and manage all your bookings in one powerful table. Track status, payments, deposits, and guest details — with bulk actions to save hours.",
    bullets: [
      "Upcoming, Completed, and Cancelled tracking",
      "Deposit and remaining balance management",
      "Bulk status updates and CSV/PDF exports",
      "Search and filter by date, agent, status",
    ],
    icon: CalendarCheck,
    mockupUrl: "app.bookinghub.com/bookings",
    imageSrc: "/images/mockups/bookings-mockup.png",
  },
  {
    badge: "Commissions",
    title: "Automatic commission tracking — zero spreadsheets",
    description: "Commissions calculate automatically when bookings are created. See who earned what, mark payments, and run bulk payouts in seconds.",
    bullets: [
      "Auto-calculated from each booking",
      "Pending, Paid, and Cancelled statuses",
      "Bulk mark-as-paid for payroll day",
      "Per-agent performance breakdowns",
    ],
    icon: Users,
    mockupUrl: "app.bookinghub.com/commissions",
    imageSrc: "/images/mockups/bookings-mockup.png",
  },
  {
    badge: "Invoicing",
    title: "Professional invoices in one click",
    description: "Generate beautiful PDF invoices from any booking. Email them directly to customers with payment tracking. No more Word templates.",
    bullets: [
      "Auto-generated from booking data",
      "PDF download and direct email",
      "Tax calculation and line items",
      "Payment status tracking",
    ],
    icon: FileText,
    mockupUrl: "app.bookinghub.com/invoices",
    imageSrc: "/images/mockups/invoice-mockup.png",
  },
  {
    badge: "Analytics",
    title: "Know exactly where your business stands",
    description: "Revenue trends, cash flow projections, tour performance rankings, and AI-powered insights — all updated in real time.",
    bullets: [
      "Revenue and cash flow dashboards",
      "Tour-by-tour performance comparison",
      "Overdue payment alerts and reminders",
      "AI-generated smart business insights",
    ],
    icon: TrendingUp,
    mockupUrl: "app.bookinghub.com/analytics",
    imageSrc: "/images/mockups/financial-mockup.png",
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Features"
            title="Everything you need, nothing you don't"
            description="BookingHub replaces your spreadsheets, calculators, invoice templates, and email chains with one intelligent platform."
          />
        </AnimateOnScroll>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className={`flex flex-col gap-12 lg:gap-16 lg:items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Text side */}
                <AnimateOnScroll className="flex-1 lg:max-w-lg" direction={isReversed ? "right" : "left"}>
                  <SectionBadge>{feature.badge}</SectionBadge>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base text-zinc-500 leading-relaxed">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateOnScroll>

                {/* Mockup side */}
                <AnimateOnScroll className="flex-1" direction={isReversed ? "left" : "right"}>
                  <MockupFrame url={feature.mockupUrl}>
                    {/*
                      Use AI-generated image if available:
                      <Image src={feature.imageSrc} alt={feature.title} width={1920} height={1200} className="w-full h-auto" />

                      Fallback — gradient placeholder with icon:
                    */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center">
                      <feature.icon className="w-16 h-16 text-zinc-200" />
                    </div>
                  </MockupFrame>
                </AnimateOnScroll>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
```

**IMPORTANT NOTE TO REPLIT AGENT:** In the MockupFrame for each feature, try to use `<Image>` with the AI-generated mockup image first. If the image file exists at the `imageSrc` path, use it. If not, keep the gradient+icon fallback as shown. You can conditionally render based on whether the file exists, or just use the Image tag and let Next.js handle missing images gracefully.

---

## FILE 6: How It Works

**File:** `src/components/sections/HowItWorks.tsx`

```tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Settings, CalendarPlus, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Set up in minutes",
    description: "Add tour types, set time slots, configure emails, upload your logo, and invite your team. Online in under 10 minutes.",
  },
  {
    number: "02",
    icon: CalendarPlus,
    title: "Book & manage",
    description: "Create bookings through an intuitive form. Pricing, commissions, and dashboards all update automatically.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Analyze & grow",
    description: "Dashboards show revenue and cash flow. Analytics reveal what works. AI insights tell you where to focus.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="How It Works"
            title="From signup to insights in three steps"
            description="BookingHub gets you up and running fast — not in weeks, in minutes."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.15}>
              <div className="relative text-center">
                <span className="inline-block text-6xl font-display font-extrabold text-zinc-100 select-none">
                  {step.number}
                </span>
                <div className="mx-auto -mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 border border-brand-100">
                  <step.icon className="h-6 w-6 text-brand-500" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{step.description}</p>

                {/* Connector line between steps (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+48px)] w-[calc(100%-96px)] border-t-2 border-dashed border-zinc-200" />
                )}
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

## FILE 7: Stats Bar

**File:** `src/components/sections/Stats.tsx`

A dark band of social proof numbers.

```tsx
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const stats = [
  { value: "10,000+", label: "Bookings managed" },
  { value: "500+", label: "Tour operators" },
  { value: "20+", label: "Countries" },
  { value: "99.9%", label: "Uptime" },
];

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-zinc-900">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
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

*Continue to Part 2 for: Testimonials, Pricing Preview, FAQ, Final CTA, and page assembly.*
# BOOKINGHUB MARKETING WEBSITE — PHASE 2: HOMEPAGE (Part 2 of 2)
## Implementation Prompt for Replit Agent

---

## CONTINUES FROM PART 1

This is Part 2. Build these remaining sections and then assemble the full homepage.

---

## FILES TO CREATE (Part 2)

```
src/components/sections/Testimonials.tsx
src/components/sections/PricingPreview.tsx
src/components/sections/FAQ.tsx
```

**FILE TO MODIFY:**
```
src/app/page.tsx     — REPLACE with full homepage assembly
```

---

## FILE 8: Testimonials

**File:** `src/components/sections/Testimonials.tsx`

```tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We switched from FareHarbor and saved $500/month in commission fees alone. BookingHub pays for itself 10x over.",
    author: "Maria Costa",
    role: "Owner, Ocean Tours",
    location: "Lisbon, Portugal",
  },
  {
    quote: "The commission tracking alone saved me 5 hours a week. I used to do it all in Excel — never going back.",
    author: "Carlos Rivera",
    role: "Operations Manager, Reef Adventures",
    location: "Cancún, Mexico",
  },
  {
    quote: "I can finally see my cash flow in real time. Knowing which tours are profitable changed how I run my business.",
    author: "Sarah Chen",
    role: "Solo Operator, Sunset Kayaks",
    location: "Phuket, Thailand",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Testimonials"
            title="Loved by tour operators worldwide"
            description="Don't take our word for it — hear from operators who transformed their business."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.author} delay={i * 0.1}>
              <div className="flex flex-col h-full rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-zinc-200">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-base text-zinc-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-brand-600">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{testimonial.author}</p>
                    <p className="text-xs text-zinc-400">{testimonial.role} · {testimonial.location}</p>
                  </div>
                </div>
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

## FILE 9: Pricing Preview

**File:** `src/components/sections/PricingPreview.tsx`

Shows 3 pricing tiers as a teaser. Links to the full pricing page.

```tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

const plans = [
  {
    name: "Solo",
    description: "For individual operators",
    price: "$29",
    period: "/month",
    features: [
      "1 user",
      "Unlimited bookings",
      "Invoice generation",
      "Financial analytics",
      "Email automation",
    ],
    popular: false,
  },
  {
    name: "Team",
    description: "For growing tour companies",
    price: "$79",
    period: "/month",
    features: [
      "Up to 10 users",
      "Everything in Solo",
      "Commission tracking",
      "Agent performance",
      "Custom form builder",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Business",
    description: "For larger operations",
    price: "$149",
    period: "/month",
    features: [
      "Up to 50 users",
      "Everything in Team",
      "API access",
      "Custom branding",
      "Dedicated support",
      "Advanced reporting",
    ],
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Pricing"
            title="Simple pricing, no per-booking fees"
            description="Unlike competitors who take 3-6% of every booking, BookingHub is a flat monthly fee. Your revenue stays yours."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimateOnScroll key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg",
                  plan.popular
                    ? "border-brand-500 bg-white shadow-lg shadow-brand-500/5 scale-[1.02]"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                )}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3 className="font-display text-lg font-semibold text-zinc-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.description}</p>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-zinc-900">{plan.price}</span>
                  <span className="text-sm text-zinc-400">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    size="md"
                    href={siteConfig.signupUrl}
                    className="w-full justify-center"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Link to full pricing */}
        <AnimateOnScroll>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              Compare all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 10: FAQ

**File:** `src/components/sections/FAQ.tsx`

```tsx
"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! Every plan comes with a 14-day free trial. No credit card required. You get full access to all features during the trial so you can see exactly how BookingHub fits your business.",
  },
  {
    question: "Do you charge per booking?",
    answer: "No. Unlike FareHarbor and Peek (which take 3-6% per booking), BookingHub is a flat monthly subscription. Whether you have 10 bookings or 10,000, the price stays the same. Your revenue stays yours.",
  },
  {
    question: "Can I import my existing bookings?",
    answer: "Yes. You can import bookings from CSV files or spreadsheets. Our team can also help you migrate data from other booking platforms during onboarding.",
  },
  {
    question: "How does commission tracking work?",
    answer: "When you create a booking and assign it to an agent, the commission is calculated automatically based on the percentage you configure in settings. You can track pending vs paid commissions and do bulk payouts.",
  },
  {
    question: "Can my agents access the platform?",
    answer: "Yes. You can invite agents who get their own login. They can only see their own bookings and commissions — they can't access other agents' data or admin settings. Full data isolation is built in.",
  },
  {
    question: "Do you support multiple currencies?",
    answer: "Yes. BookingHub supports all major currencies. You set your preferred currency in company settings, and all amounts display accordingly throughout the platform.",
  },
  {
    question: "Can I customize the invoice design?",
    answer: "Invoices automatically include your company name, logo, and tax settings. Line items, totals, and payment details are pulled from the booking data. You can add custom notes and configure tax rates.",
  },
  {
    question: "What if I need help getting started?",
    answer: "We offer free onboarding support for all plans. Our team will help you configure your account, import data, and train your staff. Most operators are fully set up within a day.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container size="narrow">
        <AnimateOnScroll>
          <SectionHeader
            badge="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about BookingHub. Can't find what you're looking for? Contact us."
          />
        </AnimateOnScroll>

        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden transition-colors hover:border-zinc-300">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-zinc-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform duration-200",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-zinc-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

## FINAL: Assemble the Homepage

**File:** `src/app/page.tsx` — REPLACE ENTIRELY

```tsx
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/shared/CTABanner";

export default function Home() {
  return (
    <>
      {/* 1. Hero — who we are, what we do */}
      <Hero />

      {/* 2. Social proof strip */}
      <LogoCloud />

      {/* 3. The pain — why the status quo is broken */}
      <ProblemStatement />

      {/* 4. The fix — our 4 flagship features */}
      <FeatureShowcase />

      {/* 5. Simplicity — 3 steps to value */}
      <HowItWorks />

      {/* 6. Numbers — social proof via stats */}
      <Stats />

      {/* 7. Trust — real human voices */}
      <Testimonials />

      {/* 8. Money — clear pricing */}
      <PricingPreview />

      {/* 9. Objection handling — FAQ */}
      <FAQ />

      {/* 10. Final push — CTA with emotional headline */}
      <CTABanner
        title="Ready to simplify your tour business?"
        description="Join hundreds of tour operators who switched from spreadsheets to BookingHub. Start your free 14-day trial — no credit card required."
      />
    </>
  );
}
```

---

## SECTION FLOW AND BACKGROUND PATTERN

The alternating backgrounds create visual rhythm:

```
Hero            → white with amber glow
LogoCloud       → zinc-50/50 with top+bottom borders
ProblemStatement→ white
FeatureShowcase → zinc-50/50
HowItWorks     → white
Stats           → zinc-900 (dark band — pattern interrupt)
Testimonials    → zinc-50/50
PricingPreview  → white
FAQ             → zinc-50/50
CTABanner       → white
Footer          → zinc-50/50 with top border
```

This white → off-white → white → off-white → DARK → off-white rhythm guides the eye naturally and creates "breathing room" between sections.

---

## VERIFICATION CHECKLIST

```
HERO:
□ Badge "Now with AI-powered insights" shows above title
□ "The booking platform" in zinc-900
□ "built for tourism" in amber with wavy underline
□ Subtitle is readable (zinc-500)
□ Two CTAs: "Start Free Trial" (amber) + "See All Features" (white border)
□ Trust text "No credit card required" below CTAs
□ Dashboard mockup shows in browser frame below hero
□ Mockup has stat cards, chart, table rows (either AI image or HTML fallback)
□ Entrance animations play on load (staggered)
□ Background has subtle amber glow at top

LOGO CLOUD:
□ "Trusted by tour operators in 20+ countries" text visible
□ 6 company names in light gray
□ Top and bottom borders

PROBLEM STATEMENT:
□ Badge "The Problem" shows
□ Title "Running a tour business shouldn't mean drowning in admin"
□ 4 problem cards in 2x2 grid (desktop), stacked (mobile)
□ Red icons on problem cards (not amber)
□ Cards have hover lift + shadow effect

FEATURE SHOWCASE:
□ Badge "Features" shows
□ 4 features alternate: text-left/mockup-right, text-right/mockup-left
□ Each feature has badge, title, description, bullet points with amber checkmarks
□ Mockup frames show product screenshots or gradient fallbacks
□ Scroll animations trigger on each feature

HOW IT WORKS:
□ 3 steps: "01", "02", "03"
□ Large faded numbers behind amber icons
□ Dashed connector lines between steps (desktop only)
□ Clean centered layout

STATS:
□ Dark background (zinc-900)
□ 4 stats in a row (desktop), 2x2 (mobile)
□ White bold numbers, gray labels

TESTIMONIALS:
□ 3 testimonial cards with 5 amber stars
□ Quote text in zinc-700
□ Author name, role, location below
□ Avatar with initials in amber circle
□ Cards have hover shadow

PRICING PREVIEW:
□ 3 pricing cards: Solo $29, Team $79, Business $149
□ "Most Popular" badge on Team plan
□ Team card slightly scaled up (1.02) with amber border
□ Feature list with amber checkmarks
□ "Start Free Trial" CTA on each card
□ "Compare all features" link below

FAQ:
□ 8 questions visible as accordion items
□ Clicking a question expands the answer
□ Chevron rotates on open/close
□ Smooth open/close animation
□ Only one answer open at a time

FINAL CTA:
□ "Ready to simplify your tour business?" title
□ Two buttons: "Start Free Trial" + "Talk to Sales"
□ Clean centered layout

RESPONSIVE (test at 375px, 768px, 1024px, 1440px):
□ Hero title scales from text-4xl to text-7xl
□ Problem cards stack on mobile
□ Feature sections stack (image above text) on mobile
□ Steps stack vertically on mobile
□ Stats are 2x2 on mobile
□ Testimonials stack on mobile
□ Pricing cards stack on mobile
□ FAQ is full width on mobile
□ All touch targets are 44px+ on mobile

GENERAL:
□ Scroll animations only trigger once (not on scroll up)
□ No layout shift as sections animate in
□ Page loads fast (no heavy images blocking render)
□ No console errors
□ No TypeScript errors
□ Footer shows at the bottom
□ All links work
```

---

## FILES SUMMARY

| Action | File |
|---|---|
| CREATE | `src/components/shared/AnimateOnScroll.tsx` |
| CREATE | `src/components/sections/Hero.tsx` |
| CREATE | `src/components/sections/LogoCloud.tsx` |
| CREATE | `src/components/sections/ProblemStatement.tsx` |
| CREATE | `src/components/sections/FeatureShowcase.tsx` |
| CREATE | `src/components/sections/HowItWorks.tsx` |
| CREATE | `src/components/sections/Stats.tsx` |
| CREATE | `src/components/sections/Testimonials.tsx` |
| CREATE | `src/components/sections/PricingPreview.tsx` |
| CREATE | `src/components/sections/FAQ.tsx` |
| REPLACE | `src/app/page.tsx` |
| GENERATE | `public/images/mockups/dashboard-hero.png` (AI) |
| GENERATE | `public/images/mockups/bookings-mockup.png` (AI) |
| GENERATE | `public/images/mockups/financial-mockup.png` (AI) |
| GENERATE | `public/images/mockups/invoice-mockup.png` (AI) |

**Total: 11 code files + 4 AI-generated images.**

---

*Phase 2 Homepage Complete. Proceed to Phase 3 (Inner Pages: Features, Pricing, About, Contact) once verified.*
