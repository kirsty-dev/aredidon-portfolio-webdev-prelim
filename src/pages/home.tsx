import { Hero } from "@/components/features/hero";
import { SkillScatter } from "@/components/features/skill-scatter";
import { FeaturedWork } from "@/components/features/featured-work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillScatter />
      <FeaturedWork />
    </>
  );
}