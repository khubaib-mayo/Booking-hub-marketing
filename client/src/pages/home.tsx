import { CTABanner } from "@/components/marketing/shared/CTABanner";
import { siteConfig } from "@/lib/constants";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { Container } from "@/components/marketing/ui/Container";
import { ArrowRight, Calendar, BarChart3, FileText, Users, Star, Zap } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking Engine",
    description: "Accept and manage bookings 24/7 with real-time availability and instant confirmations.",
  },
  {
    icon: BarChart3,
    title: "Commission Tracking",
    description: "Automatically calculate and track agent commissions, referral fees, and partner payouts.",
  },
  {
    icon: FileText,
    title: "Invoice Generation",
    description: "Create professional invoices in seconds. Automate recurring billing and payment reminders.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Build lasting relationships with a complete CRM designed for tour operators.",
  },
  {
    icon: Star,
    title: "Review Collection",
    description: "Automatically request reviews after trips. Boost your reputation on TripAdvisor and Google.",
  },
  {
    icon: Zap,
    title: "Instant Reports",
    description: "Real-time dashboards showing revenue, occupancy rates, and booking trends at a glance.",
  },
];

const stats = [
  { value: "2,500+", label: "Tour operators" },
  { value: "1.2M", label: "Bookings managed" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "35%", label: "Revenue increase" },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-100/30 rounded-full blur-3xl" />
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-inset ring-brand-500/10 mb-8" data-testid="badge-hero">
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Now with AI-powered insights
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-hero-title"
            >
              The booking platform{" "}
              <span className="relative">
                <span className="relative z-10 text-brand-500">built for tourism</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
              Manage bookings, track commissions, generate invoices, and grow your
              tour business — all in one place.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MarketingButton variant="primary" size="lg" href={siteConfig.signupUrl}>
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </MarketingButton>
              <MarketingButton variant="secondary" size="lg" href="/features">
                See All Features
              </MarketingButton>
            </div>

            <p className="mt-4 text-sm text-zinc-400">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 border-y border-zinc-100 bg-zinc-50/50" data-testid="section-stats">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-zinc-900" data-testid={`text-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32" data-testid="section-features">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-500/10">
              Features
            </span>
            <h2
              className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Everything you need to run your tour business
            </h2>
            <p className="mt-4 text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              From booking management to commission tracking, BookingHub gives you
              the tools to focus on what matters — creating unforgettable experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-zinc-100 bg-white p-8 transition-all duration-300 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-900/5"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32 bg-zinc-900 text-white" data-testid="section-social-proof">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              Trusted by tour operators across the globe
            </h2>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              From small adventure tours to large-scale travel agencies, BookingHub
              powers tourism businesses worldwide.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "BookingHub cut our admin time in half. We now spend more time with our guests and less time on spreadsheets.",
                name: "Sarah Chen",
                role: "CEO, Pacific Adventures",
              },
              {
                quote: "The commission tracking alone saved us thousands. We finally have clear visibility into our partner payouts.",
                name: "Marco Rivera",
                role: "Operations Director, SunTours",
              },
              {
                quote: "Setting up took less than a day. Our team was up and running with the booking engine by lunchtime.",
                name: "Amelia Okafor",
                role: "Founder, Safari Trails",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-8"
                data-testid={`card-testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-display font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{testimonial.name}</p>
                    <p className="text-xs text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </div>
  );
}
