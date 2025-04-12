import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">
            <Link href="/" className="flex items-center space-x-2">
              <Terminal className="h-5 w-5 text-secondary" />
              <span>shivam@devops</span>
            </Link>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link href="/" className={`nav-link hover:text-secondary transition-colors ${location === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`nav-link hover:text-secondary transition-colors ${location === '/projects' ? 'active' : ''}`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className={`nav-link hover:text-secondary transition-colors ${location === '/blog' || location.startsWith('/blog/') ? 'active' : ''}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className={`nav-link hover:text-secondary transition-colors ${location === '/about' ? 'active' : ''}`}>
                  About
                </Link>
              </li>
            </ul>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-primary"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <ul className="space-y-4">
              <li>
                <Link href="/" className={`block py-2 hover:text-secondary transition-colors ${location === '/' ? 'text-secondary' : ''}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`block py-2 hover:text-secondary transition-colors ${location === '/projects' ? 'text-secondary' : ''}`}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className={`block py-2 hover:text-secondary transition-colors ${location === '/blog' || location.startsWith('/blog/') ? 'text-secondary' : ''}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className={`block py-2 hover:text-secondary transition-colors ${location === '/about' ? 'text-secondary' : ''}`}>
                  About
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
