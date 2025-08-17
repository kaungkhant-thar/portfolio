"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Button } from "./button";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "../../../sanity/types";

interface ProjectCardProps extends Project {
  isFullScreen?: boolean;
  projectIndex?: number;
  totalProjects?: number;
}

export function ProjectCard({
  title,
  description,
  techStack,
  image,
  repoUrl,
  liveUrl,
  isFullScreen = false,
  projectIndex = 0,
  totalProjects = 1,
}: ProjectCardProps) {
  if (isFullScreen) {
    return (
      <motion.article
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-sm border border-border/50 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {/* Project counter */}
        <div className="absolute top-6 left-6 z-20">
          <motion.div
            className="px-4 py-2 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-medium text-primary">
              {String(projectIndex + 1).padStart(2, '0')} / {String(totalProjects).padStart(2, '0')}
            </span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-12 min-h-[70vh]">
          {/* Image section */}
          <motion.div 
            className="lg:col-span-3 relative h-96 lg:h-full overflow-hidden rounded-2xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src={image || ""}
              alt={title || ""}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>

          {/* Content section */}
          <motion.div 
            className="lg:col-span-2 flex flex-col justify-center space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
                {title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {techStack?.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground text-sm font-medium rounded-full border border-border/30 hover:border-primary/30 hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {repoUrl && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                      <BsGithub className="h-5 w-5 mr-3" />
                      View Code
                    </a>
                  </Button>
                </motion.div>
              )}
              {liveUrl && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    asChild
                    className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="h-5 w-5 mr-3" />
                      Live Demo
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        rotateX: 2,
        rotateY: 2,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Gradient overlay for modern look */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <Image
          src={image || ""}
          alt={title || ""}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Floating action buttons */}
        <motion.div
          className="absolute top-4 right-4 flex gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {repoUrl && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="secondary"
                asChild
                className="backdrop-blur-md bg-background/80 hover:bg-background/90 border-0 shadow-lg rounded-xl h-9 w-9 p-0"
              >
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <BsGithub className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          )}
          {liveUrl && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                asChild
                className="backdrop-blur-md bg-primary/90 hover:bg-primary shadow-lg border-0 rounded-xl h-9 w-9 p-0"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="relative p-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mt-2 line-clamp-2">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {techStack?.map((tag, index) => (
            <motion.span
              key={index}
              className="px-3 py-1.5 bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground text-xs font-medium rounded-full border border-border/30 hover:border-primary/30 hover:from-primary/10 hover:to-primary/5 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom action bar */}
        <motion.div
          className="flex gap-3 pt-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {repoUrl && (
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full rounded-xl border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <BsGithub className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </motion.div>
          )}
          {liveUrl && (
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="sm"
                asChild
                className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}
