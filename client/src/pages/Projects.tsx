import { useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import ProjectCard from '@/components/projects/ProjectCard';
import { allProjects } from '@/data/projects';

const Projects = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = "Projects | Shivam DevOps";
  }, []);

  return (
    <main className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <a className="text-secondary hover:text-secondary-dark flex items-center mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600 max-w-3xl">
            A collection of my work in DevOps, infrastructure automation, containerization, and cloud architecture. Each project represents a solution to real-world challenges in building and maintaining modern infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
