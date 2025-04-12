import { useEffect } from 'react';
import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blog-posts';

const Blog = () => {
  // Update page title when component mounts
  useEffect(() => {
    document.title = "Blog | Shivam DevOps";
  }, []);

  return (
    <main className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <a className="text-secondary hover:text-secondary-dark flex items-center mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </a>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Technical Articles</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore my collection of articles on DevOps practices, infrastructure automation, containerization, and cloud security. These posts share insights from real-world experiences and provide practical guidance for modern DevOps challenges.
          </p>
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
