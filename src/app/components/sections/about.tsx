"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
// import { AnimatedUnderline } from "../ui/animate-underline";

export function About() {
  const { ref } = useSectionInView("about", 0.75);

  return (
    <section ref={ref} id="about" className="scroll-mt-28">
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
          {/* <AnimatedUnderline /> */}
        </motion.h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1 }}
            className="flex-shrink-0"
          >
            <Avatar className="h-48 w-48 sm:h-64 sm:w-64">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              I’m a full-stack developer with a strong focus on building
              real-time, AI-powered applications using modern technologies like
              Next.js, Nest.js, and TypeScript. With a solid DevOps foundation
              in Docker, Terraform, and AWS, I bridge the gap between
              development and deployment.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm passionate about crafting seamless user experiences, designing
              scalable architectures, and staying hands-on with the latest in AI
              and cloud. Whether it's a live chat app, scheduling platform — I
              love turning ideas into polished products.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                "React",
                "Next.js",
                "Nest.js",
                "TypeScript",
                "tRPC",
                "Redis",
                "Tailwind CSS",
                "Framer Motion",
                "AWS",
                "Terraform",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
            <Button className="mt-6 gap-2" asChild>
              <a href="/Kaung-Khant-Resume.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
