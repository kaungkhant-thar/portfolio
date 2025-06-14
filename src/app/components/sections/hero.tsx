"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { Button } from "@/components/ui/button";
import { useSectionInView } from "@/hooks/use-section-in-view";
import BgBlur from "../ui/bg-blur";
import { BsArrowDown, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export function Hero() {
  const { ref: sectionRef } = useSectionInView("home", 0.5);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background image (moves slower)
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Parallax effect for foreground text (moves slightly)
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const heading = "Hi, I'm Kaung";

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      <div ref={containerRef} className="relative h-screen w-full">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4">
          <motion.div style={{ y: yHeading }} className="text-center max-w-3xl">
            <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
              {[...heading].map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * index }}
                  className={`inline-block ${
                    char === "K" ? "text-primary" : ""
                  }`}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-2xl sm:text-3xl md:text-4xl"
            >
              Full Stack Developer & Cloud Enthusiast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 max-w-md text-lg text-muted-foreground sm:text-xl mx-auto"
            >
              I build modern full-stack applications with real-time, AI-powered
              experiences — deployed with scalable cloud infrastructure.
            </motion.p>
            <motion.div
              className="mt-8 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button size="lg" asChild>
                <a href="#projects">View my work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact me</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Bouncing arrow */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <BsArrowDown className="h-8 w-8 animate-bounce" />
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="fixed left-8 z-20 top-1/2 hidden -translate-y-1/2 flex-col gap-4 md:flex"
          >
            {[
              { icon: MdEmail, url: "mailto:kaungkhantthar77@gmail.com" },
              { icon: BsGithub, url: "https://github.com/kaungkhant-thar" },
              {
                icon: BsLinkedin,
                url: "https://www.linkedin.com/in/kaung-khant-thar-b978ab1a1/",
              },
            ].map((item, index) => (
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground  transition-colors hover:text-foreground"
              >
                <item.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <BgBlur />
    </section>
  );
}
