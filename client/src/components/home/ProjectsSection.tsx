import { Link } from 'wouter';
import ProjectCard from '@/components/projects/ProjectCard';
import { featuredProjects } from '@/data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <p className="text-gray-600 mb-8">Here are some of my recent projects and contributions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/projects">
            <a className="inline-block bg-secondary hover:bg-secondary-light text-white font-semibold py-2 px-6 rounded transition duration-300">
              View all projects
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
