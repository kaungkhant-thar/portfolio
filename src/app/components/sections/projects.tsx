"use client";

import { motion, AnimatePresence, PanInfo } from "motion/react";
import { useState, useCallback } from "react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ProjectCard } from "@/components/ui/project-card";
import { TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { PROJECTS_QUERYResult } from "../../../sanity/types";

type Props = {
  projects: PROJECTS_QUERYResult;
};

export function Projects({ projects }: Props) {
  const { ref } = useSectionInView("projects", 0.5);
  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = useCallback(() => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToProject = useCallback(
    (index: number) => {
      setDirection(index > currentProject ? 1 : -1);
      setCurrentProject(index);
    },
    [currentProject]
  );

  const handleDragEnd = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeThreshold = 50;
      const swipeVelocityThreshold = 500;

      if (
        Math.abs(info.offset.x) > swipeThreshold ||
        Math.abs(info.velocity.x) > swipeVelocityThreshold
      ) {
        if (info.offset.x > 0) {
          prevProject();
        } else {
          nextProject();
        }
      }
    },
    [nextProject, prevProject]
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-28 relative overflow-hidden min-h-screen"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 via-secondary/5 to-transparent blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        {/* Header section */}
        <div className="text-center mb-16">
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

        {/* Project Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="h-12 w-12 rounded-full backdrop-blur-md bg-background/80 border-border/50 hover:bg-background/90 hover:scale-105 transition-all duration-200"
            >
              <FiChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="h-12 w-12 rounded-full backdrop-blur-md bg-background/80 border-border/50 hover:bg-background/90 hover:scale-105 transition-all duration-200"
            >
              <FiChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Project Display */}
          <div className="relative md:h-[70vh] min-h-[600px] overflow-hidden rounded-3xl">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={currentProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    duration: 0.3,
                  },
                  opacity: { duration: 0.15 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 flex items-center justify-center"
                whileDrag={{ scale: 0.95 }}
              >
                <div className="w-full pointer-events-auto">
                  <ProjectCard
                    {...projects[currentProject]}
                    isFullScreen={true}
                    projectIndex={currentProject}
                    totalProjects={projects.length}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-border/80"
                }`}
              >
                {index === currentProject && (
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    layoutId="activeIndicator"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
