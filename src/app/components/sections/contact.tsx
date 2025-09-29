"use client";

import { motion } from "motion/react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { BiMailSend, BiMapPin, BiPhone, BiLoaderAlt } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { toast } from "sonner";
import { useState } from "react";

export function Contact() {
  const { ref } = useSectionInView("contact", 0.5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      console.log({ result });
      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else {
        toast.error("Failed to send. Try again later.");
      }
    } catch (err) {
      toast.error("Error submitting form.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <BiMailSend className="h-6 w-6" />,
      title: "Email",
      value: "kaungkhantthar77@gmail.com",
      href: "mailto:kaungkhantthar77@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BiPhone className="h-6 w-6" />,
      title: "Phone",
      value: "+65 0652500496",
      href: "tel:+652500496",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <BiMapPin className="h-6 w-6" />,
      title: "Location",
      value: "Bangkok, Thailand",
      href: null,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <BsGithub className="h-5 w-5" />,
      href: "https://github.com/kaungkhant-thar",
      label: "GitHub",
    },
    {
      icon: <BsLinkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/kaung-khant-thar-b978ab1a1/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
          <motion.div
            className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <motion.div
            className="space-y-8 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                passionate people. Whether you have a project in mind or just
                want to chat about technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredContact(index)}
                  onHoverEnd={() => setHoveredContact(null)}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                    >
                      <div
                        className={`
                        p-3 rounded-xl bg-gradient-to-br ${contact.gradient} text-white
                        transition-transform duration-300
                        ${hoveredContact === index ? "scale-110 rotate-3" : ""}
                      `}
                      >
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
                      <div
                        className={`
                        p-3 rounded-xl bg-gradient-to-br ${contact.gradient} text-white
                        transition-transform duration-300
                        ${hoveredContact === index ? "scale-110 rotate-3" : ""}
                      `}
                      >
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Follow me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
                <p className="text-muted-foreground">
                  I'll get back to you within 24 hours. Let's build something
                  amazing together!
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      {...register("name", { required: true })}
                      className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                    />
                    {errors.name && (
                      <motion.p
                        className="mt-2 text-sm text-red-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Name is required
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                    />
                    {errors.email && (
                      <motion.p
                        className="mt-2 text-sm text-red-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Valid email is required
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    {...register("subject")}
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    {...register("message", { required: true, minLength: 10 })}
                    className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300 resize-none"
                  />
                  {errors.message && (
                    <motion.p
                      className="mt-2 text-sm text-red-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Message must be at least 10 characters
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary disabled:opacity-50 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <BiLoaderAlt className="h-5 w-5 animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <BiMailSend className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
