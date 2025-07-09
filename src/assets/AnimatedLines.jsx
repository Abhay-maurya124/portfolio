import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AnimatedLines = ({ children = "", className,text }) => {
  // Default `children` to empty string
  const containerRef = useRef(null);
  const lineRef = useRef([]);
  const lines = children.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (lineRef.current.length > 0) {
      gsap.from(lineRef.current, {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  });

  return (
    <div className={className} ref={containerRef}>
      {lines.map(
        (
          line,
          index // Use parentheses `()` instead of `{}` for implicit return
        ) => (
          <span
            key={index}
            ref={(el) => (lineRef.current[index] = el)}
            className="block leading-relaxed tracking-widest text-pretty"
          >
            {line}
          </span>
        )
      )}
    </div>
  );
};

export default AnimatedLines;
