"use client";

import { useEffect } from "react";

/**
 * Feeds scroll speed into the marquee: it skews in the scroll direction and
 * runs faster the harder you scroll, then eases back to rest.
 */
export function ScrollVelocity() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const marquee = document.querySelector<HTMLElement>(".marquee");
    const track = marquee?.querySelector<HTMLElement>(".marquee-track");
    if (!marquee || !track) return;

    let last = window.scrollY;
    let velocity = 0;
    let raf = 0;

    const frame = () => {
      const y = window.scrollY;
      const delta = y - last;
      last = y;
      // Smooth the raw delta so the skew eases in and out
      velocity += (delta - velocity) * 0.12;
      const skew = Math.max(-8, Math.min(8, velocity * -0.35));
      marquee.style.transform = `skewX(${skew.toFixed(2)}deg)`;
      const anim = track.getAnimations()[0];
      if (anim) anim.playbackRate = 1 + Math.min(6, Math.abs(velocity) * 0.25);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      marquee.style.transform = "";
    };
  }, []);

  return null;
}
