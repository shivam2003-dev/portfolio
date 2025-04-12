import { BlogPost } from '@/data/blog-posts';

/**
 * Utility function to parse frontmatter from markdown files
 * This is a placeholder for a real implementation that would fetch and parse markdown files
 * In a real implementation, this would use something like gray-matter to parse frontmatter
 */
export async function getMarkdownPosts(): Promise<BlogPost[]> {
  // In a real implementation using GitHub Pages, you would:
  // 1. Fetch the markdown files from the /docs/blog directory
  // 2. Parse the frontmatter using gray-matter
  // 3. Return the parsed data as BlogPost objects
  
  // This is a mock implementation that would be replaced when deploying to GitHub Pages
  return [];
}

/**
 * Utility function to get a markdown post by slug
 * This is a placeholder for a real implementation 
 */
export async function getMarkdownPostBySlug(slug: string): Promise<BlogPost | null> {
  // In a real implementation using GitHub Pages, you would:
  // 1. Fetch the specific markdown file from /docs/blog based on the slug
  // 2. Parse the frontmatter and content using gray-matter
  // 3. Return the parsed data as a BlogPost object with the content included
  
  // This is a mock implementation that would be replaced when deploying to GitHub Pages
  return null;
}

/**
 * Utility function to combine hardcoded posts with markdown posts
 * This allows for a smooth transition to using markdown files
 */
export async function combinePostSources(hardcodedPosts: BlogPost[]): Promise<BlogPost[]> {
  try {
    const markdownPosts = await getMarkdownPosts();
    
    // Combine posts and sort by date (most recent first)
    return [...hardcodedPosts, ...markdownPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error combining post sources:', error);
    return hardcodedPosts;
  }
}