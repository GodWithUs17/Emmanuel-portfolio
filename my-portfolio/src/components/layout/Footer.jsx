import { Github, Linkedin, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="site-container footer-cta-inner">
          <div>
            <p className="eyebrow">Have an idea worth building?</p>
            <h2>
              Let's turn it into <span>something real.</span>
            </h2>
          </div>
          <a
            className="button button-light"
            href="mailto:oguntokeemmanuel57@gmail.com"
          >
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="footer-main site-container">
        <div>
          <a className="footer-brand" href="#home">
            Emmanuel Oguntoke<span>.</span>
          </a>
          <p>
            Full-Stack Web Developer
            <br />
            Building digital solutions that move businesses forward.
          </p>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/GodWithUs17"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/oguntoke-emmanuel/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://x.com/dev_godwithus"
            aria-label="X"
            target="_blank"
            rel="noreferrer"
          >
            <span>𝕏</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Emmanuel Oguntoke. All rights reserved.
          </span>
          <span>
            Designed with purpose · <strong>dev_godwithus</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
