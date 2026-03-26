import { useRef, useState } from "react";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import PortfolioSection from "./components/sections/Projects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

 

  const refs = {
    home: homeRef,
    services: servicesRef,
    portfolio: portfolioRef,
    process: processRef,
    contact: contactRef
  };

  // We'll store the moveIndicator function here
  const [moveIndicator, setMoveIndicator] = useState(null);
  const [active, setActive] = useState("home");

  return (
    <>
      <Navbar
        scrollTo={scrollTo}
        refs={refs}
        active={active}
        setActive={setActive}
        setMoveIndicator={setMoveIndicator} // 🔵 Pass setter so Hero can call moveIndicator
      />
    <main>
      <Hero
        refProp={homeRef}
        scrollTo={scrollTo}
        contactRef={contactRef}
        portfolioRef={portfolioRef}
        moveIndicator={moveIndicator}  // 🔵 Pass the actual function to Hero
        setActive={setActive}          // so Hero buttons update active link color
      />

      <Services refProp={servicesRef}/>
      <PortfolioSection refProp={portfolioRef}/>
      <Process refProp={processRef}/>
      <Contact refProp={contactRef}/>
     </main> 
      <Footer/>
    </>
  );
}

export default App;