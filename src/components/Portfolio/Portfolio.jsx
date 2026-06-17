import React, { useState } from "react";
import Flyer1 from "../../assets/sam-flyer1.jpeg"
import Flyer2 from "../../assets/sam-flyer2.jpeg"
import Flyer3 from "../../assets/sam-flyer3.jpeg"
import Flyer4 from "../../assets/omeje-2.jpeg"
import "./Portfolio.css";

const projects = [
  {
    num: "01",
    tag: "Scheduling",
    icon: "ti-calendar-event",
    title: "Executive Scheduling",
    client: "TechServe Ltd.",
    year: "2024",
    desc: "Managed meetings, appointments, travel plans, and business calendars for busy executives while ensuring maximum productivity.",
    flyer: Flyer1,
    flyerAlt: "Executive Scheduling flyer for TechServe Ltd.",
    tilt: "-1.5deg",
  },
  {
    num: "02",
    tag: "Email",
    icon: "ti-mail-opened",
    title: "Email Management",
    client: "Crestline Agency",
    year: "2024",
    desc: "Organized inboxes, handled professional communication, filtered important emails, and maintained smooth client interactions.",
    flyer: Flyer2,
    flyerAlt: "Email Management flyer for Crestline Agency",
    tilt: "1.2deg",
  },
  {
    num: "03",
    tag: "Support",
    icon: "ti-headset",
    title: "Customer Support",
    client: "ShopNow Store",
    year: "2023",
    desc: "Provided responsive and professional customer support through email, live chat, and communication platforms.",
    flyer: Flyer3,
    flyerAlt: "Customer Support flyer for ShopNow Store",
    tilt: "-0.8deg",
  },
  {
    num: "04",
    tag: "Admin",
    icon: "ti-checklist",
    title: "Administrative Assistance",
    client: "Vantage Solutions",
    year: "2023",
    desc: "Supported businesses with data entry, document management, online research, and workflow coordination.",
    flyer: Flyer4,
    flyerAlt: "Administrative Assistance flyer for Vantage Solutions",
    tilt: "1.8deg",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
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
  );
};

export default Portfolio;