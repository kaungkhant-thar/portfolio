"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsData } from "@/lib/data";
import { TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { FiGrid, FiList } from "react-icons/fi";

export function Projects() {
  const { ref } = useSectionInView("projects", 0.5);
  const [viewMode, setViewMode] = useState<'grid' | 'featured'>('featured');
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);
  const hasMoreProjects = projectsData.length > 3;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 via-secondary/5 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              {viewMode === 'featured' ? 'Featured Work' : `${projectsData.length} Projects`}
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
            <span className="text-primary font-medium"> production-ready applications</span> that power real businesses, 
            handle high-traffic scenarios, and leverage 
            <span className="text-primary font-medium"> advanced AI capabilities</span> to solve complex problems.
          </motion.p>
          
          {/* View Mode Toggle */}
          <motion.div 
            className="flex items-center justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              variant={viewMode === 'featured' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('featured')}
              className="rounded-full transition-all duration-300"
            >
              <FiGrid className="h-4 w-4 mr-2" />
              Featured
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-full transition-all duration-300"
            >
              <FiList className="h-4 w-4 mr-2" />
              All Projects
            </Button>
          </motion.div>
        </div>

        {viewMode === 'featured' ? (
          /* Featured Layout - Hero project + smaller ones */
          <div className="space-y-12">
            {projectsData.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-background to-background/80 backdrop-blur-sm border border-border/50 shadow-2xl">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={projectsData[0].imageUrl}
                          alt={projectsData[0].title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {projectsData[0].tags.slice(0, 4).map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                        {projectsData[0].title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {projectsData[0].description}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      {projectsData[0].githubUrl && (
                        <Button variant="outline" size="lg" asChild className="rounded-xl">
                          <a href={projectsData[0].githubUrl} target="_blank" rel="noopener noreferrer">
                            View Code
                          </a>
                        </Button>
                      )}
                      {projectsData[0].liveUrl && (
                        <Button size="lg" asChild className="rounded-xl bg-gradient-to-r from-primary to-primary/90">
                          <a href={projectsData[0].liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Other projects grid */}
            {projectsData.length > 1 && (
              <motion.div 
                className="grid gap-8 md:grid-cols-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {projectsData.slice(1).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      duration: 0.7,
                      ease: "easeOut"
                    }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        ) : (
          /* Grid Layout - All projects in uniform grid */
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={`grid gap-8 ${displayedProjects.length === 1 ? 'max-w-2xl mx-auto' : displayedProjects.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.6 + index * 0.1,
                    duration: 0.7,
                    ease: "easeOut"
                  }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
            
            {/* Show More/Less Button */}
            {hasMoreProjects && (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll(!showAll)}
                  className="rounded-full px-8 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  {showAll ? 'Show Less' : `View All ${projectsData.length} Projects`}
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Bottom decoration */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-border" />
            <span>Building the next generation of applications</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
