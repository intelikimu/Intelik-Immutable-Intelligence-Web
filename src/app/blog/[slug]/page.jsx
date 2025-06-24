import { Container } from "../../../components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// In a real app, this would come from a CMS or API
const blogPosts = [
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
  {
    title: "Blockchain Technology: Beyond Cryptocurrency",
    excerpt: "Explore how enterprise blockchain solutions are being used for supply chain transparency, secure identity management, and decentralized finance applications.",
    date: "May 28, 2023",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop",
    slug: "blockchain-beyond-cryptocurrency",
    categories: ["Blockchain", "Enterprise"],
    content: `
      <p>While blockchain technology first gained mainstream attention through cryptocurrencies like Bitcoin, its potential applications extend far beyond digital currencies. Enterprises across industries are now leveraging blockchain's unique capabilities to solve complex business challenges and create new value propositions.</p>
      
      <h2>What Makes Blockchain Valuable for Enterprise?</h2>
      <p>At its core, blockchain technology offers several key attributes that make it valuable for enterprise applications:</p>
      
      <ul>
        <li><strong>Immutability:</strong> Once data is recorded on a blockchain, it cannot be altered or deleted without consensus.</li>
        <li><strong>Transparency:</strong> All participants in a blockchain network can see the same information.</li>
        <li><strong>Decentralization:</strong> No single entity has complete control over the system.</li>
        <li><strong>Security:</strong> Cryptographic techniques protect data integrity and authenticity.</li>
        <li><strong>Smart Contracts:</strong> Self-executing code that automatically enforces business logic.</li>
      </ul>
      
      <h2>Transformative Enterprise Applications</h2>
      
      <h3>Supply Chain Management</h3>
      <p>Blockchain is being used to create transparent, traceable supply chains where products can be tracked from raw materials to final delivery. This helps combat counterfeiting, verify ethical sourcing claims, and streamline logistics operations.</p>
      
      <h3>Identity Management</h3>
      <p>Secure, self-sovereign identity solutions built on blockchain allow individuals to control their personal data while providing organizations with verified credentials. This reduces fraud, simplifies KYC processes, and enhances privacy.</p>
      
      <h3>Financial Services</h3>
      <p>Beyond cryptocurrencies, blockchain enables faster cross-border payments, automated insurance claims processing, and tokenization of real-world assets like real estate and art.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While the potential is significant, enterprises must navigate several challenges when implementing blockchain solutions:</p>
      
      <ul>
        <li>Regulatory uncertainty in many jurisdictions</li>
        <li>Integration with legacy systems</li>
        <li>Scalability limitations of some blockchain platforms</li>
        <li>Organizational resistance to decentralized models</li>
        <li>Energy consumption concerns (primarily for proof-of-work systems)</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>The enterprise blockchain landscape continues to evolve rapidly. As the technology matures and more organizations gain practical experience with implementation, we expect to see increasingly sophisticated applications that combine blockchain with AI, IoT, and other emerging technologies to create entirely new business models and operational paradigms.</p>
    `
  },
  {
    title: "Cloud Architecture Best Practices for Enterprise Applications",
    excerpt: "Learn how to design resilient, scalable, and secure cloud infrastructure that can support your organization's growth while optimizing costs and performance.",
    date: "April 12, 2023",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
    slug: "cloud-architecture-best-practices",
    categories: ["Cloud", "Architecture"],
    content: "Full content for cloud architecture article..."
  },
  {
    title: "The Rise of Edge Computing in Manufacturing",
    excerpt: "Discover how edge computing is revolutionizing manufacturing processes by enabling real-time data analysis, predictive maintenance, and IoT integration.",
    date: "March 5, 2023",
    image: "https://images.unsplash.com/photo-1581092921461-7d65ca45ec1e?q=80&w=800&auto=format&fit=crop",
    slug: "edge-computing-manufacturing",
    categories: ["Edge Computing", "Manufacturing"],
    content: "Full content for edge computing article..."
  },
  {
    title: "Securing Enterprise Data in a Remote-First World",
    excerpt: "As organizations embrace remote work, learn how to implement robust security protocols that protect sensitive data while enabling seamless collaboration.",
    date: "February 18, 2023",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    slug: "securing-enterprise-data-remote-work",
    categories: ["Security", "Remote Work"],
    content: "Full content for security article..."
  },
  {
    title: "The Business Value of API-First Development",
    excerpt: "Explore how an API-first approach to software development can increase development speed, improve integration capabilities, and create new business opportunities.",
    date: "January 22, 2023",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=800&auto=format&fit=crop",
    slug: "business-value-api-first-development",
    categories: ["API", "Development"],
    content: "Full content for API development article..."
  },
];

export function generateMetadata({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const post = blogPosts.find(post => post.slug === unwrappedParams.slug);
  
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
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const post = blogPosts.find(post => post.slug === unwrappedParams.slug);
  
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
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          {/* Post content */}
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
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
} 