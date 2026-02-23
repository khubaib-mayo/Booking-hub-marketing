# BOOKINGHUB MARKETING WEBSITE — PHASE 1: FOUNDATION
## Implementation Prompt for Replit Agent

---

## OBJECTIVE

Set up the complete foundation for the BookingHub marketing website — a Next.js 14 project with all shared components (Navbar, Footer, Mobile Menu), design tokens, typography, reusable UI primitives, and the project structure. After this phase, every page we build will just compose these foundation pieces.

---

## TECH STACK — INSTALL THESE

```bash
npx create-next-app@latest bookinghub-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd bookinghub-website
npm install framer-motion lucide-react clsx tailwind-merge
```

**That's it.** We're keeping dependencies minimal:
- `next` — Framework (SSR, routing, image optimization)
- `tailwindcss` — Styling
- `framer-motion` — Scroll animations, page transitions
- `lucide-react` — Icons (same library as our product)
- `clsx` + `tailwind-merge` — Utility for conditional classnames

---

## PROJECT STRUCTURE — CREATE ALL THESE FILES

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage (placeholder for Phase 2)
│   ├── pricing/
│   │   └── page.tsx            # Pricing (placeholder)
│   ├── features/
│   │   └── page.tsx            # Features (placeholder)
│   ├── about/
│   │   └── page.tsx            # About (placeholder)
│   ├── contact/
│   │   └── page.tsx            # Contact (placeholder)
│   └── globals.css             # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Global navigation
│   │   ├── MobileMenu.tsx      # Mobile hamburger overlay
│   │   └── Footer.tsx          # Global footer
│   ├── ui/
│   │   ├── Button.tsx          # Button component
│   │   ├── Container.tsx       # Max-width wrapper
│   │   ├── SectionBadge.tsx    # Small badge above section titles
│   │   ├── SectionHeader.tsx   # Reusable section title + subtitle
│   │   └── MockupFrame.tsx     # Browser/phone mockup wrapper
│   └── shared/
│       └── CTABanner.tsx       # Reusable CTA section
└── lib/
    ├── utils.ts                # cn() utility
    └── constants.ts            # Site-wide strings, nav items, footer links
```

---

## STEP 1: TAILWIND CONFIGURATION

**File:** `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",   // Primary amber
          600: "#D97706",   // Hover amber
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem", // 1408px — wider sections
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## STEP 2: GLOBAL STYLES

**File:** `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import fonts from Google */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: "Inter", system-ui, sans-serif;
    color: #18181B;
    background-color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  }

  /* Selection color */
  ::selection {
    background-color: #FEF3C7;
    color: #78350F;
  }
}

@layer utilities {
  /* Hide scrollbar for mobile menus / carousels */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Text balance for headings */
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## STEP 3: UTILITY FUNCTION

**File:** `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## STEP 4: CONSTANTS

**File:** `src/lib/constants.ts`

```ts
export const siteConfig = {
  name: "BookingHub",
  description: "The all-in-one booking platform built for tourism businesses.",
  url: "https://bookinghub.app",
  loginUrl: "https://app.bookinghub.app/login",
  signupUrl: "https://app.bookinghub.app/signup",
};

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};
```

---

## STEP 5: ROOT LAYOUT

**File:** `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BookingHub — The Booking Platform Built for Tourism",
    template: "%s | BookingHub",
  },
  description:
    "Manage bookings, track commissions, generate invoices, and grow your tour business with one powerful platform.",
  keywords: [
    "tour booking software",
    "tourism management",
    "booking platform",
    "commission tracking",
    "tour operator software",
    "invoice generator",
  ],
  openGraph: {
    title: "BookingHub — The Booking Platform Built for Tourism",
    description:
      "Manage bookings, track commissions, generate invoices, and grow your tour business.",
    url: "https://bookinghub.app",
    siteName: "BookingHub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookingHub — The Booking Platform Built for Tourism",
    description:
      "Manage bookings, track commissions, generate invoices, and grow your tour business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## STEP 6: UI PRIMITIVES

### Button Component

**File:** `src/components/ui/Button.tsx`

```tsx
import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 shadow-sm shadow-brand-500/20 hover:shadow-md hover:shadow-brand-500/25",
      secondary:
        "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 active:bg-zinc-100",
      ghost:
        "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 active:bg-zinc-100",
      outline:
        "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300",
    };

    const sizes = {
      sm: "text-sm px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-2.5 gap-2",
      lg: "text-base px-8 py-3.5 gap-2",
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
```

### Container Component

**File:** `src/components/ui/Container.tsx`

```tsx
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export function Container({ children, className, size = "default" }: ContainerProps) {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-8xl",
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}
```

### Section Badge

**File:** `src/components/ui/SectionBadge.tsx`

```tsx
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-500/10",
        className
      )}
    >
      {children}
    </span>
  );
}
```

### Section Header

**File:** `src/components/ui/SectionHeader.tsx`

```tsx
import { cn } from "@/lib/utils";
import { SectionBadge } from "./SectionBadge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-zinc-900 text-balance",
          badge && "mt-4"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-zinc-500 leading-relaxed",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
