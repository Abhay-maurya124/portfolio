import React, { useRef } from "react";
import AnimatedLines from "../assets/AnimatedLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const AnimatedHeader = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
  isMobile,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "500",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);
const titleSize = isMobile?"text-3xl":"text-8xl"
const tracking = isMobile?"tracking-[0.3rem]":"tracking-[0.5rem]"
  return (
    <div ref={contextRef} className="relative h-full flex flex-col justify-end">
      <div style={{ clipPath: "polygon(0,100%,0,100%,100%,0,100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-9 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light uppercase pl-10 ${textColor} ${tracking}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col flex-wrap gap-12 ${titleSize} ${textColor} uppercase
               banner-text-responsive sm:gap-16 md:block`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2">
          <div className="py-10 sm:py-16 text-end">
            <AnimatedLines
              className={`font-light uppercase value-text-responsive pr-10 ${textColor}`}
            >
              {text}
            </AnimatedLines>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
