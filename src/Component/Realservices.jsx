import { useRef } from "react";
import AnimatedHeader from "../assets/AnimatedHeader";
import { servicesData } from "../assets/API.jsx";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Realservices = () => {
  const ServiceRefs = useRef([]);
  const textsum = `I Build Secure, high-performance FrontEnd Apps With smoothUX to drive growth not headaches.`;
  const isDesktop = useMediaQuery({ minWidth: "48rem" });
  useGSAP(() => {
    ServiceRefs.current.forEach((element) => {
      if (!element) return;
      gsap.from(element, {
        y: 200,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeader
        subTitle={"Behind the scence,Beyond the screen"}
        title={"Service"}
        text={textsum}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="h-40"></div>

      {servicesData.map((service, index) => {
        const desktopStyles = {
          top: `${index * 100}px`, // Fixed spacing in pixels for consistency
          marginBottom: `${(servicesData.length - index) * 15}px`, // Adjusted for better spacing
        };
        return (
          <div
            ref={(el) => (ServiceRefs.current[index] = el)}
            key={index}
            className="sticky px-10 pt-5 text-white border-t-2 border-white/30 bg-black"
            style={isDesktop ? desktopStyles : { top: 50 }}
          >
            <div className="flex justify-between items-center gap-4 font-light">
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60">
                  {service.description}
                </p>
                <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white">
                  {service.items.map((item, itemIndex) => (
                    <div key={`item${index}-${itemIndex}`}>
                      <h3 className="flex text-center">
                        <span className="mr-12 text-lg text-white/30">
                          0{itemIndex + 1}
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-lg text-white/60">
                        {item.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        {item.toolsUsed.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-sm bg-white/10 px-2 py-1 mb-9 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      {itemIndex < service.items.length - 1 && (
                        <div className="w-ful h-px my-2 bg-white/30"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Realservices;
