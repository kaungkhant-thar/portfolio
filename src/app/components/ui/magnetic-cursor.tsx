"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

export function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMounted, setIsMounted] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const trailX = useMotionValue(0);
  const trailY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const trailSpringConfig = { damping: 40, stiffness: 200 };

  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);
  const cursorTrailX = useSpring(trailX, trailSpringConfig);
  const cursorTrailY = useSpring(trailY, trailSpringConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest(
        'button, a, [role="button"], .cursor-pointer'
      );

      if (isHoverable) {
        setCursorVariant("hover");
        // Position cursor at exact mouse coordinates (transform will center it)
        x.set(e.clientX);
        y.set(e.clientY);
        trailX.set(e.clientX);
        trailY.set(e.clientY);
      } else {
        setCursorVariant("default");
        // Position cursor at exact mouse coordinates (transform will center it)
        x.set(e.clientX);
        y.set(e.clientY);
        trailX.set(e.clientX);
        trailY.set(e.clientY);
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
      if (trailRef.current) {
        trailRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
      if (trailRef.current) {
        trailRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], .cursor-pointer'
    );

    const handleElementMouseEnter = () => {
      setIsHovering(true);
      setCursorVariant("hover");
    };

    const handleElementMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant("default");
    };

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleElementMouseEnter);
      element.addEventListener("mouseleave", handleElementMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementMouseEnter);
        element.removeEventListener("mouseleave", handleElementMouseLeave);
      });
    };
  }, [x, y, trailX, trailY, isMounted]);

  const cursorVariants = {
    default: {
      height: 30,
      width: 30,
      scale: 1,
    },
    hover: {
      height: 60,
      width: 60,
      scale: 1.1,
    },
  };

  const trailVariants = {
    default: {
      height: 40,
      width: 40,
      scale: 1,
    },
    hover: {
      height: 70,
      width: 70,
      scale: 1.05,
    },
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={cursorVariant}
        variants={cursorVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full opacity-30 hidden md:block bg-gradient-to-br from-primary/40 to-primary/20 shadow-lg"
      />
      
      {/* Cursor trail */}
      <motion.div
        ref={trailRef}
        style={{
          x: cursorTrailX,
          y: cursorTrailY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={cursorVariant}
        variants={trailVariants}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
          mass: 0.8,
        }}
        className="pointer-events-none fixed top-0 left-0 z-40 rounded-full opacity-20 hidden md:block bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10"
      />
    </>
  );
}
