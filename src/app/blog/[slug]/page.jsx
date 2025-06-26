import { Container } from "../../../components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPosts } from "../../../lib/utils";

// Fallback blog posts data (in case no posts are found)
const fallbackBlogPosts = [
  {
    title: "The Future of AI in Enterprise Workflow Automation",
    excerpt: "Discover how cutting-edge AI technologies are transforming enterprise workflows, reducing manual tasks by up to 80% and enabling unprecedented business agility.",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?q=80&w=800&auto=format&fit=crop",
    slug: "future-of-ai-workflow-automation",
    categories: ["AI", "Automation"],
    content: `
      <p>Artificial Intelligence is revolutionizing how enterprises manage their workflows, offering unprecedented opportunities to automate complex processes, reduce manual intervention, and free up valuable human resources for more strategic tasks.</p>
      
      <h2>The Evolution of Workflow Automation</h2>
      <p>Traditional workflow automation has been limited to rule-based systems that can handle structured processes but struggle with exceptions and unstructured data. With the integration of AI technologies like machine learning, natural language processing, and computer vision, these limitations are quickly becoming a thing of the past.</p>
      
      <p>Modern AI-powered workflow systems can:</p>
      <ul>
        <li>Learn from historical data to continuously improve processes</li>
        <li>Adapt to changing conditions without manual reprogramming</li>
        <li>Process unstructured data from multiple sources</li>
        <li>Make complex decisions based on probabilistic outcomes</li>
        <li>Predict potential bottlenecks before they occur</li>
      </ul>
      
      <h2>Real-World Applications</h2>
      <p>Across industries, organizations are implementing AI workflow automation to transform their operations:</p>
      
      <h3>Financial Services</h3>
      <p>Banks and financial institutions are using AI to automate loan processing, fraud detection, and customer service interactions. These systems can analyze thousands of data points in seconds to make credit decisions, flag suspicious transactions, and provide personalized customer support.</p>
      
      <h3>Healthcare</h3>
      <p>Healthcare providers are streamlining patient intake, insurance verification, and even preliminary diagnoses with AI systems. This not only reduces administrative burden but also helps ensure that critical patient information is accurately captured and available to clinicians when needed.</p>
      
      <h3>Manufacturing</h3>
      <p>Smart factories are employing AI to optimize production schedules, predict equipment maintenance needs, and ensure quality control. These systems integrate with IoT devices to create a continuous feedback loop that improves efficiency and reduces downtime.</p>
      
      <h2>The Future Outlook</h2>
      <p>As AI technologies continue to mature, we can expect even more sophisticated workflow automation capabilities. The convergence of AI with other emerging technologies like blockchain, edge computing, and 5G will create new possibilities for decentralized, real-time workflow systems that can operate autonomously with minimal human oversight.</p>
      
      <p>Organizations that embrace these technologies now will be well-positioned to achieve significant competitive advantages through increased operational efficiency, reduced costs, and improved customer experiences.</p>
    `
  },
  // other fallback posts...
];

export function generateMetadata({ params }) {
  // Get blog posts from our utility function or use fallback
  const posts = getBlogPosts();
  const blogPosts = posts.length > 0 ? posts : fallbackBlogPosts;
  
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Intelik',
    };
  }
  
  return {
    title: `${post.title} | Intelik Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  // Get blog posts from our utility function or use fallback
  const posts = getBlogPosts();
  const blogPosts = posts.length > 0 ? posts : fallbackBlogPosts;
  
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/blog" className="text-accent hover:underline group">
              <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span> Back to all posts
            </Link>
          </div>
          
          {/* Blog post header */}
          <div className="mb-8">
            <div className="space-x-2 mb-4">
              {post.categories?.map((category) => (
                <span
                  key={category}
                  className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <p className="text-muted-foreground">
              Published on {post.date}
            </p>
          </div>
          
          {/* Featured image */}
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage || post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          {/* Post content - If content is MDX, render it directly as HTML */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Post footer */}
          <div className="mt-16 pt-8 border-t">
            <div className="flex justify-between items-center">
              <Link href="/blog" className="text-accent hover:underline group">
                <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span> Back to all posts
              </Link>
              
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Share on Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Share on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export async function generateStaticParams() {
  // Get blog posts from our utility function or use fallback
  const posts = getBlogPosts();
  const blogPosts = posts.length > 0 ? posts : fallbackBlogPosts;
  
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
} 