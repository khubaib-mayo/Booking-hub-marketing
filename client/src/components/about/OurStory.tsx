import { Container } from "@/components/marketing/ui/Container";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";

export function OurStory() {
  return (
    <section className="py-20 lg:py-28" data-testid="section-our-story">
      <Container size="narrow">
        <AnimateOnScroll>
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-6">
              Our Story
            </p>

            <div className="space-y-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
              <p>
                Tour operators are some of the hardest working people in the world.
                They wake up before sunrise, spend their days creating incredible experiences
                for travelers, and then come home to hours of admin work — updating spreadsheets,
                calculating commissions, chasing payments, creating invoices one by one.
              </p>

              <p>
                We saw this firsthand. The tools that existed were either built for
                massive enterprises (too complex, too expensive) or were generic scheduling
                apps that didn't understand tourism at all (no commission tracking, no
                group bookings, no deposit management).
              </p>

              <p className="text-zinc-900 font-medium">
                So we built Tournetix — the platform we wished existed when we were
                running a tour operation ourselves.
              </p>

              <p>
                Every feature exists because a real tour operator needed it. Commission
                tracking exists because we spent hours in Excel getting it wrong. The
                invoice generator exists because we were tired of copy-pasting into Word
                templates. The financial dashboard exists because we had no idea if our
                business was profitable until tax season.
              </p>

              <p>
                We believe tour operators deserve the same quality of tools that billion-dollar
                companies get — but at a price that makes sense for a 5-person team in
                Lisbon or a solo dive instructor in Bali.
              </p>

              <p>
                That's what we're building. And we're just getting started.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-base font-bold text-brand-600">TX</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">The Tournetix Team</p>
                  <p className="text-xs text-zinc-400">Founded 2025 · Building from Portugal</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
