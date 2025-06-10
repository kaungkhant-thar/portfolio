"use client";

import { motion } from "motion/react";

export function AnimatedUnderline() {
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      width="100%"
      height="8"
      viewBox="0 0 100 8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      className="absolute bottom-0 left-0"
    >
      <motion.path
        d="M0 4 C 20 8, 40 0, 50 4 S 80 0, 100 4"
        stroke="currentColor"
        strokeWidth="2"
        fill="transparent"
        variants={pathVariants}
        className="text-primary"
      />
    </motion.svg>
  );
}
