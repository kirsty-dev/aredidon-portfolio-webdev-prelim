import { Card } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <Card className="group">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-[#38BDF8]">
          PROJECT
        </span>

        <span className="text-[#4C6FFF] transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </div>

      <h3 className="font-sans text-xl font-semibold text-[#E7EBF5]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-[#8892AA]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-[#232C42] px-3 py-1 font-mono text-xs text-[#8892AA]"
          >
            {technology}
          </span>
        ))}
      </div>
    </Card>
  );
}