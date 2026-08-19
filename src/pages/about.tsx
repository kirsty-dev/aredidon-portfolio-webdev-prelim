import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { SkillCard } from "@/components/features/skill-card";
import { Reveal } from "@/components/ui/reveal";
import { education, skills } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* INTRODUCTION */}
      <Reveal>
        <SectionLabel>About</SectionLabel>

        <h1 className="mt-2 max-w-3xl font-sans text-4xl font-bold tracking-tight text-[#E7EBF5] sm:text-5xl">
          A bit about me
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8892AA]">
          I'm a BSIT student who enjoys learning through hands-on projects.
          I like creating websites, exploring different programming
          technologies, and turning ideas into working applications.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed text-[#8892AA]">
          Throughout my studies, I've worked on projects involving web
          development, programming, databases, data analysis, and application
          development. Each project has helped me discover new technologies
          while improving the way I approach problems and build solutions.
        </p>
      </Reveal>

      {/* QUICK HIGHLIGHTS */}
      <Reveal className="mt-12">
        <div className="grid gap-4 sm:grid-cols-3">

          <Card className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#4C6FFF]/10 blur-2xl" />

            <p className="font-mono text-3xl font-bold text-[#4C6FFF]">
              5+
            </p>

            <p className="mt-2 text-sm text-[#8892AA]">
              Projects completed
            </p>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#38BDF8]/10 blur-2xl" />

            <p className="font-mono text-3xl font-bold text-[#38BDF8]">
              BSIT
            </p>

            <p className="mt-2 text-sm text-[#8892AA]">
              Information Technology student
            </p>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-[#4C6FFF]/10 blur-2xl" />

            <p className="font-mono text-3xl font-bold text-[#4C6FFF]">
              Web
            </p>

            <p className="mt-2 text-sm text-[#8892AA]">
              Development focus
            </p>
          </Card>

        </div>
      </Reveal>

           {/* EDUCATION */}
      <Reveal className="mt-16">
        <SectionLabel>Education</SectionLabel>

        <div className="mt-4 space-y-6">
          {education.map((item) => (
            <Card
              key={item.title}
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]"
            >
              {/* Blue accent */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#38BDF8] to-[#4C6FFF]" />

              <div className="pl-4">

                {/* STATUS */}
                <p className="font-mono text-xs tracking-widest text-[#38BDF8]">
                  {item.status}
                </p>

                {/* EDUCATION TITLE */}
                <h2 className="mt-3 font-sans text-2xl font-semibold text-[#E7EBF5]">
                  {item.title}
                </h2>

                {/* SCHOOL */}
                <p className="mt-2 font-mono text-sm text-[#38BDF8]">
                  {item.school}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-3xl leading-relaxed text-[#8892AA]">
                  {item.description}
                </p>

              </div>
            </Card>
          ))}
        </div>
      </Reveal>

      {/* SKILLS */}
      <Reveal className="mt-16">
        <SectionLabel>What I Work With</SectionLabel>

        <p className="mt-4 max-w-2xl leading-relaxed text-[#8892AA]">
          Technologies and tools I've worked with while building projects and
          developing my skills in information technology.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </Reveal>

              {/* WHAT I ENJOY */}
        <Reveal className="mt-16">
          <SectionLabel>What I Enjoy</SectionLabel>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* Building Websites */}
            <Card className="group transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#232C42] bg-[#0B0F19] font-mono text-[#38BDF8]">
                &lt;/&gt;
              </div>

              <h3 className="text-lg font-semibold text-[#E7EBF5]">
                Building Websites
              </h3>

              <p className="mt-2 leading-relaxed text-[#8892AA]">
                I enjoy designing and building websites that are visually
                appealing, responsive, and easy to use.
              </p>
            </Card>

            {/* Learning Through Projects */}
            <Card className="group transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#232C42] bg-[#0B0F19] font-mono text-[#38BDF8]">
                {"{ }"}
              </div>

              <h3 className="text-lg font-semibold text-[#E7EBF5]">
                Learning Through Projects
              </h3>

              <p className="mt-2 leading-relaxed text-[#8892AA]">
                I learn best by creating real projects, experimenting with
                technologies, and solving problems along the way.
              </p>
            </Card>

            {/* Graphic Design */}
            <Card className="group transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/40">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#232C42] bg-[#0B0F19] font-mono text-[#38BDF8]">
                ✦
              </div>

              <h3 className="text-lg font-semibold text-[#E7EBF5]">
                Graphic Design
              </h3>

              <p className="mt-2 leading-relaxed text-[#8892AA]">
                I enjoy creating visual designs such as posters, banners,
                logos, and other graphics using creative design tools.
              </p>
            </Card>

          </div>
        </Reveal>

      {/* CURRENT FOCUS */}
      <Reveal className="mt-16">
        <Card className="relative overflow-hidden border-[#2A3652]">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#4C6FFF]/10 blur-3xl" />

          <SectionLabel>Currently Learning</SectionLabel>

          <h2 className="mt-3 text-2xl font-semibold text-[#E7EBF5]">
            Growing one project at a time.
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-[#8892AA]">
            I'm continuing to improve my skills in web development, React,
            Laravel, databases, and other technologies while working on
            projects that challenge me to learn something new.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-[#232C42] px-3 py-1 font-mono text-xs text-[#38BDF8]">
              React
            </span>

            <span className="rounded-full border border-[#232C42] px-3 py-1 font-mono text-xs text-[#38BDF8]">
              Laravel
            </span>

            <span className="rounded-full border border-[#232C42] px-3 py-1 font-mono text-xs text-[#38BDF8]">
              MySQL
            </span>

            <span className="rounded-full border border-[#232C42] px-3 py-1 font-mono text-xs text-[#38BDF8]">
              Web Development
            </span>
          </div>
        </Card>
      </Reveal>

      {/* CTA */}
      <Reveal className="mt-16">
        <div className="rounded-2xl border border-[#232C42] bg-[#0B0F19] px-6 py-10 text-center sm:px-10">

          <p className="font-mono text-xs tracking-[0.3em] text-[#38BDF8]">
            LET'S BUILD
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#E7EBF5]">
            Want to see what I've built?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#8892AA]">
            Explore some of my school projects, experiments, and applications.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-[#4C6FFF] px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              View Projects →
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-[#232C42] px-5 py-3 text-sm font-medium text-[#E7EBF5] transition-colors hover:border-[#4C6FFF] hover:text-[#4C6FFF]"
            >
              Contact Me
            </Link>
          </div>

        </div>
      </Reveal>

    </main>
  );
}