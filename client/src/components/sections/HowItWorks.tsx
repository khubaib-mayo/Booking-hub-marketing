import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
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
    <section className="py-24 lg:py-32" data-testid="section-how-it-works">
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
