"use client";

import { useState } from "react";
import { navLinks, site } from "@/data/portfolio";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav-wrap">
      <div className="container">
        <nav aria-label="Main" className="nav">
          <a href="#top" className="brand" onClick={close}>
            <span className="brand-mark">{site.initials}</span>
            <span className="brand-name">{site.name}</span>
          </a>

          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--dark nav-cta press">
              Hire me →
            </a>
          </div>

          <button
            type="button"
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="square">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </nav>

        <div id="mobile-menu" className="mobile-menu" hidden={!open}>
          {navLinks.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href} className="mobile-link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="mobile-link mobile-link--cta" onClick={close}>
            Hire me →
          </a>
        </div>
      </div>
    </header>
  );
}
