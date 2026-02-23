# BOOKINGHUB MARKETING WEBSITE — PHASE 3D: CONTACT PAGE
## Implementation Prompt for Replit Agent

---

## OBJECTIVE

Build the Contact page (`/contact`) — a conversion page that makes it effortless to get in touch. Two goals: (1) capture leads via a contact form, and (2) offer a direct demo booking option. The page should feel inviting and low-pressure — not like a corporate "fill out this form and wait 5 business days" experience.

---

## CRITICAL RULES

1. **PRESERVE all existing foundation components**
2. **Light mode only**
3. **Mobile-first responsive**
4. **Form must actually work** — submit to a Next.js API route that stores the submission or sends an email. For now, create the API route structure. If email sending isn't configured, just log to console and show a success toast.
5. **Form validation on the client** — required fields, email format check
6. **No CAPTCHA for now** — keep it frictionless

---

## FILES TO CREATE

```
src/components/contact/ContactHero.tsx
src/components/contact/ContactForm.tsx
src/components/contact/ContactInfo.tsx
src/components/contact/DemoBooking.tsx
src/app/api/contact/route.ts
```

**FILE TO MODIFY:**
```
src/app/contact/page.tsx    — COMPLETE REWRITE
```

---

## PAGE STRUCTURE

```
1. ContactHero     — Title + subtitle
2. Two-column:
   Left:  ContactForm    — Name, email, company, tour count, message
   Right: ContactInfo    — Quick info cards + social links
3. DemoBooking     — Book a demo CTA section
4. CTABanner       — Final push (or skip if demo section is enough)
```

---

## FILE 1: Contact Hero

**File:** `src/components/contact/ContactHero.tsx`

Short hero — visitors came here with intent, don't slow them down.

```tsx
import { Container } from "@/components/ui/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container>
        <AnimateOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <SectionBadge>Contact</SectionBadge>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 text-balance">
              Let&apos;s talk about your{" "}
              <span className="text-brand-500">tour business</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
              Whether you have a question, want a demo, or just want to say hello — we&apos;d love to hear from you. We typically respond within a few hours.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 2: Contact Form

**File:** `src/components/contact/ContactForm.tsx`

The form needs to feel easy. Minimal fields, clear labels, instant validation feedback.

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  company: string;
  tourCount: string;
  subject: string;
  message: string;
}

const tourCountOptions = [
  { value: "", label: "How many tours do you run?" },
  { value: "1-10", label: "1–10 per month" },
  { value: "11-50", label: "11–50 per month" },
  { value: "51-200", label: "51–200 per month" },
  { value: "200+", label: "200+ per month" },
  { value: "not-sure", label: "Not sure yet" },
];

const subjectOptions = [
  { value: "", label: "What can we help with?" },
  { value: "demo", label: "I'd like a demo" },
  { value: "pricing", label: "Question about pricing" },
  { value: "features", label: "Question about features" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "support", label: "Technical support" },
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    tourCount: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", tourCount: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  // Success state
  if (status === "success") {
    return (
      <AnimateOnScroll>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 sm:p-12 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
            <CheckCircle className="w-7 h-7 text-emerald-500" />
          </div>
          <h3 className="font-display text-xl font-semibold text-zinc-900">
            Message sent!
          </h3>
          <p className="mt-2 text-sm text-zinc-500 max-w-sm mx-auto">
            Thanks for reaching out. We&apos;ll get back to you within a few hours.
            Check your inbox for a confirmation.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            Send another message
          </button>
        </div>
      </AnimateOnScroll>
    );
  }

  return (
    <AnimateOnScroll>
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-zinc-900">
          Send us a message
        </h2>
        <p className="mt-1 text-sm text-zinc-500">
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="John Smith"
                className={cn(
                  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors",
                  errors.name
                    ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-zinc-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                )}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="john@company.com"
                className={cn(
                  "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors",
                  errors.email
                    ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-zinc-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                )}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          {/* Company + Tour count row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => updateField("company", e.target.value)}
                placeholder="Ocean Tours"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                Monthly Tours
              </label>
              <select
                value={form.tourCount}
                onChange={(e) => updateField("tourCount", e.target.value)}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 appearance-none"
              >
                {tourCountOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
              Subject
            </label>
            <select
              value={form.subject}
              onChange={(e) => updateField("subject", e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 appearance-none"
            >
              {subjectOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-zinc-700 mb-1.5">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Tell us about your tour business and how we can help..."
              rows={5}
              className={cn(
                "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors resize-none",
                errors.message
                  ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-zinc-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              )}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-3 text-sm font-medium text-white shadow-sm shadow-brand-500/20 hover:bg-brand-600 active:bg-brand-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>

          {/* Error message */}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </AnimateOnScroll>
  );
}
```

