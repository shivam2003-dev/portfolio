import { Link } from 'wouter';
import Terminal from '@/components/ui/terminal';

const HeroSection = () => {
  return (
    <section id="hero" className="py-16 bg-gradient-to-b from-background to-background-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="text-secondary font-semibold">Hi there, I'm</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6">Shivam</h1>
            <p className="text-2xl font-semibold text-gray-600 leading-tight mb-4">DevOps Engineer & Infrastructure Specialist</p>
            <p className="text-gray-600 mb-8 max-w-lg">
              I help organizations build robust, scalable infrastructure and streamline their development pipelines. Specializing in cloud automation, containerization, and CI/CD.
            </p>
            <div className="flex space-x-4">
              <Link href="/projects">
                <a className="bg-secondary hover:bg-secondary-light text-white font-semibold py-2 px-6 rounded transition duration-300 shadow-lg hover:shadow-xl">
                  View Projects
                </a>
              </Link>
              <Link href="/about">
                <a className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold py-2 px-6 rounded transition duration-300">
                  More About Me
                </a>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-5/12">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
