import React, { useEffect, useState } from "react";
import "./Hero.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Sam from "../../assets/omeje-2.jpeg";

const roles = [
  "Content Writer",
  "Author & Publisher",
  "Content Creator",
  "Digital Entrepreneur ",
   "Philosopher ",
   "Political Analyst",
   "Social Justice Advocate"
];

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[roleIndex];
    let timeout;

    if (!deleting) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      }, 70);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }, 45);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-content">

          <span className="hero-tag">
            <span className="hero-tag-dot"></span>
            Available for work
          </span>

          <h1 className="hero-name">
           Omeje<br />
            Samuel<br />
           Nnabuike
          </h1>

          <div className="hero-role">
            <span className="hero-typed">{displayed}</span>
            <span className="hero-cursor"></span>
          </div>

          <div className="hero-divider"></div>

           <p className="hero-description">
   Rooted in a deep conviction that knowledge is the most transformative force available to humanity, Omeje has committed his career to inspiring intellectual growth, empowering individuals and communities, and promoting responsible leadership across Africa and beyond. His approach is simultaneously visionary and pragmatic — guided by the belief that ideas must not only be conceived but rigorously developed, effectively communicated, and purposefully applied.
</p>

          <div className="social-icons">
            <a href="https://wa.link/d2lvcz" title="Whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/maazinnabuikeomejeacademy?igsh=MTJycW52bW4zeWQwMA%3D%3D&utm_source=qr" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://x.com/maazinnabuike?s=11" title="X / Twitter">
              <FaXTwitter />
            </a>
            <a href="https://www.facebook.com/share/1977jBhC3s/?mibextid=wwXIfr" title="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="hero-corner-label">
          Content Writer<br />Portfolio
        </div>

        <div className="hero-image-wrapper">
          <img src={Sam} alt="Nwokoro Amarachi Mary-Cynthia" />
        </div>

        <div className="hero-scroll-cue">
          <div className="hero-scroll-line"></div>
          <span>scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;