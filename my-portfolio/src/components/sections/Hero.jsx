import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Database,
} from "lucide-react";
import Container from "../ui/Container";
import profile from "/Profile.webp";
export default function Hero({ refProp, scrollTo, contactRef, portfolioRef }) {
  return (
    <section ref={refProp} id="home" className="hero-section">
      <Container>
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="availability-dot" /> FULL-STACK WEB DEVELOPER{" "}
              <span className="eyebrow-divider">/</span> NIGERIA
            </p>
            <h1>
              I build digital solutions that{" "}
              <span>move businesses forward.</span>
            </h1>
            <p className="hero-lead">
              I'm Emmanuel — a developer creating high-performing websites and
              practical web applications that solve real problems.
            </p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => scrollTo(contactRef)}
              >
                Start a project <ArrowUpRight size={17} />
              </button>
              <button
                className="button button-quiet"
                onClick={() => scrollTo(portfolioRef)}
              >
                Explore my work <ArrowDown size={16} />
              </button>
            </div>
            <div className="hero-stack">
              <span>
                <Code2 size={15} /> React
              </span>
              <span>
                <Layers3 size={15} /> Node.js
              </span>
              <span>
                <Database size={15} /> PostgreSQL
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-halo" />
            <div className="hero-image-frame">
              <img
                src={profile}
                alt="Emmanuel Oguntoke, Full-Stack Web Developer"
                width="450"
                height="450"
                fetchPriority="high"
              />
            </div>
            <div className="floating-note">
              <span className="note-icon">✳</span>
              <span>
                <strong>Build with purpose</strong>
                <small>Design · Develop · Deliver</small>
              </span>
            </div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
          </div>
        </div>
        <div className="hero-bottomline">
          <span>Building useful things for the web.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </Container>
    </section>
  );
}
