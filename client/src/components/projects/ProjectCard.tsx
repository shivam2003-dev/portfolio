import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

const tagColors: Record<string, string> = {
  kubernetes: "border-blue-500 text-blue-400",
  terraform: "border-purple-500 text-purple-400",
  aws: "border-yellow-500 text-yellow-400",
  jenkins: "border-green-500 text-green-300",
  github: "border-gray-400 text-gray-300",
  prometheus: "border-orange-500 text-orange-400",
  grafana: "border-orange-500 text-orange-400",
  helm: "border-blue-500 text-blue-400",
  gitops: "border-blue-500 text-blue-400",
  iac: "border-purple-500 text-purple-400",
  cicd: "border-green-500 text-green-300",
  monitoring: "border-orange-500 text-orange-400",
  security: "border-red-500 text-red-400",
  devsecops: "border-red-500 text-red-400"
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, tags, sourceLink } = project;
  
  return (
    <Card className="project-card bg-gray-800 border border-gray-700 hover:border-green-500 rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-green-400 font-mono">&gt; {title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">
          {description}
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`${tagColors[tag.toLowerCase()] || "border-gray-600 text-gray-400"} text-xs font-medium px-2.5 py-0.5 rounded border bg-gray-900 bg-opacity-50`}
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
              className="text-green-400 hover:text-green-300 font-medium flex items-center transition-colors duration-200"
            >
              <span>View Source</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
