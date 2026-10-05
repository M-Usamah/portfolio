"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// three.js is large: load it only in the browser, after first paint, and only if WebGL exists.
const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function Hero3DLoader() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const start = () => setOk(hasWebGL());
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 800 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(start, 300);
    return () => clearTimeout(t);
  }, []);

  return ok ? <Hero3D /> : null;
}
