import React from "react";
import "./About.css";
import Sam from "../../assets/omeje-1.jpeg";
import Reveal from "../Reveal/Reveal";

const cards = [
  {
    icon: "ti-book",
    title: "Author & Publisher",
    desc: "Publishing impactful books and guiding aspiring authors through every stage of the publishing journey, from manuscript development to global distribution.",
  },
  {
    icon: "ti-bulb",
    title: "Philosophical Thought",
    desc: "Applying critical thinking, ethical reasoning, and intellectual inquiry to address complex societal, leadership, and human development challenges.",
  },
  {
    icon: "ti-scale",
    title: "Political Analysis",
    desc: "Providing insightful perspectives on governance, democracy, public policy, and ethical leadership with a strong focus on African development.",
  },
  {
    icon: "ti-world",
    title: "Digital Strategy",
    desc: "Helping individuals and organisations build influential digital brands through publishing, content strategy, and knowledge-driven entrepreneurship.",
  },
];

const stats = [
  {
    num: "50+",
    label: "Published Works & Digital Publications",
  },
  {
    num: "5+",
    label: "Professional Disciplines",
  },
  {
    num: "2026",
    label: "Bachelor of Philosophy",
  },
];

const About = () => {
  return (
    <Reveal>
      <section className="about" id="about">
      <div className="about-layout">

        {/* LEFT — Image */}
        <div className="about-img-col">
          <div className="about-img-frame">
            <img src={Sam} alt="Omeje Samuel Nnabuike" />
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

          <h2 className="about-heading">
            Words that <span className="accent">move</span> people.
          </h2>

          <p className="about-intro">
            “Hope for the best — and be ready for the worst.”
          </p>
          <p className="about-body">
            Nnabuike Omeje is a Nigerian philosopher, author, publisher, political analyst, and digital entrepreneur whose work spans the domains of intellectual inquiry, knowledge creation, social advocacy, and innovation-driven enterprise. Born on 8 September 2000 in Obimo, Nsukka Local Government Area of Enugu State, Nigeria, he has built a multidisciplinary profile that bridges rigorous academic training in philosophy and the humanities with practical engagement in publishing, digital strategy, and public discourse.
Rooted in a deep conviction that knowledge is the most transformative force available to humanity, Omeje has committed his career to inspiring intellectual growth, empowering individuals and communities, and promoting responsible leadership across Africa and beyond. His approach is simultaneously visionary and pragmatic — guided by the belief that ideas must not only be conceived but rigorously developed, effectively communicated, and purposefully applied.
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

          <div className="about-actions">
  <a
    href="Nnabuike-Omeje-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="about-btn about-btn-primary"
  >
    <i className="ti ti-file-text"></i>
    View Curriculum Vitae
  </a>

  <a href="#contact" className="about-btn about-btn-secondary">
    <i className="ti ti-message-circle"></i>
    Get In Touch
  </a>
</div>
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default About;