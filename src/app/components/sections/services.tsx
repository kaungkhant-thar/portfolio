"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import {
  MdWeb,
  MdApps,
  MdApi,
  MdComputer,
  MdArrowForward,
  MdCheck,
} from "react-icons/md";
import { useState } from "react";

const services = [
  {
    icon: <MdWeb className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Custom websites with modern frameworks like Next.js and optimized for performance and SEO.",
    features: [
      "Modern React/Next.js Applications",
      "Responsive Design & Mobile-First",
      "SEO Optimization & Performance",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
    ],
    pricing: "Starting at $2,500",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MdApps className="h-8 w-8" />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications using React Native with native-like performance.",
    features: [
      "Cross-platform Development",
      "Native Performance",
      "App Store Deployment",
      "Push Notifications",
      "Offline Functionality",
    ],
    pricing: "Starting at $4,000",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <MdApi className="h-8 w-8" />,
    title: "API Development",
    description:
      "Robust backend services and REST/GraphQL APIs built with Node.js and TypeScript.",
    features: [
      "RESTful & GraphQL APIs",
      "Database Design & Integration",
      "Authentication & Security",
      "Third-party Integrations",
      "API Documentation",
    ],
    pricing: "Starting at $1,800",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <MdComputer className="h-8 w-8" />,
    title: "Performance Optimization",
    description:
      "Audit and improve your application speed, reducing load times by up to 70%.",
    features: [
      "Performance Auditing",
      "Code Splitting & Lazy Loading",
      "Image & Asset Optimization",
      "Caching Strategies",
      "Core Web Vitals Improvement",
    ],
    pricing: "Starting at $1,200",
    gradient: "from-orange-500 to-red-500",
  },
];

export function Services() {
  const { ref } = useSectionInView("services", 0.5);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-mt-28 bg-gradient-to-br from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
            My Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into powerful digital solutions with cutting-edge
            technology and creative expertise.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  relative h-full rounded-2xl border bg-card/50 backdrop-blur-sm p-6 shadow-lg
                  transition-all duration-300 ease-out cursor-pointer
                  ${hoveredIndex === index ? "scale-105 shadow-2xl border-primary/20" : "hover:shadow-xl"}
                  ${expandedIndex === index ? "ring-2 ring-primary/20" : ""}
                `}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                {/* Gradient Background */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br ${service.gradient}
                    transition-opacity duration-300
                    ${hoveredIndex === index ? "opacity-5" : ""}
                  `}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div
                    className={`
                    inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-4
                    transition-transform duration-300
                    ${hoveredIndex === index ? "scale-110 rotate-3" : ""}
                  `}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expandable Features Section */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedIndex === index ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: expandedIndex === index ? 1 : 0,
                            x: expandedIndex === index ? 0 : -20,
                          }}
                          transition={{ delay: featureIndex * 0.05 }}
                        >
                          <MdCheck className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Expand/Collapse Button */}
                  <button
                    className="w-full mt-4 p-2 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                  >
                    {expandedIndex === index ? "Show Less" : "Learn More"}
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MdArrowForward className="h-4 w-4 rotate-90" />
                    </motion.div>
                  </button>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
