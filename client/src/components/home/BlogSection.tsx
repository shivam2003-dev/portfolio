import { Link } from 'wouter';
import BlogCard from '@/components/blog/BlogCard';
import { featuredPosts } from '@/data/blog-posts';
import { FileText, Shield } from 'lucide-react';

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-2">
          <Shield className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-3xl font-bold text-green-400">Security Articles</h2>
        </div>
        <p className="text-gray-400 mb-8">Insights on DevSecOps practices, secure infrastructure, and vulnerability mitigation.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-black font-mono font-semibold py-2 px-6 rounded-sm transition duration-300 shadow-lg hover:shadow-green-500/20">
            <FileText className="mr-2 h-4 w-4" />
            <span>View Security Articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
