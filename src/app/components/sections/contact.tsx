"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { BiMailSend, BiMapPin, BiPhone } from "react-icons/bi";

export function Contact() {
  const { ref } = useSectionInView("contact", 0.5);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <section ref={ref} id="contact" className="scroll-mt-28 bg-muted/50">
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
          <span className="mx-auto mt-4 block h-1 w-24 rounded-full bg-primary" />
        </motion.h2>

        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          <motion.div
            className="space-y-8 lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground/90">
              Contact Information
            </h3>
            <p className="text-foreground/70">
              Feel free to reach out to me for any questions or opportunities.
            </p>
            <div className="space-y-6">
              <div className="flex items-end gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BiMailSend className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground/80">Email</h4>
                  <a
                    href="mailto:kaungkhantthar77@gmail.com"
                    className="text-foreground/70 hover:text-primary hover:underline"
                  >
                    kaungkhantthar77@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BiPhone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground/80">Phone</h4>
                  <a
                    href="tel:++652500496"
                    className="text-foreground/70 hover:text-primary hover:underline"
                  >
                    +65 0652500496
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <BiMapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground/80">Location</h4>
                  <span className="text-foreground/70">Bangkok, Thailand</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-6 rounded-xl bg-background p-8 shadow-sm lg:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground/90">
              Send me a message
            </h3>
            <p className="mb-6 text-foreground/70">
              I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-foreground/80"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  className="w-full rounded-lg border border-muted-foreground/30 bg-muted/50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">Name is required</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-foreground/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="w-full rounded-lg border border-muted-foreground/30 bg-muted/50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    Valid email is required
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-medium text-foreground/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: true, minLength: 10 })}
                  className="w-full rounded-lg border border-muted-foreground/30 bg-muted/50 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    Message must be at least 10 characters
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full py-6 text-lg">
                Send Message
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
