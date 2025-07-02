"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export function SmoothScroll({ children }) {
  const lenisRef = useRef();
  const [isMounted, setIsMounted] = useState(false);
  
  // Make sure we only initialize Lenis on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    // Only run this effect when the component has mounted on the client
    if (!isMounted) return;
    
    // Dynamically import Lenis to prevent server-side issues
    const initLenis = async () => {
      try {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        
        // Dynamic import of Lenis
        const { default: Lenis } = await import('@studio-freight/lenis');
        
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
          wheelMultiplier: 1,
          normalizeWheel: true,
        });
        
        lenisRef.current = lenis;
        
        // Connect Lenis to GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);
        
        // Setup GSAP ticker with Lenis
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        
        // Force a redraw of ScrollTriggers after a small delay
        // This helps with potential issues during initial page load
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
        
        // Check if scrolling works and fix if not
        setTimeout(() => {
          // Test if scrolling is working
          const scrollPos = window.scrollY;
          if (scrollPos === 0) {
            // Instead of calling update(), which doesn't exist in this version
            // Just trigger a small scroll and restore position
            window.scrollTo(0, 1);
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 50);
            
            // Ensure the document has enough height to scroll
            document.body.style.minHeight = '100.1vh';
            setTimeout(() => {
              document.body.style.minHeight = '';
            }, 500);
          }
        }, 1000);
        
        // Add cleanup function
        return () => {
          gsap.ticker.remove(lenis.raf);
          lenis.destroy();
        };
      } catch (error) {
        console.error("Error initializing smooth scroll:", error);
      }
    };
    
    const cleanup = initLenis();
    return () => cleanup?.then(fn => fn?.());
  }, [isMounted]);
  
  // Handle hash links navigation
  useEffect(() => {
    // Only run this effect when the component has mounted on the client
    if (!isMounted) return;
    
    function handleHashLinkClick(e) {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const targetId = target.getAttribute("href");
      if (targetId === "#") return;
      
      e.preventDefault();
      
      const targetElement = document.querySelector(targetId);
      if (targetElement && lenisRef.current) {
        // Get navbar height for offset
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
        lenisRef.current.scrollTo(targetElement, {
          offset: -navbarHeight - 20, // Extra padding
          duration: 1.5,
        });
      }
    }
    
    document.addEventListener("click", handleHashLinkClick);
    return () => document.removeEventListener("click", handleHashLinkClick);
  }, [isMounted]);
  
  // Handle initial hash in URL
  useEffect(() => {
    // Only run this effect when the component has mounted on the client
    if (!isMounted || typeof window === "undefined") return;
    
    const hash = window.location.hash;
    if (hash && hash !== "#") {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target && lenisRef.current) {
          const navbar = document.querySelector('header');
          const navbarHeight = navbar ? navbar.offsetHeight : 80;
          
          lenisRef.current.scrollTo(target, {
            offset: -navbarHeight - 20,
            duration: 1.5,
            immediate: false
          });
        }
      }, 1000);
    }
  }, [isMounted]);

  return <>{children}</>;
} 