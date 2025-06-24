"use client";

import { useEffect } from "react";
import { Container } from "../../../components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// Mock case study data - in a real app, this would come from a database or API
const caseStudies = [
  {
    id: "fintech-fraud-detection",
    title: "AI-Powered Fraud Detection for Global Fintech",
    subtitle: "Reducing false positives by 87% while increasing detection rates",
    client: "Leading Financial Technology Provider",
    industry: "Financial Services",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    challenge: "Our client, a major fintech company processing millions of transactions daily, was struggling with their existing fraud detection system. It generated too many false positives, requiring expensive manual reviews and causing customer frustration. Meanwhile, sophisticated fraud attempts were still slipping through.",
    solution: `
      <p>We developed a multi-layered AI fraud detection system that combines several advanced technologies:</p>
      
      <ul>
        <li><strong>Machine Learning Models:</strong> We trained ensemble models on historical transaction data to identify subtle patterns indicative of fraud.</li>
        <li><strong>Behavioral Biometrics:</strong> The system analyzes user behavior patterns to spot anomalies that might indicate account takeover.</li>
        <li><strong>Network Analysis:</strong> Mapping relationships between accounts, devices, and transactions to identify coordinated fraud rings.</li>
        <li><strong>Real-time Decisioning:</strong> All analysis happens in milliseconds, allowing for instant transaction approval or further verification.</li>
      </ul>
      
      <p>The solution was designed to continuously learn and adapt to new fraud patterns through both supervised and unsupervised learning techniques. It integrates seamlessly with the client's existing transaction processing systems and provides an intuitive dashboard for their fraud analysts.</p>
    `,
    results: [
      "87% reduction in false positive alerts",
      "34% increase in fraud detection rate",
      "Estimated $15M in annual savings from prevented fraud",
      "95% reduction in manual review time",
      "Improved customer experience with fewer legitimate transactions being flagged"
    ],
    testimonial: {
      quote: "The AI fraud detection system developed by Intelik has transformed our fraud prevention capabilities. We're catching more actual fraud while dramatically reducing false positives, which has both improved our bottom line and enhanced customer satisfaction.",
      author: "Chief Risk Officer",
      company: "Global Fintech Company"
    },
    technologies: ["Machine Learning", "Behavioral Analytics", "Real-time Processing", "Big Data", "Cloud Infrastructure"]
  },
  {
    id: "healthcare-blockchain",
    title: "Secure Patient Data Sharing with Blockchain",
    subtitle: "Enabling HIPAA-compliant data exchange across healthcare providers",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    challenge: "A network of hospitals, clinics, and specialty care providers needed to securely share patient data to improve care coordination and reduce duplicate testing. Existing solutions were either too centralized (creating single points of failure) or lacked proper audit trails for HIPAA compliance.",
    solution: `
      <p>We designed and implemented a private blockchain solution specifically for healthcare data sharing:</p>
      
      <ul>
        <li><strong>Permissioned Blockchain Network:</strong> Carefully controlled access with different permission levels for various provider types.</li>
        <li><strong>Smart Contracts:</strong> Automated patient consent management and access control based on treatment relationships.</li>
        <li><strong>Cryptographic Privacy:</strong> Patient data is encrypted and only accessible to authorized providers with appropriate keys.</li>
        <li><strong>Immutable Audit Trail:</strong> Complete, tamper-proof record of all data access for compliance and transparency.</li>
        <li><strong>Integration Layer:</strong> Seamless connection with existing electronic health record (EHR) systems.</li>
      </ul>
    `,
    results: [
      "100% HIPAA compliance with comprehensive audit trails",
      "73% reduction in duplicate medical tests",
      "Improved care coordination across 12 hospitals and 45 clinics",
      "Enhanced patient trust with transparent access controls",
      "Estimated $4.2M annual savings in administrative costs"
    ],
    testimonial: {
      quote: "This blockchain solution has solved what seemed like an impossible challenge: sharing critical patient information across our network while maintaining absolute security and regulatory compliance. The impact on patient care has been remarkable.",
      author: "Chief Medical Information Officer",
      company: "Regional Healthcare Network"
    },
    technologies: ["Blockchain", "Smart Contracts", "Cryptography", "API Integration", "Distributed Systems"]
  },
  {
    id: "retail-cloud-transformation",
    title: "Retail Cloud Migration and Transformation",
    subtitle: "Improving system reliability while reducing operational costs by 43%",
    client: "National Retail Chain",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop",
    challenge: "A major retail chain with 500+ locations was struggling with aging on-premises infrastructure that couldn't handle seasonal traffic spikes, resulting in system outages during critical shopping periods. They needed a more reliable, scalable solution while reducing their total IT costs.",
    solution: `
      <p>We developed a comprehensive cloud migration and modernization strategy:</p>
      
      <ul>
        <li><strong>Cloud-Native Architecture:</strong> Redesigned key applications using microservices and containerization.</li>
        <li><strong>Hybrid Deployment:</strong> Strategic distribution of workloads across public cloud and private infrastructure.</li>
        <li><strong>Auto-Scaling:</strong> Dynamic resource allocation to handle traffic fluctuations without manual intervention.</li>
        <li><strong>Continuous Deployment:</strong> Automated CI/CD pipelines to enable rapid, low-risk updates.</li>
        <li><strong>Cost Optimization:</strong> Intelligent resource provisioning and management to minimize cloud spending.</li>
      </ul>
      
      <p>The migration was executed in phases to minimize business disruption, with critical systems transitioned during low-traffic periods. We provided comprehensive training to the client's IT team to ensure they could effectively manage the new cloud environment.</p>
    `,
    results: [
      "99.99% system reliability, up from 97.3%",
      "43% reduction in operational IT costs",
      "Ability to handle 5x normal traffic during peak seasons",
      "70% faster deployment of new features and updates",
      "Improved security posture with modern cloud-native protections"
    ],
    testimonial: {
      quote: "The cloud transformation delivered by Intelik has been a game-changer for our business. We've not only eliminated the system outages that used to plague our busy seasons but also significantly reduced our IT costs. The newfound agility allows us to innovate faster than ever before.",
      author: "CIO",
      company: "National Retail Chain"
    },
    technologies: ["Cloud Computing", "Containerization", "Microservices", "DevOps", "Infrastructure as Code"]
  }
];

