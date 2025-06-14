"use client";
import { motion, useAnimation, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 100));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      controls.start({
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });
    }
  }, [progress, controls]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={controls}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative w-64">
            {/* Particles with enhanced movement */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: Math.sin(i * 36) * 100 + Math.random() * 50 - 25,
                  y: Math.cos(i * 36) * 100 + Math.random() * 50 - 25,
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  },
                }}
                className="absolute h-2 w-2 rounded-full bg-primary"
              />
            ))}

            {/* Progress bar with smooth animation */}
            <div className="h-1 w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="h-full bg-primary"
              />
            </div>

            <motion.p
              className="mt-4 text-center text-lg font-medium"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8],
                transition: { repeat: Infinity, duration: 1.5 },
              }}
            >
              Loading {progress}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
