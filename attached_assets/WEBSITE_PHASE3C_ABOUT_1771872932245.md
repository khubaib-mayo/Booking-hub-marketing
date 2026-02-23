# BOOKINGHUB MARKETING WEBSITE — PHASE 3C: ABOUT PAGE
## Implementation Prompt for Replit Agent

---

## OBJECTIVE

Build the About page (`/about`) — a page that builds human connection and trust. Visitors who come here are evaluating whether they trust the people behind the product. This page answers: Who built this? Why? What do they stand for? The tone should be warm, personal, and confident — not corporate.

---

## CRITICAL RULES

1. **PRESERVE all existing foundation components**
2. **Light mode only**
3. **Mobile-first responsive**
4. **Warm and personal tone** — this is a founder's story, not a corporate brochure
5. **No placeholder text that says "coming soon"** — everything should feel complete

---

## FILE TO MODIFY

```
src/app/about/page.tsx    — COMPLETE REWRITE
```

**New files to create:**
```
src/components/about/AboutHero.tsx
src/components/about/OurStory.tsx
src/components/about/Values.tsx
src/components/about/AboutStats.tsx
src/components/about/Team.tsx
src/components/about/JoinUs.tsx
```

---

## PAGE STRUCTURE

```
1. AboutHero     — Title + personal opening line
2. OurStory      — The founder story (why BookingHub exists)
3. Values        — 4 core values
4. AboutStats    — Impact numbers
5. Team          — Founder + open positions
6. JoinUs        — Hiring callout
7. CTABanner     — Final CTA
```

---

## FILE 1: About Hero

**File:** `src/components/about/AboutHero.tsx`

Short and human. Not a marketing pitch — a personal greeting.

