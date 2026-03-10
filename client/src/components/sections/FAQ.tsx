import { useState } from "react";
import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes! Every plan comes with a 14-day free trial. No credit card required. You get full access to all features during the trial so you can see exactly how Tournetix fits your business.",
  },
  {
    question: "Do you charge per booking?",
    answer: "No. Unlike FareHarbor and Peek (which take 3-6% per booking), Tournetix is a flat monthly subscription. Whether you have 10 bookings or 10,000, the price stays the same. Your revenue stays yours.",
  },
  {
    question: "Can I import my existing bookings?",
    answer: "Yes. You can import bookings from CSV files or spreadsheets. Our team can also help you migrate data from other booking platforms during onboarding.",
  },
  {
    question: "How does commission tracking work?",
    answer: "When you create a booking and assign it to an agent, the commission is calculated automatically based on the percentage you configure in settings. You can track pending vs paid commissions and do bulk payouts.",
  },
  {
    question: "Can my agents access the platform?",
    answer: "Yes. You can invite agents who get their own login. They can only see their own bookings and commissions — they can't access other agents' data or admin settings. Full data isolation is built in.",
  },
  {
    question: "Do you support multiple currencies?",
    answer: "Yes. Tournetix supports all major currencies. You set your preferred currency in company settings, and all amounts display accordingly throughout the platform.",
  },
  {
    question: "Can I customize the invoice design?",
    answer: "Invoices automatically include your company name, logo, and tax settings. Line items, totals, and payment details are pulled from the booking data. You can add custom notes and configure tax rates.",
  },
  {
    question: "What if I need help getting started?",
    answer: "We offer free onboarding support for all plans. Our team will help you configure your account, import data, and train your staff. Most operators are fully set up within a day.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-faq">
      <Container size="narrow">
        <AnimateOnScroll>
          <SectionHeader
            badge="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about Tournetix. Can't find what you're looking for? Contact us."
          />
        </AnimateOnScroll>

        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden transition-colors hover:border-zinc-300">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="text-sm font-semibold text-zinc-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform duration-200",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-sm text-zinc-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
