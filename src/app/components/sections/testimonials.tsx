"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Working with Alex was a game-changer for our web platform. The attention to detail and performance optimizations increased our conversion rate by 30%.",
    avatar: "/avatars/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    content:
      "Exceptional React skills and always delivers on time. The mobile app he built for us has 4.9 stars on both app stores.",
    avatar: "/avatars/michael.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO at DigitalAgency",
    content:
      "We've collaborated on multiple projects and each one exceeded expectations. His API architecture is rock solid and scalable.",
    avatar: "/avatars/emily.jpg",
  },
];

export function Testimonials() {
  const { ref } = useSectionInView("testimonials", 0.5);

  return (
    <section ref={ref} id="testimonials" className="scroll-mt-28">
      <div className="container mx-auto px-4 py-5 lg:py-20">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
