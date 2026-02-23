import { Container } from "@/components/marketing/ui/Container";
import { SectionBadge } from "@/components/marketing/ui/SectionBadge";
import { MockupFrame } from "@/components/marketing/ui/MockupFrame";
import { AnimateOnScroll } from "@/components/marketing/shared/AnimateOnScroll";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DetailItem {
  title: string;
  description: string;
}

interface FeatureDeepDiveProps {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  details: DetailItem[];
  mockupUrl: string;
  mockupContent?: React.ReactNode;
  imageAlt: string;
  icon: React.ElementType;
  reversed?: boolean;
  bgClass?: string;
}

export function FeatureDeepDive({
  badge,
  title,
  description,
  bullets,
  details,
  mockupUrl,
  mockupContent,
  imageAlt,
  icon: Icon,
  reversed = false,
  bgClass = "",
}: FeatureDeepDiveProps) {
  return (
    <section className={cn("py-24 lg:py-32", bgClass)} data-testid={`section-deepdive-${badge.toLowerCase().replace(/\s+/g, '-')}`}>
      <Container>
        <div
          className={cn(
            "flex flex-col gap-12 lg:gap-16 lg:items-center",
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          )}
        >
          <AnimateOnScroll
            className="flex-1 lg:max-w-lg"
            direction={reversed ? "right" : "left"}
          >
            <SectionBadge>{badge}</SectionBadge>
            <h2
              className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              {title}
            </h2>
            <p className="mt-5 text-base text-zinc-500 leading-relaxed">
              {description}
            </p>
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-600 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll
            className="flex-1"
            direction={reversed ? "left" : "right"}
          >
            <MockupFrame url={mockupUrl}>
              {mockupContent ? (
                mockupContent
              ) : (
                <div className="aspect-[16/10] bg-gradient-to-br from-zinc-50 to-zinc-100 flex items-center justify-center">
                  <Icon className="w-16 h-16 text-zinc-200" />
                </div>
              )}
            </MockupFrame>
          </AnimateOnScroll>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, i) => (
            <AnimateOnScroll key={detail.title} delay={i * 0.08}>
              <div className="rounded-xl bg-white border border-zinc-100 p-5 transition-all duration-200 hover:shadow-md hover:border-zinc-200">
                <h4 className="text-sm font-semibold text-zinc-900">
                  {detail.title}
                </h4>
                <p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
