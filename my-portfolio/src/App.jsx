import { useEffect, useRef } from "react";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVercel,
  SiSupabase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import PortfolioSection from "./components/sections/Projects";
import Process from "./components/sections/Process";
import Contact from "./components/sections/Contact";

function About({ refProp }) {
  return (
    <section ref={refProp} id="about" className="section section-soft">
      <div className="site-container about-grid">
        <div>
          <p className="eyebrow">A little about me</p>
          <h2 className="section-heading">
            Thoughtful development.
            <br />
            <span>Practical results.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I'm Emmanuel Oguntoke, a Full-Stack Web Developer focused on
            building useful digital products for businesses and people.
          </p>
          <p>
            I enjoy turning complex workflows into clear, reliable experiences —
            from responsive customer-facing websites to applications with APIs,
            databases and administrative tools.
          </p>
          <p>
            My approach is straightforward: understand the problem, build with
            purpose, and keep improving the experience after launch.
          </p>
          <a
            className="text-link"
            href="https://github.com/GodWithUs17"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills({ refProp }) {
  const groups = [
    {
      title: "Frontend",
      items: [
        ["React", SiReact],
        ["JavaScript", SiJavascript],
        ["Tailwind CSS", SiTailwindcss],
        ["HTML5", SiHtml5],
        ["CSS3", SiCss],
      ],
    },
    {
      title: "Backend",
      items: [
        ["Node.js", SiNodedotjs],
        ["Express.js", SiExpress],
        ["REST APIs", TbApi],
      ],
    },
    {
      title: "Data & ORM",
      items: [
        ["PostgreSQL", SiPostgresql],
        ["Prisma", SiPrisma],
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        ["Git", SiGit],
        ["GitHub", SiGithub],
        ["Vercel", SiVercel],
        ["Supabase", SiSupabase],
      ],
    },
  ];
  return (
    <section ref={refProp} id="skills" className="section">
      <div className="site-container">
        <div className="section-intro">
          <p className="eyebrow">My toolkit</p>
          <h2 className="section-heading">
            Technology I use to <span>build and ship.</span>
          </h2>
          <p className="section-description">
            A practical stack for creating responsive interfaces, dependable
            backends and data-driven applications.
          </p>
        </div>
        <div className="skills-grid">
          {groups.map(({ title, items }) => (
            <article className="skill-card" key={title}>
              <h3>{title}</h3>
              <div className="skill-items">
                {items.map(([name, Icon]) => (
                  <div className="skill-item" key={name}>
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-intro, .about-grid > *, .service-card, .project-card, .skill-card, .process-step, .contact-grid > *, .footer-cta-inner",
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("animate-in"));
      return;
    }

    elements.forEach((element) => element.classList.add("animate-ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const refs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    portfolio: useRef(null),
    skills: useRef(null),
    process: useRef(null),
    contact: useRef(null),
  };
  const scrollTo = (ref) =>
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="app-shell">
      <Navbar refs={refs} scrollTo={scrollTo} />
      <main>
        <Hero
          refProp={refs.home}
          scrollTo={scrollTo}
          contactRef={refs.contact}
          portfolioRef={refs.portfolio}
        />
        <About refProp={refs.about} />
        <Services refProp={refs.services} />
        <PortfolioSection refProp={refs.portfolio} />
        <Skills refProp={refs.skills} />
        <Process refProp={refs.process} />
        <Contact refProp={refs.contact} />
      </main>
      <Footer />
    </div>
  );
}
