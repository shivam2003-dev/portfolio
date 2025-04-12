import { Link } from 'wouter';
import ProjectCard from '@/components/projects/ProjectCard';
import { featuredProjects } from '@/data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-green-400">Featured Projects</h2>
        <p className="text-gray-400 mb-8">Here are some of my recent projects and contributions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-sm transition duration-300 shadow-lg hover:shadow-green-500/20">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
