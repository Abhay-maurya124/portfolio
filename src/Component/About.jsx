import { Section } from "lucide-react";
import React, { useRef } from "react";
import AnimatedHeader from "../assets/AnimatedHeader";
import AnimatedLines from "../assets/AnimatedLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const text = `Passionated about clean architecture
    I build scalable, high-performance solutions 
    from prototype to Production`;

  const Abouttext = `🚀 Crafting High-Performance Frontend Experiences
Behind every pixel-perfect UI lies meticulous engineering. I specialize in building secure, blazing-fast frontend applications with seamless UX that drive growth—not headaches.

✨ What I Bring to the Table:

Dynamic & Responsive Interfaces: Leveraging modern frameworks (React, GSAP) for fluid animations and intuitive interactions.

Performance-Optimized Code: Ensuring minimal load times and smooth 60fps rendering.

Sticky, Scroll-Activated Layouts: Like the services section above, I design immersive scrolling experiences with GSAP animations and responsive triggers.

Toolbox Mastery: Proficient in React, TailwindCSS, and responsive design`;

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.9,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100% ,100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0 0,100% 0 ,100% 100%,0 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  }, []);

  // Remove the hardcoded isMobile and use responsive classes instead
  return (
    <section
      id="about"
      className="min-h-screen bg-black rounded-b-4xl text-white"
    >
      <AnimatedHeader
        subTitle={"code with purpose,Build to Scale"}
        title={"About"}
        text={text}
        withScrollTrigger={true}
      />
      <div
        className={`mt-50 flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide
          lg:flex-row md:text-2xl lg:text-3xl text-white/60 lg:mt-40`}  // mt-50 by default, lg:mt-40 on large screens
      >
        <img
          ref={imgRef}
          src="src/assets/img.jpeg"
          alt="me"
          className="w-lg rounded-3xl"
        />
        <AnimatedLines children={Abouttext} className="w-full text-xl" />
      </div>
    </section>
  );
};

export default About;