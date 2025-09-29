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

  // Enhanced parallax effects for more dynamic movement
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const heading = "Hi, I'm Kaung";

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Enhanced background with geometric patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div
          style={{ y: yBackground, scale }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            y: yBackground,
            scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
          }}
          className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-2xl"
        />
      </div>

      <div ref={containerRef} className="relative h-dvh w-full z-10">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4">
          <motion.div
            style={{
              y: yHeading,
              opacity,
              scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.95]),
            }}
            className="text-center max-w-4xl"
          >
            {/* Enhanced main heading with stronger visual impact */}
            <div className="relative">
              <TextReveal
                text={heading}
                className="text-4xl font-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-14 md:leading-36"
              />
              {/* Glow effect behind text */}
              <div className="absolute inset-0 text-4xl font-black sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none text-primary/20 blur-xl -z-10">
                {heading}
              </div>
            </div>

            <ScrollReveal delay={0.3}>
              <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight">
                Full Stack Engineer
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="mt-8 max-w-2xl text-lg sm:text-xl md:text-2xl text-muted-foreground mx-auto leading-relaxed font-medium">
                I craft enterprise-grade applications with cutting-edge AI
                integration, real-time capabilities, and bulletproof cloud
                infrastructure that scales.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <MagneticButton
                  size="lg"
                  href="#projects"
                  className="w-full sm:w-auto min-w-[180px] h-14 text-lg font-semibold"
                >
                  View my work
                </MagneticButton>
                <MagneticButton
                  size="lg"
                  variant="outline"
                  href="#contact"
                  className="w-full sm:w-auto min-w-[180px] h-14 text-lg font-semibold"
                >
                  Contact me
                </MagneticButton>
              </div>
            </ScrollReveal>
          </motion.div>

          {/* Enhanced bouncing arrow with glow effect */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <BsArrowDown className="h-8 w-8 text-primary drop-shadow-lg" />
              <div className="absolute inset-0 h-8 w-8 text-primary/30 blur-sm">
                <BsArrowDown className="h-8 w-8" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <BgBlur />
    </section>
  );
}
