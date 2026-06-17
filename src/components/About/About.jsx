import React from "react";
import "./About.css";
import Sam from "../../assets/omeje-1.jpeg";

const cards = [
  {
    icon: "ti-pencil",
    title: "Content Writing",
    desc: "Crafting clear, compelling copy that resonates with audiences and drives engagement across platforms.",
  },
  {
    icon: "ti-brand-instagram",
    title: "Content Creation",
    desc: "Producing scroll-stopping digital content — from social media posts to long-form articles and blogs.",
  },
  {
    icon: "ti-chart-line",
    title: "Brand Storytelling",
    desc: "Building cohesive brand narratives that connect emotionally and grow loyal, engaged communities.",
  },
  {
    icon: "ti-search",
    title: "SEO Writing",
    desc: "Optimising content for discoverability without sacrificing voice, readability, or creative quality.",
  },
];

const stats = [
  { num: "3+",   label: "Years writing" },
  { num: "50+",  label: "Brands served" },
  { num: "100%", label: "Original content" },
];

const About = () => {
  return (
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
            I am a content writer and creator who turns ideas into stories that
            stick — helping brands find their voice, connect with their audience,
            and stand out in a crowded digital landscape.
          </p>
          <p className="about-body">
            From punchy social media captions and SEO-optimised blog posts to
            long-form articles and brand narratives, I bring intention and craft
            to every piece I produce. Good content isn't just about words — it's
            about the right words, in the right tone, for the right people.
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