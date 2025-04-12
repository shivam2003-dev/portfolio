import { Mail, Github, Linkedin, Twitter, Lock, AlertTriangle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-green-500/30 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center px-3 py-1 border border-green-500/40 bg-black rounded-sm text-xs text-green-400 font-mono mb-4">
            <Lock className="h-3 w-3 mr-1" />
            <span>Secured with Zero-Trust Architecture</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 font-mono text-sm">
            <p className="text-gray-500">$ echo "© {new Date().getFullYear()} Shivam" | <span className="text-green-400">encrypt</span> --secure</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="mailto:shivam.sk2003@gmail.com" 
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-green-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-800 pt-4 flex justify-center">
          <p className="text-xs text-gray-600 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1 text-yellow-600" />
            <span>Protected against XSS, CSRF, SQL Injection, and other cyber threats</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
