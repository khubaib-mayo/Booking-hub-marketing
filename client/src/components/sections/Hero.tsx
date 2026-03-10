import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { MockupFrame } from "@/components/marketing/ui/MockupFrame";
import { SectionBadge } from "@/components/marketing/ui/SectionBadge";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40" data-testid="section-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge><Sparkles className="w-3.5 h-3.5 mr-1.5" /> Now with AI-powered insights</SectionBadge>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="text-hero-title"
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

          <motion.p
            className="mt-8 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="text-hero-subtitle"
          >
            Manage bookings, track commissions, generate invoices, and grow your
            tour business — all in one place.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MarketingButton variant="primary" size="lg" href={siteConfig.signupUrl} data-testid="button-start-trial">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </MarketingButton>
            <MarketingButton variant="secondary" size="lg" href="/features" data-testid="button-see-features">
              See All Features
            </MarketingButton>
          </motion.div>

          <motion.p
            className="mt-5 text-sm text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            No credit card required. 14-day free trial.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MockupFrame url="app.tournetix.com/dashboard">
            <DashboardMockup />
          </MockupFrame>
        </motion.div>
      </Container>
    </section>
  );
}
