import { useEffect, useRef, useState } from "react";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import PortfolioSection from "./components/sections/Projects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contact from "./components/sections/Contact";

function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-orb" aria-hidden="true" />

      <div className="loader-card">
        <div className="loader-badge">EO</div>

        <div className="loader-copy">
          <p className="loader-kicker">Crafting digital experiences</p>
          <h2>Emmanuel Oguntoke</h2>
        </div>

        <div className="loader-spinner" aria-label="Loading portfolio" />

        <div className="loader-progress">
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

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
    contact: contactRef,
  };

  const [moveIndicator, setMoveIndicator] = useState(null);
  const [active, setActive] = useState("home");

  return (
    <>
      <div
        className={isLoading ? "loader-screen loader-screen--visible" : "loader-screen loader-screen--hidden"}
        aria-live="polite"
      >
        <Loader />
      </div>

      <div
        className={isLoading ? "app-shell app-shell--hidden" : "app-shell app-shell--visible"}
        aria-live="polite"
      >
        <Navbar
          scrollTo={scrollTo}
          refs={refs}
          active={active}
          setActive={setActive}
          setMoveIndicator={setMoveIndicator}
        />

        <main>
          <Hero
            refProp={homeRef}
            scrollTo={scrollTo}
            contactRef={contactRef}
            portfolioRef={portfolioRef}
            moveIndicator={moveIndicator}
            setActive={setActive}
          />

          <Services refProp={servicesRef} />
          <PortfolioSection refProp={portfolioRef} />
          <Process refProp={processRef} />
          <Contact refProp={contactRef} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;