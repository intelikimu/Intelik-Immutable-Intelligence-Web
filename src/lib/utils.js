import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges Tailwind CSS classes
 * @param {string[]} inputs - Class names to be combined
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date in a localized format
 * @param {Date|string} date - Date to format
 * @param {Intl.DateTimeFormatOptions} options - Format options
 * @returns {string} - Formatted date string
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  };
  
  return new Date(date).toLocaleDateString("en-US", defaultOptions);
}

/**
 * Truncate a string to a specified length and add ellipsis
 * @param {string} str - String to truncate
 * @param {number} length - Maximum length before truncation
 * @returns {string} - Truncated string
 */
export function truncateString(str, length = 100) {
  if (!str || str.length <= length) return str;
  return str.slice(0, length) + "...";
}

/**
 * Generate a random ID
 * @param {number} length - Length of the ID
 * @returns {string} - Random ID
 */
export function generateId(length = 8) {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Debounce a function call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Get blog posts data
 * @returns {Array} - Array of blog post objects
 */
export function getBlogPosts() {
  // Hardcoded blog post data instead of reading from file system
  return [
    {
      title: "The Future of AI in Enterprise Workflow Automation",
      excerpt: "Discover how cutting-edge AI technologies are transforming enterprise workflows, reducing manual tasks by up to 80% and enabling unprecedented business agility.",
      date: "June 15, 2023",
      author: {
        name: "Alexandra Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop"
      },
      coverImage: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?q=80&w=800&auto=format&fit=crop",
      slug: "future-of-ai-workflow-automation",
      categories: ["AI", "Automation"],
      content: `
        <p>Artificial Intelligence is rapidly transforming how enterprises operate, with workflow automation being one of the most impactful applications. At Intelik, we've been at the forefront of this revolution, helping organizations implement AI-powered solutions that drastically reduce manual tasks while increasing accuracy and efficiency.</p>

        <h2>The Current State of Enterprise Workflow</h2>
        <p>Traditional enterprise workflows are often characterized by:</p>
        <ul>
          <li>Manual data entry and processing</li>
          <li>Siloed information across departments</li>
          <li>Inconsistent execution of processes</li>
          <li>Limited visibility into operational bottlenecks</li>
          <li>High error rates in repetitive tasks</li>
        </ul>
        <p>These challenges lead to inefficiency, increased costs, and employee frustration. The good news is that AI is changing this landscape dramatically.</p>

        <h2>How AI is Revolutionizing Workflows</h2>
        <h3>1. Intelligent Document Processing</h3>
        <p>Modern AI can now extract, classify, and validate information from documents with human-level accuracy. This includes:</p>
        <ul>
          <li>Automatically processing invoices, receipts, and purchase orders</li>
          <li>Extracting key information from contracts and legal documents</li>
          <li>Converting unstructured data into structured, actionable information</li>
        </ul>
        <p>Our client in the financial services sector reduced document processing time by 67% after implementing our AI document processing solution, with a 42% increase in accuracy.</p>

        <h3>2. Predictive Analytics for Process Optimization</h3>
        <p>AI doesn't just automate existing processes; it can optimize them:</p>
        <ul>
          <li>Identifying bottlenecks and inefficiencies in current workflows</li>
          <li>Predicting future resource needs based on historical patterns</li>
          <li>Recommending process improvements based on performance data</li>
        </ul>
        <pre><code class="language-javascript">// Example of a simple predictive function
function predictProcessTime(taskType, dataVolume, historicalData) {
  const model = trainModel(historicalData);
  return model.predict([taskType, dataVolume]);
}</code></pre>

        <h3>3. Natural Language Processing for Communication Automation</h3>
        <p>NLP is transforming how enterprises handle communication:</p>
        <ul>
          <li>Automated email categorization and response</li>
          <li>Intelligent chatbots for internal and customer support</li>
          <li>Sentiment analysis for customer feedback</li>
        </ul>

        <h2>Real-World Impact: Case Studies</h2>
        <h3>Manufacturing Sector</h3>
        <p>A global manufacturing client implemented our AI workflow system and achieved:</p>
        <ul>
          <li>80% reduction in manual data entry</li>
          <li>35% faster production scheduling</li>
          <li>22% decrease in inventory costs through better prediction</li>
        </ul>

        <h3>Healthcare Provider</h3>
        <p>A healthcare network utilized our AI solution for patient record management:</p>
        <ul>
          <li>63% reduction in administrative tasks</li>
          <li>45% faster patient onboarding</li>
          <li>91% accuracy in automated medical coding</li>
        </ul>

        <h2>Challenges and Considerations</h2>
        <p>While the benefits are substantial, implementing AI workflow automation comes with challenges:</p>
        <ol>
          <li><strong>Data Quality</strong>: AI systems are only as good as the data they're trained on</li>
          <li><strong>Integration</strong>: Connecting with legacy systems requires careful planning</li>
          <li><strong>Employee Adoption</strong>: Change management is critical for successful implementation</li>
          <li><strong>Ethical Considerations</strong>: Ensuring fair and unbiased algorithms</li>
        </ol>

        <h2>The Road Ahead</h2>
        <p>The future of AI in workflow automation is even more promising:</p>
        <ul>
          <li><strong>Autonomous Workflows</strong>: Self-optimizing systems that learn and improve without human intervention</li>
          <li><strong>Multimodal AI</strong>: Systems that can process text, images, voice, and video simultaneously</li>
          <li><strong>Collaborative AI</strong>: Tools that work alongside employees, augmenting their capabilities rather than replacing them</li>
        </ul>

        <h2>Conclusion</h2>
        <p>AI-powered workflow automation is no longer a futuristic concept—it's a present-day competitive advantage. Organizations that embrace this technology now will be positioned to outperform their peers in efficiency, cost management, and agility.</p>
        <p>At Intelik, we specialize in designing and implementing these transformative solutions with a focus on practical results and measurable ROI.</p>
      `
    },
    {
      title: "Blockchain Technology: Beyond Cryptocurrency",
      excerpt: "Explore how enterprise blockchain solutions are being used for supply chain transparency, secure identity management, and decentralized finance applications.",
      date: "May 28, 2023",
      author: {
        name: "Michael Johnson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop"
      },
      coverImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop",
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
    }
  ];
} 