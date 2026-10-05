"use client";

import { useEffect } from "react";

/**
 * One delegated pointer listener drives two effects:
 *  - `.spot` elements get --mx/--my so their CSS spotlight follows the cursor
 *  - `.magnetic` elements lean toward the cursor when it is near
 *  - `.tilt` elements rotate in 3D toward the cursor
 */
export function PointerEffects() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    let target: HTMLElement | null = null;
    let pulled: HTMLElement | null = null;
    let tilted: HTMLElement | null = null;

    const frame = () => {
      raf = 0;
      if (target) {
        const r = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${x - r.left}px`);
        target.style.setProperty("--my", `${y - r.top}px`);
      }
    };

    const release = () => {
      if (tilted) {
        tilted.style.transform = "";
        tilted = null;
      }
      if (pulled) {
        pulled.style.transform = "";
        pulled = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const mag = (e.target as Element | null)?.closest<HTMLElement>(".magnetic") ?? null;
      if (mag !== pulled) release();
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = (x - (r.left + r.width / 2)) * 0.18;
        const dy = (y - (r.top + r.height / 2)) * 0.28;
        mag.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        pulled = mag;
      }
      const tilt = (e.target as Element | null)?.closest<HTMLElement>(".tilt") ?? null;
      if (tilted && tilted !== tilt) {
        tilted.style.transform = "";
        tilted = null;
      }
      if (tilt) {
        // 3D tilt: rotate toward the cursor, max ~7 degrees, with a touch of lift
        const r = tilt.getBoundingClientRect();
        const px = (x - r.left) / r.width - 0.5;
        const py = (y - r.top) / r.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${-py * 9}deg) rotateY(${px * 11}deg) translateZ(10px)`;
        tilted = tilt;
      }
      target = (e.target as Element | null)?.closest<HTMLElement>(".spot") ?? null;
      if (!raf) raf = requestAnimationFrame(frame);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      release();
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
