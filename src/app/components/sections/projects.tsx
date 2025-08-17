"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ProjectCard } from "@/components/ui/project-card";
import { TextReveal } from "@/components/ui/text-reveal";

import { PROJECTS_QUERYResult } from "../../../sanity/types";

type Props = {
  projects: PROJECTS_QUERYResult;
};
export function Projects({ projects }: Props) {
  const { ref } = useSectionInView("projects", 0.5);
  const [viewMode, setViewMode] = useState<"grid" | "featured">("featured");

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 via-secondary/5 to-transparent blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              {viewMode === "featured"
                ? "Featured Work"
                : `${projects.length} Projects`}
            </span>
          </motion.div>

          <TextReveal
            text="My Projects"
            className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent"
          />

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore a showcase of
            <span className="text-primary font-medium">
              {" "}
              production-ready applications
            </span>{" "}
            that power real businesses, handle high-traffic scenarios, and
            leverage
            <span className="text-primary font-medium">
              {" "}
              advanced AI capabilities
            </span>{" "}
            to solve complex problems.
          </motion.p>
        </div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className={`grid gap-8 ${projects.length === 1 ? "max-w-2xl mx-auto" : projects.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.7,
                  ease: "easeOut",
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
