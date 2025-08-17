"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Button } from "./button";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "../../../sanity/types";

export function ProjectCard({
  title,
  description,
  techStack,
  image,
  repoUrl,
  liveUrl,
}: Project) {
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
