"use client";

import { motion } from "motion/react";
import Link from "next/link";

type NavItemProps = {
  href: string;
  title: string;
  isActive: boolean;
  onClick?: () => void; // optional for mobile menu close
  index?: number; // for stagger animation
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.3,
    },
  }),
};

export const NavItem = ({
  href,
  title,
  isActive,
  onClick,
  index = 0,
}: NavItemProps) => {
  return (
    <motion.li
      custom={index}
      initial="hidden"
      animate="visible"
      variants={navItemVariants}
      className="relative px-3 py-2"
    >
      <Link
        href={href}
        onClick={onClick}
        className={`relative text-sm font-medium transition-colors hover:text-primary  ${
          isActive ? "text-primary" : "text-foreground/70"
        }`}
      >
        {title}
        {isActive && (
          <motion.span
            layoutId="nav-active-indicator"
            className="absolute left-0 top-full block h-[2px] w-full bg-primary"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
    </motion.li>
  );
};
