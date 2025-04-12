import { useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, MapPin, Briefcase, GraduationCap, Award, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import BadgeList from '@/components/ui/badge-list';

const About = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = "About | Shivam DevOps";
  }, []);

  return (
    <main className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <Link href="/">
          <a className="text-secondary hover:text-secondary-dark flex items-center mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </a>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <p className="text-gray-600 mb-4">
              I'm a DevOps Engineer and Infrastructure Specialist with a passion for building robust, scalable, and secure systems.
              My journey in the tech industry has given me extensive experience in automating infrastructure, implementing CI/CD pipelines,
              and helping organizations embrace DevOps culture.
            </p>
            <p className="text-gray-600 mb-6">
              I believe in infrastructure as code, automation, and continuous improvement. My goal is to help teams deliver 
              software faster and more reliably by implementing modern DevOps practices and security-first approaches.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary mb-2">Automation First</div>
                <p className="text-gray-600 text-sm">If a task is done more than once, it should be automated.</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary mb-2">Security by Design</div>
                <p className="text-gray-600 text-sm">Security is integrated from the beginning, not added later.</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary mb-2">Infrastructure as Code</div>
                <p className="text-gray-600 text-sm">All infrastructure is defined, versioned, and tested as code.</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <div className="font-semibold text-primary mb-2">Continuous Learning</div>
                <p className="text-gray-600 text-sm">Always exploring new tools and techniques to improve processes.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold">Senior DevOps Engineer</h3>
                <p className="text-gray-500">Example Tech Inc. • 2020 - Present</p>
                <p className="text-gray-600 mt-2">
                  Leading the infrastructure and DevOps initiatives for a cloud-native SaaS platform. Implemented Kubernetes across multiple environments,
                  designed CI/CD pipelines, and reduced deployment time by 70% through automation.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold">Cloud Infrastructure Engineer</h3>
                <p className="text-gray-500">Cloud Solutions Ltd. • 2018 - 2020</p>
                <p className="text-gray-600 mt-2">
                  Managed AWS infrastructure using Terraform and CloudFormation. Implemented infrastructure as code practices and 
                  built automated scaling solutions for high-traffic applications.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold">Systems Administrator</h3>
                <p className="text-gray-500">Tech Solutions Inc. • 2016 - 2018</p>
                <p className="text-gray-600 mt-2">
                  Maintained and improved on-premise and cloud infrastructure. Automated routine tasks with Ansible and shell scripting.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              Interested in working together? Feel free to reach out through any of these channels:
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@example.com" 
                className="text-secondary hover:text-secondary-dark transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-secondary-dark transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-secondary-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-secondary-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-background p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Quick Facts</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="text-secondary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>Based in India</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="text-secondary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>5+ years in DevOps & Cloud Infrastructure</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="text-secondary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>B.Tech in Computer Science</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-secondary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>AWS Certified Solutions Architect</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-secondary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>Certified Kubernetes Administrator</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-secondary mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>HashiCorp Certified Terraform Associate</span>
                </li>
              </ul>
              
              <h2 className="text-xl font-bold mt-6 mb-4">Interests</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Open Source</span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Cloud Native</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Automation</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Site Reliability</span>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Security</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">Microservices</span>
              </div>
              
              <h2 className="text-xl font-bold mt-6 mb-4">Education</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold">B.Tech in Computer Science</h3>
                  <p className="text-gray-500">Example University • 2012 - 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
