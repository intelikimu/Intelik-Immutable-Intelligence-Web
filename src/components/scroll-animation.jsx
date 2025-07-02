"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Animation types
export const ANIMATION_TYPES = {
  FADE_UP: "fade-up",
  FADE_DOWN: "fade-down",
  FADE_LEFT: "fade-left",
  FADE_RIGHT: "fade-right",
  SCALE_UP: "scale-up",
  ZOOM_IN: "zoom-in",
  STAGGER: "stagger",
};

export function ScrollAnimation({
  children,
  type = ANIMATION_TYPES.FADE_UP,
  delay = 0,
  duration = 0.8,
  start = "top 80%",
  end = "bottom 20%",
  scrub = false,
  staggerDelay = 0.1,
  className = "",
}) {
  const ref = useRef(null);
  const animation = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Make sure we only initialize animations on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run this effect when the component is mounted on client
    if (!isMounted || !ref.current) return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Use a timeout to ensure Lenis is initialized
    const animationTimer = setTimeout(() => {
      // Create timeline
      const ctx = gsap.context(() => {
        // Default opacity and initial state
        const initialProps = { opacity: 0, ease: "power2.out" };
        const animateProps = { opacity: 1 };

        // Add specific animation properties based on type
        switch (type) {
          case ANIMATION_TYPES.FADE_UP:
            initialProps.y = 50;
            animateProps.y = 0;
            break;
          case ANIMATION_TYPES.FADE_DOWN:
            initialProps.y = -50;
            animateProps.y = 0;
            break;
          case ANIMATION_TYPES.FADE_LEFT:
            initialProps.x = -50;
            animateProps.x = 0;
            break;
          case ANIMATION_TYPES.FADE_RIGHT:
            initialProps.x = 50;
            animateProps.x = 0;
            break;
          case ANIMATION_TYPES.SCALE_UP:
            initialProps.scale = 0.8;
            animateProps.scale = 1;
            break;
          case ANIMATION_TYPES.ZOOM_IN:
            initialProps.scale = 0.5;
            animateProps.scale = 1;
            break;
          case ANIMATION_TYPES.STAGGER:
            // For staggered animation, select all direct children
            if (ref.current.children.length) {
              gsap.set(ref.current.children, initialProps);
              animation.current = gsap.to(ref.current.children, {
                ...animateProps,
                duration,
                delay,
                stagger: staggerDelay,
                scrollTrigger: {
                  trigger: ref.current,
                  start,
                  end: scrub ? end : undefined,
                  scrub: scrub ? true : false,
                  once: !scrub,
                },
              });
            }
            return; // Exit early as we've already set up the animation
          default:
            break;
        }

        // Set initial state
        gsap.set(ref.current, initialProps);

        // Create the animation
        animation.current = gsap.to(ref.current, {
          ...animateProps,
          duration,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start,
            end: scrub ? end : undefined,
            scrub: scrub ? true : false,
            once: !scrub,
          },
        });
      });

      return () => {
        ctx.revert(); // Cleanup
        if (animation.current) {
          animation.current.kill();
        }
      };
    }, 500);

    return () => {
      clearTimeout(animationTimer);
      if (animation.current) {
        animation.current.kill();
      }
    };
  }, [type, delay, duration, start, end, scrub, staggerDelay, isMounted]);

  return (
    <div ref={ref} className={className} suppressHydrationWarning>
      {children}
    </div>
  );
} 