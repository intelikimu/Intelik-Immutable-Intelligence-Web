"use client";

import { Container } from "./ui/container";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Detect mobile device for optimized animations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 24
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.45, 
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      y: -2
    }
  };

  const gradientVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const partners = [
    { 
      name: "HMR Builders", 
      logo: "/images/logo/hmr.svg",
      overview: "HMR is one of Pakistan’s premier real estate developers, best known for flagship projects such as HMR Waterfront and H1 Tower.",
      highlight: "We built a real estate tokenization platform for HMR, enabling investors to buy fractional property shares using blockchain.",
      bullets: [
        "Secure wallet integrations",
        "Property-backed tokens (PKR & USDC flows)",
        "Investor dashboards with ROI metrics",
        "Smart contracts for transparent ownership and transactions"
      ]
    },
    { 
      name: "United Bank Limited (UBL)", 
      logo: "/images/logo/ubl.png",
      overview: "UBL is one of Pakistan’s largest and most innovative banks, serving millions of customers across retail and corporate segments.",
      highlight: "We developed the Intelligent Loan Origination System (ILOS) for UBL.",
      bullets: [
        "Digitalizes loan products (CashPlus, Auto Loan, SME, Credit Card)",
        "Integrates across departments (PB, SPU, COPS, CIU, Risk, Compliance)",
        "Anchors audit logs on Hyperledger Fabric for tamper-proof transparency",
        "Uses PostgreSQL with Neon and on-prem clusters for resilient data handling"
      ]
    },
    { 
      name: "Bank Alfalah (BAFL)", 
      logo: "/images/logo/bap.png",
      overview: "Bank Alfalah is a leading Pakistani commercial bank known for customer-centric digital banking services.",
      highlight: "Delivered ILOS implementation for multiple lending verticals.",
      bullets: [
        "Seamless customer onboarding and KYC integration",
        "Automated credit checks and workflow routing",
        "Hyperledger Fabric-backed audit trails",
        "Unified dashboard for loan processing"
      ]
    },
    { 
      name: "Allied Bank Limited (ABL)", 
      logo: "/images/logo/abl.jpg",
      overview: "Allied Bank is one of Pakistan’s oldest and most established banks, with a vast branch network and modern digital offerings.",
      highlight: "Rolled out ILOS framework, customized for ABL’s operations.",
      bullets: [
        "Loan origination digitization across consumer lending",
        "Risk and compliance workflow automation",
        "Role-based dashboards for different departments",
        "PostgreSQL + Hyperledger integration for secure, scalable data flows"
      ]
    },
  ];

  const getInitials = (fullName) => {
    try {
      const parts = fullName.split(" ").filter(Boolean);
      const first = parts[0]?.[0] ?? "";
      const last = parts[parts.length - 1]?.[0] ?? "";
      return (first + last).toUpperCase();
    } catch {
      return "P";
    }
  };

  // no-op: links and buttons removed per request

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="partners-heading"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-indigo-50 to-violet-100 dark:from-background dark:via-indigo-950/30 dark:to-violet-950/20 -z-20" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-indigo-200 to-violet-300 dark:from-indigo-900/30 dark:to-violet-800/30 rounded-full blur-3xl -z-10"
        variants={gradientVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-10 w-64 h-64 bg-gradient-to-r from-violet-200 to-indigo-300 dark:from-violet-900/30 dark:to-indigo-800/30 rounded-full blur-3xl -z-10"
        variants={gradientVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.5 }}
      />

      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            id="partners-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block"
            variants={headerVariants}
          >
            Trusted{" "}
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
                Partners
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            variants={headerVariants}
          >
            We collaborate with industry leaders to deliver secure, scalable, and innovative digital solutions that drive transformation and create lasting impact.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Scroll Indicator */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-background to-transparent w-20 h-full pointer-events-none z-10" />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-background to-transparent w-20 h-full pointer-events-none z-10" />

           <div className="pointer-events-auto border px-2">
            <div className="relative overflow-hidden py-4 group">
              <div className="flex items-center gap-4 md:gap-6 lg:gap-8 animate-partners-marquee">
             {partners.concat(partners).map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                   className="flex-shrink-0  flex flex-col items-center justify-center gap-3 rounded-2xl border border-indigo-200/50 dark:border-indigo-500/20 bg-white/70 dark:bg-black/20 backdrop-blur-xl cursor-pointer group relative overflow-hidden w-56 md:w-64 lg:w-72 h-40 md:h-44 lg:h-48"
                  variants={itemVariants}
                   initial="hidden"
                   animate="visible"
                   whileHover={!isMobile ? { y: -6, boxShadow: "0 16px 32px -12px rgba(99, 102, 241, 0.25)" } : undefined}
                  whileTap="tap"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex((prev) => (prev === index ? null : prev))}
                  onClick={() => setSelectedIndex(index)}
                >
                   {/* Hover Effect Background (contained) */}
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Partner Logo/Initials */}
                   <div className="relative z-10">
                    {partner.logo ? (
                       <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-xl overflow-hidden border border-indigo-200/30 dark:border-indigo-500/30 bg-white dark:bg-gray-900 p-2 group-hover:border-indigo-300/50 transition-colors">
                        <Image 
                          src={partner.logo} 
                          alt={partner.name}
                           fill
                           sizes="64px"
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                       <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-500 text-white border border-indigo-300 dark:border-indigo-500 text-lg md:text-xl font-bold shadow-lg">
                        {getInitials(partner.name)}
                      </div>
                    )}
                  </div>

                  {/* Partner Name */}
                   <div className="relative z-10 text-center px-3">
                     <span className="text-sm md:text-base font-semibold text-foreground/90 group-hover:text-foreground transition-colors line-clamp-2 text-center">
                      {partner.name}
                    </span>
                   </div>

                   {/* Tooltip */}
                   <AnimatePresence>
                     {!isMobile && hoveredIndex === index && (
                       <motion.div
                         className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-gray-900/90 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md px-3 py-1 shadow-md"
                         initial={{ opacity: 0, y: 6 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 6 }}
                       >
                         Tap to view projects
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </motion.div>
               ))}
              </div>
            </div>
          </div>

        
        </motion.div>
      </Container>

      {/* Details Panel */}
      <AnimatePresence>
        {selectedIndex !== null && partners[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="mt-8 md:mt-10"
          >
            <Container>
              {/* What We Develop Heading */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  What We <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Develop</span>
                </h3>
                <p className="text-foreground/70">for {partners[selectedIndex].name}</p>
              </motion.div>

              {/* Split Layout */}
              <div className="rounded-2xl border border-indigo-200/50 dark:border-indigo-500/20 bg-white/70 dark:bg-black/20 backdrop-blur-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Side - Cover Image/Logo */}
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-indigo-500/10 to-violet-500/10 dark:from-indigo-900/20 dark:to-violet-900/20 flex items-center justify-center p-8">
                    <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-2xl overflow-hidden border-2 border-indigo-200/30 dark:border-indigo-500/30 bg-white dark:bg-gray-900 p-4 shadow-lg">
                      {partners[selectedIndex].logo ? (
                        <Image 
                          src={partners[selectedIndex].logo} 
                          alt={partners[selectedIndex].name} 
                          fill 
                          sizes="160px" 
                          className="object-contain" 
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-2xl font-bold">
                          {getInitials(partners[selectedIndex].name)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Text Content */}
                  <div className="p-6 md:p-8">
                    <h4 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                      {partners[selectedIndex].name}
                    </h4>
                    
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {partners[selectedIndex].overview}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold mb-2 text-foreground">Our Contribution</h5>
                      <p className="text-foreground/80 mb-4">
                        {partners[selectedIndex].highlight}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h6 className="font-medium text-foreground mb-2">Key Features:</h6>
                      <ul className="space-y-2">
                        {partners[selectedIndex].bullets?.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground/80">
                            <span className="text-indigo-500 mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Hide horizontal scrollbar across browsers */
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
          overscroll-behavior-x: contain;
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
          height: 0;
          width: 0;
          background: transparent;
        }
        /* Infinite marquee animation */
        .animate-partners-marquee {
          width: max-content;
          animation: partners-marquee 28s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-partners-marquee {
          animation-play-state: paused;
        }
        @keyframes partners-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}