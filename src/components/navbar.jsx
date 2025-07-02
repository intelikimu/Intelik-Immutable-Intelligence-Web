"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rippleEffects, setRippleEffects] = useState([]);
  const pathname = usePathname();
  const headerRef = useRef(null);
  
  // Initialize bubbles with fixed default values (no random numbers)
  const [bubbles, setBubbles] = useState([
    { width: 75, height: 75, left: 20, top: 20, duration: 10, delay: 0 },
    { width: 60, height: 60, left: 40, top: 40, duration: 12, delay: 0.5 },
    { width: 85, height: 65, left: 60, top: 60, duration: 11, delay: 1 },
    { width: 70, height: 80, left: 80, top: 30, duration: 13, delay: 1.5 },
    { width: 90, height: 70, left: 10, top: 50, duration: 14, delay: 2 }
  ]);

  // Generate random values only on the client-side after component mounts
  useEffect(() => {
    // Only run once on the client
    setBubbles(
      Array.from({ length: 5 }).map((_, i) => ({
        width: Math.random() * 100 + 50,
        height: Math.random() * 100 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 10,
        delay: i * 0.5
      }))
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleMouseMove = (e) => {
      // Only track mouse position when near the navbar (within 100px of top of page)
      if (e.clientY < 100) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseClick = (e) => {
      // Only create ripple when clicking near the navbar
      if (e.clientY < 100) {
        const newRipple = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY
        };
        
        setRippleEffects(prev => [...prev, newRipple]);
        
        // Remove ripple after animation completes
        setTimeout(() => {
          setRippleEffects(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 3000);
      }
    };
    
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, [pathname]);

  // Fixed transform calculation that doesn't use Math.random() or Date.now()
  const getTransform = (index) => {
    // Use a predictable pattern instead of random values
    const scale = 1 + (index % 5) * 0.05;
    return `scale(${scale})`;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blockchain", label: "Blockchain" },
    { href: "/solutions/ai", label: "AI Solutions" },
    { href: "/solutions/cloud", label: "Cloud" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      suppressHydrationWarning
    >
      {/* Liquid Glass Effect Container */}
      <div className="relative overflow-hidden">
        {/* Main navbar content */}
        <div className={`liquid-glass ${isScrolled ? "shadow-lg" : ""} relative z-10`}>
          {/* Ripple effects */}
          {rippleEffects.map((ripple) => (
            <div
              key={ripple.id}
              className="absolute rounded-full bg-accent/30 pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: "10px",
                height: "10px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-accent/30 animate-liquid-ripple" />
            </div>
          ))}
          
          {/* Animated liquid bubbles */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)`,
              transition: "background 0.2s ease"
            }}
            suppressHydrationWarning
          >
            {bubbles.map((bubble, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-accent/20 blur-xl pointer-events-none"
                style={{
                  width: `${bubble.width}px`,
                  height: `${bubble.height}px`,
                  left: `${bubble.left}%`,
                  top: `${bubble.top}%`,
                  opacity: 0.4,
                  transform: getTransform(i),
                  animationName: "float",
                  animationDuration: `${bubble.duration}s`,
                  animationTimingFunction: "ease-in-out",
                  animationDelay: `${bubble.delay}s`,
                  animationIterationCount: "infinite"
                }}
                suppressHydrationWarning
              />
            ))}
          </div>

          {/* Glowing border effect */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent pointer-events-none" />
          
          <div className="container flex h-16 items-center justify-between px-4 md:px-6 relative z-10 pointer-events-auto">
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
              <Link
                href="/"
                className="flex items-center space-x-2 transition-opacity hover:opacity-80"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-bold text-xl relative"
                >
                  <span className="gradient-text">Intelik</span>
                  <motion.span 
                    className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
              </Link>

              {/* Desktop navigation */}
              <nav className="hidden md:flex items-center gap-5 lg:gap-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors hover:text-accent relative group ${pathname === link.href ? "text-accent" : ""
                        }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                        }`} />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="block md:hidden p-2 rounded-md border border-border relative z-20"
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden liquid-glass"
          >
            <nav className="container flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors hover:text-accent ${pathname === link.href ? "text-accent" : ""
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 