import { useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';
import BadgeList from '@/components/ui/badge-list';
import NotFound from '@/pages/not-found';
import { Card, CardContent } from '@/components/ui/card';

// For markdown rendering
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Shivam DevOps Blog`;
    } else {
      document.title = "Post Not Found | Shivam DevOps Blog";
    }
  }, [post]);
  
  if (!post) {
    return <NotFound />;
  }
  
  const tagColorMap: Record<string, string> = {
    kubernetes: "bg-blue-100 text-blue-800",
    terraform: "bg-purple-100 text-purple-800",
    security: "bg-red-100 text-red-800",
    cicd: "bg-green-100 text-green-800",
    devops: "bg-green-100 text-green-800",
    performance: "bg-green-100 text-green-800",
    iac: "bg-purple-100 text-purple-800",
    "best practices": "bg-blue-100 text-blue-800",
  };
  
  return (
    <main className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <Link href="/blog">
          <a className="text-secondary hover:text-secondary-dark flex items-center mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </a>
        </Link>
        
        <Card className="max-w-4xl mx-auto bg-white">
          <CardContent className="p-8">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
              <div className="text-gray-500 mb-4">{formatDate(post.date)}</div>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`${tagColorMap[tag.toLowerCase()] || "bg-gray-100 text-gray-800"} text-xs font-medium px-2.5 py-0.5 rounded`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {post.content ? (
              <div className="prose prose-slate max-w-none">
                <ReactMarkdown>
                  {post.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none">
                <p>This is a placeholder for the full article content.</p>
                <p>{post.excerpt}</p>
                <p>Check back later for the complete article, or browse other articles in the blog section.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default BlogPost;
