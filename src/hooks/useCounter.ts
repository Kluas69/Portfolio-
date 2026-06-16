"use client";
import { useEffect, useRef, useState } from "react";

export function useCounter(end: number, duration = 2000, start = true) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    setCount(0);
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      // Smooth ease-in-out: slow start, steady middle, gentle finish
      const e = p < 0.5
        ? 2 * p * p
        : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setCount(Math.round(e * end));
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setCount(end);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [end, duration, start]);

  return count;
}
