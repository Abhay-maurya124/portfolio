import { useMediaQuery } from "react-responsive";
import AnimatedHeader from "../assets/AnimatedHeader";


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const textsum = `i help growing brands and startups 
      gain an 
      unfair advantage through premium 
      results driven webs/app`;

  return (
    <section className="relative w-full h-screen" id="home">
      <AnimatedHeader
        subTitle={"404 NO Bug Found"}
        title={"Abhay Maurya"}
        text={textsum}
        textColor={"text-black"}
        isMobile={isMobile}
      />
    </section>
  );
};

export default Hero;