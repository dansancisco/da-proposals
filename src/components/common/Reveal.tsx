"use client";

import clsx from "clsx";
import { useEffect, useRef, type ElementType, type ReactNode, type RefCallback } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
}: RevealProps<T>) {
  const Component = (as || "div") as ElementType;
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const setRef: RefCallback<HTMLElement> = (node) => {
    elementRef.current = node;
  };

  return (
    <Component
      ref={setRef}
      className={clsx("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
