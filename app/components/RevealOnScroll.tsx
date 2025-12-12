"use client";

import { useEffect, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
}

export default function RevealOnScroll({ children }: RevealOnScrollProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    // Give all reveal elements a hidden starting state
    elements.forEach((el) => {
      el.classList.add("reveal-hidden");
      el.classList.remove("reveal-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            // ➜ element enters viewport → animate IN
            el.classList.add("reveal-visible");
            el.classList.remove("reveal-hidden");
          } else {
            // ➜ element leaves viewport → animate OUT (optional)
            // If you *don’t* want them to fade out, just comment this block out.
            el.classList.add("reveal-hidden");
            el.classList.remove("reveal-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
