"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export default function AISolutionsPage() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    document.title = "AI Solutions | Intelik";
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

  // Generate a fixed pattern for neural network nodes
  const neuralNodes = useRef(
    Array.from({ length: 64 }).map((_, i) => ({
      opacity: 0.1 + (i % 5) * 0.1,
      scale: 0.5 + (i % 10) * 0.05
    }))
  ).current;

  return (
    <div className="py-16 md:py-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 md:py-32 -mt-24 pt-36">
        {/* Neural pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-4">
            {neuralNodes.map((pattern, i) => (
              <div 
                key={i}
                className="aspect-square bg-indigo-500/20 rounded-full"
                style={{
                  opacity: pattern.opacity,
                  transform: `scale(${pattern.scale})`
                }}
              />
            ))}
          </div>
          
          {/* Animated neural connections */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent top-1/2 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent left-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent top-1/4 animate-pulse" style={{ animationDuration: '5s' }}></div>
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent left-1/4 animate-pulse" style={{ animationDuration: '3.5s' }}></div>
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
              Powering Innovation with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">AI</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Intelligent, adaptive, and scalable AI solutions that transform data into strategic business advantages.
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
                Explore AI Solutions
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
              Transforming Business with Advanced Intelligence
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Artificial Intelligence is revolutionizing how businesses operate, offering unprecedented opportunities to automate processes, extract insights from data, and create more intelligent systems. From predictive analytics to natural language processing, AI technologies are providing competitive advantages across industries.
            </p>
            
            <p className="text-lg text-muted-foreground">
              At Intelik, we develop practical, enterprise-grade AI solutions that address real business challenges. Our approach focuses on delivering measurable results and long-term value, moving beyond proofs of concept to production-ready systems that scale with your business.
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
      
      {/* Core AI Capabilities */}
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
                Our AI Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver robust AI solutions tailored to your specific business needs and technological landscape.
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
      
      {/* Industry Applications */}
      <Container>
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Across Industries
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how our AI solutions are creating value in diverse sectors.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="overflow-hidden rounded-xl border border-border bg-card/50"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="text-sm text-indigo-500 font-medium">
                    {industry.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start mb-2">
                        <div className="mr-2 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
                The Intelik AI Approach
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Pragmatic Innovation</h3>
                <p className="text-muted-foreground mb-6">
                  We focus on practical AI applications that deliver tangible business value. Our solutions balance cutting-edge techniques with proven approaches to ensure reliability, explainability, and performance.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Data-Driven Development</h3>
                <p className="text-muted-foreground">
                  Data is the foundation of successful AI. We help you build comprehensive data strategies, implement robust data pipelines, and develop data governance frameworks to ensure your AI initiatives are built on solid ground.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">Human-Centered AI</h3>
                <p className="text-muted-foreground mb-6">
                  We design AI systems that augment human capabilities rather than replace them. Our solutions prioritize user experience, interpretability, and ethical considerations to ensure AI serves your organization's people and values.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  AI systems require ongoing monitoring and refinement. We implement robust MLOps practices to ensure your models remain accurate, adapt to changing conditions, and continue to deliver value over time.
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
              Ready to Leverage the Power of AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our AI experts to discuss how Intelik can help transform your business with intelligent solutions.
            </p>
            <Link 
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white rounded-full font-medium inline-block"
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
  { value: "85%", label: "Reduction in processing time with AI automation" },
  { value: "57%", label: "Increase in prediction accuracy" },
  { value: "3.2x", label: "ROI for AI implementations" }
];

// AI capabilities
const capabilities = [
  {
    title: "Machine Learning",
    description: "Build predictive models that learn from data and improve over time, enabling more accurate forecasting and decision-making.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Natural Language Processing",
    description: "Extract insights from text data, automate content generation, and build conversational interfaces that understand human language.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  },
  {
    title: "Computer Vision",
    description: "Process and analyze visual information from images and video to automate inspection, enhance security, and enable new capabilities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Deep Learning",
    description: "Leverage neural networks to solve complex problems, identify patterns, and make decisions with unprecedented accuracy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  }
];

// Industry applications
const industries = [
  {
    title: "Financial Services",
    description: "Transform risk assessment, fraud detection, and customer experiences with AI-powered intelligence.",
    benefits: [
      "Real-time fraud detection with 99.6% accuracy",
      "Automated loan underwriting reducing decision time by 80%",
      "Personalized wealth management through intelligent advisors"
    ]
  },
  {
    title: "Healthcare",
    description: "Enhance diagnostics, streamline operations, and improve patient outcomes with intelligent healthcare solutions.",
    benefits: [
      "Early disease detection through advanced imaging analysis",
      "Optimized hospital resource allocation reducing wait times",
      "Personalized treatment recommendations based on patient data"
    ]
  },
  {
    title: "Manufacturing",
    description: "Optimize production, predict maintenance needs, and ensure quality control with AI-driven systems.",
    benefits: [
      "Predictive maintenance reducing downtime by up to 70%",
      "Computer vision for automated quality inspection",
      "Supply chain optimization through demand forecasting"
    ]
  }
]; 