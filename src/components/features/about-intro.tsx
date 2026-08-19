import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutIntro() {
  return (
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
        development, programming, databases, data analysis, and application
        development. Each project has helped me discover new technologies
        while improving the way I approach problems and build solutions.
      </p>
    </Reveal>
  );
}