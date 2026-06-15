import React from "react";
import "./Portfolio.css";

const projects = [
  {
    num: "01",
    icon: "ti-calendar-event",
    title: "Executive Scheduling",
    desc: "Managed meetings, appointments, travel plans, and business calendars for busy executives while ensuring maximum productivity.",
  },
  {
    num: "02",
    icon: "ti-mail-opened",
    title: "Email Management",
    desc: "Organized inboxes, handled professional communication, filtered important emails, and maintained smooth client interactions.",
  },
  {
    num: "03",
    icon: "ti-headset",
    title: "Customer Support",
    desc: "Provided responsive and professional customer support through email, live chat, and communication platforms.",
  },
  {
    num: "04",
    icon: "ti-checklist",
    title: "Administrative Assistance",
    desc: "Supported businesses with data entry, document management, online research, and workflow coordination.",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <div className="sec-eyebrow portfolio-eyebrow">
          <span className="eyebrow-line"></span>
          Portfolio
        </div>
        <h2 className="portfolio-heading">Recent projects &amp; client work</h2>
        <p className="portfolio-sub">
          Services and client support solutions I've successfully managed as a
          professional virtual assistant.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((p) => (
          <div className="portfolio-card" key={p.num}>
            <div className="card-num">{p.num}</div>
            <div className="card-icon" aria-hidden="true">
              <i className={`ti ${p.icon}`}></i>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <button className="card-link">
              View details <span className="card-arr">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;