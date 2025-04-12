import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import BadgeList from '@/components/ui/badge-list';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const tagColors: Record<string, string> = {
  kubernetes: "bg-blue-100 text-blue-800",
  terraform: "bg-purple-100 text-purple-800",
  aws: "bg-purple-100 text-purple-800",
  jenkins: "bg-green-100 text-green-800",
  github: "bg-green-100 text-green-800",
  prometheus: "bg-orange-100 text-orange-800",
  grafana: "bg-orange-100 text-orange-800",
  helm: "bg-blue-100 text-blue-800",
  gitops: "bg-blue-100 text-blue-800",
  iac: "bg-purple-100 text-purple-800",
  cicd: "bg-green-100 text-green-800",
  monitoring: "bg-orange-100 text-orange-800",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, tags, sourceLink } = project;
  
  return (
    <Card className="project-card bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`${tagColors[tag.toLowerCase()] || "bg-gray-100 text-gray-800"} text-xs font-medium px-2.5 py-0.5 rounded`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <a 
              href={sourceLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary-dark font-medium flex items-center"
            >
              <span>Source</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