---

## FILE 3: Contact Info Sidebar

**File:** `src/components/contact/ContactInfo.tsx`

The right column — quick info, response time promise, and social links.

```tsx
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Mail, Clock, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const infoCards = [
  {
    icon: Mail,
    title: "Email us",
    detail: "hello@bookinghub.app",
    subtitle: "For general inquiries",
  },
  {
    icon: Clock,
    title: "Response time",
    detail: "Within a few hours",
    subtitle: "Mon–Fri, 9AM–6PM UTC",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    detail: "Coming soon",
    subtitle: "In-app support chat",
  },
  {
    icon: MapPin,
    title: "Based in",
    detail: "Portugal",
    subtitle: "Serving operators worldwide",
  },
];

const socialLinks = [
  { name: "Twitter / X", href: "#", label: "@bookinghub" },
  { name: "LinkedIn", href: "#", label: "BookingHub" },
  { name: "Instagram", href: "#", label: "@bookinghub" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Info cards */}
      {infoCards.map((card, i) => (
        <AnimateOnScroll key={card.title} delay={i * 0.08} direction="right">
          <div className="flex items-start gap-4 rounded-xl border border-zinc-100 bg-white p-5 transition-all duration-200 hover:shadow-md hover:border-zinc-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 border border-brand-100 flex-shrink-0">
              <card.icon className="h-4 w-4 text-brand-500" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-zinc-400">{card.title}</p>
              <p className="text-sm font-semibold text-zinc-900 mt-0.5">{card.detail}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{card.subtitle}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}

      {/* Social links */}
      <AnimateOnScroll delay={0.4} direction="right">
        <div className="rounded-xl border border-zinc-100 bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
            Follow Us
          </p>
          <div className="space-y-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors group"
              >
                <div>
                  <span className="font-medium">{link.name}</span>
                  <span className="text-zinc-400 ml-2">{link.label}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-brand-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}
```

---

## FILE 4: Demo Booking Section

**File:** `src/components/contact/DemoBooking.tsx`

A visual break and alternative CTA for people who prefer a call over a form.

```tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Video, Clock, Users, CheckCircle } from "lucide-react";

const demoPerks = [
  { icon: Clock, text: "15-minute call" },
  { icon: Video, text: "Screen-share walkthrough" },
  { icon: Users, text: "Personalized to your business" },
  { icon: CheckCircle, text: "No commitment required" },
];

export function DemoBooking() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-12 text-center">
            {/* Icon */}
            <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6">
              <Video className="w-6 h-6 text-brand-500" strokeWidth={1.5} />
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Prefer a live walkthrough?
            </h2>
            <p className="mt-3 text-base text-zinc-500 max-w-md mx-auto">
              Book a free 15-minute demo and we&apos;ll show you exactly how BookingHub
              works for your type of tour business.
            </p>

            {/* Perks */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {demoPerks.map((perk) => (
                <div key={perk.text} className="flex items-center gap-2">
                  <perk.icon className="w-4 h-4 text-brand-500" strokeWidth={1.5} />
                  <span className="text-sm text-zinc-600">{perk.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button variant="primary" size="lg" href="mailto:hello@bookinghub.app?subject=Demo%20Request">
                Book a Demo
              </Button>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Or email us at{" "}
              <a href="mailto:hello@bookinghub.app" className="text-brand-600 hover:text-brand-700 font-medium">
                hello@bookinghub.app
              </a>
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
```

---

## FILE 5: API Route

**File:** `src/app/api/contact/route.ts`

