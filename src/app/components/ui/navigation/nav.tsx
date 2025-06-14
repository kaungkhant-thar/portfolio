"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavItem } from "./nav-item";
import { Button } from "../button";

const sections = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "experiences", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "services", title: "Services" },
  { id: "contact", title: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2 w-full max-w-xl px-4 sm:px-0"
      aria-label="Primary navigation"
    >
      {/* Desktop */}
      <ul className="hidden sm:flex items-center justify-center rounded-full bg-background/80 px-6 py-2 shadow-xl backdrop-blur-xl">
        {sections.map((section) => (
          <NavItem
            key={section.id}
            href={`#${section.id}`}
            title={section.title}
            isActive={activeSection === section.id}
          />
        ))}
      </ul>

      {/* Mobile Top Bar */}
      <div className="sm:hidden flex items-center justify-between bg-background/80 rounded-full px-4 py-2 shadow-md backdrop-blur-md w-full">
        <span className="text-base font-semibold text-foreground">Kaung</span>

        {/* Hamburger */}
        <Button
          variant={"ghost"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="w-8 cursor-pointer h-8 flex items-center justify-center"
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-foreground"
            initial={false}
            animate={isMenuOpen ? "open" : "closed"}
          >
            <motion.line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: 45, translateY: 6 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              variants={{
                closed: { rotate: 0, translateY: 0 },
                open: { rotate: -45, translateY: -6 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </Button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden mt-2 flex flex-col items-center gap-1 rounded-xl bg-background/95 py-3 shadow-xl backdrop-blur-xl"
            role="menu"
          >
            {sections.map((section) => (
              <NavItem
                key={section.id}
                href={`#${section.id}`}
                title={section.title}
                isActive={activeSection === section.id}
                onClick={handleNavClick}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
