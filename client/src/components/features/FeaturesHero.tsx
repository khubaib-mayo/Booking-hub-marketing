import { Container } from "@/components/marketing/ui/Container";
import { SectionBadge } from "@/components/marketing/ui/SectionBadge";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
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
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32" data-testid="section-features-hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-white" />
      </div>

      <Container>
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <SectionBadge>Features</SectionBadge>
            <h1
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
              data-testid="text-features-title"
            >
              Everything you need to run your tour business
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto">
              One platform replaces your spreadsheets, calculators, invoice templates, and email chains. Here's what's inside.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-200"
                data-testid={`pill-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
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
