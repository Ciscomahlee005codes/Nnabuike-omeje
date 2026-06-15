import React, { useEffect, useState } from "react";
import "./Hero.css";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Sam from "../../assets/omeje-2.jpeg";

const roles = [
  "Virtual Assistant",
  "Administrative Support Specialist",
  "Customer Support Expert",
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
  Content Writer &amp; Content Creator crafting engaging stories,
  compelling content, and impactful digital experiences that help
  brands connect with their audience and grow their presence.
</p>

          <div className="social-icons">
            <a href="mailto:Amarachukwunwokoro@gmail.com" title="Email">
              <MdEmail />
            </a>
            <a href="https://twitter.com/yourusername" title="X / Twitter">
              <FaXTwitter />
            </a>
            <a href="https://linkedin.com/in/yourusername" title="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="hero-corner-label">
          Content<br />Writer<br />Portfolio
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