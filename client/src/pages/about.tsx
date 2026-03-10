import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { AboutStats } from "@/components/about/AboutStats";
import { Values } from "@/components/about/Values";
import { Team } from "@/components/about/Team";
import { JoinUs } from "@/components/about/JoinUs";
import { CTABanner } from "@/components/marketing/shared/CTABanner";

export default function About() {
  return (
    <>
      <AboutHero />

      <OurStory />

      <AboutStats />

      <Values />

      <Team />

      <JoinUs />

      <CTABanner
        title="Want to see what we've built?"
        description="Take Tournetix for a spin. 14-day free trial, no credit card required."
      />
    </>
  );
}
