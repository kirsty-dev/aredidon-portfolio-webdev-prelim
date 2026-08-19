import { ProjectCard } from "@/components/features/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionLabel>Projects</SectionLabel>

        <h1 className="font-sans text-3xl font-semibold text-[#E7EBF5] sm:text-4xl">
          Things I've built
        </h1>

        <p className="mt-5 max-w-2xl text-[#8892AA]">
          A collection of projects I've worked on while learning programming,
          web development, and software development.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </Reveal>
        ))}
      </div>
    </main>
  );
}