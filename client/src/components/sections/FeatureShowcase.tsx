import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { SectionBadge } from "@/components/marketing/ui/SectionBadge";
import { MockupFrame } from "@/components/marketing/ui/MockupFrame";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { CalendarCheck, Users, FileText, TrendingUp, CheckCircle } from "lucide-react";
import { BookingsMockup } from "@/components/mockups/BookingsMockup";
import { CommissionsMockup } from "@/components/mockups/CommissionsMockup";
import { InvoiceMockup } from "@/components/mockups/InvoiceMockup";
import { FinancialMockup } from "@/components/mockups/FinancialMockup";

const features = [
  {
    badge: "Bookings",
    title: "Smart booking management that actually works",
    description: "Create, search, filter, and manage all your bookings in one powerful table. Track status, payments, deposits, and guest details — with bulk actions to save hours.",
    bullets: [
      "Upcoming, Completed, and Cancelled tracking",
      "Deposit and remaining balance management",
      "Bulk status updates and CSV/PDF exports",
      "Search and filter by date, agent, status",
    ],
    icon: CalendarCheck,
    mockupUrl: "app.tournetix.com/bookings",
    mockup: BookingsMockup,
  },
  {
    badge: "Commissions",
    title: "Automatic commission tracking — zero spreadsheets",
    description: "Commissions calculate automatically when bookings are created. See who earned what, mark payments, and run bulk payouts in seconds.",
    bullets: [
      "Auto-calculated from each booking",
      "Pending, Paid, and Cancelled statuses",
      "Bulk mark-as-paid for payroll day",
      "Per-agent performance breakdowns",
    ],
    icon: Users,
    mockupUrl: "app.tournetix.com/commissions",
    mockup: CommissionsMockup,
  },
  {
    badge: "Invoicing",
    title: "Professional invoices in one click",
    description: "Generate beautiful PDF invoices from any booking. Email them directly to customers with payment tracking. No more Word templates.",
    bullets: [
      "Auto-generated from booking data",
      "PDF download and direct email",
      "Tax calculation and line items",
      "Payment status tracking",
    ],
    icon: FileText,
    mockupUrl: "app.tournetix.com/invoices",
    mockup: InvoiceMockup,
  },
  {
    badge: "Analytics",
    title: "Know exactly where your business stands",
    description: "Revenue trends, cash flow projections, tour performance rankings, and AI-powered insights — all updated in real time.",
    bullets: [
      "Revenue and cash flow dashboards",
      "Tour-by-tour performance comparison",
      "Overdue payment alerts and reminders",
      "AI-generated smart business insights",
    ],
    icon: TrendingUp,
    mockupUrl: "app.tournetix.com/analytics",
    mockup: FinancialMockup,
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-feature-showcase">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Features"
            title="Everything you need, nothing you don't"
            description="Tournetix replaces your spreadsheets, calculators, invoice templates, and email chains with one intelligent platform."
          />
        </AnimateOnScroll>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {features.map((feature, i) => {
            const isReversed = i % 2 === 1;
            const MockupComponent = feature.mockup;
            return (
              <div
                key={feature.title}
                className={`flex flex-col gap-12 lg:gap-16 lg:items-center ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
                data-testid={`feature-showcase-${feature.badge.toLowerCase()}`}
              >
                <AnimateOnScroll className="flex-1 lg:max-w-lg" direction={isReversed ? "right" : "left"}>
                  <SectionBadge>{feature.badge}</SectionBadge>
                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 text-balance">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base text-zinc-500 leading-relaxed">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </AnimateOnScroll>

                <AnimateOnScroll className="flex-1" direction={isReversed ? "left" : "right"}>
                  <MockupFrame url={feature.mockupUrl}>
                    <MockupComponent />
                  </MockupFrame>
                </AnimateOnScroll>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
