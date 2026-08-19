import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { education } from "@/lib/data";

export function AboutEducation() {
  return (
    <Reveal className="mt-16">
      <div className="about-section-heading">
        <SectionLabel>Education</SectionLabel>
      </div>

      <div className="relative mt-6 space-y-6">
        <div className="education-line" />

        {education.map((item, index) => (
          <div
            key={item.title}
            className="education-item relative pl-8"
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <div className="education-dot">
              <div className="education-dot-inner" />
            </div>

            <Card className="education-card relative overflow-hidden">
              <div className="education-accent" />

              <div className="education-shine" />

              <div className="relative z-10 pl-4">
                <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                  {item.status}
                </p>

                <h2 className="mt-3 font-sans text-2xl font-semibold text-[#E7EBF5]">
                  {item.title}
                </h2>

                <p className="mt-2 font-mono text-sm text-[#38BDF8]">
                  {item.school}
                </p>

                <p className="mt-5 max-w-3xl leading-relaxed text-[#8892AA]">
                  {item.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Reveal>
  );
}