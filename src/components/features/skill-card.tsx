import { Card } from "@/components/ui/card";

type SkillCardProps = {
  skill: string;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="p-4 text-center">
      <span className="font-mono text-sm text-[#38BDF8]">{skill}</span>
    </Card>
  );
}