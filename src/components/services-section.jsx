"use client";

import Link from "next/link";
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const services = [
    {
      title: "AI Solutions",
      description: "Leverage advanced artificial intelligence to transform your business operations and decision-making processes.",
      link: "/solutions/ai",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable, secure, and reliable cloud solutions designed for enterprise-grade applications and workloads.",
      link: "/solutions/cloud",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Workflow Automation",
      description: "Streamline your business processes, eliminate repetitive tasks, and enhance productivity across your organization.",
      link: "/services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that drive strategic decision-making and business growth.",
      link: "/services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Enterprise Software",
      description: "Custom software solutions built to address your unique business challenges and operational requirements.",
      link: "/services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "IT Consulting",
      description: "Strategic guidance to navigate the complexities of digital transformation and technology adoption.",
      link: "/services",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-indigo-950/20 dark:from-background dark:to-indigo-950/30 -z-10" />
      
      {/* Tech-themed decorative elements */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Orbital rings */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] border border-indigo-500/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] border border-indigo-500/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        
        {/* Glowing dots */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-indigo-500 rounded-full"
          animate={{ 
            boxShadow: ["0 0 0 rgba(99, 102, 241, 0)", "0 0 15px rgba(99, 102, 241, 0.7)", "0 0 0 rgba(99, 102, 241, 0)"] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-500 rounded-full"
          animate={{ 
            boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 15px rgba(59, 130, 246, 0.7)", "0 0 0 rgba(59, 130, 246, 0)"] 
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      <Container>
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Services</span>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-indigo-500"
              animate={{ width: isInView ? 48 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>
          <p className="text-foreground/80 text-lg">
            Enterprise solutions designed to help your business leverage the latest technologies for competitive advantage.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-sm bg-white/5 dark:bg-black/10 border border-indigo-500/20 rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px -10px rgba(99, 102, 241, 0.3)",
                borderColor: "rgba(99, 102, 241, 0.4)"
              }}
            >
              <motion.div 
                className="mb-4 text-indigo-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>
              <Link 
                href={service.link}
                className="text-indigo-500 hover:text-indigo-400 font-medium group flex items-center"
              >
                Learn more <motion.span 
                  className="inline-block ml-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                >→</motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 