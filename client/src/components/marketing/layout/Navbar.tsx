import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/lib/constants";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
        data-testid="navbar"
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="link-logo">
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

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium transition-colors rounded-lg",
                  location === item.href
                    ? "text-zinc-900 bg-zinc-50"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                )}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <MarketingButton variant="ghost" size="sm" href={siteConfig.loginUrl}>
              Log in
            </MarketingButton>
            <MarketingButton variant="primary" size="sm" href={siteConfig.signupUrl}>
              Start Free Trial
            </MarketingButton>
          </div>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-50 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            data-testid="button-mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="h-16" />
    </>
  );
}
