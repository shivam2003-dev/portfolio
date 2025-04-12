import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Terminal, Shield, Cpu, FileCode, UserCircle } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-green-500/30 backdrop-blur-sm bg-opacity-80">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold font-mono text-green-400">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-5 w-5 text-green-500" />
              <span>shivam@devsec:~$</span>
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/" className={`nav-link text-gray-300 hover:text-green-400 transition-colors ${location === '/' ? 'text-green-400 active' : ''}`}>
                  <span className="flex items-center">
                    <Cpu className="h-4 w-4 mr-1" />
                    <span>/home</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`nav-link text-gray-300 hover:text-green-400 transition-colors ${location === '/projects' ? 'text-green-400 active' : ''}`}>
                  <span className="flex items-center">
                    <FileCode className="h-4 w-4 mr-1" />
                    <span>/projects</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className={`nav-link text-gray-300 hover:text-green-400 transition-colors ${location === '/blog' || location.startsWith('/blog/') ? 'text-green-400 active' : ''}`}>
                  <span className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    <span>/blog</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={`nav-link text-gray-300 hover:text-green-400 transition-colors ${location === '/about' ? 'text-green-400 active' : ''}`}>
                  <span className="flex items-center">
                    <UserCircle className="h-4 w-4 mr-1" />
                    <span>/about</span>
                  </span>
                </Link>
              </li>
            </ul>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-green-400 hover:text-green-300 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-green-500/20 pt-2">
            <ul className="space-y-4">
              <li>
                <Link href="/" className={`flex items-center py-2 hover:text-green-400 transition-colors ${location === '/' ? 'text-green-400' : 'text-gray-300'}`}>
                  <Cpu className="h-4 w-4 mr-2" />
                  <span>/home</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`flex items-center py-2 hover:text-green-400 transition-colors ${location === '/projects' ? 'text-green-400' : 'text-gray-300'}`}>
                  <FileCode className="h-4 w-4 mr-2" />
                  <span>/projects</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className={`flex items-center py-2 hover:text-green-400 transition-colors ${location === '/blog' || location.startsWith('/blog/') ? 'text-green-400' : 'text-gray-300'}`}>
                  <Shield className="h-4 w-4 mr-2" />
                  <span>/blog</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className={`flex items-center py-2 hover:text-green-400 transition-colors ${location === '/about' ? 'text-green-400' : 'text-gray-300'}`}>
                  <UserCircle className="h-4 w-4 mr-2" />
                  <span>/about</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
