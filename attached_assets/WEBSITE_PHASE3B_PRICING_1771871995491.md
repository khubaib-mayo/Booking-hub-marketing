# BOOKINGHUB MARKETING WEBSITE — PHASE 3B: PRICING PAGE
## Implementation Prompt for Replit Agent

---

## OBJECTIVE

Build the Pricing page (`/pricing`) — a conversion-focused page that uses pricing psychology to guide visitors toward the Team plan (our highest-margin tier). Every element on this page exists to reduce friction, create urgency, and make the decision feel easy.

---

## PRICING PSYCHOLOGY TACTICS WE'RE USING

| Tactic | How We Apply It |
|---|---|
| **Decoy Effect** | The Enterprise plan makes the Team plan look like incredible value by comparison |
| **Anchoring** | Enterprise price ($49) is seen first in the comparison, making $14 and $29 feel cheap |
| **Center Stage Effect** | Team plan is in the middle, visually elevated, and labeled "Most Popular" — humans gravitate to the middle option |
| **Loss Aversion** | "Save 20%" on annual billing — framed as losing money if you don't switch |
| **Social Proof on Price** | "Most Popular" badge + "Chosen by 70% of operators" underneath |
| **Price-to-Value Framing** | "$0.06 per booking" under Solo makes the price feel tiny |
| **Charm Pricing** | $14, $29, $49 — odd numbers feel like deals vs round numbers |
| **Feature Gating** | Solo is deliberately limited (no commissions, no forms) to push upgrades |
| **Urgency** | "Lock in this price — increases April 2026" banner |

---

## CRITICAL RULES

1. **PRESERVE all existing foundation components**
2. **Light mode only**
3. **Mobile-first responsive**
4. **The Team plan MUST feel like the obvious best choice**
5. **Use the real prices: Solo $14/mo, Team $29/mo, Enterprise $49/mo**

---

## FILES TO CREATE

```
src/components/pricing/PricingHero.tsx
src/components/pricing/PricingToggle.tsx
src/components/pricing/PricingCards.tsx
src/components/pricing/PricingComparison.tsx
src/components/pricing/PricingFAQ.tsx
src/components/pricing/EnterpriseCTA.tsx
```

**FILE TO MODIFY:**
```
src/app/pricing/page.tsx    — COMPLETE REWRITE
```

---

## PAGE STRUCTURE

```
1. PricingHero        — Title + subtitle + "no per-booking fees" emphasis
2. PricingToggle      — Monthly / Annual switch (inline in hero)
3. PricingCards       — 3 pricing tiers side by side
4. PricingComparison  — Full feature comparison table
5. PricingFAQ         — Pricing-specific questions
6. EnterpriseCTA      — Custom pricing callout
7. CTABanner          — Final push
```

---

## FILE 1: Pricing Hero + Toggle

**File:** `src/components/pricing/PricingHero.tsx`

```tsx
"use client";

import { Container } from "@/components/ui/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

interface PricingHeroProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export function PricingHero({ isAnnual, onToggle }: PricingHeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container>
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <SectionBadge>Pricing</SectionBadge>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 text-balance">
              Simple pricing,{" "}
              <span className="text-brand-500">no surprises</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              No per-booking fees. No commission cuts. No hidden charges.
              Just a flat monthly price — your revenue stays yours.
            </p>

            {/* Monthly / Annual toggle */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm">
              <button
                onClick={() => onToggle(false)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  !isAnnual
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => onToggle(true)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isAnnual
                    ? "bg-zinc-900 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-700"
                }`}
              >
                Annual
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 2: Pricing Cards

**File:** `src/components/pricing/PricingCards.tsx`

This is the most psychologically designed component on the entire site.

