"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const BgBlur = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const yPrimary = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yTertiary = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Primary blur with enhanced size and movement */}
      <motion.div
        style={{ y: yPrimary, scale, rotate }}
        className="absolute top-[5%] left-[10%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-primary opacity-15 blur-[150px] mix-blend-lighten dark:opacity-25"
      />

      {/* Secondary blur with different timing */}
      <motion.div
        style={{ y: ySecondary, scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]) }}
        className="absolute bottom-[5%] right-[5%] h-[350px] w-[350px] md:h-[450px] md:w-[450px] rounded-full bg-secondary opacity-18 blur-[130px] mix-blend-lighten dark:opacity-28"
      />

      {/* Additional accent blur for more depth */}
      <motion.div
        style={{ y: yTertiary, scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
        className="absolute top-[40%] right-[20%] h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full bg-accent opacity-12 blur-[100px] mix-blend-lighten dark:opacity-20"
      />

      {/* Subtle gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/5 to-background/10" />
    </div>
  );
};

export default BgBlur;
