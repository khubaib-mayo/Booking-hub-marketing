import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { CalendarX, Calculator, FileX, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: CalendarX,
    title: "Bookings everywhere",
    description: "WhatsApp, emails, notebooks, spreadsheets — your bookings live in 5 different places. Nothing syncs. Things get missed.",
  },
  {
    icon: Calculator,
    title: "Commissions by hand",
    description: "Calculating who earned what, tracking deposits, managing payouts. Hours of manual work every week — and mistakes cost trust.",
  },
  {
    icon: FileX,
    title: "Invoices one by one",
    description: "Creating each invoice in Word or Excel, emailing them manually, then hoping customers pay. No tracking, no automation.",
  },
  {
    icon: BarChart3,
    title: "No visibility",
    description: "Which tours are profitable? What's your cash flow? How much is overdue? You don't know until it's too late.",
  },
];

export function ProblemStatement() {
  return (
    <section className="py-24 lg:py-32" data-testid="section-problem">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="The Problem"
            title="You didn't start a tour company to do paperwork"
            description="Spreadsheets for bookings. Calculators for commissions. Word docs for invoices. You're running 5 tools to do one job."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <AnimateOnScroll key={problem.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-zinc-200 hover:-translate-y-0.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <problem.icon className="h-5 w-5 text-red-400" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900">{problem.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{problem.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
