import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header
      className="navbar-new"
      style={{
        background:
          scrolled || open
            ? "rgba(15,15,15,0.85)"
            : "rgba(15,15,15,0.65)",
        backdropFilter: scrolled || open ? "blur(12px)" : "none",
        boxShadow:
          scrolled || open ? "0 2px 16px 0 rgba(0,0,0,0.12)" : "none",
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="PASTI" />
          <span>PASTI</span>
        </Link>
        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="navbar-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {/* Hamburger or Close icon */}
        {!open ? (
          <button
            className="navbar-hamburger"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        ) : (
          <button
            className="navbar-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="6"
                y1="6"
                x2="20"
                y2="20"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="20"
                y1="6"
                x2="6"
                y2="20"
                stroke="#fff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="navbar-mobile-menu">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="navbar-mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}