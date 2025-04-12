import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import BadgeList from '@/components/ui/badge-list';
import { formatDate } from '@/lib/utils';
import { BlogPost } from '@/data/blog-posts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { title, date, excerpt, tags, slug } = post;
  
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
    <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-gray-400 text-sm mb-3">{formatDate(date)}</div>
        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}
        </p>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`${tagColorMap[tag.toLowerCase()] || "bg-gray-100 text-gray-800"} text-xs font-medium px-2.5 py-0.5 rounded`}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-end">
            <Link href={`/blog/${slug}`}>
              <a className="text-secondary hover:text-secondary-dark font-medium flex items-center">
                <span>Read more</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
