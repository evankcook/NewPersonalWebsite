"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

interface SectionProps {
  id: string;
  children: (isVisible: boolean) => ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Intersection");
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id={id} ref={ref}>
      {children(isVisible)}
    </section>
  );
};

export default Section;
