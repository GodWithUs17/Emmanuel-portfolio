import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "portfolio"],
  ["Skills", "skills"],
  ["Process", "process"],
];
export default function Navbar({ refs, scrollTo }) {
  const [open, setOpen] = useState(false);
  const go = (key) => {
    scrollTo(refs[key]);
    setOpen(false);
  };
  return (
    <header className="site-header">
      <nav className="site-container nav-wrap" aria-label="Main navigation">
        <button
          className="brand-mark"
          onClick={() => go("home")}
          aria-label="Back to home"
        >
          <span>EO</span>
          <span className="brand-copy">
            Emmanuel Oguntoke<small>dev_godwithus</small>
          </span>
        </button>
        <div className="desktop-nav">
          {links.map(([label, key]) => (
            <button key={key} onClick={() => go(key)}>
              {label}
            </button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>
            Let's talk <ArrowUpRight size={15} />
          </button>
        </div>
        <button
          className="mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <div className="mobile-nav">
            {links.map(([label, key]) => (
              <button key={key} onClick={() => go(key)}>
                {label}
              </button>
            ))}
            <button className="nav-cta" onClick={() => go("contact")}>
              Let's talk <ArrowUpRight size={15} />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
