"use client";

import { useEffect } from "react";
import Link from "next/link";
import AnimatedBackground from "../../../components/animated-background";

export default function CloudSolutionsPage() {
  useEffect(() => {
    document.title = "Cloud Solutions | Intelik";
  }, []);

  return (
    <>
      {/* Override default background with cloud-specific animated background */}
      <div className="fixed inset-0 z-[-1]">
        <AnimatedBackground variant="cloud" />
      </div>
      
      <div className="container section-padding">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              Cloud Solutions
              <span className="absolute -top-2 -right-2 w-2 h-2 bg-blue-500 rounded-full animate-ping-slow"></span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground animate-type overflow-hidden whitespace-normal">
            Modernize your infrastructure, optimize costs, and accelerate innovation 
            with our comprehensive cloud services.
          </p>
        </div>
        
        {/* Hero section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-16 rounded-xl overflow-hidden glassmorphism">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-sky-400/80 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock the Full Potential of 
              <span className="gradient-text ml-2">Cloud Technology</span>
            </h2>
            <p className="text-white/90 text-lg max-w-2xl">
              Whether you're migrating existing applications or building new cloud-native 
              solutions, our experts will guide you every step of the way.
            </p>
            
            {/* Cloud animation elements */}
            <div className="absolute right-10 bottom-10 hidden md:flex">
              <div className="relative">
                {/* Stylized cloud shapes */}
                <div className="absolute w-24 h-16 bg-white/40 rounded-full blur-md animate-float"></div>
                <div className="absolute w-16 h-12 bg-white/40 rounded-full blur-md -translate-y-4 translate-x-6 animate-float" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute w-14 h-10 bg-white/40 rounded-full blur-md -translate-y-2 translate-x-16 animate-float" style={{ animationDelay: '0.4s' }}></div>
                
                {/* Data flow lines */}
                <div className="absolute h-16 w-[1px] bg-white/60 -translate-y-8 translate-x-12 overflow-hidden">
                  <div className="absolute w-full bg-white/80 animate-data-flow"></div>
                </div>
                <div className="absolute h-20 w-[1px] bg-white/60 -translate-y-12 translate-x-20 overflow-hidden">
                  <div className="absolute w-full bg-white/80 animate-data-flow" style={{ animationDelay: '0.7s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="relative">
              Our Cloud Services
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500"></div>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 text-blue-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {service.features.map((feature, i) => (
                    <li key={i} className="group">
                      <span className="inline-block transition-transform group-hover:translate-x-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cloud partners */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="relative">
              Our Cloud Partners
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500"></div>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={partner.name}
                className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 text-blue-500 flex justify-center">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="glassmorphism p-8 md:p-12 rounded-xl mb-20 relative overflow-hidden">
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-20 h-12 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-md"></div>
            <div className="absolute bottom-10 right-1/4 w-24 h-14 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-md"></div>
            
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent left-[20%]">
              <div className="absolute w-full h-[30%] bg-blue-500/30 animate-data-flow"></div>
            </div>
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent right-[20%]">
              <div className="absolute w-full h-[30%] bg-blue-500/30 animate-data-flow" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to transform your business with cloud technology?
            </h2>
            <p className="text-lg mb-8">
              Get in touch with our cloud experts to discuss your needs and 
              discover how our solutions can help you achieve your goals.
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors relative group"
            >
              Schedule a Consultation
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

// Service cards with icons
const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your applications and data to the cloud with minimal disruption to your business operations.",
    features: ["Assessment and planning", "Workload optimization", "Hybrid cloud strategies", "Data migration"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Cloud-Native Development",
    description: "Build scalable, resilient applications designed specifically for cloud environments.",
    features: ["Microservices architecture", "Containerization (Docker, Kubernetes)", "Serverless computing", "API development"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Cloud Infrastructure Management",
    description: "Optimize and manage your cloud resources for performance, security, and cost efficiency.",
    features: ["Infrastructure as Code (IaC)", "Resource optimization", "Multi-cloud management", "Performance monitoring"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Cloud Security",
    description: "Protect your cloud environment with comprehensive security measures and compliance frameworks.",
    features: ["Security architecture design", "Identity and access management", "Compliance (GDPR, HIPAA, etc.)", "Threat detection and response"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// Cloud partner cards with icons
const partners = [
  {
    name: "Amazon Web Services",
    description: "Expert services for AWS cloud infrastructure and services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: "Microsoft Azure",
    description: "Specialized in Azure cloud solutions and integration with Microsoft technologies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    name: "Google Cloud Platform",
    description: "Leveraging GCP's advanced capabilities for AI, analytics, and more.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  }
]; 