"use client";

import { useScroll, useTransform, motion } from "framer-motion";
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
      className="relative py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-20 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 origin-top rounded bg-primary"
          />

          <div className="space-y-32">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const x = useTransform(
                scrollYProgress,
                [i / experiences.length, (i + 1) / experiences.length],
                isLeft ? [-100, 0] : [100, 0]
              );
              const opacity = useTransform(
                scrollYProgress,
                [i / experiences.length, (i + 1) / experiences.length],
                [0, 1]
              );

              return (
                <motion.div
                  key={i}
                  style={{ x, opacity }}
                  className={`relative flex w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`group relative w-full max-w-md rounded-xl border bg-muted/50 p-6 backdrop-blur-lg shadow-xl transition hover:shadow-2xl ${
                      isLeft ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    {/* Dot on timeline */}
                    <div
                      className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary border-2 border-background z-10"
                      style={{
                        [isLeft ? "right" : "left"]: "-1.15rem",
                      }}
                    />

                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="mt-1 text-sm text-primary font-medium">
                      {exp.year}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {exp.description}
                    </p>
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
