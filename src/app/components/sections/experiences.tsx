"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

const experiences = [
  {
    year: "2021–2022",
    role: "Junior Frontend Developer",
    company: "Neva Financial",
    description:
      "Built a full-stack client dashboard using the MERN stack. Focused on responsive UI design and seamless integration with REST APIs.",
  },
  {
    year: "2022–2025",
    role: "Frontend Developer",
    company: "Rezerv",
    description:
      "Built and maintained booking platforms used by 400k+ users. Integrated payment gateways like Stripe and PayNow, developed marketing automation features, and deployed apps via GitHub Actions and AWS Amplify.",
  },
  {
    year: "2024–2025",
    role: "B.Sc. (First Class)",
    company: "University of Greenwich",
    description:
      "Studying core computer science subjects including Human-Computer Interaction, Mobile Development, and Web Enterprise Systems. Focused on building software aligned with industry standards.",
  },
  {
    year: "2025–Present",
    role: "Senior Frontend Developer",
    company: "Rezerv",
    description:
      "Leading frontend development of the Rezerv SaaS platform, mentoring junior developers, and architecting scalable UI systems using React, Tailwind CSS, and TypeScript.",
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
    >
      <div className="container mx-auto px-4 ">
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
            className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 origin-top rounded bg-primary"
          />

          <div className="space-y-16">
            {" "}
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
                  <div className="hidden lg:block absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary border-4 border-background" />

                  {/* Card Container with Connector */}
                  <div className={`relative ${isLeft ? "mr-8" : "ml-8"}`}>
                    {/* Connector line to center */}
                    <motion.div
                      className={`
                        hidden lg:block absolute top-1/2 h-1 bg-primary
                        ${isLeft ? "left-full" : "right-full"}
                      `}
                      style={{
                        width: "calc(50% - 3rem)",
                        transform: "translateY(-50%)",
                      }}
                    />

                    {/* Experience Card */}
                    <div className="group relative w-full max-w-md rounded-xl border border-border bg-card p-6 backdrop-blur-lg shadow-xl transition hover:shadow-2xl">
                      <motion.h3
                        className="text-xl font-semibold text-card-foreground"
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
                        className="mt-4 text-sm leading-relaxed text-card-foreground/80"
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
