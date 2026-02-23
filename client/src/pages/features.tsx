import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { CTABanner } from "@/components/marketing/shared/CTABanner";
import {
  Calendar,
  BarChart3,
  FileText,
  Users,
  Star,
  Zap,
  Globe,
  Shield,
  Smartphone,
  CreditCard,
  Bell,
  PieChart,
} from "lucide-react";

const featureCategories = [
  {
    badge: "Booking Management",
    title: "Accept bookings around the clock",
    description: "A powerful booking engine that works while you sleep. Real-time availability, instant confirmations, and automated reminders.",
    features: [
      { icon: Calendar, title: "Real-Time Availability", description: "Sync availability across all channels instantly. No more double bookings." },
      { icon: Globe, title: "Multi-Channel Distribution", description: "Sell on your website, OTAs, and partner sites from one dashboard." },
      { icon: Smartphone, title: "Mobile-First Design", description: "Your customers can book from any device with our responsive booking widget." },
      { icon: Bell, title: "Smart Notifications", description: "Automated email and SMS confirmations, reminders, and follow-ups." },
    ],
  },
  {
    badge: "Financial Tools",
    title: "Track every dollar, effortlessly",
    description: "From commission calculations to invoice generation, keep your finances organized and transparent.",
    features: [
      { icon: BarChart3, title: "Commission Tracking", description: "Automatically calculate agent commissions and partner payouts with custom rates." },
      { icon: FileText, title: "Invoice Generation", description: "Create branded invoices in seconds. Schedule recurring billing automatically." },
      { icon: CreditCard, title: "Payment Processing", description: "Accept payments online with integrated processing. Support for multiple currencies." },
      { icon: PieChart, title: "Financial Reports", description: "Revenue breakdowns, profit margins, and seasonal trends at your fingertips." },
    ],
  },
  {
    badge: "Growth Tools",
    title: "Grow your business smarter",
    description: "Built-in tools to help you attract more customers, collect reviews, and understand your business performance.",
    features: [
      { icon: Users, title: "Customer CRM", description: "Build detailed guest profiles. Track preferences, history, and lifetime value." },
      { icon: Star, title: "Review Collection", description: "Automated post-trip review requests for TripAdvisor, Google, and more." },
      { icon: Zap, title: "Analytics Dashboard", description: "Real-time insights into bookings, revenue, and customer behavior." },
      { icon: Shield, title: "Data Security", description: "Enterprise-grade security with GDPR compliance and encrypted data storage." },
    ],
  },
];

export default function Features() {
  return (
    <div>
      <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50/40 via-white to-white" />
        </div>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold text-brand-600 ring-1 ring-inset ring-brand-500/10 mb-6" data-testid="badge-features-page">
              Features
            </span>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-features-title"
            >
              Powerful tools for modern tour operators
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage, grow, and scale your tourism business — in one beautiful platform.
            </p>
          </div>
        </Container>
      </section>

      {featureCategories.map((category, categoryIndex) => (
        <section
          key={category.badge}
          className={`py-24 lg:py-32 ${categoryIndex % 2 === 1 ? "bg-zinc-50/50" : ""}`}
          data-testid={`section-feature-category-${categoryIndex}`}
        >
          <Container>
            <SectionHeader
              badge={category.badge}
              title={category.title}
              description={category.description}
            />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {category.features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-300 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-900/5"
                  data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-zinc-900">
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
      ))}

      <CTABanner />
    </div>
  );
}
