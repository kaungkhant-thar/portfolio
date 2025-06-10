"use client";

import { useScroll, useTransform, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

export function ParallaxImage({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="relative h-[150vh] overflow-hidden">
      <motion.div style={{ y, scale }} className="sticky top-0 h-screen w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}
