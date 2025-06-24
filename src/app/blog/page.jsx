import { Container } from "../../components/ui/container";
import BlogCard from "../../components/blog-card";

export const metadata = {
  title: "Blog | Intelik",
  description: "Read the latest insights on AI, blockchain, cloud architecture, and enterprise software development.",
};

// Mock blog data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    title: "The Future of AI in Enterprise Workflow Automation",
    excerpt: "Discover how cutting-edge AI technologies are transforming enterprise workflows, reducing manual tasks by up to 80% and enabling unprecedented business agility.",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1677442719398-6a4306bd4d68?q=80&w=800&auto=format&fit=crop",
    slug: "future-of-ai-workflow-automation",
    categories: ["AI", "Automation"]
  },
  {
    title: "Blockchain Technology: Beyond Cryptocurrency",
    excerpt: "Explore how enterprise blockchain solutions are being used for supply chain transparency, secure identity management, and decentralized finance applications.",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop",
    slug: "blockchain-beyond-cryptocurrency",
    categories: ["Blockchain", "Enterprise"]
  },
  {
    title: "Cloud Architecture Best Practices for Enterprise Applications",
    excerpt: "Learn how to design resilient, scalable, and secure cloud infrastructure that can support your organization's growth while optimizing costs and performance.",
    date: "April 12, 2023",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    slug: "cloud-architecture-best-practices",
    categories: ["Cloud", "Architecture"]
  },
  {
    title: "The Rise of Edge Computing in Manufacturing",
    excerpt: "Discover how edge computing is revolutionizing manufacturing processes by enabling real-time data analysis, predictive maintenance, and IoT integration.",
    date: "March 5, 2023",
    image: "https://images.unsplash.com/photo-1565043589221-2a6a8512c08d?q=80&w=800&auto=format&fit=crop",
    slug: "edge-computing-manufacturing",
    categories: ["Edge Computing", "Manufacturing"]
  },
  {
    title: "Securing Enterprise Data in a Remote-First World",
    excerpt: "As organizations embrace remote work, learn how to implement robust security protocols that protect sensitive data while enabling seamless collaboration.",
    date: "February 18, 2023",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    slug: "securing-enterprise-data-remote-work",
    categories: ["Security", "Remote Work"]
  },
  {
    title: "The Business Value of API-First Development",
    excerpt: "Explore how an API-first approach to software development can increase development speed, improve integration capabilities, and create new business opportunities.",
    date: "January 22, 2023",
    image: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=800&auto=format&fit=crop",
    slug: "business-value-api-first-development",
    categories: ["API", "Development"]
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Insights & <span className="gradient-text">Perspectives</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Expert analysis and insights on enterprise technology trends, innovation, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </Container>
    </div>
  );
} 