```tsx
"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

interface PricingCardsProps {
  isAnnual: boolean;
}

const plans = [
  {
    id: "solo",
    name: "Solo",
    tagline: "For individual operators",
    monthlyPrice: 14,
    annualPrice: 11,
    bookingLimit: "200 bookings/month",
    pricePerBooking: "$0.07",
    popularLabel: null,
    features: [
      { text: "1 user", included: true },
      { text: "200 bookings/month", included: true },
      { text: "Invoice generation", included: true },
      { text: "Financial dashboard", included: true },
      { text: "Tour analytics", included: true },
      { text: "Email automation", included: true },
      { text: "CSV/PDF exports", included: true },
      { text: "Commission tracking", included: false },
      { text: "Team management", included: false },
      { text: "Custom form builder", included: false },
    ],
    ctaVariant: "outline" as const,
    ctaText: "Start Free Trial",
    highlight: false,
  },
  {
    id: "team",
    name: "Team",
    tagline: "For growing tour companies",
    monthlyPrice: 29,
    annualPrice: 23,
    bookingLimit: "500 bookings/month",
    pricePerBooking: "$0.06",
    popularLabel: "Most Popular",
    popularSubtext: "Chosen by 70% of operators",
    features: [
      { text: "Up to 10 team members", included: true },
      { text: "500 bookings/month", included: true },
      { text: "Everything in Solo", included: true },
      { text: "Commission tracking", included: true, highlight: true },
      { text: "Agent performance reports", included: true, highlight: true },
      { text: "Custom form builder", included: true, highlight: true },
      { text: "Bulk actions & payouts", included: true },
      { text: "Priority email support", included: true },
      { text: "Custom branding", included: false },
      { text: "API access", included: false },
    ],
    ctaVariant: "primary" as const,
    ctaText: "Start Free Trial",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For larger operations",
    monthlyPrice: 49,
    annualPrice: 39,
    bookingLimit: "Unlimited bookings",
    pricePerBooking: null,
    popularLabel: null,
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Unlimited bookings", included: true },
      { text: "Everything in Team", included: true },
      { text: "API access", included: true },
      { text: "Custom branding & white-label", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Advanced reporting", included: true },
      { text: "SLA guarantee", included: true },
      { text: "Custom integrations", included: true },
      { text: "Priority phone support", included: true },
    ],
    ctaVariant: "outline" as const,
    ctaText: "Contact Sales",
    highlight: false,
  },
];

export function PricingCards({ isAnnual }: PricingCardsProps) {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const monthlyEquivalent = isAnnual ? plan.annualPrice : null;

            return (
              <AnimateOnScroll key={plan.id} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-6 lg:p-8 transition-all duration-300",
                    plan.highlight
                      ? "border-brand-500 bg-white shadow-xl shadow-brand-500/10 md:scale-105 md:-my-4 z-10"
                      : "border-zinc-200 bg-white hover:shadow-lg hover:border-zinc-300"
                  )}
                >
                  {/* Popular badge */}
                  {plan.popularLabel && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand-500/25">
                        <Sparkles className="w-3 h-3" />
                        {plan.popularLabel}
                      </span>
                    </div>
                  )}

                  {/* Plan header */}
                  <div className={cn(plan.popularLabel && "mt-2")}>
                    <h3 className="font-display text-lg font-semibold text-zinc-900">{plan.name}</h3>
                    <p className="mt-0.5 text-sm text-zinc-500">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl font-bold tracking-tight text-zinc-900">
                        ${price}
                      </span>
                      <span className="text-sm text-zinc-400">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="mt-1 text-xs text-emerald-600 font-medium">
                        ${plan.monthlyPrice - plan.annualPrice * 1}/mo saved vs monthly
                      </p>
                    )}
                    {isAnnual && (
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Billed ${price * 12}/year
                      </p>
                    )}
                  </div>

                  {/* Booking limit + per-booking cost */}
                  <div className="mt-4 rounded-lg bg-zinc-50 p-3">
                    <p className="text-sm font-medium text-zinc-700">{plan.bookingLimit}</p>
                    {plan.pricePerBooking && (
                      <p className="text-xs text-zinc-400 mt-0.5">
                        That&apos;s just {plan.pricePerBooking} per booking
                      </p>
                    )}
                  </div>

                  {/* Social proof for popular plan */}
                  {plan.popularSubtext && (
                    <p className="mt-3 text-xs text-brand-600 font-medium text-center">
                      ⭐ {plan.popularSubtext}
                    </p>
                  )}

                  {/* Features */}
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <Check className={cn(
                            "h-4 w-4 flex-shrink-0 mt-0.5",
                            feature.highlight ? "text-brand-500" : "text-emerald-500"
                          )} />
                        ) : (
                          <X className="h-4 w-4 text-zinc-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            feature.included
                              ? feature.highlight
                                ? "text-zinc-900 font-medium"
                                : "text-zinc-600"
                              : "text-zinc-400"
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button
                      variant={plan.ctaVariant}
                      size="lg"
                      href={plan.id === "enterprise" ? "/contact" : siteConfig.signupUrl}
                      className={cn(
                        "w-full justify-center",
                        plan.highlight && "shadow-lg shadow-brand-500/20"
                      )}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Trial note */}
                  <p className="mt-3 text-center text-[11px] text-zinc-400">
                    {plan.id === "enterprise" ? "Custom setup included" : "14-day free trial · No credit card"}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Urgency banner */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 max-w-md mx-auto">
            <div className="rounded-full bg-amber-50 border border-amber-100 px-5 py-2.5 text-center">
              <p className="text-sm text-amber-700">
                🔒 <span className="font-semibold">Early adopter pricing</span> — lock in these rates before they increase
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 3: Feature Comparison Table

**File:** `src/components/pricing/PricingComparison.tsx`

This is the detailed comparison that closes analytical buyers.

```tsx
"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureValue = boolean | string;

