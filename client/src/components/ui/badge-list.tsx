import { Badge } from "@/components/ui/badge";

interface BadgeListProps {
  tags: string[];
  colorClass?: string;
}

const BadgeList = ({ tags, colorClass = "bg-secondary/15 text-secondary" }: BadgeListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Badge key={index} className={`${colorClass} hover:${colorClass} font-medium`}>
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
