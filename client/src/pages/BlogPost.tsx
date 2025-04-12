import { useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { ChevronLeft, Calendar, Tag, Shield, Terminal } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';
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
      document.title = `${post.title} | Shivam DevSecOps Blog`;
    } else {
      document.title = "Post Not Found | Shivam DevSecOps Blog";
    }
  }, [post]);
  
  if (!post) {
    return <NotFound />;
  }
  
  const tagColorMap: Record<string, string> = {
    kubernetes: "border-blue-500 text-blue-400",
    terraform: "border-purple-500 text-purple-400",
    security: "border-red-500 text-red-400",
    cicd: "border-green-500 text-green-400",
    devops: "border-teal-500 text-teal-400",
    performance: "border-orange-500 text-orange-400",
    iac: "border-indigo-500 text-indigo-400",
    "best practices": "border-cyan-500 text-cyan-400",
  };
  
  return (
    <main className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <Link href="/blog" className="text-green-400 hover:text-green-300 flex items-center mb-6 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span className="font-mono">cd /blog</span>
        </Link>
        
        <Card className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 shadow-lg">
          <CardContent className="p-8">
            <div className="mb-8 pb-4 border-b border-gray-800">
              <div className="flex items-start mb-4">
                <Shield className="h-5 w-5 text-green-500 mr-2 mt-1.5" />
                <h1 className="text-3xl md:text-4xl font-bold text-white font-mono">{post.title}</h1>
              </div>
              
              <div className="flex items-center mb-4 text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(post.date)}</span>
                <span className="mx-3">•</span>
                <Tag className="h-4 w-4 mr-2" />
                <span>{post.tags.length} tags</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`${tagColorMap[tag.toLowerCase()] || "border-gray-600 text-gray-400"} text-xs font-medium px-2.5 py-0.5 rounded border bg-gray-900`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="bg-black p-3 border-l-4 border-green-500 rounded-r-md">
                <p className="text-gray-300 italic">{post.excerpt}</p>
              </div>
            </div>
            
            {post.content ? (
              <div className="prose prose-invert prose-pre:bg-black prose-pre:border prose-pre:border-green-500/20 prose-code:text-green-400 prose-headings:text-green-400 prose-a:text-green-400 max-w-none">
                <ReactMarkdown>
                  {post.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="prose prose-invert prose-headings:text-green-400 max-w-none">
                <div className="flex items-center mb-4">
                  <Terminal className="h-5 w-5 text-green-500 mr-2" />
                  <h2 className="text-xl font-mono">Article in Development</h2>
                </div>
                <div className="bg-black p-4 rounded border border-gray-800 font-mono text-sm">
                  <p className="text-gray-400 mb-2"><span className="text-green-500">$</span> cat article.md</p>
                  <p className="text-gray-300 mb-2">This article is still being developed. Check back soon for the complete content.</p>
                  <p className="text-gray-400 mb-2"><span className="text-green-500">$</span> grep -r "keywords" ./</p>
                  <div className="text-gray-300">
                    {post.tags.join(', ')}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default BlogPost;
