"use client";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + Math.random() * 15 + 5, 100);
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true);
        onComplete?.();
      }, 800);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Geometric background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-primary/10"
                style={{
                  width: Math.random() * 200 + 50,
                  height: Math.random() * 200 + 50,
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 8 + 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            {/* Central loading animation */}
            <div className="relative mb-8">
              <motion.div
                className="w-24 h-24 border-4 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-24 h-24 border-4 border-t-primary rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 w-20 h-20 border-2 border-primary/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Progress display */}
            <motion.div 
              className="relative w-80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress dots */}
              <div className="flex justify-between mt-2">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-primary/30"
                    animate={{
                      scale: progress > i * 10 ? [1, 1.5, 1] : 1,
                      backgroundColor: progress > i * 10 ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.3)",
                    }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Loading text with typewriter effect */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.h2
                className="text-2xl font-bold mb-2"
                animate={{
                  background: [
                    "linear-gradient(45deg, hsl(var(--foreground)), hsl(var(--primary)))",
                    "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--foreground)))",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Kaung Khant Thar
              </motion.h2>
              <motion.p
                className="text-muted-foreground"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Crafting digital experiences...
              </motion.p>
            </motion.div>

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: Math.random() * 400 - 200,
                  top: Math.random() * 400 - 200,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
