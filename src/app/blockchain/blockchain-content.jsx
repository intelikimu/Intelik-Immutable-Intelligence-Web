"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";

export function BlockchainContent() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
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

  // Generate a fixed pattern for grid blocks to avoid hydration errors
  const gridPatterns = useRef(
    Array.from({ length: 64 }).map((_, i) => ({
      opacity: 0.1 + (i % 5) * 0.1,
      scale: 0.5 + (i % 10) * 0.05
    }))
  ).current;

    return (
      <div className="py-16 md:py-24 -mb-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 md:py-32 -mt-28 pt-40">
          {/* Blockchain pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 gap-4">
            {gridPatterns.map((pattern, i) => (
              <div 
                key={i}
                className="aspect-square bg-indigo-500/20 rounded-lg"
                style={{
                  opacity: pattern.opacity,
                  transform: `scale(${pattern.scale})`
                }}
              />
            ))}
          </div>
          
          {/* Animated connections */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent top-1/2 animate-pulse" style={{ animationDuration: '3s' }}></div>
            <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent left-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
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
              Transforming Business with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400">Blockchain</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Secure, transparent, and decentralized solutions for the next generation of enterprise applications.
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
                Explore Blockchain Solutions
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
              Reimagining Business with Distributed Ledger Technology
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Blockchain technology is fundamentally changing how businesses operate, creating unprecedented opportunities for security, transparency, and efficiency. As a distributed ledger technology, blockchain eliminates single points of failure while providing immutable records that can transform everything from supply chains to financial services.
            </p>
            
            <p className="text-lg text-muted-foreground">
              At Intelik, we harness the power of blockchain to solve real business challenges and create competitive advantages. Our blockchain solutions go beyond the hype to deliver measurable business value, reduced costs, and enhanced trust in your operations.
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
      
      {/* Core Blockchain Capabilities */}
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
                Our Blockchain Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver enterprise-grade blockchain solutions tailored to your specific industry and business requirements.
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
              Transforming Industries with Blockchain
            </h2>
            <p className="text-lg text-muted-foreground">
              See how our blockchain solutions are revolutionizing operations across multiple sectors.
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
                The Intelik Blockchain Approach
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Beyond the Hype</h3>
                <p className="text-muted-foreground mb-6">
                  We cut through the blockchain hype to focus on practical, value-driven implementations that solve real business problems. Our solutions are designed to deliver immediate benefits while positioning your organization for future innovation.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Enterprise-Ready Solutions</h3>
                <p className="text-muted-foreground">
                  Our blockchain implementations meet the stringent requirements of enterprise environments, including performance, security, compliance, and integration with existing systems. We build production-grade solutions that scale with your business.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">Tailored Implementation</h3>
                <p className="text-muted-foreground mb-6">
                  We don't believe in one-size-fits-all solutions. Our blockchain experts work closely with your team to understand your specific challenges and design custom solutions that address your unique business requirements.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Full Lifecycle Support</h3>
                <p className="text-muted-foreground">
                  From initial concept and strategy through development, deployment, and ongoing maintenance, we provide comprehensive support throughout the entire lifecycle of your blockchain implementation.
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
              Ready to Harness the Power of Blockchain?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our blockchain experts to discuss how Intelik can help transform your business with distributed ledger technology.
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
  { value: "68%", label: "Reduction in transaction reconciliation time" },
  { value: "42%", label: "Decrease in supply chain disputes" },
  { value: "3.5x", label: "ROI for blockchain implementations" }
];

// Blockchain capabilities
const capabilities = [
  {
    title: "Smart Contracts",
    description: "Self-executing contracts with the terms directly written into code, automating agreements and eliminating intermediaries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Distributed Ledger",
    description: "Secure, transparent, and tamper-proof record-keeping systems that eliminate single points of failure.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Tokenization",
    description: "Converting rights to an asset into a digital token on a blockchain, enabling new models of ownership and exchange.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Consensus Mechanisms",
    description: "Customized validation processes that ensure network agreement without compromising on security or performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// Industry applications
const industries = [
  {
    title: "Financial Services",
    description: "Revolutionizing payments, settlements, and asset management with transparent, secure blockchain systems.",
    benefits: [
      "Real-time settlement reducing costs by up to 70%",
      "Enhanced regulatory compliance through immutable audit trails",
      "Streamlined cross-border payments and remittances"
    ]
  },
  {
    title: "Supply Chain",
    description: "End-to-end visibility and traceability from manufacturer to consumer, enhancing trust and efficiency.",
    benefits: [
      "Real-time tracking of goods throughout the supply chain",
      "Counterfeit prevention through verified product provenance",
      "Automated supplier payments through smart contracts"
    ]
  },
  {
    title: "Healthcare",
    description: "Secure, interoperable patient data and pharmaceutical tracking systems that enhance care coordination.",
    benefits: [
      "Secure, patient-controlled health record access",
      "Counterfeit drug prevention through verifiable tracking",
      "Streamlined claims processing with reduced disputes"
    ]
  }
]; 