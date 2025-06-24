"use client";

import { Container } from "./ui/container";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  // Subtle animation offsets for staggered appearance
  const y1 = useTransform(useScroll().scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(useScroll().scrollYProgress, [0, 1], [70, -30]);
  const y3 = useTransform(useScroll().scrollYProgress, [0, 1], [90, -10]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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

  const caseStudies = [
    {
      title: "Fintech Revolution",
      description:
        "AI-powered fraud detection system that reduced false positives by 87% while increasing detection rates by 34%.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      link: "/case-studies",
    },
    {
      title: "Healthcare Innovation",
      description:
        "Blockchain solution for secure patient data sharing across multiple healthcare providers with 100% HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", 
      link: "/case-studies",
    },
    {
      title: "Retail Transformation",
      description:
        "Cloud migration strategy that improved system reliability by 99.99% and reduced operational costs by 43%.",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800&auto=format&fit=crop",
      link: "/case-studies",
    },
  ];

  return (
    <section 
      ref={ref} 
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-indigo-950/10 dark:from-background dark:to-indigo-950/20 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 z-0" />
      
      <Container className="relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Case <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Studies</span>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-indigo-500"
              animate={{ width: isInView ? 48 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h2>
          <p className="text-foreground/80 text-lg">
            See how our solutions have transformed operations for leading organizations
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="relative group h-full"
              variants={itemVariants}
              style={{ y: [y1, y2, y3][index % 3] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link href={caseStudy.link} className="block h-full">
                <div className="relative h-full overflow-hidden rounded-xl backdrop-blur-sm border border-indigo-500/20 shadow-lg shadow-indigo-900/5 transition-all duration-300 group-hover:border-indigo-500/40 group-hover:shadow-indigo-900/20">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent group-hover:from-indigo-950/60 transition-all duration-300" />
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {caseStudy.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {caseStudy.description}
                    </p>
                    <div className="flex items-center text-indigo-500 font-medium">
                      <span>Read Case Study</span>
                      <motion.span 
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Corner accent decoration */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-indigo-500/20 w-8 h-24 -top-4 -right-4 group-hover:bg-indigo-500/30 transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link 
            href="/case-studies" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors duration-300"
          >
            View All Case Studies
            <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
} 