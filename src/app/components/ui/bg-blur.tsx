"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const BgBlur = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const yPrimary = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Primary (e.g. theme's primary color) */}
      <motion.div
        style={{ y: yPrimary, scale }}
        className="absolute top-[10%] left-[15%] h-[300px] w-[300px] md:h-[350px] md:w-[350px] rounded-full bg-primary opacity-20 blur-[120px] mix-blend-lighten dark:opacity-30"
      />

      {/* Secondary (e.g. accent or secondary tone) */}
      <motion.div
        style={{ y: ySecondary, scale }}
        className="absolute bottom-[10%] right-[10%] h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full bg-secondary opacity-20 blur-[100px] mix-blend-lighten dark:opacity-30"
      />
    </div>
  );
};

export default BgBlur;
