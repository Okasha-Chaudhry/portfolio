"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) {
    return <button aria-hidden="true" className="h-9 w-9 rounded-full border border-border" />;
  }

  return (
    <button onClick={toggleTheme} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface">
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}