"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData } from "@/lib/data";

// Container animation with stagger
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Child animation
const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

        {/* Apply stagger to the grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
