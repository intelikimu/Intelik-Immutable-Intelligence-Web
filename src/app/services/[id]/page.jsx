"use client";

import { useEffect } from "react";
import { Container } from "../../../components/ui/container";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// Mock service data - in a real app, this would come from a database or API
const services = [
  {
    id: "ai-development",
    title: "AI Development",
    description: "Custom artificial intelligence solutions designed to address your specific business challenges and unlock new opportunities.",
    fullDescription: `
      <p>Our AI development services span the entire lifecycle from conception to deployment and ongoing optimization. We work closely with your team to understand your unique business challenges and develop AI solutions that deliver measurable value.</p>
      
      <h3>Our AI Development Expertise Includes:</h3>
      <ul>
        <li>Machine Learning Model Development</li>
        <li>Natural Language Processing</li>
        <li>Computer Vision Systems</li>
        <li>Predictive Analytics</li>
        <li>Recommendation Engines</li>
        <li>Anomaly Detection Systems</li>
      </ul>
      
      <h3>Our Development Process</h3>
      <p>We follow a rigorous methodology to ensure your AI solution meets the highest standards of performance, reliability, and usability.</p>
    `,
    icon: "🤖",
    benefits: [
      "Automate repetitive tasks to free up human resources",
      "Extract actionable insights from your data",
      "Improve decision-making with predictive capabilities",
      "Enhance customer experiences through personalization"
    ]
  },
  {
    id: "blockchain-solutions",
    title: "Blockchain Solutions",
    description: "Secure, transparent, and immutable blockchain systems for various applications from supply chain to financial services.",
    fullDescription: `
      <p>Our blockchain expertise enables organizations to leverage distributed ledger technology for enhanced security, transparency, and efficiency. We develop custom blockchain solutions tailored to your specific industry requirements.</p>
      
      <h3>Blockchain Applications We Develop:</h3>
      <ul>
        <li>Supply Chain Tracking & Verification</li>
        <li>Secure Digital Identity Systems</li>
        <li>Smart Contract Implementation</li>
        <li>Tokenization of Assets</li>
        <li>Decentralized Finance (DeFi) Solutions</li>
        <li>Immutable Record Management</li>
      </ul>
    `,
    icon: "🔗",
    benefits: [
      "Enhance security through cryptographic verification",
      "Increase transparency across multi-party processes",
      "Reduce fraud through immutable transaction records",
      "Streamline operations by eliminating intermediaries"
    ]
  },
  {
    id: "cloud-services",
    title: "Cloud Services",
    description: "Comprehensive cloud solutions from migration and optimization to custom cloud-native application development.",
    fullDescription: `
      <p>Our cloud services help organizations leverage the power of cloud computing to improve scalability, reduce costs, and accelerate innovation. Whether you're just beginning your cloud journey or looking to optimize existing cloud infrastructure, our team has the expertise to guide you.</p>
      
      <h3>Our Cloud Service Offerings:</h3>
      <ul>
        <li>Cloud Migration & Modernization</li>
        <li>Multi-Cloud & Hybrid Cloud Architecture</li>
        <li>Cloud-Native Application Development</li>
        <li>Serverless Computing Solutions</li>
        <li>Cloud Security Implementation</li>
        <li>Cost Optimization & Management</li>
        <li>DevOps & CI/CD Implementation</li>
      </ul>
    `,
    icon: "☁️",
    benefits: [
      "Scale resources on-demand to match business needs",
      "Reduce capital expenditure through pay-as-you-go models",
      "Improve business continuity and disaster recovery",
      "Accelerate deployment of new applications and services"
    ]
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description: "Bespoke software solutions designed to address your unique business requirements and integrate seamlessly with your existing systems.",
    fullDescription: `
      <p>Our custom software development services deliver tailored solutions that address your organization's unique challenges and requirements. We combine technical excellence with business domain knowledge to create software that drives real value.</p>
      
      <h3>Types of Custom Software We Develop:</h3>
      <ul>
        <li>Enterprise Resource Planning (ERP) Systems</li>
        <li>Customer Relationship Management (CRM) Platforms</li>
        <li>Business Process Automation Tools</li>
        <li>Data Analytics & Visualization Dashboards</li>
        <li>Mobile Applications (iOS, Android, Cross-Platform)</li>
        <li>Web Applications & Portals</li>
        <li>Internet of Things (IoT) Solutions</li>
      </ul>
    `,
    icon: "💻",
    benefits: [
      "Address specific business challenges with tailored solutions",
      "Integrate seamlessly with existing systems and workflows",
      "Gain competitive advantage through unique capabilities",
      "Adapt quickly as business requirements evolve"
    ]
  }
];

export default function ServicePage({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const service = services.find(s => s.id === unwrappedParams.id);
  
  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Intelik Services`;
    }
  }, [service]);
  
  if (!service) {
    notFound();
  }
  
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link href="/services" className="text-accent hover:underline group">
              <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span> Back to all services
            </Link>
          </div>
          
          {/* Service header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{service.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl text-muted-foreground">{service.description}</p>
          </div>
          
          {/* Service content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: service.fullDescription }}
          />
          
          {/* Benefits section */}
          <div className="bg-card border border-border rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="text-accent mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Ready to get started with {service.title}?</h3>
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