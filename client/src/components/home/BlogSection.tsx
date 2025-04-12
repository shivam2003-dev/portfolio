import { Link } from 'wouter';
import BlogCard from '@/components/blog/BlogCard';
import { featuredPosts } from '@/data/blog-posts';

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Technical Articles</h2>
        <p className="text-gray-600 mb-8">Thoughts, tutorials, and insights on DevOps practices and tools.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/blog">
            <a className="inline-block bg-secondary hover:bg-secondary-light text-white font-semibold py-2 px-6 rounded transition duration-300">
              Read more articles
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
