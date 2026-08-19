import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export function AboutHighlights() {
  return (
    <Reveal className="mt-12">
      <div className="grid gap-4 sm:grid-cols-3">

        <Card className="about-stat-card relative overflow-hidden">
          <div className="about-card-glow about-card-glow-blue" />

          <p className="about-stat-number relative font-mono text-3xl font-bold text-[#4C6FFF]">
            5+
          </p>

          <p className="relative mt-2 text-sm text-[#8892AA]">
            Projects completed
          </p>

          <div className="about-stat-line" />
        </Card>

        <Card className="about-stat-card relative overflow-hidden">
          <div className="about-card-glow about-card-glow-cyan" />

          <p className="about-stat-number relative font-mono text-3xl font-bold text-[#38BDF8]">
            BSIT
          </p>

          <p className="relative mt-2 text-sm text-[#8892AA]">
            Information Technology student
          </p>

          <div className="about-stat-line about-stat-line-cyan" />
        </Card>

        <Card className="about-stat-card relative overflow-hidden">
          <div className="about-card-glow about-card-glow-blue" />

          <p className="about-stat-number relative font-mono text-3xl font-bold text-[#4C6FFF]">
            Web
          </p>

          <p className="relative mt-2 text-sm text-[#8892AA]">
            Development focus
          </p>

          <div className="about-stat-line" />
        </Card>

      </div>
    </Reveal>
  );
}
