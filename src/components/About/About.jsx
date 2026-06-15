import React from "react";
import "./About.css";
import Sam from "../../assets/omeje-1.jpeg";

const cards = [
  {
    icon: "ti-checklist",
    title: "Task Management",
    desc: "Keeping workflows organized and productive.",
  },
  {
    icon: "ti-headset",
    title: "Client Support",
    desc: "Professional communication and customer care.",
  },
  {
    icon: "ti-calendar-event",
    title: "Scheduling",
    desc: "Managing appointments and meetings efficiently.",
  },
  {
    icon: "ti-mail-opened",
    title: "Email Handling",
    desc: "Inbox organization and fast response management.",
  },
];

const stats = [
  { num: "5+", label: "Years exp." },
  { num: "100+", label: "Clients served" },
  { num: "100%", label: "Satisfaction" },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-layout">

        {/* LEFT — Image */}
        <div className="about-img-col">
          <div className="about-img-frame">
            <img src={Sam} alt="Nwokoro Amarachi Mary-Cynthia" />
          </div>
          <div className="about-stat-row">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <div className="about-stat-num">{s.num}</div>
                <div className="about-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="about-content-col">
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-line"></span>
            About me
          </div>

          <h2 className="about-heading">Your reliable virtual assistant</h2>

          <p className="about-intro">
            I help busy entrepreneurs, startups, and growing businesses stay
            organized, productive, and stress-free — by handling the daily tasks
            that slow them down.
          </p>
          <p className="about-body">
            From calendar management and customer support to email handling and
            administrative assistance, I bring professionalism, efficiency, and
            attention to detail into every project.
          </p>

          <div className="about-divider"></div>

          <div className="about-cards">
            {cards.map((c) => (
              <div className="about-card" key={c.title}>
                <div className="about-card-icon" aria-hidden="true">
                  <i className={`ti ${c.icon}`}></i>
                </div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="about-btn">
            Let's work together <span className="about-btn-arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;