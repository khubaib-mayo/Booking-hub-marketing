import { Container } from "@/components/marketing/ui/Container";
import { SectionHeader } from "@/components/marketing/ui/SectionHeader";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We switched from FareHarbor and saved $500/month in commission fees alone. Tournetix pays for itself 10x over.",
    author: "Maria Costa",
    role: "Owner, Ocean Tours",
    location: "Lisbon, Portugal",
  },
  {
    quote: "The commission tracking alone saved me 5 hours a week. I used to do it all in Excel — never going back.",
    author: "Carlos Rivera",
    role: "Operations Manager, Reef Adventures",
    location: "Cancún, Mexico",
  },
  {
    quote: "I can finally see my cash flow in real time. Knowing which tours are profitable changed how I run my business.",
    author: "Sarah Chen",
    role: "Solo Operator, Sunset Kayaks",
    location: "Phuket, Thailand",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50/50" data-testid="section-testimonials">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            badge="Testimonials"
            title="Loved by tour operators worldwide"
            description="Don't take our word for it — hear from operators who transformed their business."
          />
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.author} delay={i * 0.1}>
              <div className="flex flex-col h-full rounded-2xl border border-zinc-100 bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-zinc-200">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>

                <blockquote className="flex-1 text-base text-zinc-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-brand-600">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{testimonial.author}</p>
                    <p className="text-xs text-zinc-400">{testimonial.role} · {testimonial.location}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
