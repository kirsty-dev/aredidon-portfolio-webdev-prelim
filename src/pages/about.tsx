import { AboutIntro } from "@/components/features/about-intro";
import { AboutHighlights } from "@/components/features/about-highlights";
import { AboutEducation } from "@/components/features/about-education";
import { AboutSkills } from "@/components/features/about-skills";
import { AboutEnjoy } from "@/components/features/about-enjoy";
import { AboutFocus } from "@/components/features/about-focus";
import { AboutCTA } from "@/components/features/about-cta";

export default function AboutPage() {
  return (
    <main className="about-page mx-auto max-w-6xl px-6 py-20">

      <div className="about-grid-bg" aria-hidden="true" />
      <div className="about-orb about-orb-one" aria-hidden="true" />
      <div className="about-orb about-orb-two" aria-hidden="true" />

      <AboutIntro />

      <AboutHighlights />

      <AboutEducation />

      <AboutSkills />

      <AboutEnjoy />

      <AboutFocus />

      <AboutCTA />

    </main>
  );
}