import { SectionLabel } from "@/components/ui/section-label";
import { SkillCard } from "@/components/features/skill-card";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/lib/data";

export function AboutSkills() {
  return (
    <Reveal className="mt-16">
      <section>
        <SectionLabel>What I Work With</SectionLabel>

        <p className="mt-4 max-w-2xl leading-relaxed text-[#8892AA]">
          Technologies and tools I've worked with while building projects and
          developing my skills in information technology.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-animated"
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}