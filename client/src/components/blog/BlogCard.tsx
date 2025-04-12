import { ExternalLink, FileText, Calendar } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { BlogPost } from '@/data/blog-posts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, date, excerpt, tags, slug } = post;
  
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
    <Card className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 h-full hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 text-green-400 font-mono">&gt; {title}</h3>
        <div className="text-gray-500 text-sm mb-3 flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          <span>{formatDate(date)}</span>
        </div>
        <p className="text-gray-300 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`${tagColorMap[tag.toLowerCase()] || "border-gray-600 text-gray-400"} text-xs font-medium px-2.5 py-0.5 rounded border bg-gray-900 bg-opacity-50`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <Link href={`/blog/${slug}`} className="text-green-400 hover:text-green-300 font-medium flex items-center transition-colors duration-200">
              <FileText className="mr-1 h-4 w-4" />
              <span>Read Article</span>
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
