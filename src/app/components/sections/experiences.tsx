"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const experiences = [
  {
    year: "2023–Present",
    role: "Frontend Engineer",
    company: "Rezerv",
    description:
      "Building real-time chat apps, resume tools, and AI-driven guitar tools using Next.js, Nest.js, tRPC, and AWS.",
  },
  {
    year: "2023–Present",
    role: "Frontend Engineer",
    company: "Rezerv",
    description:
      "Building real-time chat apps, resume tools, and AI-driven guitar tools using Next.js, Nest.js, tRPC, and AWS.",
  },
  {
    year: "2022",
    role: "Junior Frontend Developer",
    company: "Neva Financial",
    description:
      "Developed a client portfolio dashboard using the MERN stack, with a focus on UI responsiveness and API integration.",
  },
];

export function Experiences() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={ref}
      id="experiences"
      className="relative py-16 bg-background"
      style={{ minHeight: `${experiences.length * 40}vh` }} // Reduced height
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 origin-top rounded bg-primary"
          />

          <div className="space-y-16">
            {" "}
            {/* Reduced from space-y-32 to space-y-16 */}
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const start = i * (1 / experiences.length);
              const end = start + 1 / experiences.length;

              const x = useTransform(
                scrollYProgress,
                [start, end],
                isLeft ? [-100, 0] : [100, 0]
              );
              const opacity = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.2],
                [0, 1]
              );
              const scale = useTransform(
                scrollYProgress,
                [start - 0.1, start + 0.2],
                [0.9, 1]
              );

              return (
                <motion.div
                  key={i}
                  style={{
                    x,
                    opacity,
                    scale,
                  }}
                  className={`relative flex w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline dot (centered) */}
                  <div className="absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-4 border-background" />

                  {/* Card Container with Connector */}
                  <div className={`relative ${isLeft ? "mr-8" : "ml-8"}`}>
                    {/* Connector line to center */}
                    <div
                      className={`
                        absolute top-1/2 h-0.5 bg-primary
                        ${isLeft ? "left-full" : "right-full"}
                      `}
                      style={{
                        width: "calc(50% - 3rem)",
                        transform: "translateY(-50%)",
                      }}
                    />

                    {/* Experience Card */}
                    <div className="group relative w-full max-w-md rounded-xl border bg-muted/50 p-6 backdrop-blur-lg shadow-xl transition hover:shadow-2xl">
                      <motion.h3
                        className="text-xl font-semibold text-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        className="text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {exp.company}
                      </motion.p>
                      <motion.p
                        className="mt-1 text-sm text-primary font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {exp.year}
                      </motion.p>
                      <motion.p
                        className="mt-4 text-sm leading-relaxed text-foreground/80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        {exp.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
