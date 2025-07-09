import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { socials } from "../assets/API";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const linkRef = useRef([]);
  const contactRef = useRef(null);
  const toplineRef = useRef(null);
  const bottomlineRef = useRef(null);
  const tl = useRef(null);
  const [IsOpen, setIsOpen] = useState(null);
  const Icontl = useRef(null);
  const [showBurgur, setshowBurgur] = useState(null);
  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linkRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linkRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "+0.2"
      );
    Icontl.current = gsap
      .timeline({
        paused: true,
      })
      .to(toplineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomlineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setshowBurgur(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (IsOpen) {
      tl.current.reverse();
      Icontl.current.reverse();
    } else {
      tl.current.play();
      Icontl.current.play();
    }
    setIsOpen(!IsOpen);
  };
  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col 
      justify-between w-full h-full px-10 uppercase
       bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2 lg:text-8xl"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl">
          {["home", "services", "about", "work", "contact"].map(
            (section, index) => {
              return (
                <div key={index} ref={(el) => (linkRef.current[index] = el)}>
                  <Link to={`${section}`} 
                  smooth
                  offset={0}
                  duration={200}
                  className="transition-all duration-300 cursor-pointer hover:text-white">
                    {section}
                  </Link>
                </div>
              );
            }
          )}
        </div>

        <div className="flex flex-col gap-8 flex-wrap justify-between md:flex-row ">
          <div className="font-light">
            <p className="tracking-wider text-3xl text-white/50 ">E-mail</p>
            <p
              ref={contactRef}
              className="text-xl tracking-widest lowercase text-pretty"
            >
              abhaymaurya@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-widest text-2xl text-white/50">Social media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((socials, index) => (
                <a
                  key={index}
                  href={socials.href}
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-all duration-300"
                >
                  {socials.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className="fixed z-50 flex  flex-col items-center justify-center gap-1
      transition-all duration-300 bg-black rounded-full cursor-pointer
       w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showBurgur
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={toplineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomlineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
