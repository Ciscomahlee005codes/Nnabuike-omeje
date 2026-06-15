import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Logo */}
        <div className="logo">
          <div className="logo-mark">
            <span>C</span>
          </div>
          <h1 className="logo-text">Cardinal</h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact" className="contact-btn">Contact Me</a>
        </nav>

        {/* Hamburger */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile Drawer */}
      <nav className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#contact" className="contact-btn" onClick={closeMenu}>Contact Me</a>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navbar;