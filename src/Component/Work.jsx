import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import AnimatedHeader from "../assets/AnimatedHeader";
import { Project } from "../assets/API.jsx";
import { useGSAP } from "@gsap/react";

export const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Featured projecs that have been meticulously 
    crafted with passion to drive 
    resilts and impact.`;
  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);
  const previewRef = useRef(null);
  const overlayRefs = useRef([]);

  useGSAP(() => {
    if (previewRef.current) {
      moveX.current = gsap.quickTo(previewRef.current, "x", {
        duration: 1.5,
        ease: "power3.out",
      });
      moveY.current = gsap.quickTo(previewRef.current, "y", {
        duration: 2,
        ease: "power3.out",
      });
    }
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project"
      }
    });
  });

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;
    
    gsap.killTweensOf(el);
    gsap.fromTo(el, 
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      { 
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out"
      }
    );

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2",
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    
    const el = overlayRefs.current[index];
    if (!el) return;
    
    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in"
    });

    if (previewRef.current) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2",
      });
    }
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || !moveX.current || !moveY.current) return;
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeader
        subTitle={"Logic meets Aesthetics,seamlesly"}
        title={"Work"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="mt-40"></div>
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {Project.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div 
              ref={(el) => (overlayRefs.current[index] = el)}
              className="absolute inset-0 hidden md:block duration-200 hover:bg-black -z-10"
            ></div>
            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500">
              <h2 className="lg:text-[32px] text-[26px] leading-none md:group-hover:px-12 md:group-hover:text-white">
                {project.name}
              </h2>
              <ArrowUpRight className="md:size-6 size-5" />
            </div>
            <div className="w-full h-0.5 bg-black/80" />
            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            <div className="relative flex justify-center items-center md:hidden px-10 h-[400px]">
              <img
                src={project.image}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
            </div>
          </div>
        ))}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[300px] h-[200px] md:block hidden opacity-0 scale-0"
        >
          {currentIndex !== null && (
            <img
              src={Project[currentIndex].image}
              alt="preview"
              className="object-cover w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

