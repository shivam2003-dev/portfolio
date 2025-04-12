import { Link } from 'wouter';
import Terminal from '@/components/ui/terminal';

const HeroSection = () => {
  return (
    <section id="hero" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="text-green-400 font-mono font-semibold">$ whoami</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6 font-mono">
              <span className="text-green-400">&gt;</span> Shivam
            </h1>
            <p className="text-2xl font-semibold text-green-300 leading-tight mb-4 font-mono">DevSecOps Engineer & Security Specialist</p>
            <p className="text-gray-400 mb-8 max-w-lg">
              I help organizations build secure, scalable infrastructure and implement zero-trust security pipelines. 
              Specializing in cloud security, container hardening, and secure CI/CD automation.
            </p>
            <div className="flex space-x-4">
              <Link href="/projects" className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-sm transition duration-300 shadow-lg hover:shadow-green-500/40">
                View Projects
              </Link>
              <Link href="/about" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-semibold py-2 px-6 rounded-sm transition duration-300">
                More About Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-5/12">
            <div className="bg-black border-2 border-green-500 rounded-md shadow-lg shadow-green-500/20">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
