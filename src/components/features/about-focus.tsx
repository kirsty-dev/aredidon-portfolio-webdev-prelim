import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutFocus() {
  return (
    <Reveal className="mt-16">
      <section>
        <Card className="focus-card">
          <div className="focus-orb" />

          <div className="relative z-10">
            <SectionLabel>
              Currently Learning
            </SectionLabel>

            <h2 className="mt-3 text-2xl font-semibold text-[#E7EBF5]">
              Growing one project at a time.
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-[#8892AA]">
              I'm continuing to improve my skills in web development,
              React, Laravel, databases, and other technologies while
              working on projects that challenge me to learn something new.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="focus-tag">
                React
              </span>

              <span className="focus-tag">
                Laravel
              </span>

              <span className="focus-tag">
                MySQL
              </span>

              <span className="focus-tag">
                Web Development
              </span>
            </div>
          </div>
        </Card>
      </section>
    </Reveal>
  );
}