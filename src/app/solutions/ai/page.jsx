"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedBackground from "../../../components/animated-background";

export default function AISolutionsPage() {
  useEffect(() => {
    document.title = "AI Solutions | Intelik";
  }, []);

  return (
    <>
      {/* Override default background with AI-specific animated background */}
      <div className="fixed inset-0 z-[-1]">
        <AnimatedBackground variant="ai" />
      </div>
      
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              AI Solutions
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-accent rounded-full animate-ping-slow"></span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground animate-type overflow-hidden whitespace-normal">
            Harness the power of artificial intelligence to transform your business operations, 
            enhance decision-making, and drive innovation.
          </p>
        </div>
        
        {/* Hero section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-16 rounded-xl overflow-hidden glassmorphism">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transforming Industries with 
              <span className="gradient-text ml-2">Intelligent Solutions</span>
            </h2>
            <p className="text-white/90 text-lg max-w-2xl">
              Our AI-powered solutions are designed to tackle complex business challenges
              and create new opportunities for growth and efficiency.
            </p>
            
            {/* Floating neural network animation */}
            <div className="absolute right-10 bottom-10 hidden md:block">
              <div className="relative w-40 h-40">
                {/* Neural nodes */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full animate-float"></div>
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-float delay-200"></div>
                <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-float delay-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full animate-float delay-100"></div>
                
                {/* Neural connections */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="3" y1="3" x2="30" y2="30" stroke="white" strokeWidth="1" />
                  <line x1="30" y1="30" x2="90" y2="20" stroke="white" strokeWidth="1" />
                  <line x1="90" y1="20" x2="30" y2="90" stroke="white" strokeWidth="1" />
                  <line x1="30" y1="90" x2="137" y2="137" stroke="white" strokeWidth="1" />
                </svg>
              </div>
            </div>
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
            {capabilities.map((capability, index) => (
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
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,50 Q50,0 100,50 T200,50 T300,50 T400,50" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M0,100 Q50,150 100,100 T200,100 T300,100 T400,100" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to explore AI solutions for your business?
            </h2>
            <p className="text-lg mb-8">
              Schedule a consultation with our AI experts to discuss your specific requirements 
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

// Capability cards with icons
const capabilities = [
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
]; 