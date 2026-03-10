import { FeaturesHero } from "@/components/features/FeaturesHero";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { FeatureDeepDive } from "@/components/features/FeatureDeepDive";
import { IntegrationPreview } from "@/components/features/IntegrationPreview";
import { CTABanner } from "@/components/marketing/shared/CTABanner";
import { CalendarCheck, Users, FileText, TrendingUp } from "lucide-react";
import { BookingsMockup } from "@/components/mockups/BookingsMockup";
import { CommissionsMockup } from "@/components/mockups/CommissionsMockup";
import { InvoiceMockup } from "@/components/mockups/InvoiceMockup";
import { FinancialMockup } from "@/components/mockups/FinancialMockup";

export default function Features() {
  return (
    <>
      <FeaturesHero />

      <FeatureGrid />

      <FeatureDeepDive
        badge="Booking Management"
        title="Every booking, one place, total control"
        description="Stop chasing bookings across WhatsApp, email, and spreadsheets. Tournetix gives you a single source of truth with powerful search, filters, and bulk actions."
        bullets={[
          "Create bookings with an intuitive multi-step form",
          "Track status: Upcoming, Completed, Cancelled",
          "Monitor payments: Unpaid, Deposit Paid, Fully Paid",
          "Bulk update statuses or export to CSV/PDF",
          "Assign bookings to agents automatically",
        ]}
        details={[
          { title: "Smart Search", description: "Search by customer name, booking reference, trip type, or date range. Find any booking in seconds." },
          { title: "Tabbed Views", description: "Switch between All, Upcoming, Completed, and Cancelled bookings with one click." },
          { title: "Bulk Actions", description: "Select multiple bookings and update their status, export them, or send reminders in bulk." },
          { title: "Guest Details", description: "Track adults, children, and special requirements per booking with automatic pricing." },
          { title: "Deposit Tracking", description: "Record partial payments and track remaining balances. See at a glance what's still owed." },
          { title: "Mobile Friendly", description: "Create and manage bookings from any device. The responsive design works on phones and tablets." },
        ]}
        mockupUrl="app.tournetix.com/bookings"
        mockupContent={<BookingsMockup />}
        imageAlt="Tournetix Booking Management"
        icon={CalendarCheck}
      />

      <FeatureDeepDive
        badge="Commission Tracking"
        title="Pay your agents right, without the spreadsheet"
        description="Commissions are the #1 pain point for tour operators with teams. Tournetix automates the entire process — from calculation to payout."
        bullets={[
          "Auto-calculated when bookings are created",
          "Configurable commission percentage per agent or globally",
          "Track Pending, Paid, and Cancelled commissions",
          "Bulk mark-as-paid for payroll runs",
          "Full per-agent earnings reports and exports",
        ]}
        details={[
          { title: "Automatic Calculation", description: "Set your commission rate once. Every new booking automatically generates the correct commission entry." },
          { title: "Bulk Payouts", description: "Select all pending commissions and mark them as paid in one action. Perfect for weekly or monthly payroll." },
          { title: "Agent Dashboard", description: "Each agent sees their own earnings, pending amounts, and payment history. Full transparency." },
          { title: "Payout History", description: "Complete audit trail of every commission paid — when, how much, and for which booking." },
          { title: "Performance Insights", description: "See which agents bring the most revenue, highest booking counts, and best conversion rates." },
          { title: "Export Reports", description: "Download commission reports as CSV or PDF for your accountant or payroll system." },
        ]}
        mockupUrl="app.tournetix.com/commissions"
        mockupContent={<CommissionsMockup />}
        imageAlt="Tournetix Commission Tracking"
        icon={Users}
        reversed
        bgClass="bg-zinc-50/50"
      />

      <FeatureDeepDive
        badge="Invoicing"
        title="Professional invoices without the copy-paste"
        description="Stop creating invoices one by one in Word. Tournetix generates beautiful, professional PDF invoices from your booking data — and emails them to customers directly."
        bullets={[
          "One-click invoice generation from any booking",
          "Automatic line items, tax calculations, and totals",
          "Your company logo, name, and branding on every invoice",
          "Email invoices directly to customers",
          "Track payment status: Draft, Sent, Paid, Overdue",
        ]}
        details={[
          { title: "PDF Generation", description: "Clean, professional invoices generated as PDF. Download or email them instantly." },
          { title: "Auto-Fill from Bookings", description: "Customer details, trip info, pricing, and tax all pull from the booking. Zero manual entry." },
          { title: "Tax Configuration", description: "Set your tax rate in settings. Tournetix calculates tax automatically on every invoice." },
          { title: "Email Delivery", description: "Send invoices directly from the platform. Track whether they've been sent and when." },
          { title: "Payment Tracking", description: "Mark invoices as paid when payment arrives. See outstanding amounts at a glance." },
          { title: "Invoice History", description: "Full list of all invoices with search, filter by status, and quick actions." },
        ]}
        mockupUrl="app.tournetix.com/invoices"
        mockupContent={<InvoiceMockup />}
        imageAlt="Tournetix Invoice Generation"
        icon={FileText}
      />

      <FeatureDeepDive
        badge="Financial Analytics"
        title="See your money. Know your business."
        description="Real-time dashboards that show exactly where your business stands — revenue, cash flow, what's overdue, and what's coming in. No more guessing."
        bullets={[
          "Revenue trends with monthly and quarterly views",
          "Cash flow projections for the next 30 days",
          "Payment status breakdown (Paid, Deposit, Unpaid)",
          "Overdue payment alerts with bulk reminder emails",
          "Tour-by-tour performance rankings with AI insights",
        ]}
        details={[
          { title: "Revenue Dashboard", description: "Total revenue, collected, pending, and net (after commissions). Updated in real time." },
          { title: "Cash Flow Forecast", description: "See expected incoming and outgoing for the next 30 days. Plan ahead with confidence." },
          { title: "Overdue Alerts", description: "Automatically flags overdue payments. Send bulk reminders to customers with one click." },
          { title: "Tour Performance", description: "Compare tours by revenue, booking count, and completion rate. Find your winners." },
          { title: "AI Smart Insights", description: "AI analyzes your data and surfaces actionable recommendations — like which tours to promote." },
          { title: "Export Everything", description: "Download financial reports as PDF or CSV. Ready for your accountant or tax filing." },
        ]}
        mockupUrl="app.tournetix.com/analytics"
        mockupContent={<FinancialMockup />}
        imageAlt="Tournetix Financial Analytics"
        icon={TrendingUp}
        reversed
        bgClass="bg-zinc-50/50"
      />

      <IntegrationPreview />

      <CTABanner
        title="See it all in action"
        description="Start your 14-day free trial and explore every feature. No credit card required. Set up in minutes."
      />
    </>
  );
}
