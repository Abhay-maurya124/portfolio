import React, { useRef } from "react";
import AnimatedLines from "../assets/AnimatedLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const AnimatedHeader = ({
  subTitle,
  title,
  text,
  textColor = "text-white", // Default color if not provided
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  
  // Device detection
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useGSAP(() => {
    const animationDistance = isMobile ? "30vh" : "50vh";
    const headerDistance = isMobile ? "300" : "500";
    
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
            start: isMobile ? "top 90%" : "top 80%",
          }
        : undefined,
    });
    
    tl.from(contextRef.current, {
      y: animationDistance,
      duration: isMobile ? 0.8 : 1, // Faster animation on mobile
      ease: "circ.out",
    });
    
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: headerDistance,
        duration: isMobile ? 0.8 : 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, [isMobile, isTablet]);

  // Responsive text sizes
  const getTitleSize = () => {
    if (isMobile) return "text-3xl sm:text-5xl";
    if (isTablet) return "text-5xl sm:text-6xl";
    return "text-6xl sm:text-7xl";
  };

  // Responsive tracking
  const getTracking = () => {
    if (isMobile) return "tracking-[0.2rem] sm:tracking-[0.3rem]";
    return "tracking-[0.4rem] sm:tracking-[0.5rem]";
  };

  // Responsive spacing
  const getSpacing = () => {
    if (isMobile) return "gap-6 sm:gap-9 pt-12 sm:pt-16";
    return "gap-9 sm:gap-16 pt-16";
  };

  return (
    <div ref={contextRef} className="relative h-full flex flex-col justify-end">
      <div style={{ clipPath: "polygon(0,100%,0,100%,100%,0,100%)" }}>
        <div
          ref={headerRef}
          className={`flex flex-col justify-center ${getSpacing()}`}
        >
          <p
            className={`text-xs sm:text-sm font-light uppercase pl-6 sm:pl-10 ${textColor} ${getTracking()}`}
          >
            {subTitle}
          </p>
          <div className="px-6 sm:px-10">
            <h1
              className={`flex flex-col flex-wrap ${getTitleSize()} ${textColor} uppercase banner-text-responsive`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-6 sm:px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2">
          <div className="py-8 sm:py-10 md:py-16 text-end">
            <AnimatedLines
              className={`font-light uppercase value-text-responsive pr-6 sm:pr-10 ${textColor} text-sm sm:text-base`}
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