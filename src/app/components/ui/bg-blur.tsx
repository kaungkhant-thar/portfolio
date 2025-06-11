"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const BgBlur = () => {
  const containerRef = useRef(null);

  // Watch scroll of the entire page
  const { scrollYProgress } = useScroll();

  // Transform scroll into vertical position
  const yBlue = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yPurple = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Blue Blob */}
      <motion.div
        style={{ y: yBlue, scale }}
        className="absolute top-[10%] left-[20%] h-[350px] w-[350px] rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-30 blur-[120px] mix-blend-screen"
      />

      {/* Purple Blob */}
      <motion.div
        style={{ y: yPurple, scale }}
        className="absolute bottom-[15%] right-[15%] h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-purple-500 to-pink-400 opacity-30 blur-[100px] mix-blend-screen"
      />
    </div>
  );
};

export default BgBlur;