interface ComparisonRow {
  feature: string;
  solo: FeatureValue;
  team: FeatureValue;
  enterprise: FeatureValue;
}

interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

const comparison: ComparisonCategory[] = [
  {
    category: "Booking Management",
    rows: [
      { feature: "Monthly booking limit", solo: "200", team: "500", enterprise: "Unlimited" },
      { feature: "Create & edit bookings", solo: true, team: true, enterprise: true },
      { feature: "Bulk status updates", solo: true, team: true, enterprise: true },
      { feature: "Guest & pricing management", solo: true, team: true, enterprise: true },
      { feature: "Booking search & filters", solo: true, team: true, enterprise: true },
      { feature: "CSV/PDF export", solo: true, team: true, enterprise: true },
    ],
  },
  {
    category: "Team & Commissions",
    rows: [
      { feature: "Team members", solo: "1", team: "Up to 10", enterprise: "Unlimited" },
      { feature: "Auto commission calculation", solo: false, team: true, enterprise: true },
      { feature: "Bulk commission payouts", solo: false, team: true, enterprise: true },
      { feature: "Agent performance reports", solo: false, team: true, enterprise: true },
      { feature: "Agent role-based access", solo: false, team: true, enterprise: true },
      { feature: "Team performance dashboard", solo: false, team: true, enterprise: true },
    ],
  },
  {
    category: "Invoicing & Payments",
    rows: [
      { feature: "PDF invoice generation", solo: true, team: true, enterprise: true },
      { feature: "Email invoices to customers", solo: true, team: true, enterprise: true },
      { feature: "Payment status tracking", solo: true, team: true, enterprise: true },
      { feature: "Tax configuration", solo: true, team: true, enterprise: true },
      { feature: "Custom invoice branding", solo: false, team: false, enterprise: true },
    ],
  },
  {
    category: "Analytics & Insights",
    rows: [
      { feature: "Financial dashboard", solo: true, team: true, enterprise: true },
      { feature: "Tour performance analytics", solo: true, team: true, enterprise: true },
      { feature: "Cash flow projections", solo: true, team: true, enterprise: true },
      { feature: "Overdue payment alerts", solo: true, team: true, enterprise: true },
      { feature: "AI smart insights", solo: true, team: true, enterprise: true },
      { feature: "Advanced custom reports", solo: false, team: false, enterprise: true },
    ],
  },
  {
    category: "Tools & Automation",
    rows: [
      { feature: "Email automation (SMTP)", solo: true, team: true, enterprise: true },
      { feature: "Review request emails", solo: true, team: true, enterprise: true },
      { feature: "Bulk payment reminders", solo: true, team: true, enterprise: true },
      { feature: "Custom form builder", solo: false, team: true, enterprise: true },
      { feature: "Public shareable forms", solo: false, team: true, enterprise: true },
      { feature: "Audit log", solo: false, team: true, enterprise: true },
    ],
  },
  {
    category: "Support & Extras",
    rows: [
      { feature: "Email support", solo: true, team: true, enterprise: true },
      { feature: "Priority email support", solo: false, team: true, enterprise: true },
      { feature: "Dedicated account manager", solo: false, team: false, enterprise: true },
      { feature: "Phone support", solo: false, team: false, enterprise: true },
      { feature: "API access", solo: false, team: false, enterprise: true },
      { feature: "Custom integrations", solo: false, team: false, enterprise: true },
      { feature: "SLA guarantee", solo: false, team: false, enterprise: true },
      { feature: "Onboarding assistance", solo: "Self-serve", team: "Guided", enterprise: "White-glove" },
    ],
  },
];