```

### Mockup Frame

**File:** `src/components/ui/MockupFrame.tsx`

This is important — it wraps content in a realistic browser or phone frame for product mockups.

```tsx
import { cn } from "@/lib/utils";

interface MockupFrameProps {
  type?: "browser" | "phone";
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function MockupFrame({
  type = "browser",
  url = "app.bookinghub.com/dashboard",
  children,
  className,
}: MockupFrameProps) {
  if (type === "phone") {
    return (
      <div
        className={cn(
          "relative mx-auto w-[280px] rounded-[2.5rem] border-[8px] border-zinc-900 bg-zinc-900 shadow-2xl",
          className
        )}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white">
          <div className="pt-8">{children}</div>
        </div>
      </div>
    );
  }

  // Browser frame
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
          <div className="h-3 w-3 rounded-full bg-zinc-300" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-zinc-100 px-3 py-1">
          <span className="text-xs text-zinc-400 select-none">{url}</span>
        </div>
      </div>
      {/* Content area */}
      <div className="relative">{children}</div>
    </div>
  );
}
```

---

## STEP 7: NAVBAR

**File:** `src/components/layout/Navbar.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-zinc-100 shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Amber icon */}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 transition-transform duration-200 group-hover:scale-105">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className="font-display text-lg font-bold text-zinc-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 rounded-lg hover:bg-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" href={siteConfig.loginUrl}>
              Log in
            </Button>
            <Button variant="primary" size="sm" href={siteConfig.signupUrl}>
              Start Free Trial
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
```

---

## STEP 8: MOBILE MENU

**File:** `src/components/layout/MobileMenu.tsx`

```tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                <span className="font-display text-lg font-bold text-zinc-900">
                  {siteConfig.name}
                </span>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-50 transition-colors"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-6 py-6 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center px-4 py-3 text-base font-medium text-zinc-700 rounded-xl hover:bg-zinc-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Actions */}
              <div className="px-6 py-6 border-t border-zinc-100 space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  href={siteConfig.signupUrl}
                  className="w-full justify-center"
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href={siteConfig.loginUrl}
                  className="w-full justify-center"
                >
                  Log in
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

---

## STEP 9: FOOTER

**File:** `src/components/layout/Footer.tsx`

```tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig, footerLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/50">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-zinc-900">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              The all-in-one booking platform built for tourism businesses.
              Manage bookings, track commissions, and grow your business.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Social links — add when available */}
            <span className="text-xs text-zinc-300">
              Built with ☀️ for tour operators worldwide
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

---

## STEP 10: CTA BANNER (shared reusable section)

**File:** `src/components/shared/CTABanner.tsx`

```tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Ready to simplify your tour business?",
  description = "Join hundreds of tour operators who switched from spreadsheets to BookingHub. Start your free 14-day trial — no credit card required.",
}: CTABannerProps) {
  return (
    <section className="py-24 lg:py-32">
      <Container size="narrow" className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 text-balance">
          {title}
        </h2>
        <p className="mt-6 text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href={siteConfig.signupUrl}>
            Start Free Trial
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Talk to Sales
          </Button>
        </div>
      </Container>
    </section>
  );
}
```

---

## STEP 11: PLACEHOLDER PAGES

Create these minimal placeholder pages so navigation works immediately:

**File:** `src/app/page.tsx`
```tsx
import { CTABanner } from "@/components/shared/CTABanner";

export default function Home() {
  return (
    <div>
      {/* Hero, features, etc. will be built in Phase 2 */}
      <section className="py-32 text-center">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900">
          The booking platform
          <br />
          <span className="text-brand-500">built for tourism</span>
        </h1>
        <p className="mt-6 text-xl text-zinc-500 max-w-2xl mx-auto">
          Manage bookings, track commissions, generate invoices, and grow your
          tour business — all in one place.
        </p>
      </section>
      <CTABanner />
    </div>
  );
}
```

**File:** `src/app/features/page.tsx`
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Features" };

export default function Features() {
  return (
    <div className="py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-zinc-900">Features</h1>
      <p className="mt-4 text-zinc-500">Coming in Phase 3</p>
    </div>
  );
}
```

