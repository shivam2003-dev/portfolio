import { useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronLeft, Shield, FileText, Terminal } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = "Security Blog | Shivam DevSecOps";
  }, []);

  return (
    <main className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <Link href="/" className="text-green-400 hover:text-green-300 flex items-center mb-6 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="font-mono">cd /home</span>
          </Link>
          
          <div className="p-4 mb-8 border border-green-500/30 bg-black rounded-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
            <div className="flex items-center mb-4">
              <Terminal className="h-5 w-5 text-green-400 mr-2" />
              <h1 className="text-4xl font-bold text-white font-mono">
                <span className="text-green-400">&gt;</span> Security Articles
              </h1>
            </div>
            <p className="text-gray-400 max-w-3xl">
              Explore my collection of articles on DevSecOps practices, secure infrastructure automation, container hardening, and zero-trust security. These posts share insights from real-world cybersecurity challenges and provide practical guidance for modern security-focused DevOps workflows.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-sm">
              <Shield className="h-3 w-3 mr-1 text-green-400" />
              <span>Cloud Security</span>
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-sm">
              <FileText className="h-3 w-3 mr-1 text-green-400" />
              <span>Infrastructure as Code</span>
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-sm rounded-sm">
              <Terminal className="h-3 w-3 mr-1 text-green-400" />
              <span>Automation</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
