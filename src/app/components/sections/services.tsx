"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { MdWeb, MdApps, MdApi, MdComputer } from "react-icons/md";

const services = [
  {
    icon: <MdWeb className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Custom websites with modern frameworks like Next.js and optimized for performance and SEO.",
  },
  {
    icon: <MdApps className="h-8 w-8" />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using React Native with native-like performance.",
  },
  {
    icon: <MdApi className="h-8 w-8" />,
    title: "API Development",
    description:
      "Robust backend services and REST/GraphQL APIs built with Node.js and TypeScript.",
  },
  {
    icon: <MdComputer className="h-8 w-8" />,
    title: "Performance Optimization",
    description:
      "Audit and improve your application speed, reducing load times by up to 70%.",
  },
];

export function Services() {
  const { ref } = useSectionInView("services", 0.5);

  return (
    <section ref={ref} id="services" className="scroll-mt-28 bg-muted/50">
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