export default function CaseStudyPage({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const caseStudy = caseStudies.find(cs => cs.id === unwrappedParams.id);
  
  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} | Intelik Case Studies`;
    }
  }, [caseStudy]);
  
  if (!caseStudy) {
    notFound();
  }
  
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/case-studies" className="text-accent hover:underline group">
              <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span> Back to all case studies
            </Link>
          </div>
          
          {/* Case study header */}
          <div className="mb-12">
            <div className="flex flex-col space-y-2 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">{caseStudy.title}</h1>
              <p className="text-xl text-muted-foreground">{caseStudy.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Client</div>
                <div className="font-medium">{caseStudy.client}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Industry</div>
                <div className="font-medium">{caseStudy.industry}</div>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          {/* Challenge section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <p className="text-muted-foreground">{caseStudy.challenge}</p>
          </div>
          
          {/* Solution section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
            />
          </div>
          
          {/* Results section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Results</h2>
            <ul className="space-y-3">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="text-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Testimonial section */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <blockquote className="relative">
              <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-accent/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative text-lg italic text-muted-foreground mb-4">{caseStudy.testimonial.quote}</p>
              <footer className="font-medium">
                <div>{caseStudy.testimonial.author}</div>
                <div className="text-muted-foreground">{caseStudy.testimonial.company}</div>
              </footer>
            </blockquote>
          </div>
          
          {/* Technologies section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Ready to achieve similar results for your business?</h3>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/90 text-white font-medium transition-colors"
            >
              Contact Us for a Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
} 