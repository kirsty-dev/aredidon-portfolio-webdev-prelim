import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/components/ui/section-label";
import { SkillCard } from "@/components/features/skill-card";
import { Reveal } from "@/components/ui/reveal";
import { education, skills } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="about-page mx-auto max-w-6xl px-6 py-20">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="about-grid-bg" aria-hidden="true" />
      <div className="about-orb about-orb-one" aria-hidden="true" />
      <div className="about-orb about-orb-two" aria-hidden="true" />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <Reveal className="about-intro">

        <SectionLabel>About</SectionLabel>

        <h1 className="mt-2 max-w-3xl font-sans text-4xl font-bold tracking-tight text-[#E7EBF5] sm:text-5xl">
          A bit about me
        </h1>

        <span className="about-title-line" />

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#8892AA]">
          I'm a BSIT student who enjoys learning through hands-on projects.
          I like creating websites, exploring different programming
          technologies, and turning ideas into working applications.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed text-[#8892AA]">
          Throughout my studies, I've worked on projects involving web
          development, programming, databases, and application
          development. Each project has helped me discover new technologies
          while improving the way I approach problems and build solutions.
        </p>

      </Reveal>


      {/* =====================================================
          QUICK HIGHLIGHTS
      ====================================================== */}

      <Reveal className="mt-12">

        <div className="grid gap-4 sm:grid-cols-3">

          {/* PROJECTS */}
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


          {/* BSIT */}
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


          {/* WEB */}
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


      {/* =====================================================
          EDUCATION
      ====================================================== */}

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

              {/* TIMELINE DOT */}
              <div className="education-dot">
                <div className="education-dot-inner" />
              </div>


              {/* EDUCATION CARD */}
              <Card className="education-card relative overflow-hidden">

                <div className="education-accent" />

                <div className="pl-4">

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


      {/* =====================================================
          SKILLS
      ====================================================== */}

      <Reveal className="mt-16">

        <section>

          <div className="about-section-heading">
            <SectionLabel>What I Work With</SectionLabel>
          </div>

          <p className="mt-4 max-w-2xl leading-relaxed text-[#8892AA]">
            Technologies and tools I've worked with while building projects
            and developing my skills in information technology.
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


      {/* =====================================================
          WHAT I ENJOY
      ====================================================== */}

      <Reveal className="mt-16">

        <section>

          <div className="about-section-heading">
            <SectionLabel>What I Enjoy</SectionLabel>
          </div>


          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {/* BUILDING WEBSITES */}

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


            {/* LEARNING THROUGH PROJECTS */}

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


            {/* GRAPHIC DESIGN */}

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


      {/* =====================================================
          CURRENTLY LEARNING
      ====================================================== */}

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


      {/* =====================================================
          CTA
      ====================================================== */}

      <Reveal className="mt-16">

        <section className="cta-section">

          <div className="cta-glow" />

          <div className="relative z-10">

            <p className="font-mono text-xs tracking-[0.3em] text-[#38BDF8]">
              LET'S BUILD
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#E7EBF5]">
              Want to see what I've built?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#8892AA]">
              Explore some of my school projects, experiments, and
              applications.
            </p>


            <div className="mt-6 flex flex-wrap justify-center gap-4">

              <Link
                to="/projects"
                className="cta-primary"
              >
                View Projects →
              </Link>

              <Link
                to="/contact"
                className="cta-secondary"
              >
                Contact Me
              </Link>

            </div>

          </div>

        </section>

      </Reveal>

    </main>
  );
}