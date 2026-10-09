"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "01<>/\[]{}#$%&*+=?";

/**
 * Headline text that decodes from random glyphs once it scrolls into view.
 * The real text is the only copy in the DOM (server-rendered, so crawlers and
 * screen readers see it once); the animation temporarily rewrites that node.
 */
export function Scramble({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const settled = Math.floor(p * text.length);
          el.textContent = text
            .split("")
            .map((ch, i) =>
              ch === " " || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
            )
            .join("");
          if (p < 1) raf = requestAnimationFrame(tick);
          else el.textContent = text;
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      el.textContent = text;
    };
  }, [text]);

  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {text}
    </span>
  );
}
