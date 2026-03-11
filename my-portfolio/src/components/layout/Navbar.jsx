// import { useState } from "react";
// import Container from "../ui/Container";

// export default function Navbar({ refs, scrollTo }) {

//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleClick = (ref) => {
//     scrollTo(ref);
//     setMenuOpen(false);
//   };

//   return (
    
//     <nav className="w-full border-b bg-white sticky top-0 z-50">

//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      
//         <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
//           Emmanuel Oguntoke
//         </h1>

//         {/* Desktop Menu */}

//         <div className="hidden md:flex gap-6 text-sm items-center">
//           <button onClick={() => handleClick(refs.home)}>
//             Home
//           </button>

//           <button onClick={() => handleClick(refs.services)}>
//             Services
//           </button>

//           <button onClick={() => handleClick(refs.portfolio)}>
//             Projects
//           </button>

//           <button onClick={() => handleClick(refs.process)}>
//             Process
//           </button>

//           <button
//             onClick={() => handleClick(refs.contact)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//           >
//             Contact
//           </button>

//         </div>

//         {/* Mobile Button */}

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-2xl"
//         >
//           ☰
//         </button>

//       </div>

//       {/* Mobile Menu */}

//       {menuOpen && (

//         <div className="md:hidden flex flex-col px-4 pb-4 gap-4 text-sm">

//          <button onClick={() => handleClick(refs.home)}>
//             Home
//           </button>

//           <button onClick={() => handleClick(refs.services)}>
//             Services
//           </button>

//           <button onClick={() => handleClick(refs.process)}>
//             Process
//           </button>

//           <button onClick={() => handleClick(refs.portfolio)}>
//             Projects
//           </button>

//           <button
//             onClick={() => handleClick(refs.contact)}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
//           >
//             Contact
//           </button>

//         </div>

//       )}
      
//     </nav>
    
//   );
// }



import { useState, useRef, useEffect } from "react";

export default function Navbar({ refs, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // Refs for each nav link
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const processRef = useRef(null);

  // Move the underline indicator
  const moveIndicator = (linkRef) => {
    if (!linkRef?.current) return;
    const { offsetLeft, offsetWidth } = linkRef.current;
    setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
  };

  // Handle click on nav link
  const handleClick = (sectionRef, linkRef, id) => {
    scrollTo(sectionRef);
    setActive(id);
    moveIndicator(linkRef);
    setMenuOpen(false);
  };

  // Update indicator on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (id === "home") { moveIndicator(homeRef); setActive("home"); }
          if (id === "services") { moveIndicator(servicesRef); setActive("services"); }
          if (id === "portfolio") { moveIndicator(portfolioRef); setActive("portfolio"); }
          if (id === "process") { moveIndicator(processRef); setActive("process"); }
        });
      },
      { threshold: 0.6 }
    );

    const sections = ["home", "services", "portfolio", "process"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Recalculate indicator on window resize
  useEffect(() => {
    const updateIndicator = () => {
      if (active === "home") moveIndicator(homeRef);
      if (active === "services") moveIndicator(servicesRef);
      if (active === "portfolio") moveIndicator(portfolioRef);
      if (active === "process") moveIndicator(processRef);
    };
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tighter cursor-pointer transition-all duration-500
  bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent 
  hover:from-purple-500">
          Emmanuel Oguntoke
        </h1>

        {/* Desktop Menu */}
        <div className="relative hidden md:flex gap-6 text-sm items-center">

        <button
          ref={homeRef}
          onClick={() => handleClick(refs.home, homeRef, "home")}
          className={`relative pb-1 transition-colors duration-300 group ${
            active === "home" ? "text-purple-600 font-semibold" : "text-zinc-900"
          }`}
        >
          Home
          <span 
            className={`absolute bottom-0 left-1/2 h-0.5 bg-purple-600 transition-all duration-300 -translate-x-1/2 ${
              active === "home" ? "w-0" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </button>

       <button
          ref={servicesRef}
          onClick={() => handleClick(refs.services, servicesRef, "services")}
          className={`relative pb-1 transition-colors duration-300 group ${
            active === "services" ? "text-purple-600 font-semibold" : "text-zinc-900"
          }`}
        >
          Services
          <span 
            className={`absolute bottom-0 left-1/2 h-0.5 bg-purple-600 transition-all duration-300 -translate-x-1/2 ${
              active === "services" ? "w-0" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </button>


         
        <button
          ref={portfolioRef}
          onClick={() => handleClick(refs.portfolio, portfolioRef, "portfolio")}
          className={`relative pb-1 transition-colors duration-300 group ${
            active === "portfolio" ? "text-purple-600 font-semibold" : "text-zinc-900"
          }`}
        >
          Projects
          
          <span 
            className={`absolute bottom-0 left-1/2 h-0.5 bg-purple-600 transition-all duration-300 -translate-x-1/2 ${
              active === "portfolio" 
                ? "w-0" // When active (clicked), keep width at 0
                : "w-0 group-hover:w-full" // When NOT active, allow hover to grow to 100%
            }`}
          ></span>
        </button>

        <button
          ref={processRef}
          onClick={() => handleClick(refs.process, processRef, "process")}
          className={`relative pb-1 transition-colors duration-300 group ${
            active === "process" ? "text-purple-600 font-semibold" : "text-zinc-900"
          }`}
        >
          Process
          <span 
            className={`absolute bottom-0 left-1/2 h-0.5 bg-purple-600 transition-all duration-300 -translate-x-1/2 ${
              active === "process" ? "w-0" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </button>
{/* 
          <button
            onClick={() => handleClick(refs.contact)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white-600 transition-all duration-300"
          >
            Contact
          </button> */}
          <button 
  onClick={() => handleClick(refs.contact)}
  className="relative p-[2px] rounded-full bg-gradient-to-r from-purple-600 to-blue-500 group transition-transform active:scale-95"
>
  <div className="px-6 py-2 transition-all duration-300 bg-white rounded-full group-hover:bg-transparent">
    <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent group-hover:text-white">
      Contact Me
    </span>
  </div>
</button>

          {/* Sliding underline indicator */}
          <span
            className="absolute bottom-0 h-[2px] bg-purple-600 transition-all duration-300"
            style={indicatorStyle}
          />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 gap-4 text-sm">
          <button onClick={() => handleClick(refs.home, homeRef, "home")}>Home</button>
          <button onClick={() => handleClick(refs.services, servicesRef, "services")}>Services</button>
          <button onClick={() => handleClick(refs.process, processRef, "process")}>Process</button>
          <button onClick={() => handleClick(refs.portfolio, portfolioRef, "portfolio")}>Projects</button>
          <button
            onClick={() => handleClick(refs.contact)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}