Basic API route to handle form submissions. For now, it logs the data and returns success. Replace with actual email sending (Resend, SendGrid, or your SMTP) when ready.

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, tourCount, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: Replace this console.log with actual email sending.
    //
    // Option 1: Use Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "BookingHub <noreply@bookinghub.app>",
    //   to: "hello@bookinghub.app",
    //   subject: `Contact Form: ${subject || "General Inquiry"} from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nTours: ${tourCount}\nSubject: ${subject}\n\nMessage:\n${message}`,
    // });
    //
    // Option 2: Use your existing SMTP service
    // await sendEmail({ to: "hello@bookinghub.app", subject: ..., body: ... });

    console.log("📩 Contact form submission:", {
      name,
      email,
      company,
      tourCount,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
```

---

## FINAL: Assemble the Contact Page

**File:** `src/app/contact/page.tsx` — REPLACE ENTIRELY

```tsx
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { DemoBooking } from "@/components/contact/DemoBooking";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the BookingHub team. Request a demo, ask about pricing, or just say hello. We respond within a few hours.",
};

export default function Contact() {
  return (
    <>
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Form + Info two-column layout */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form — takes 3/5 of the width */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            {/* Info sidebar — takes 2/5 */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Demo booking CTA */}
      <DemoBooking />
    </>
  );
}
```

---

## SECTION FLOW AND BACKGROUNDS

```
ContactHero    → white with amber glow
Form + Info    → white (continues)
DemoBooking    → zinc-50/50
Footer         → zinc-50/50
```

---

## VERIFICATION CHECKLIST

```
HERO:
□ Badge "Contact" shows
□ Title "Let's talk about your tour business"
□ "tour business" in amber
□ Subtitle mentions response time

FORM:
□ Form has rounded-2xl border card wrapper
□ "Send us a message" title + subtitle
□ Name + Email on same row (desktop), stacked (mobile)
□ Company + Monthly Tours on same row
□ Subject dropdown with 7 options
□ Message textarea with 5 rows
□ "Send Message" amber button with send icon
□ Required fields have red * markers

FORM VALIDATION:
□ Empty name → "Name is required" error
□ Empty email → "Email is required" error
□ Invalid email → "Please enter a valid email" error
□ Empty message → "Message is required" error
□ Errors clear when user starts typing in the field
□ Error borders turn red, focus rings turn red

FORM SUBMISSION:
□ Button shows "Sending..." with spinner during submission
□ Successful submit → green success card with checkmark
□ Success card says "Message sent!" + "We'll get back to you within a few hours"
□ "Send another message" link resets the form
□ Failed submit → red error text below button
□ Form data posts to /api/contact

API ROUTE:
□ /api/contact accepts POST requests
□ Validates required fields (name, email, message)
□ Validates email format
□ Returns 200 on success
□ Returns 400 on validation failure
□ Returns 500 on server error
□ Logs submission to console (until email is configured)

INFO SIDEBAR:
□ 4 info cards: Email, Response time, Live chat, Location
□ Cards have amber icons
□ Cards have hover shadow
□ Social links section with Twitter, LinkedIn, Instagram
□ Social links have arrow icon on hover

DEMO BOOKING:
□ Video icon in amber box
□ "Prefer a live walkthrough?" title
□ 4 perks: 15-min call, Screen-share, Personalized, No commitment
□ "Book a Demo" amber button
□ Email fallback link below button
□ Off-white background

RESPONSIVE:
□ Form + Info stack on mobile (form first, info below)
□ Name/Email fields stack on mobile
□ Company/Tours fields stack on mobile
□ "Send Message" button is full-width on mobile
□ Success card is centered on all sizes
□ Demo perks wrap on mobile

GENERAL:
□ Page title "Contact | BookingHub" in browser tab
□ No console errors
□ No TypeScript errors
□ Scroll animations work
□ Tab order is logical (can navigate form with keyboard)
□ All links work
```

---

## FILES SUMMARY

| Action | File |
|---|---|
| CREATE | `src/components/contact/ContactHero.tsx` |
| CREATE | `src/components/contact/ContactForm.tsx` |
| CREATE | `src/components/contact/ContactInfo.tsx` |
| CREATE | `src/components/contact/DemoBooking.tsx` |
| CREATE | `src/app/api/contact/route.ts` |
| REPLACE | `src/app/contact/page.tsx` |

**Total: 6 files.**

---

## NOTES

**Replace these with your real info:**
- `hello@bookinghub.app` — your actual contact email
- `Portugal` — your actual location
- Social links (`#` placeholders) — your real Twitter/LinkedIn/Instagram URLs
- Demo booking `mailto:` link — replace with Calendly embed URL when ready

**To add Calendly later:**
Replace the "Book a Demo" button href with your Calendly link, or embed the Calendly widget directly in the DemoBooking component using an iframe.

---

*Phase 3D Contact Page Complete. All 4 inner pages delivered (Features, Pricing, About, Contact). The marketing website is now complete with 5 full pages + Navbar + Footer.*
