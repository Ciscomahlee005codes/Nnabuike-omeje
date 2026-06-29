import React, { useState } from "react";
import Flyer1 from "../../assets/sam-flyer1.jpeg"
import Flyer2 from "../../assets/sam-flyer2.jpeg"
import Flyer3 from "../../assets/sam-flyer3.jpeg"
import Flyer4 from "../../assets/omeje-2.jpeg"
import "./Portfolio.css";
import Reveal from "../Reveal/Reveal";

const projects = [
  {
    num: "01",
    tag: "Publishing",
    icon: "ti-book",
    title: "Book Publishing & Author Coaching",
    client: "Global Publishing Platforms",
    year: "Ongoing",
    desc: "Helping authors, academics, and entrepreneurs transform ideas into professionally published books through manuscript development, editing, formatting, and global digital distribution.",
    flyer: Flyer1,
    flyerAlt: "Book Publishing & Author Coaching",
    tilt: "-1.5deg",
  },
  {
    num: "02",
    tag: "Strategy",
    icon: "ti-world",
    title: "Digital Strategy & Personal Branding",
    client: "Independent Consulting",
    year: "Ongoing",
    desc: "Advising individuals and organisations on personal branding, digital content strategy, online business development, and knowledge-based entrepreneurship.",
    flyer: Flyer2,
    flyerAlt: "Digital Strategy & Personal Branding",
    tilt: "1.2deg",
  },
  {
    num: "03",
    tag: "Analysis",
    icon: "ti-scale",
    title: "Political Analysis & Public Affairs",
    client: "Public Engagement",
    year: "Ongoing",
    desc: "Providing thoughtful commentary on governance, democracy, public policy, ethical leadership, and African development through research, writing, and public discourse.",
    flyer: Flyer3,
    flyerAlt: "Political Analysis & Public Affairs",
    tilt: "-0.8deg",
  },
  {
    num: "04",
    tag: "Advocacy",
    icon: "ti-bulb",
    title: "African Development & Thought Leadership",
    client: "Knowledge Initiative",
    year: "Ongoing",
    desc: "Promoting intellectual growth, African-centred solutions, ethical leadership, and social justice through philosophy, education, and public engagement.",
    flyer: Flyer4,
    flyerAlt: "African Development & Thought Leadership",
    tilt: "1.8deg",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
     <Reveal>
      <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <div className="sec-eyebrow portfolio-eyebrow">
          <span className="eyebrow-line"></span>
          Portfolio
        </div>
        <div className="portfolio-header-row">
          <h2 className="portfolio-heading">Recent projects &amp; client work</h2>
          <p className="portfolio-sub">
            A selection of client solutions I've successfully delivered —
            from executive operations to full inbox ownership.
          </p>
        </div>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <div
            className={`portfolio-card${active === i ? " is-active" : ""}`}
            key={p.num}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            {/* ── FLYER MOUNT ── */}
            <div className="flyer-mount">
              <div className="pin" aria-hidden="true"></div>
              <div
                className="flyer-frame"
                style={{ "--tilt": p.tilt }}
              >
                {p.flyer ? (
                  <img src={p.flyer} alt={p.flyerAlt} className="flyer-img" />
                ) : (
                  <div className="flyer-placeholder" aria-label={p.flyerAlt}>
                    <i className={`ti ${p.icon}`} aria-hidden="true"></i>
                    <span className="placeholder-label">Client flyer</span>
                  </div>
                )}
                <div className="flyer-corner" aria-hidden="true"></div>
              </div>
            </div>

            {/* ── CARD BODY ── */}
            <div className="card-body">
              <div className="card-meta-row">
                <span className="card-num">{p.num}</span>
                <span className="card-tag">{p.tag}</span>
              </div>

              <h3 className="card-title">{p.title}</h3>

              <div className="card-client-row">
                <i className="ti ti-building" aria-hidden="true"></i>
                <span className="card-client">{p.client}</span>
                <span className="card-dot" aria-hidden="true">·</span>
                <span className="card-year">{p.year}</span>
              </div>

              <p className="card-desc">{p.desc}</p>

              <button className="card-link">
                View details <span className="card-arr">→</span>
              </button>
            </div>

            <div className="card-accent-line" aria-hidden="true"></div>
          </div>
        ))}
      </div>
    </section>
     </Reveal>
  );
};

export default Portfolio;