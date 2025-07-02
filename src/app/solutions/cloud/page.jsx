"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export default function CloudSolutionsPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    document.title = "Cloud Solutions | Intelik";
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: index => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2 + index * 0.1
      }
    })
  };

  // Generate a fixed pattern for cloud shapes
  const cloudShapes = useRef(
    Array.from({ length: 64 }).map((_, i) => ({
      opacity: 0.1 + (i % 5) * 0.1,
      scale: 0.5 + (i % 10) * 0.05
    }))
  ).current;

  return (
    <div className="py-16 md:py-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 md:py-32 -mt-24 pt-36">
        {/* Cloud pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-4">
            {cloudShapes.map((pattern, i) => (
              <div 
                key={i}
                className="aspect-square bg-indigo-500/20 rounded-3xl"
                style={{
                  opacity: pattern.opacity,
                  transform: `scale(${pattern.scale})`
                }}
              />
            ))}
          </div>
          
          {/* Animated data flow */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent top-1/2 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent left-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute w-3/4 h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent top-1/3 animate-pulse" style={{ animationDuration: '5s' }}></div>
          </div>
        </div>
        
        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Accelerate Growth with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">Cloud</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Scalable, secure, and cost-effective cloud infrastructure solutions tailored to your business objectives.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-full font-medium inline-block"
              >
                Explore Cloud Solutions
              </Link>
            </motion.div>
          </div>
        </Container>
      </div>
      
      {/* Introduction Section */}
      <Container>
        <div className="py-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unleashing the Potential of Cloud Computing
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Cloud computing has transformed how businesses operate, enabling unprecedented scalability, flexibility, and innovation. Modern enterprises leverage cloud technologies to reduce IT costs, accelerate time-to-market, and build resilient infrastructure that adapts to changing business needs.
            </p>
            
            <p className="text-lg text-muted-foreground">
              At Intelik, we provide comprehensive cloud solutions that help organizations of all sizes harness the full potential of cloud computing. From migration strategies to cloud-native application development, our experts guide you through every stage of your cloud journey.
            </p>
          </motion.div>
          
          {/* Highlighted statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-border bg-card/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
      
      {/* Core Cloud Capabilities */}
      <div className="py-16 bg-muted/50">
        <Container>
          <div ref={containerRef} className="max-w-4xl mx-auto">
            <motion.div
              variants={headerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Cloud Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver end-to-end cloud solutions tailored to your specific business requirements and technical environment.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="p-6 rounded-xl border border-border bg-card/80"
                >
                                  <div className="text-indigo-500 mb-4">
                  {capability.icon}
                </div>
                  <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      
      {/* Cloud Partners */}
      <Container>
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Cloud Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              We collaborate with leading cloud providers to deliver best-in-class solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="overflow-hidden rounded-xl border border-border bg-card/50 p-6 text-center"
              >
                <div className="text-indigo-500 mb-4 flex justify-center">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
      
      {/* Our Approach */}
      <div className="py-16 bg-gradient-to-br from-indigo-950/20 to-violet-950/20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Intelik Cloud Approach
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Business-First Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  We align cloud initiatives with your business objectives, ensuring technology decisions support your organization's strategic goals. Our approach focuses on delivering measurable business outcomes, not just technical implementations.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Security by Design</h3>
                <p className="text-muted-foreground">
                  Security is integrated into every aspect of our cloud solutions. We implement comprehensive security frameworks that protect your data and applications while enabling compliance with industry regulations and standards.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">Optimization & Cost Control</h3>
                <p className="text-muted-foreground mb-6">
                  We help you maximize the value of your cloud investment through continuous optimization of resources, right-sizing of infrastructure, and implementation of cost management best practices.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Cloud Excellence</h3>
                <p className="text-muted-foreground">
                  Our team of certified cloud experts brings decades of combined experience in designing, implementing, and managing cloud solutions across diverse industries. We stay at the forefront of cloud technologies to ensure you benefit from the latest innovations.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* CTA Section */}
      <Container>
        <div className="py-16">
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-xl bg-gradient-to-br from-indigo-950/30 to-violet-950/30 border border-indigo-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our cloud experts to discuss how Intelik can help you achieve your cloud objectives.
            </p>
            <Link 
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-full font-medium inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

// Statistics
const stats = [
  { value: "40%", label: "Average reduction in IT infrastructure costs" },
  { value: "63%", label: "Faster time-to-market for new applications" },
  { value: "99.99%", label: "Uptime for mission-critical applications" }
];

// Cloud capabilities
const capabilities = [
  {
    title: "Cloud Migration",
    description: "Seamlessly transition your existing applications and data to the cloud with minimal disruption to your business operations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Cloud-Native Development",
    description: "Build modern applications designed specifically for cloud environments, leveraging microservices, containers, and serverless architectures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Multi-Cloud Management",
    description: "Effectively manage resources across multiple cloud providers, ensuring optimal performance, security, and cost-efficiency.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Cloud Security & Compliance",
    description: "Implement robust security measures and compliance frameworks to protect your cloud environment from threats and meet regulatory requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// Cloud partners
const partners = [
  {
    name: "Amazon Web Services",
    description: "Comprehensive services for building and managing applications on AWS's reliable and scalable infrastructure.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: "Microsoft Azure",
    description: "Enterprise-grade cloud solutions integrated with Microsoft's ecosystem of productivity and business applications.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    name: "Google Cloud Platform",
    description: "Advanced cloud services for analytics, machine learning, and application development at global scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  }
]; 