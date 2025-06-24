"use client";

import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParticleAnimation } from "./particle-animation";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-32 min-h-[85vh] flex items-center pointer-events-none">
      {/* Background animation */}
      {mounted && <ParticleAnimation />}
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/30 z-0"></div>

      <Container className="relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="space-y-6 max-w-4xl" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
            >
              Experience the <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-600 dark:from-indigo-400 dark:via-blue-400 dark:to-violet-400">future</span> of enterprise technology
            </motion.h1>
            <motion.p 
              className="text-xl text-foreground/80 max-w-2xl mx-auto mt-6"
            >
              Enterprise-grade AI automation, blockchain solutions, and cloud architecture for forward-thinking organizations.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-10 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-base font-medium bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 border-0 rounded-full"
                >
                  <span className="flex items-center">
                    Get Started <span className="ml-2">→</span>
                  </span>
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/case-studies">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 text-base font-medium backdrop-blur-sm border border-indigo-500/20 rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-20 w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <p className="text-2xl font-light">12K+</p>
              <p className="text-foreground/50 text-sm mt-1">Users</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-light">87+</p>
              <p className="text-foreground/50 text-sm mt-1">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-light">4.9</p>
              <p className="text-foreground/50 text-sm mt-1">Rating</p>
            </div>
          </motion.div>

          {/* Features Grid - minimal */}
          <motion.div 
            className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {items.map((item, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center p-4 rounded-lg backdrop-blur-md bg-white/5 dark:bg-black/10 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-indigo-500">{item.icon}</div>
                  <p className="text-sm text-foreground/80 text-center">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

const items = [
  {
    text: "Trusted by innovative enterprises",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    text: "99.9% uptime guarantee",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    text: "SOC 2 Compliant",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    text: "24/7 Support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  }
]; 