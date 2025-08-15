"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaDownload } from "react-icons/fa";
import { TextReveal } from "@/components/ui/text-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

// import { AnimatedUnderline } from "../ui/animate-underline";

export function About() {
  const { ref } = useSectionInView("about", 0.75);

  return (
    <section ref={ref} id="about" className="scroll-mt-28">
      <div className="container mx-auto px-4 py-5 lg:py-20">
        <TextReveal 
          text="About Me"
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
        />

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center">
          <ScrollReveal direction="left" delay={0.2}>
            <motion.div
              className="flex-shrink-0 relative"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar className="h-48 w-48 sm:h-64 sm:w-64 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AvatarImage src="https://ik.imagekit.io/wxk4trjev/assets/profile.jpg" />
                <AvatarFallback>KK</AvatarFallback>
              </Avatar>
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-full -z-10 blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4} className="max-w-2xl space-y-2 lg:space-y-6">
            <ScrollReveal delay={0.6}>
              <p className="text-lg leading-relaxed">
                I'm a seasoned full-stack engineer specializing in high-performance,
                AI-driven applications that handle millions of operations. My expertise 
                spans from React/Next.js frontends to Node.js/Nest.js backends, with 
                enterprise-level DevOps using Docker, Terraform, and AWS infrastructure 
                that never sleeps.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.8}>
              <p className="text-lg leading-relaxed">
                I architect systems that scale effortlessly, integrate cutting-edge AI 
                seamlessly, and deliver user experiences that feel like magic. From 
                real-time collaborative platforms to intelligent automation tools — 
                I transform complex challenges into elegant solutions.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={1.0}>
              <div className="flex flex-wrap gap-1 lg:gap-4">
                {[
                  "React/Next.js",
                  "Node.js/Nest.js", 
                  "TypeScript",
                  "tRPC/GraphQL",
                  "Redis/PostgreSQL",
                  "Tailwind CSS",
                  "Framer Motion",
                  "AWS/Cloud",
                  "Terraform/IaC",
                  "Docker/K8s",
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                      y: -2
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={1.2}>
              <MagneticButton 
                className="mt-6 gap-2"
                href="https://ik.imagekit.io/wxk4trjev/assets/Kaung%20Khant%20Thar%20Resume.pdf"
              >
                <FaDownload className="h-4 w-4" />
                Download CV
              </MagneticButton>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
