"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { useSectionInView } from "@/hooks/use-section-in-view";
import BgBlur from "../ui/bg-blur";
import { BsArrowDown, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/text-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
      <div ref={containerRef} className="relative h-dvh w-full">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4">
          <motion.div style={{ y: yHeading }} className="text-center max-w-3xl">
            <TextReveal
              text={heading}
              className="text-3xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
            />
            <ScrollReveal delay={0.3}>
              <h2 className="mt-4 text-xl sm:text-3xl md:text-4xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Full Stack Engineer & Cloud Architect
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <p className="mt-6 max-w-md text-lg text-muted-foreground sm:text-xl mx-auto">
                I craft enterprise-grade applications with cutting-edge AI integration,
                real-time capabilities, and bulletproof cloud infrastructure that scales.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <div className="mt-8 flex gap-4 justify-center">
                <MagneticButton size="lg" href="#projects">
                  View my work
                </MagneticButton>
                <MagneticButton size="lg" variant="outline" href="#contact">
                  Contact me
                </MagneticButton>
              </div>
            </ScrollReveal>
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
              { icon: BsGithub, url: "https://github.com/kaungkhant-thar" },
              {
                icon: BsLinkedin,
                url: "https://www.linkedin.com/in/kaung-khant-thar-b978ab1a1/",
              },
            ].map((item, index) => {
              const isMail = item.url.startsWith("mailto:");
              return (
                <motion.a
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400,
                    damping: 10
                  }}
                  key={index}
                  href={item.url}
                  {...(!isMail && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="text-muted-foreground transition-all duration-300 hover:text-foreground p-3 rounded-full border border-border/50 backdrop-blur-sm"
                >
                  <item.icon className="h-6 w-6" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      <BgBlur />
    </section>
  );
}
