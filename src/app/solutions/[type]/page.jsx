"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../../../components/ui/container";
import AnimatedBackground from "../../../components/animated-background";
import { notFound } from "next/navigation";
import React from "react";

// Mock solutions data - in a real app, this would come from a database or API
const solutions = [
  {
    type: "ai",
    title: "AI Solutions",
    description: "Harness the power of artificial intelligence to transform your business operations, enhance decision-making, and drive innovation.",
    backgroundVariant: "ai",
    heroTitle: "Transforming Industries with Intelligent Solutions",
    heroDescription: "Our AI-powered solutions are designed to tackle complex business challenges and create new opportunities for growth and efficiency.",
    capabilities: [
      {
        title: "Predictive Analytics",
        description: "Leverage historical data to forecast trends, anticipate market changes, and make data-driven business decisions.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        )
      },
      {
        title: "Natural Language Processing",
        description: "Analyze text, extract insights from documents, and build intelligent chatbots for improved customer experiences.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )
      },
      {
        title: "Computer Vision",
        description: "Automate visual inspection, enhance security systems, and extract valuable information from images and video.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        )
      },
      {
        title: "Machine Learning Operations",
        description: "End-to-end lifecycle management for AI models, from development to deployment and monitoring.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        )
      },
      {
        title: "Recommendation Systems",
        description: "Personalize user experiences and increase engagement with intelligent recommendation algorithms.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        )
      },
      {
        title: "Anomaly Detection",
        description: "Identify unusual patterns in data to prevent fraud, detect defects, and ensure operational integrity.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )
      }
    ]
  },
  {
    type: "cloud",
    title: "Cloud Solutions",
    description: "Modernize your infrastructure, optimize costs, and accelerate innovation with our comprehensive cloud services.",
    backgroundVariant: "cloud",
    heroTitle: "Unlock the Full Potential of Cloud Technology",
    heroDescription: "Whether you're migrating existing applications or building new cloud-native solutions, our experts will guide you every step of the way.",
    capabilities: [
      {
        title: "Cloud Migration",
        description: "Seamlessly migrate your applications and data to the cloud with minimal disruption to your business operations.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        )
      },
      {
        title: "Cloud-Native Development",
        description: "Build scalable, resilient applications designed specifically for cloud environments.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      },
      {
        title: "Cloud Infrastructure Management",
        description: "Optimize and manage your cloud resources for performance, security, and cost efficiency.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10" />
          </svg>
        )
      },
      {
        title: "Cloud Security",
        description: "Protect your cloud environment with comprehensive security measures and compliance frameworks.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      }
    ]
  },
  {
    type: "blockchain",
    title: "Blockchain Solutions",
    description: "Leverage the power of distributed ledger technology to enhance security, transparency, and efficiency across your business operations.",
    backgroundVariant: "default",
    heroTitle: "Transforming Business with Blockchain Technology",
    heroDescription: "Our blockchain solutions provide immutable, transparent, and secure frameworks for a wide range of enterprise applications.",
    capabilities: [
      {
        title: "Smart Contracts",
        description: "Automate agreements and transactions with self-executing contracts that eliminate intermediaries and reduce costs.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      {
        title: "Supply Chain Tracking",
        description: "Create transparent, tamper-proof supply chains with real-time visibility and enhanced traceability.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        )
      },
      {
        title: "Decentralized Finance",
        description: "Implement blockchain-based financial systems that reduce costs, increase security, and expand access.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Digital Identity",
        description: "Secure, self-sovereign identity solutions that give users control while providing verifiable credentials.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
        )
      }
    ]
  }
];

export default function SolutionPage({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);
  const solution = solutions.find(sol => sol.type === unwrappedParams.type);
  
  useEffect(() => {
    if (solution) {
      document.title = `${solution.title} | Intelik`;
    }
  }, [solution]);
  
  if (!solution) {
    notFound();
  }
  
  return (
    <>
      {/* Override default background with solution-specific animated background */}
      <div className="fixed inset-0 z-[-1]">
        <AnimatedBackground variant={solution.backgroundVariant} />
      </div>
      
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              {solution.title}
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-accent rounded-full animate-ping-slow"></span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground animate-type overflow-hidden whitespace-normal">
            {solution.description}
          </p>
        </div>
        
        {/* Hero section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-16 rounded-xl overflow-hidden glassmorphism">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {solution.heroTitle}
            </h2>
            <p className="text-white/90 text-lg max-w-2xl">
              {solution.heroDescription}
            </p>
          </div>
        </div>
        
        {/* Key capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="relative">
              Key Capabilities
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-accent"></div>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 text-accent">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="glassmorphism p-8 md:p-12 rounded-xl mb-20 relative overflow-hidden">
          {/* Tech circuit pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-16 h-16 border-2 border-accent rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-accent rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-accent rounded-full animate-ping-slow"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to explore {solution.title} for your business?
            </h2>
            <p className="text-lg mb-8">
              Schedule a consultation with our experts to discuss your specific requirements 
              and discover how our solutions can address your business challenges.
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors relative group"
            >
              Book a Consultation
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping-slow opacity-75"></span>
            </Link>
          </div>
        </div>
        
        {/* Back link */}
        <div className="text-center">
          <Link href="/services" className="text-accent hover:underline group">
            <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span> Back to Services
          </Link>
        </div>
      </div>
    </>
  );
} 