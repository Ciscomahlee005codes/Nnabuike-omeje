import React from "react";
import "./Footer.css";
import Reveal from "../Reveal/Reveal";

const navLinks = [
  { label: "Home",       href: "#home"       },
  { label: "About me",   href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio",  href: "#portfolio"  },
  { label: "Contact",    href: "#contact"    },
];

const socials = [
  { icon: "ti-brand-facebook",  href: "https://www.facebook.com/share/1977jBhC3s/?mibextid=wwXIfr", label: "Facebook"     },
  { icon: "ti-brand-x",         href: "https://x.com/maazinnabuike?s=11",     label: "X / Twitter" },
  { icon: "ti-mail",            href: "mailto:omejennabuikesamuel@gmail.com",  label: "Email"       },
  { icon: "ti-brand-instagram", href: "https://www.instagram.com/maazinnabuikeomejeacademy?igsh=MTJycW52bW4zeWQwMA%3D%3D&utm_source=qr",   label: "Instagram"   },
   { icon: "ti-brand-tiktok", href: "https://www.tiktok.com/@maazinnabuike?_r=1&_t=ZN-97EaprXgzcE",   label: "Tiktok"   },
];

const Footer = () => {
  return (
     <Reveal>
       <footer className="footer">
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-mark">
              <span>C</span>
            </div>
            <div className="footer-wordmark">Cardinal</div>
          </div>

          <p className="footer-tagline">
            Content writer crafting clear, compelling copy that informs,
            engages, and drives results.
          </p>

          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer-social"
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <i className={`ti ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* NAV */}
        <div className="footer-col">
          <div className="footer-col-label">Navigation</div>
          <div className="footer-col-links">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="footer-col">
          <div className="footer-col-label">Work with me</div>
          <div className="footer-cta-box">
            <div className="footer-cta-heading">Open to new projects</div>
            <p className="footer-cta-text">
              Have a task that needs a reliable hand? Let's talk about what I
              can do for your business.
            </p>
            <a href="#contact" className="footer-cta-btn">
              Get in touch <span className="footer-cta-arr">→</span>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-status">
          <span className="footer-pulse" aria-hidden="true"></span>
          Available for work
        </div>

        <p className="footer-copy">
          © 2026 Omeje Samuel Nnabuike. All rights reserved.
        </p>

        <p className="footer-credit">
          Designed &amp; built by{" "}
          <a
            href="https://chinemerem-portfolio-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            De Boy Programmer
          </a>
        </p>
      </div>
    </footer>
     </Reveal>
  );
};

export default Footer;