**File:** `src/app/pricing/page.tsx`
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing" };

export default function Pricing() {
  return (
    <div className="py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-zinc-900">Pricing</h1>
      <p className="mt-4 text-zinc-500">Coming in Phase 3</p>
    </div>
  );
}
```

**File:** `src/app/about/page.tsx`
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <div className="py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-zinc-900">About</h1>
      <p className="mt-4 text-zinc-500">Coming in Phase 3</p>
    </div>
  );
}
```

**File:** `src/app/contact/page.tsx`
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div className="py-32 text-center">
      <h1 className="font-display text-4xl font-bold text-zinc-900">Contact</h1>
      <p className="mt-4 text-zinc-500">Coming in Phase 3</p>
    </div>
  );
}
```

---

## VERIFICATION CHECKLIST

```
PROJECT SETUP:
□ Next.js 14 project created with App Router
□ TypeScript configured
□ Tailwind CSS configured with brand colors + custom fonts
□ framer-motion installed
□ lucide-react installed
□ clsx + tailwind-merge installed

FONTS:
□ Plus Jakarta Sans loads (headings)
□ Inter loads (body text)
□ Amber selection color works (select text → amber highlight)

NAVBAR:
□ Logo (amber icon + "BookingHub" text) shows
□ 4 nav links visible on desktop: Features, Pricing, About, Contact
□ "Log in" + "Start Free Trial" buttons on desktop
□ Hamburger icon shows on mobile (<768px)
□ Clicking hamburger opens mobile menu
□ Navbar starts transparent, gets white blur background on scroll
□ Navbar is sticky (stays at top)
□ All nav links navigate to correct pages

MOBILE MENU:
□ Slides in from right
□ Shows all nav links
□ Shows "Start Free Trial" and "Log in" buttons
□ Clicking a link closes the menu
□ Clicking backdrop closes the menu
□ Pressing Escape closes the menu
□ Body scroll is locked when menu is open
□ Links have staggered entrance animation

FOOTER:
□ 4-column layout on desktop
□ Logo + description in first column
□ Product, Company, Legal link columns
□ Bottom bar with copyright
□ All links work
□ Responsive (stacks on mobile)

UI COMPONENTS:
□ Button renders in 4 variants (primary, secondary, ghost, outline)
□ Button renders in 3 sizes (sm, md, lg)
□ Primary button has amber background with shadow
□ Button works as <a> when href prop is passed
□ Container centers content with padding
□ SectionBadge renders amber pill badge
□ SectionHeader renders badge + title + description
□ MockupFrame renders browser chrome (dots + URL bar + content)
□ MockupFrame renders phone frame when type="phone"

PAGES:
□ Homepage loads with hero text + CTA banner
□ /features loads
□ /pricing loads
□ /about loads
□ /contact loads
□ All pages show Navbar and Footer

GENERAL:
□ No console errors
□ No TypeScript errors
□ Dark text on white background throughout
□ Amber (#F59E0B) accent color visible on CTAs and badges
□ Responsive at 375px, 768px, 1024px, 1440px
□ Page title shows in browser tab
```

---

## FILES SUMMARY

| Action | File |
|---|---|
| CONFIG | `tailwind.config.ts` |
| CREATE | `src/app/globals.css` |
| CREATE | `src/app/layout.tsx` |
| CREATE | `src/app/page.tsx` |
| CREATE | `src/app/features/page.tsx` |
| CREATE | `src/app/pricing/page.tsx` |
| CREATE | `src/app/about/page.tsx` |
| CREATE | `src/app/contact/page.tsx` |
| CREATE | `src/lib/utils.ts` |
| CREATE | `src/lib/constants.ts` |
| CREATE | `src/components/layout/Navbar.tsx` |
| CREATE | `src/components/layout/MobileMenu.tsx` |
| CREATE | `src/components/layout/Footer.tsx` |
| CREATE | `src/components/ui/Button.tsx` |
| CREATE | `src/components/ui/Container.tsx` |
| CREATE | `src/components/ui/SectionBadge.tsx` |
| CREATE | `src/components/ui/SectionHeader.tsx` |
| CREATE | `src/components/ui/MockupFrame.tsx` |
| CREATE | `src/components/shared/CTABanner.tsx` |

**Total: 19 files.**

---

*Phase 1 Foundation Complete. Proceed to Phase 2 (Homepage) once verified.*
