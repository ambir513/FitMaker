"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimateTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimateText({
  children,
  className = "",
}: AnimateTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        el.classList.add("animate-fade");
        el.classList.remove("opacity-0");
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
