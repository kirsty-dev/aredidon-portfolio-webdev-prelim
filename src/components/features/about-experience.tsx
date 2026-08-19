import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";

export function AboutExperience() {
  return (
    <Reveal className="mt-16">
      <section>
        <SectionLabel>Experience</SectionLabel>

        <p className="mt-4 max-w-3xl leading-relaxed text-[#8892AA]">
          Alongside my studies in Information Technology, I've also developed
          experience in graphic design and visual content creation. I enjoy
          combining creativity and technology to create designs that are both
          visually appealing and purposeful.
        </p>

        <div className="mt-6">
          <Card className="experience-card relative overflow-hidden">
            
            {/* Animated glow */}
            <div className="experience-glow" />

            {/* Accent */}
            <div className="experience-accent" />

            <div className="relative z-10 pl-4">
              
              <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                GRAPHIC DESIGN
              </p>

              <h2 className="mt-3 font-sans text-2xl font-semibold text-[#E7EBF5]">
                Graphic Artist & Visual Designer
              </h2>

              <p className="mt-2 font-mono text-sm text-[#4C6FFF]">
                Canva • Visual Design • Creative Content
              </p>

              <p className="mt-5 max-w-3xl leading-relaxed text-[#8892AA]">
                I have experience creating visual materials such as banners,
                posters, logos, promotional graphics, and other digital
                designs. I use Canva and other creative tools to develop
                designs based on different themes, audiences, and project
                requirements.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="experience-tag">Canva</span>
                <span className="experience-tag">Banner Design</span>
                <span className="experience-tag">Logo Design</span>
                <span className="experience-tag">Poster Design</span>
                <span className="experience-tag">Visual Design</span>
                <span className="experience-tag">Creative Design</span>
              </div>

            </div>
          </Card>
        </div>
      </section>
    </Reveal>
  );
}