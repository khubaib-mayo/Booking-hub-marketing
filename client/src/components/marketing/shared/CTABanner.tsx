import { Container } from "@/components/marketing/ui/Container";
import { MarketingButton } from "@/components/marketing/ui/MarketingButton";
import { siteConfig } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Ready to simplify your tour business?",
  description = "Join hundreds of tour operators who switched from spreadsheets to BookingHub. Start your free 14-day trial \u2014 no credit card required.",
}: CTABannerProps) {
  return (
    <section className="py-24 lg:py-32" data-testid="section-cta-banner">
      <Container size="narrow" className="text-center">
        <h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {title}
        </h2>
        <p className="mt-6 text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MarketingButton variant="primary" size="lg" href={siteConfig.signupUrl}>
            Start Free Trial
          </MarketingButton>
          <MarketingButton variant="secondary" size="lg" href="/contact">
            Talk to Sales
          </MarketingButton>
        </div>
      </Container>
    </section>
  );
}
