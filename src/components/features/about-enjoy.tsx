import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutEnjoy() {
  return (
    <Reveal className="mt-16">
      <section>
        <div className="about-section-heading">
          <SectionLabel>What I Enjoy</SectionLabel>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Card className="enjoy-card group">
            <div className="enjoy-icon">
              &lt;/&gt;
            </div>

            <h3 className="text-lg font-semibold text-[#E7EBF5]">
              Building Websites
            </h3>

            <p className="mt-2 leading-relaxed text-[#8892AA]">
              I enjoy designing and building websites that are visually
              appealing, responsive, and easy to use.
            </p>

            <span className="enjoy-arrow">
              →
            </span>
          </Card>

          <Card className="enjoy-card group">
            <div className="enjoy-icon">
              {"{ }"}
            </div>

            <h3 className="text-lg font-semibold text-[#E7EBF5]">
              Learning Through Projects
            </h3>

            <p className="mt-2 leading-relaxed text-[#8892AA]">
              I learn best by creating real projects, experimenting with
              technologies, and solving problems along the way.
            </p>

            <span className="enjoy-arrow">
              →
            </span>
          </Card>

          <Card className="enjoy-card group">
            <div className="enjoy-icon">
              ✦
            </div>

            <h3 className="text-lg font-semibold text-[#E7EBF5]">
              Graphic Design
            </h3>

            <p className="mt-2 leading-relaxed text-[#8892AA]">
              I enjoy creating visual designs such as posters, banners,
              logos, and other graphics using creative design tools.
            </p>

            <span className="enjoy-arrow">
              →
            </span>
          </Card>

        </div>
      </section>
    </Reveal>
  );
}