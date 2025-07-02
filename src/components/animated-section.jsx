"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up", // fade-up, fade-down, fade-left, fade-right, zoom-in, stagger
  delay = 0,
  duration = 0.8,
  staggerChildren = 0.1,
  threshold = 0.2, // Percentage of element visible before animation starts
  once = true, // Animation happens only once (true) or repeats when scrolling up/down (false)
}) {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Make sure we only initialize animations on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run this effect when component is mounted on client
    if (!isMounted || !sectionRef.current) return;
    
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Make sure the elements are initially invisible
    if (sectionRef.current) {
      if (animation === "stagger" && sectionRef.current.children.length) {
        gsap.set(sectionRef.current.children, { 
          opacity: 0, 
          y: animation.includes("up") ? 40 : animation.includes("down") ? -40 : 0,
          x: animation.includes("left") ? 40 : animation.includes("right") ? -40 : 0,
          scale: animation.includes("zoom") ? 0.9 : 1,
        });
      } else {
        gsap.set(sectionRef.current, { 
          opacity: 0, 
          y: animation.includes("up") ? 40 : animation.includes("down") ? -40 : 0,
          x: animation.includes("left") ? 40 : animation.includes("right") ? -40 : 0,
          scale: animation.includes("zoom") ? 0.9 : 1,
        });
      }
    }

    let ctx;
    // Use a small delay to ensure Lenis is fully initialized
    const animationTimer = setTimeout(() => {
      ctx = gsap.context(() => {
        const animateProps = { 
          opacity: 1, 
          y: 0, 
          x: 0, 
          scale: 1,
          duration: duration,
          ease: "power2.out",
          delay: delay,
          stagger: animation === "stagger" ? staggerChildren : 0,
        };

        // Create the animation based on type
        if (animation === "stagger" && sectionRef.current?.children.length) {
          gsap.to(sectionRef.current.children, {
            ...animateProps,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top bottom-=${threshold * 100}%`,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
              markers: false,
            }
          });
        } else if (sectionRef.current) {
          gsap.to(sectionRef.current, {
            ...animateProps,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top bottom-=${threshold * 100}%`,
              toggleActions: once ? "play none none none" : "play reverse play reverse",
              markers: false,
            }
          });
        }
      }, sectionRef);
    }, 500); // Delay to ensure smooth scrolling is initialized

    return () => {
      clearTimeout(animationTimer);
      ctx?.revert(); // Cleanup
    };
  }, [animation, delay, duration, once, staggerChildren, threshold, isMounted]);

  return (
    <div ref={sectionRef} className={className} suppressHydrationWarning>
      {children}
    </div>
  );
} 