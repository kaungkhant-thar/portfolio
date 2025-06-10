"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function CrossSectionCable() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white">
      <svg className="sticky top-0 w-full h-screen" viewBox="0 0 1000 1000">
        <motion.path
          d="M100,500 C300,200 700,800 900,500"
          stroke="#4f46e5"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          style={{
            pathLength,
            opacity: pathLength,
          }}
        />
      </svg>
    </section>
  );
}
