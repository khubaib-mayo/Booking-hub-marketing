import { useState } from "react";
import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What happens when I hit my booking limit?",
    answer: "You'll get a notification when you're approaching your limit. You can upgrade your plan at any time to increase your limit. Existing bookings are never deleted or restricted — you just can't create new ones until the next billing cycle or until you upgrade.",
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Yes. You can upgrade or downgrade at any time. When upgrading, you'll get immediate access to the new features. When downgrading, changes take effect at your next billing cycle. No penalties, no lock-in contracts.",
  },
  {
    question: "Do you really not charge per booking?",
    answer: "Really. Unlike FareHarbor (3-6% per booking) or Peek Pro (commission-based), BookingHub is a flat monthly fee. Whether you have 1 booking or 500, the price is the same. We believe your revenue should stay yours.",
  },
  {
    question: "What's included in the 14-day free trial?",
    answer: "Everything. You get full access to all features of your chosen plan for 14 days. No credit card required to start. If you don't subscribe after the trial, your account simply pauses — no data is deleted.",
  },
  {
    question: "Can I add more team members than my plan allows?",
    answer: "The Solo plan is strictly 1 user. The Team plan supports up to 10. If you need more, the Enterprise plan offers unlimited team members. You can upgrade at any time.",
  },
  {
    question: "Is my data safe?",
    answer: "Yes. We use encrypted database connections, JWT authentication, bcrypt password hashing, and complete data isolation between companies. Every action is logged in an audit trail. Your data is backed up daily.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express) via Stripe. Annual plans can also be paid via bank transfer.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "If you're not happy within the first 30 days of a paid plan, we'll refund you in full. No questions asked. We're confident you'll love BookingHub.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32" data-testid="section-pricing-faq">
      <Container size="narrow">
        <AnimateOnScroll>
          <SectionHeader
            badge="FAQ"
            title="Questions about pricing?"
            description="If you can't find what you're looking for, reach out and we'll get back to you within a few hours."
          />
        </AnimateOnScroll>

        <div className="mt-16 space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.04}>
              <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden transition-colors hover:border-zinc-300">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  data-testid={`button-faq-${i}`}
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
