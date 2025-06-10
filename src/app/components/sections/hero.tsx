"use client";

import { motion } from "motion/react";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSectionInView } from "@/hooks/use-section-in-view";

export function Hero() {
  const { ref } = useSectionInView("home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* <ParallaxImage src="/hero-bg.jpg" alt="Hero background" /> */}
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex max-w-3xl flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&apos;m <span className="text-primary">Kaung</span>
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl">
            Full Stack Developer & Cloud Enthusiast
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground sm:text-xl">
            I build modern full-stack applications with a focus on real-time,
            AI-powered experiences — deployed reliably with scalable cloud
            infrastructure.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View my work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-8 w-8 animate-bounce" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="fixed left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-4 md:flex"
        >
          {[{ icon: Mail, url: "mailto:kaungkhantthar77@gmail.com" }].map(
            (item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <item.icon className="h-6 w-6" />
              </a>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
