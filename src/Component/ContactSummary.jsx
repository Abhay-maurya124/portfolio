import React, { useRef } from "react";
import Marquee from "../assets/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "Contact us",
    "Contact us",
    "Contact us",
    "Contact us",
    "Contact us",
  ];

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=880 center",
        scrub: 0.5,
        pin: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p className="text-3xl lg:5xl">
          "Let's build a <br />
          <span className="font-normal">memorable</span>&
          <span className="italic">inspiring</span>
          <br />
          web Application
          <span className="text-gold">together</span>
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-balance bg-transparent border-y-2 lg:text-5xl"
        iconClassname="stroke:gold stroke-2 text-primary"
      />
    </section>
  );
};

export default ContactSummary;