function CellValue({ value }: { value: FeatureValue }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-zinc-700">{value}</span>;
  }
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
          <Check className="h-3.5 w-3.5 text-emerald-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <Minus className="h-4 w-4 text-zinc-300" />
    </div>
  );
}

export function PricingComparison() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Compare Plans"
            title="Everything included, at every level"
            description="See exactly what you get with each plan. No hidden features behind paywalls."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-16 overflow-x-auto -mx-4 px-4">
            <div className="min-w-[640px]">
              {/* Table header */}
              <div className="grid grid-cols-[1fr_120px_120px_120px] sm:grid-cols-[1fr_140px_140px_140px] gap-0 border-b-2 border-zinc-200 pb-4 mb-0 sticky top-16 bg-zinc-50/95 backdrop-blur-sm z-10">
                <div />
                <div className="text-center">
                  <p className="text-sm font-semibold text-zinc-900">Solo</p>
                  <p className="text-xs text-zinc-400">$14/mo</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="inline-flex items-center rounded-full bg-brand-500 px-2 py-0.5 text-[9px] font-bold text-white mb-1">
                      POPULAR
                    </span>
                    <p className="text-sm font-semibold text-zinc-900">Team</p>
                    <p className="text-xs text-zinc-400">$29/mo</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-zinc-900">Enterprise</p>
                  <p className="text-xs text-zinc-400">$49/mo</p>
                </div>
              </div>

              {/* Categories and rows */}
              {comparison.map((category) => (
                <div key={category.category}>
                  {/* Category header */}
                  <div className="grid grid-cols-[1fr_120px_120px_120px] sm:grid-cols-[1fr_140px_140px_140px] gap-0 border-b border-zinc-200 bg-zinc-100/60">
                    <p className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                      {category.category}
                    </p>
                    <div />
                    <div />
                    <div />
                  </div>

                  {/* Feature rows */}
                  {category.rows.map((row, j) => (
                    <div
                      key={row.feature}
                      className={cn(
                        "grid grid-cols-[1fr_120px_120px_120px] sm:grid-cols-[1fr_140px_140px_140px] gap-0 border-b border-zinc-100 transition-colors hover:bg-white",
                        j % 2 === 0 ? "bg-transparent" : "bg-zinc-50/30"
                      )}
                    >
                      <p className="py-3 px-4 text-sm text-zinc-600">{row.feature}</p>
                      <div className="py-3 text-center"><CellValue value={row.solo} /></div>
                      <div className="py-3 text-center bg-brand-50/20"><CellValue value={row.team} /></div>
                      <div className="py-3 text-center"><CellValue value={row.enterprise} /></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 4: Pricing FAQ

**File:** `src/components/pricing/PricingFAQ.tsx`

Pricing-specific objection handling. Different from the homepage FAQ.

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
    question: "What happens when I hit my booking limit?",
    answer: "You'll get a notification when you're approaching your limit. You can upgrade your plan at any time to increase your limit. Existing bookings are never deleted or restricted — you just can't create new ones until the next billing cycle or until you upgrade.",
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Yes. You can upgrade or downgrade at any time. When upgrading, you'll get immediate access to the new features. When downgrading, changes take effect at your next billing cycle. No penalties, no lock-in contracts.",
  },
  {
    question: "Do you really not charge per booking?",
    answer: "Really. Unlike FareHarbor (3-6% per booking) or Peek Pro (commission-based), BookingHub is a flat monthly fee. Whether you have 1 booking or 500, the price is the same. We believe your revenue should stay yours.",
  },
  {
    question: "What's included in the 14-day free trial?",
    answer: "Everything. You get full access to all features of your chosen plan for 14 days. No credit card required to start. If you don't subscribe after the trial, your account simply pauses — no data is deleted.",
  },
  {
    question: "Can I add more team members than my plan allows?",
    answer: "The Solo plan is strictly 1 user. The Team plan supports up to 10. If you need more, the Enterprise plan offers unlimited team members. You can upgrade at any time.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes. We use encrypted database connections, JWT authentication, bcrypt password hashing, and complete data isolation between companies. Every action is logged in an audit trail. Your data is backed up daily.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express) via Stripe. Annual plans can also be paid via bank transfer.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "If you're not happy within the first 30 days of a paid plan, we'll refund you in full. No questions asked. We're confident you'll love BookingHub.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32">
      <Container size="narrow">
        <AnimateOnScroll>
          <SectionHeader
            badge="FAQ"
            title="Questions about pricing?"
            description="If you can't find what you're looking for, reach out and we'll get back to you within a few hours."
          />
        </AnimateOnScroll>

        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.04}>
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

## FILE 5: Enterprise CTA

**File:** `src/components/pricing/EnterpriseCTA.tsx`

A special callout for larger businesses — separate from the main CTA.

```tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Building2, Headphones, Shield, Zap } from "lucide-react";

const perks = [
  { icon: Building2, text: "Custom setup & data migration" },
  { icon: Headphones, text: "Dedicated account manager" },
  { icon: Shield, text: "SLA & uptime guarantees" },
  { icon: Zap, text: "Custom integrations & API" },
];

export function EnterpriseCTA() {
  return (
    <section className="py-20 lg:py-24 bg-zinc-50/50">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Running a larger operation?
            </h2>
            <p className="mt-3 text-base text-zinc-500 max-w-lg mx-auto">
              Multi-location companies, DMCs, and tour aggregators need custom solutions.
              Let&apos;s talk about what you need.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {perks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-2">
                  <perk.icon className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                  <span className="text-sm text-zinc-600">{perk.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                Talk to Sales
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FINAL: Assemble the Pricing Page

**File:** `src/app/pricing/page.tsx` — REPLACE ENTIRELY

```tsx
"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { EnterpriseCTA } from "@/components/pricing/EnterpriseCTA";
import { CTABanner } from "@/components/shared/CTABanner";

// Note: Since this is a client component, metadata must be handled differently.
// Move the metadata export to a separate layout.tsx file or use generateMetadata
// in a parent server component if SEO metadata is needed.
// For now, set the title via the page's head manually or accept the default.

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      {/* 1. Hero + billing toggle */}
      <PricingHero isAnnual={isAnnual} onToggle={setIsAnnual} />

      {/* 2. Pricing cards */}
      <PricingCards isAnnual={isAnnual} />

      {/* 3. Full comparison table */}
      <PricingComparison />

      {/* 4. Enterprise callout */}
      <EnterpriseCTA />

      {/* 5. FAQ */}
      <PricingFAQ />

      {/* 6. Final CTA */}
      <CTABanner
        title="Start your free trial today"
        description="14 days. All features. No credit card. See why hundreds of tour operators chose BookingHub."
      />
    </>
  );
}
```

**IMPORTANT:** Since the pricing page uses `"use client"` (for the billing toggle state), the `Metadata` export won't work directly. To fix this, create a separate metadata file:

**File:** `src/app/pricing/layout.tsx`
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing starting at $14/month. No per-booking fees. Free 14-day trial. Cancel anytime.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

---

## SECTION FLOW AND BACKGROUNDS

```
PricingHero        → white with amber glow
PricingCards       → white (continues from hero)
PricingComparison  → zinc-50/50
EnterpriseCTA      → zinc-50/50 (continues)
PricingFAQ         → white
CTABanner          → white
Footer             → zinc-50/50
```

---

## VERIFICATION CHECKLIST

```
HERO:
□ Badge "Pricing" shows
□ Title "Simple pricing, no surprises" with "no surprises" in amber
□ Subtitle mentions no per-booking fees
□ Monthly/Annual toggle works
□ "SAVE 20%" badge on Annual button
□ Toggle switches smoothly between states

PRICING CARDS:
□ 3 cards: Solo $14, Team $29, Enterprise $49
□ Team card is visually elevated (scale 105%, amber border, shadow)
□ "Most Popular" badge with sparkle icon on Team card
□ "Chosen by 70% of operators" text under Team badge
□ Prices change when toggling Annual (Solo $11, Team $23, Enterprise $39)
□ Annual shows "Billed $XXX/year" text
□ Per-booking cost shown: "$0.07 per booking" for Solo, "$0.06" for Team
□ Solo shows X marks for Commission tracking, Team management, Form builder
□ Team shows highlighted (amber check + bold) for Commission, Agent reports, Form builder
□ Enterprise shows "Contact Sales" instead of "Start Free Trial"
□ "Early adopter pricing" urgency banner below cards
□ "14-day free trial · No credit card" under Solo and Team CTAs
□ "Custom setup included" under Enterprise CTA

COMPARISON TABLE:
□ Table has 6 categories: Booking Management, Team & Commissions, Invoicing, Analytics, Tools, Support
□ Team column has subtle amber background tint
□ "POPULAR" badge above Team in header
□ Sticky header on scroll
□ Checkmarks are green circles, missing features are gray dashes
□ String values (like "200", "Up to 10", "Unlimited") show as text
□ Table scrolls horizontally on mobile
□ Row hover highlights

ENTERPRISE CTA:
□ Card with title "Running a larger operation?"
□ 4 perk items with amber icons
□ "Talk to Sales" button

FAQ:
□ 8 pricing-specific questions
□ Accordion open/close works
□ Different questions from homepage FAQ
□ Answers address pricing objections

RESPONSIVE:
□ Cards stack on mobile (1 column)
□ Team card still highlighted when stacked
□ Comparison table scrolls horizontally on mobile
□ Toggle works on mobile
□ Enterprise CTA perks wrap on mobile

GENERAL:
□ No console errors
□ No TypeScript errors
□ Page title "Pricing | BookingHub" shows in browser tab
□ All links work
□ All CTAs point to correct destinations
```

---

## FILES SUMMARY

| Action | File |
|---|---|
| CREATE | `src/components/pricing/PricingHero.tsx` |
| CREATE | `src/components/pricing/PricingCards.tsx` |
| CREATE | `src/components/pricing/PricingComparison.tsx` |
| CREATE | `src/components/pricing/PricingFAQ.tsx` |
| CREATE | `src/components/pricing/EnterpriseCTA.tsx` |
| REPLACE | `src/app/pricing/page.tsx` |
| CREATE | `src/app/pricing/layout.tsx` |

**Total: 7 files.**

---

*Phase 3B Pricing Page Complete. Proceed to Phase 3C (About Page) once verified.*