```tsx
import { Container } from "@/components/ui/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container size="narrow">
        <AnimateOnScroll>
          <div className="text-center">
            <SectionBadge>About Us</SectionBadge>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 text-balance">
              We&apos;re building the tools we{" "}
              <span className="text-brand-500">wished existed</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              BookingHub started with a simple frustration: why is running a tour business
              still so manual? We set out to change that.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 2: Our Story

**File:** `src/components/about/OurStory.tsx`

This is the emotional core of the page. A narrative, not bullet points.

```tsx
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function OurStory() {
  return (
    <section className="py-20 lg:py-28">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl">
            {/* Section label */}
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-6">
              Our Story
            </p>

            {/* Narrative — long-form, personal */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
              <p>
                Tour operators are some of the hardest working people in the world.
                They wake up before sunrise, spend their days creating incredible experiences
                for travelers, and then come home to hours of admin work — updating spreadsheets,
                calculating commissions, chasing payments, creating invoices one by one.
              </p>

              <p>
                We saw this firsthand. The tools that existed were either built for
                massive enterprises (too complex, too expensive) or were generic scheduling
                apps that didn&apos;t understand tourism at all (no commission tracking, no
                group bookings, no deposit management).
              </p>

              <p className="text-zinc-900 font-medium">
                So we built BookingHub — the platform we wished existed when we were
                running a tour operation ourselves.
              </p>

              <p>
                Every feature exists because a real tour operator needed it. Commission
                tracking exists because we spent hours in Excel getting it wrong. The
                invoice generator exists because we were tired of copy-pasting into Word
                templates. The financial dashboard exists because we had no idea if our
                business was profitable until tax season.
              </p>

              <p>
                We believe tour operators deserve the same quality of tools that billion-dollar
                companies get — but at a price that makes sense for a 5-person team in
                Lisbon or a solo dive instructor in Bali.
              </p>

              <p>
                That&apos;s what we&apos;re building. And we&apos;re just getting started.
              </p>
            </div>

            {/* Founder signature line */}
            <div className="mt-10 pt-8 border-t border-zinc-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-base font-bold text-brand-600">BH</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">The BookingHub Team</p>
                  <p className="text-xs text-zinc-400">Founded 2025 · Building from Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 3: Values

**File:** `src/components/about/Values.tsx`

4 core values — each one feels like a decision, not a platitude.

```tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Eye, Zap, Heart, Shield } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Clarity over complexity",
    description:
      "Tour operators don't have time to learn complicated software. Every screen, every button, every workflow in BookingHub is designed to be immediately obvious. If it needs a tutorial, we redesign it.",
  },
  {
    icon: Zap,
    title: "Automate the boring stuff",
    description:
      "Commission calculations, invoice generation, payment reminders, status updates — if a computer can do it, a human shouldn't have to. We automate everything we can so operators can focus on their guests.",
  },
  {
    icon: Heart,
    title: "Built for the small guys",
    description:
      "We're not chasing enterprise contracts. We build for the 5-person tour company in Cancún, the solo dive instructor in Thailand, the family-run boat tour in Greece. Pricing, features, and support — all designed for small teams.",
  },
  {
    icon: Shield,
    title: "Your data, your business",
    description:
      "We don't take a cut of your bookings. We don't sell your customer data. We don't lock you into annual contracts. Flat pricing, full data export, and you can leave anytime. Your business is yours.",
  },
];

export function Values() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Our Values"
            title="What we believe"
            description="These aren't wall posters. They're the decisions we make every day when building BookingHub."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {values.map((value, i) => (
            <AnimateOnScroll key={value.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-zinc-200 hover:-translate-y-0.5 h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 border border-brand-100">
                  <value.icon className="h-5 w-5 text-brand-500" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                  {value.description}
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

## FILE 4: About Stats

**File:** `src/components/about/AboutStats.tsx`

A lighter version of the homepage stats — focused on the company story.

```tsx
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

const stats = [
  { value: "2025", label: "Founded" },
  { value: "40+", label: "Features shipped" },
  { value: "20+", label: "Countries served" },
  { value: "0%", label: "Per-booking fees" },
];

export function AboutStats() {
  return (
    <section className="py-16 lg:py-20 border-y border-zinc-100">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-500">{stat.label}</p>
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

## FILE 5: Team

**File:** `src/components/about/Team.tsx`

Founder section + team growth message. Designed to scale as you add people.

```tsx
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Linkedin, Twitter, Globe } from "lucide-react";

/*
  IMPORTANT: Replace the placeholder founder info below with your real details.
  - name: Your full name
  - role: Your title (e.g., "Founder & CEO")
  - bio: 2-3 sentences about your background
  - initials: Your initials for the avatar
  - social links: Add your real URLs or remove the ones you don't use

  To add more team members later, just add more objects to the `team` array.
*/

const team = [
  {
    name: "Usman",
    role: "Founder & CEO",
    bio: "Built BookingHub from the ground up after seeing firsthand how tour operators struggle with manual operations. Passionate about creating tools that let small businesses compete with the big players.",
    initials: "U",
    links: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  // Add more team members here as your team grows:
  // {
  //   name: "New Hire",
  //   role: "Head of Growth",
  //   bio: "...",
  //   initials: "NH",
  //   links: { ... },
  // },
];

export function Team() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Our Team"
            title="The people behind BookingHub"
            description="We're a small, focused team that moves fast and ships every week."
          />
        </AnimateOnScroll>

        <div className="mt-16 flex justify-center">
          <div className={`grid gap-8 ${
            team.length === 1
              ? "grid-cols-1 max-w-md"
              : team.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl"
          }`}>
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-zinc-200">
                  {/* Avatar */}
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>

                  {/* Info */}
                  <h3 className="mt-5 font-display text-lg font-semibold text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-brand-500">{member.role}</p>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{member.bio}</p>

                  {/* Social links */}
                  <div className="mt-5 flex items-center justify-center gap-3">
                    {member.links.linkedin && member.links.linkedin !== "#" && (
                      <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.twitter && member.links.twitter !== "#" && (
                      <a href={member.links.twitter} target="_blank" rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.website && member.links.website !== "#" && (
                      <a href={member.links.website} target="_blank" rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
```

---

## FILE 6: Join Us

**File:** `src/components/about/JoinUs.tsx`

Hiring section — even if you're not actively hiring yet, this signals growth and ambition.

```tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

const openRoles = [
  {
    title: "Head of Growth",
    type: "Full-time · Remote",
    description: "Drive our go-to-market strategy. Tourism industry connections a huge plus.",
  },
  {
    title: "Full-Stack Engineer",
    type: "Full-time · Remote",
    description: "React, TypeScript, Node.js, PostgreSQL. Help us build the next 50 features.",
  },
  {
    title: "Customer Success Lead",
    type: "Full-time · Remote",
    description: "Onboard tour operators, gather feedback, and turn users into champions.",
  },
];

export function JoinUs() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
              Careers
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 text-balance">
              Help us build the future of tourism software
            </h2>
            <p className="mt-4 text-base text-zinc-500 max-w-xl mx-auto">
              We&apos;re a remote-first team looking for people who care about craft,
              move fast, and want to make a real impact on small businesses worldwide.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {openRoles.map((role, i) => (
            <AnimateOnScroll key={role.title} delay={i * 0.1}>
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-zinc-300 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 border border-brand-100 flex-shrink-0 mt-0.5">
                    <Briefcase className="h-4 w-4 text-brand-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 group-hover:text-brand-600 transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-zinc-400" />
                      <p className="text-xs text-zinc-400">{role.type}</p>
                    </div>
                    <p className="mt-1.5 text-sm text-zinc-500">{role.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-brand-500 transition-colors flex-shrink-0 hidden sm:block" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-400 mb-4">
              Don&apos;t see your role? We&apos;re always looking for talented people.
            </p>
            <Button variant="outline" size="md" href="/contact">
              Send Us Your CV
            </Button>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FINAL: Assemble the About Page

**File:** `src/app/about/page.tsx` — REPLACE ENTIRELY

```tsx
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { Values } from "@/components/about/Values";
import { AboutStats } from "@/components/about/AboutStats";
import { Team } from "@/components/about/Team";
import { JoinUs } from "@/components/about/JoinUs";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "BookingHub was built by tour operators, for tour operators. Learn our story, meet the team, and see what we stand for.",
};

export default function About() {
  return (
    <>
      {/* 1. Hero — personal greeting */}
      <AboutHero />

      {/* 2. Founder story — why we built this */}
      <OurStory />

      {/* 3. Stats bar — impact numbers */}
      <AboutStats />

      {/* 4. Values — what we believe */}
      <Values />

      {/* 5. Team — who we are */}
      <Team />

      {/* 6. Careers — join us */}
      <JoinUs />

      {/* 7. CTA */}
      <CTABanner
        title="Want to see what we've built?"
        description="Take BookingHub for a spin. 14-day free trial, no credit card required."
      />
    </>
  );
}
```

---

## SECTION FLOW AND BACKGROUNDS

```
AboutHero    → white with amber glow
OurStory     → white
AboutStats   → white with top+bottom borders
Values       → zinc-50/50
Team         → white
JoinUs       → zinc-50/50
CTABanner    → white
Footer       → zinc-50/50
```

---

## VERIFICATION CHECKLIST

```
HERO:
□ Badge "About Us" shows
□ Title "We're building the tools we wished existed"
□ "wished existed" in amber
□ Subtitle is personal and warm
□ Amber gradient background

OUR STORY:
□ "Our Story" label in amber uppercase
□ 6 paragraphs of narrative text
□ Third paragraph is bold/medium weight (the thesis statement)
□ Founder signature at bottom with amber avatar circle
□ "The BookingHub Team · Founded 2025 · Building from Portugal"
□ Narrow width (max-w-2xl) for comfortable reading

STATS:
□ 4 stats: Founded 2025, 40+ Features, 20+ Countries, 0% Per-booking fees
□ Top and bottom borders
□ 2x2 grid on mobile, 4 columns on desktop

VALUES:
□ 4 value cards in 2x2 grid
□ Amber icons on each card
□ Titles: Clarity over complexity, Automate the boring stuff, Built for the small guys, Your data your business
□ Cards have hover lift + shadow
□ Off-white background

TEAM:
□ Founder card centered (single column layout for 1 person)
□ Avatar with gradient amber circle and initial
□ Name, role (in amber), bio text
□ Social links show only if URLs are not "#"
□ Grid adjusts automatically for 1, 2, or 3+ team members

JOIN US:
□ 3 open role cards: Head of Growth, Full-Stack Engineer, Customer Success Lead
□ Each has briefcase icon, title, location, description
□ Arrow icon on right (desktop)
□ Cards have hover effect
□ "Don't see your role? Send Us Your CV" below

CTA:
□ "Want to see what we've built?" title
□ Two buttons work correctly

RESPONSIVE:
□ Story text is readable on mobile (not too wide)
□ Values cards stack on mobile
□ Team card is full-width on mobile
□ Job cards stack text above arrow on mobile
□ Stats are 2x2 on mobile

GENERAL:
□ Page title "About | BookingHub" in browser tab
□ No console errors
□ No TypeScript errors
□ Scroll animations work
□ All links functional
```

---

## FILES SUMMARY

| Action | File |
|---|---|
| CREATE | `src/components/about/AboutHero.tsx` |
| CREATE | `src/components/about/OurStory.tsx` |
| CREATE | `src/components/about/Values.tsx` |
| CREATE | `src/components/about/AboutStats.tsx` |
| CREATE | `src/components/about/Team.tsx` |
| CREATE | `src/components/about/JoinUs.tsx` |
| REPLACE | `src/app/about/page.tsx` |

**Total: 7 files.**

---

## NOTE TO FOUNDER

Replace these placeholders with your real info:
- **Team section:** Update the founder name, bio, initials, and social links
- **"Building from Portugal"** — Update to your actual location
- **Open roles** — Adjust titles/descriptions to match what you actually need, or remove if not hiring yet

---

*Phase 3C About Page Complete. Proceed to Phase 3D (Contact Page) once verified.*
