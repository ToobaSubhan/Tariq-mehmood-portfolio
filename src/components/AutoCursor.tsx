import { useEffect, useRef, useState } from "react";

export function AutoCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[role='button'],.cursor-target"));
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block transition-[width,height,opacity,border-color] duration-200"
        style={{
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          marginLeft: hover ? -10 : 0,
          marginTop: hover ? -10 : 0,
          borderRadius: "9999px",
          border: "1px solid var(--sepia)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden md:block h-2 w-2 rounded-full"
        style={{ background: "var(--primary)" }}
      />
    </>
  );
}