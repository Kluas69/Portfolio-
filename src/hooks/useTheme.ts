"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      const initial = saved ?? preferred;
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    } catch {}
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    // Update state immediately for UI responsiveness
    setTheme(next);
    // Defer DOM + storage writes to next frame to avoid blocking
    requestAnimationFrame(() => {
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
    });
  };

  return { theme, toggle };
}
