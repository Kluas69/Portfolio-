"use client";
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Defer until after React finishes hydration and the first paint.
    // This ensures the server HTML (no js-reveal / visible classes) and
    // the initial client render always match, eliminating hydration errors.
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-left, .reveal-scale"
      );

      if (els.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("js-reveal", "visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
      );

      els.forEach((el) => {
        // Only hide elements that are NOT yet in the viewport
        // (above-fold content stays visible instantly)
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight;
        if (!inView) {
          el.classList.add("js-reveal");
        } else {
          el.classList.add("js-reveal", "visible");
        }
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 0);

    return () => clearTimeout(timer);
  }, []);
}
