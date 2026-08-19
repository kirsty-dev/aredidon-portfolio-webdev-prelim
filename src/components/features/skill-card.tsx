import { Card } from "@/components/ui/card";

type SkillCardProps = {
  skill: string;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="group flex items-center justify-center py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.08)]">
      <span className="font-mono text-sm text-[#38BDF8] transition-colors duration-300 group-hover:text-[#E7EBF5]">
        {skill}
      </span>
    </Card>
  );
}