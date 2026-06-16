"use client";
import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Mark elements as "js-ready" first — this is what triggers the hidden
    // state via CSS, so the server-rendered HTML never has opacity:0
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-scale"
    );

    els.forEach((el) => el.classList.add("js-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
