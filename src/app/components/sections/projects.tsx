"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export function Projects() {
  const { ref } = useSectionInView("projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
