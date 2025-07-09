import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 30,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 40,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -40,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
  });

  return (
    <section className="mb-4">
      <div className="justify-center text-4xl font-light mt-55 overflow-x-hidden">
        <div
          id="title-service"
          className=" flex justify-center items-center
          text-5xl sm:text-2xl"
        >
          <p className="text-5xl">Architecture</p>
        </div>
        <div
          id="title-service-1"
          className=" flex justify-center items-center gap-3 m-6 -translate-x-8"
        >
          <p className="font-normal text-2xl">Development</p>
          <div className="w-10 h-1 md:w-32 bg-amber-300" />
          <p className="text-2xl">Deployment</p>
        </div>
        <div
          id="title-service-2"
          className=" flex justify-center items-center gap-3 m-6 translate-x-8"
        >
          
          <p className="italic text-3xl">Frontend</p>
          <div className="w-10 h-1 md:w-32 bg-amber-300" />
          <p className="text-3xl">APIs</p>
        </div>
        <div
          id="title-service-3"
          className=" flex justify-center items-center gap-3 m-6 -translate-x-8"
        >
          <p className="text-2xl">Scalability</p>
          <div className="w-10 h-1 md:w-32 bg-amber-300" />
          <p className="text-2xl">Databases</p>
        </div>
        <div
          id="title-service-4"
          className=" flex justify-center items-center gap-3 m-6 translate-x-8"
        >
          <p className="text-3xl">SEO</p>
          <div className="w-10 h-1 md:w-32 bg-amber-300" />
          <p className="text-3xl">Ranking</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
