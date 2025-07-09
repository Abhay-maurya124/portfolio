import ReactLenis from "lenis/react";
import Navbar from "./Component/Navbar.jsx";
import Hero from "./Component/Hero.jsx";
import Services from "./Component/Services.jsx";
import Realservices from "./Component/Realservices.jsx";
import About from "./Component/About.jsx";
import ContactSummary from "./Component/ContactSummary.jsx";
import { Work } from "./Component/Work.jsx";
import Contact from "./Component/Contact.jsx";
const App = () => {
  return (
    <ReactLenis
      root
      className="relative w-screen min-h-screen
     overflow-x-auto"
    >
      <Navbar />
      <Hero />
      <Services />
      <Realservices />
      <About />
      <Work />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  );
};

export default App;
