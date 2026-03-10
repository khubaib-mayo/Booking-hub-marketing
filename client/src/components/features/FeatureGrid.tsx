import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import {
  CalendarCheck,
  Users,
  FileText,
  TrendingUp,
  Mail,
  LayoutGrid,
  Shield,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Bookings",
    description:
      "Create, edit, filter, and bulk-update bookings with full status and payment tracking. Search by anything — date, agent, customer, trip type.",
  },
  {
    icon: Users,
    title: "Auto Commissions",
    description:
      "Commissions calculate automatically from each booking. Track pending vs paid, run bulk payouts, and see per-agent breakdowns.",
  },
  {
    icon: FileText,
    title: "Invoice Generator",
    description:
      "Generate professional PDF invoices from any booking in one click. Email them to customers directly with payment status tracking.",
  },
  {
    icon: TrendingUp,
    title: "Financial Dashboard",
    description:
      "Revenue trends, cash flow projections, payment breakdowns, and overdue alerts. Know exactly where your money is at all times.",
  },
  {
    icon: BarChart3,
    title: "Tour Analytics",
    description:
      "See which tours perform best, compare completion rates, track monthly trends, and get AI-powered recommendations to grow.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "SMTP integration for automated review requests, payment reminders, and booking confirmations. Customizable templates for your brand.",
  },
  {
    icon: LayoutGrid,
    title: "Custom Form Builder",
    description:
      "Drag-and-drop builder with 19 field types. Create customer intake forms, waivers, or feedback forms. Share via public links.",
  },
  {
    icon: Shield,
    title: "Team Management",
    description:
      "4 user roles with granular permissions. Agents see only their data. Admins see everything. Full audit trail for accountability.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-feature-grid">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Platform Overview"
            title="Eight systems. One login."
            description="Booking management, commission tracking, invoicing, analytics, email automation, form builder, team roles, and AI insights — all built in."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {features.map((feature, i) => (
            <AnimateOnScroll key={feature.title} delay={i * 0.06}>
              <div
                className="group h-full rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-zinc-200 hover:-translate-y-0.5"
                data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 border border-brand-100 transition-colors group-hover:bg-brand-100">
                  <feature.icon className="h-5 w-5 text-brand-500" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
