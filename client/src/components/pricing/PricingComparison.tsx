import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureValue = boolean | string;

interface ComparisonRow {
  feature: string;
  solo: FeatureValue;
  team: FeatureValue;
  enterprise: FeatureValue;
}

interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

const comparison: ComparisonCategory[] = [
  {
    category: "Booking Management",
    rows: [
      { feature: "Monthly booking limit", solo: "200", team: "500", enterprise: "Unlimited" },
      { feature: "Create & edit bookings", solo: true, team: true, enterprise: true },
      { feature: "Bulk status updates", solo: true, team: true, enterprise: true },
      { feature: "Guest & pricing management", solo: true, team: true, enterprise: true },
      { feature: "Booking search & filters", solo: true, team: true, enterprise: true },
      { feature: "CSV/PDF export", solo: true, team: true, enterprise: true },
    ],
  },
  {
    category: "Team & Commissions",
    rows: [
      { feature: "Team members", solo: "1", team: "Up to 10", enterprise: "Unlimited" },
      { feature: "Auto commission calculation", solo: false, team: true, enterprise: true },
      { feature: "Bulk commission payouts", solo: false, team: true, enterprise: true },
      { feature: "Agent performance reports", solo: false, team: true, enterprise: true },
      { feature: "Agent role-based access", solo: false, team: true, enterprise: true },
      { feature: "Team performance dashboard", solo: false, team: true, enterprise: true },
    ],
  },
  {
    category: "Invoicing & Payments",
    rows: [
      { feature: "PDF invoice generation", solo: true, team: true, enterprise: true },
      { feature: "Email invoices to customers", solo: true, team: true, enterprise: true },
      { feature: "Payment status tracking", solo: true, team: true, enterprise: true },
      { feature: "Tax configuration", solo: true, team: true, enterprise: true },
      { feature: "Custom invoice branding", solo: false, team: false, enterprise: true },
    ],
  },
  {
    category: "Analytics & Insights",
    rows: [
      { feature: "Financial dashboard", solo: true, team: true, enterprise: true },
      { feature: "Tour performance analytics", solo: true, team: true, enterprise: true },
      { feature: "Cash flow projections", solo: true, team: true, enterprise: true },
      { feature: "Overdue payment alerts", solo: true, team: true, enterprise: true },
      { feature: "AI smart insights", solo: true, team: true, enterprise: true },
      { feature: "Advanced custom reports", solo: false, team: false, enterprise: true },
    ],
  },
  {
    category: "Tools & Automation",
    rows: [
      { feature: "Email automation (SMTP)", solo: true, team: true, enterprise: true },
      { feature: "Review request emails", solo: true, team: true, enterprise: true },
      { feature: "Bulk payment reminders", solo: true, team: true, enterprise: true },
      { feature: "Custom form builder", solo: false, team: true, enterprise: true },
      { feature: "Public shareable forms", solo: false, team: true, enterprise: true },
      { feature: "Audit log", solo: false, team: true, enterprise: true },
    ],
  },
  {
    category: "Support & Extras",
    rows: [
      { feature: "Email support", solo: true, team: true, enterprise: true },
      { feature: "Priority email support", solo: false, team: true, enterprise: true },
      { feature: "Dedicated account manager", solo: false, team: false, enterprise: true },
      { feature: "Phone support", solo: false, team: false, enterprise: true },
      { feature: "API access", solo: false, team: false, enterprise: true },
      { feature: "Custom integrations", solo: false, team: false, enterprise: true },
      { feature: "SLA guarantee", solo: false, team: false, enterprise: true },
      { feature: "Onboarding assistance", solo: "Self-serve", team: "Guided", enterprise: "White-glove" },
    ],
  },
];

function CellValue({ value }: { value: FeatureValue }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-zinc-700">{value}</span>;
  }
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50">
          <Check className="h-3.5 w-3.5 text-emerald-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <Minus className="h-4 w-4 text-zinc-300" />
    </div>
  );
}

export function PricingComparison() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-pricing-comparison">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Compare Plans"
            title="Everything included, at every level"
            description="See exactly what you get with each plan. No hidden features behind paywalls."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-16 overflow-x-auto -mx-4 px-4">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-[1fr_120px_120px_120px] sm:grid-cols-[1fr_140px_140px_140px] gap-0 border-b-2 border-zinc-200 pb-4 mb-0 sticky top-16 bg-zinc-50/95 backdrop-blur-sm z-10">
                <div />
                <div className="text-center">
                  <p className="text-sm font-semibold text-zinc-900">Solo</p>
                  <p className="text-xs text-zinc-400">$14/mo</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="inline-flex items-center rounded-full bg-brand-500 px-2 py-0.5 text-[9px] font-bold text-white mb-1">
                      POPULAR
                    </span>
                    <p className="text-sm font-semibold text-zinc-900">Team</p>
                    <p className="text-xs text-zinc-400">$29/mo</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-zinc-900">Enterprise</p>
                  <p className="text-xs text-zinc-400">$49/mo</p>
                </div>
              </div>

              {comparison.map((category) => (
                <div key={category.category}>
                  <div className="grid grid-cols-[1fr_120px_120px_120px] sm:grid-cols-[1fr_140px_140px_140px] gap-0 border-b border-zinc-200 bg-zinc-100/60">
                    <p className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                      {category.category}
                    </p>
                    <div />
                    <div />
                    <div />
                  </div>

                  {category.rows.map((row, j) => (
                    <div
                      key={row.feature}
                      className={cn(
                        "grid grid-cols-[1fr_120px_120px_120px] sm:grid-cols-[1fr_140px_140px_140px] gap-0 border-b border-zinc-100 transition-colors hover:bg-white",
                        j % 2 === 0 ? "bg-transparent" : "bg-zinc-50/30"
                      )}
                    >
                      <p className="py-3 px-4 text-sm text-zinc-600">{row.feature}</p>
                      <div className="py-3 text-center"><CellValue value={row.solo} /></div>
                      <div className="py-3 text-center bg-brand-50/20"><CellValue value={row.team} /></div>
                      <div className="py-3 text-center"><CellValue value={row.enterprise} /></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
