import { useEffect } from 'react';
import { Link } from 'wouter';
import { 
  ChevronLeft, Terminal, MapPin, Briefcase, GraduationCap, Award, 
  Mail, Github, Linkedin, Twitter, Shield, Code, Server, Database,
  Cloud, Lock, Globe, Cpu, Clock
} from 'lucide-react';

const About = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = "About | Shivam DevSecOps";
  }, []);

  return (
    <main className="py-16 bg-black min-h-screen text-gray-300">
      <div className="container mx-auto px-4">
        <Link href="/">
          <div className="text-green-400 hover:text-green-300 flex items-center mb-6 transition-colors cursor-pointer">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="font-mono">cd /home</span>
          </div>
        </Link>
        
        <div className="mb-10 border border-green-500/30 bg-gray-900 p-6 rounded-md relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
          <div className="flex items-center mb-2">
            <Terminal className="h-6 w-6 text-green-500 mr-2" />
            <h1 className="text-4xl font-bold text-white font-mono">whoami</h1>
          </div>
          <div className="bg-black/50 p-3 rounded mb-4">
            <span className="text-gray-400">$ </span>
            <span className="text-green-400 font-mono">cat /etc/profile</span>
          </div>
          <p className="text-gray-300 mb-2 leading-relaxed">
            I'm a DevSecOps Engineer and Infrastructure Specialist with a passion for building secure, scalable, and resilient systems.
            My expertise lies at the intersection of development, security, and operations, allowing me to implement robust security practices
            throughout the software development lifecycle.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I specialize in secure CI/CD pipelines, Kubernetes hardening, and implementing zero-trust security architectures.
            My mission is to help organizations build and maintain secure infrastructure while still moving quickly.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-md mb-8 relative overflow-hidden">
              <div className="flex items-center mb-6">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="text-2xl font-bold text-green-400 font-mono">Security Approach</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black p-4 rounded-md border border-gray-800 hover:border-green-500 transition-colors">
                  <div className="font-semibold text-green-400 mb-2 flex items-center">
                    <Lock className="h-4 w-4 mr-2" />
                    <span>Security by Design</span>
                  </div>
                  <p className="text-gray-400 text-sm">Building security in from the beginning, not as an afterthought.</p>
                </div>
                <div className="bg-black p-4 rounded-md border border-gray-800 hover:border-green-500 transition-colors">
                  <div className="font-semibold text-green-400 mb-2 flex items-center">
                    <Code className="h-4 w-4 mr-2" />
                    <span>Infrastructure as Code</span>
                  </div>
                  <p className="text-gray-400 text-sm">All infrastructure defined, versioned, and scanned as code.</p>
                </div>
                <div className="bg-black p-4 rounded-md border border-gray-800 hover:border-green-500 transition-colors">
                  <div className="font-semibold text-green-400 mb-2 flex items-center">
                    <Server className="h-4 w-4 mr-2" />
                    <span>Defense in Depth</span>
                  </div>
                  <p className="text-gray-400 text-sm">Multiple layers of security for comprehensive protection.</p>
                </div>
                <div className="bg-black p-4 rounded-md border border-gray-800 hover:border-green-500 transition-colors">
                  <div className="font-semibold text-green-400 mb-2 flex items-center">
                    <Database className="h-4 w-4 mr-2" />
                    <span>Least Privilege</span>
                  </div>
                  <p className="text-gray-400 text-sm">Only the minimum required access granted at all times.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-md mb-8 relative">
              <div className="flex items-center mb-6">
                <Briefcase className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="text-2xl font-bold text-green-400 font-mono">Work Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-green-500 pl-4 relative hover:bg-black/30 p-2 rounded transition-colors">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="font-mono bg-black inline-block px-2 py-0.5 text-xs text-green-400 rounded mb-2 border border-green-800">2020 - Present</div>
                  <h3 className="text-white font-bold mb-1">Senior DevSecOps Engineer</h3>
                  <p className="text-gray-400 text-sm mb-1">Example Tech Inc.</p>
                  <ul className="text-gray-300 mt-2 list-disc list-inside space-y-1 text-sm">
                    <li>Led security implementation in Kubernetes clusters using Pod Security Policies and OPA Gatekeeper</li>
                    <li>Implemented GitOps workflows with ArgoCD while ensuring secure deployment practices</li>
                    <li>Reduced security vulnerabilities by 80% through automated scanning in CI/CD pipelines</li>
                    <li>Built zero-trust network policies for multi-cloud microservices architecture</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-green-500 pl-4 relative hover:bg-black/30 p-2 rounded transition-colors">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="font-mono bg-black inline-block px-2 py-0.5 text-xs text-green-400 rounded mb-2 border border-green-800">2018 - 2020</div>
                  <h3 className="text-white font-bold mb-1">Cloud Security Engineer</h3>
                  <p className="text-gray-400 text-sm mb-1">Cloud Solutions Ltd.</p>
                  <ul className="text-gray-300 mt-2 list-disc list-inside space-y-1 text-sm">
                    <li>Managed AWS infrastructure using Terraform with security-first IaC practices</li>
                    <li>Implemented AWS Security Hub, GuardDuty, and automated compliance checks</li>
                    <li>Developed secure CI/CD pipelines with Jenkins and AWS CodePipeline</li>
                    <li>Conducted security assessments and remediations for cloud workloads</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-green-500 pl-4 relative hover:bg-black/30 p-2 rounded transition-colors">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="font-mono bg-black inline-block px-2 py-0.5 text-xs text-green-400 rounded mb-2 border border-green-800">2016 - 2018</div>
                  <h3 className="text-white font-bold mb-1">Systems Administrator</h3>
                  <p className="text-gray-400 text-sm mb-1">Tech Solutions Inc.</p>
                  <ul className="text-gray-300 mt-2 list-disc list-inside space-y-1 text-sm">
                    <li>Managed hybrid cloud infrastructure with focus on security hardening</li>
                    <li>Implemented monitoring and alerting systems using Prometheus and Grafana</li>
                    <li>Automated routine tasks with Ansible and shell scripting</li>
                    <li>Deployed and maintained containerized applications with Docker</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-md relative">
              <div className="flex items-center mb-6">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="text-2xl font-bold text-green-400 font-mono">Contact</h2>
              </div>
              
              <div className="bg-black p-4 rounded border border-gray-800 font-mono text-sm mb-4">
                <p className="text-gray-400 mb-2"><span className="text-green-500">$</span> nslookup contact.info</p>
                <p className="text-gray-300">Interested in working together on secure infrastructure projects? Let's connect.</p>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="mailto:shivam.sk2003@gmail.com" 
                  className="text-gray-400 hover:text-green-400 transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6 group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-400 transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-400 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-400 transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6 group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-md shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <Cpu className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="text-xl font-bold text-green-400 font-mono">Skills</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black p-3 rounded border border-gray-800">
                  <h3 className="text-green-400 font-mono text-sm mb-2">// Infrastructure</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-blue-500/40 text-blue-400 text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10">Kubernetes</span>
                    <span className="border border-purple-500/40 text-purple-400 text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10">Terraform</span>
                    <span className="border border-yellow-500/40 text-yellow-400 text-xs font-mono px-2 py-0.5 rounded bg-yellow-500/10">AWS</span>
                    <span className="border border-blue-500/40 text-blue-400 text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10">Azure</span>
                    <span className="border border-red-500/40 text-red-400 text-xs font-mono px-2 py-0.5 rounded bg-red-500/10">Docker</span>
                  </div>
                </div>
                
                <div className="bg-black p-3 rounded border border-gray-800">
                  <h3 className="text-green-400 font-mono text-sm mb-2">// Security</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-red-500/40 text-red-400 text-xs font-mono px-2 py-0.5 rounded bg-red-500/10">SAST/DAST</span>
                    <span className="border border-red-500/40 text-red-400 text-xs font-mono px-2 py-0.5 rounded bg-red-500/10">OPA/Gatekeeper</span>
                    <span className="border border-red-500/40 text-red-400 text-xs font-mono px-2 py-0.5 rounded bg-red-500/10">Vault</span>
                    <span className="border border-red-500/40 text-red-400 text-xs font-mono px-2 py-0.5 rounded bg-red-500/10">CIS Benchmarks</span>
                  </div>
                </div>
                
                <div className="bg-black p-3 rounded border border-gray-800">
                  <h3 className="text-green-400 font-mono text-sm mb-2">// Automation</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-green-500/40 text-green-400 text-xs font-mono px-2 py-0.5 rounded bg-green-500/10">ArgoCD</span>
                    <span className="border border-green-500/40 text-green-400 text-xs font-mono px-2 py-0.5 rounded bg-green-500/10">Jenkins</span>
                    <span className="border border-green-500/40 text-green-400 text-xs font-mono px-2 py-0.5 rounded bg-green-500/10">GitHub Actions</span>
                    <span className="border border-green-500/40 text-green-400 text-xs font-mono px-2 py-0.5 rounded bg-green-500/10">Ansible</span>
                  </div>
                </div>
                
                <div className="bg-black p-3 rounded border border-gray-800">
                  <h3 className="text-green-400 font-mono text-sm mb-2">// Monitoring</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-orange-500/40 text-orange-400 text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10">Prometheus</span>
                    <span className="border border-orange-500/40 text-orange-400 text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10">Grafana</span>
                    <span className="border border-orange-500/40 text-orange-400 text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10">ELK Stack</span>
                    <span className="border border-orange-500/40 text-orange-400 text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10">Datadog</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-md shadow-lg mb-8">
              <div className="flex items-center mb-6">
                <Award className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="text-xl font-bold text-green-400 font-mono">Certifications</h2>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start hover:bg-black p-2 rounded transition-colors">
                  <Award className="text-yellow-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <span className="text-white block">AWS Certified Solutions Architect</span>
                    <span className="text-gray-500 text-xs">Amazon Web Services</span>
                  </div>
                </li>
                <li className="flex items-start hover:bg-black p-2 rounded transition-colors">
                  <Award className="text-blue-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <span className="text-white block">Certified Kubernetes Administrator</span>
                    <span className="text-gray-500 text-xs">Cloud Native Computing Foundation</span>
                  </div>
                </li>
                <li className="flex items-start hover:bg-black p-2 rounded transition-colors">
                  <Award className="text-purple-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <span className="text-white block">HashiCorp Certified Terraform Associate</span>
                    <span className="text-gray-500 text-xs">HashiCorp</span>
                  </div>
                </li>
                <li className="flex items-start hover:bg-black p-2 rounded transition-colors">
                  <Award className="text-red-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <span className="text-white block">Certified Information Systems Security Professional (CISSP)</span>
                    <span className="text-gray-500 text-xs">ISC²</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-6 rounded-md shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-5 w-5 text-green-500 mr-2" />
                <h2 className="text-xl font-bold text-green-400 font-mono">Quick Facts</h2>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>Based in Bengaluru, India</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>7+ years in DevSecOps</span>
                </li>
                <li className="flex items-start">
                  <Globe className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>Worked with clients globally</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>Multi-cloud infrastructure expert</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="text-green-500 mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>B.Tech in Computer Science (2016)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
