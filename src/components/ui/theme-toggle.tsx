"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <MdDarkMode className="h-5 w-5" />
      ) : (
        <MdLightMode className="h-5 w-5" />
      )}
    </button>
  );
}
