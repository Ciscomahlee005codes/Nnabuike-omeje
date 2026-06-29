import React, { useEffect, useRef } from "react";
import "./Skills.css";
import Reveal from "../Reveal/Reveal";

const skills = [
  { name: "Philosophical Analysis & Critical Thinking", pct: 98 },
  { name: "Academic & Professional Writing",            pct: 96 },
  { name: "Book Publishing & Author Coaching",          pct: 94 },
  { name: "Political Analysis & Public Policy",         pct: 92 },
  { name: "Digital Strategy & Personal Branding",       pct: 90 },
];

const tools = [
  {
    icon: "ti-book",
    name: "Amazon Kindle Direct Publishing",
    desc: "Global book publishing and digital distribution",
  },
  {
    icon: "ti-book-2",
    name: "Kobo Writing Life",
    desc: "International self-publishing platform",
  },
  {
    icon: "ti-pencil",
    name: "Editorial Strategy",
    desc: "Manuscript development and professional editing",
  },
  {
    icon: "ti-bulb",
    name: "Thought Leadership",
    desc: "Knowledge creation and intellectual communication",
  },
  {
    icon: "ti-world",
    name: "Digital Branding",
    desc: "Building influential personal and professional brands",
  },
  {
    icon: "ti-users",
    name: "Leadership & Mentorship",
    desc: "Coaching authors, entrepreneurs, and emerging leaders",
  },
];

const Skills = () => {
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.w + "%";
          }
        });
      },
      { threshold: 0.3 }
    );

    barRefs.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Reveal>
       <section className="skills" id="skills">
      <div className="skills-header">
        <div className="sec-eyebrow skills-eyebrow">
          <span className="sec-eyebrow-line-dark"></span>
          My skills
        </div>
        <h2 className="skills-heading">Skills &amp; Core Competencies</h2>
        <p className="skills-sub">
           Combining philosophy, publishing, political analysis, and digital
  entrepreneurship to create ideas that inspire, educate, and drive meaningful
  social impact.
        </p>
      </div>

      <div className="skills-layout">
        {/* SKILL BARS */}
        <div className="skills-left">
          {skills.map((s, i) => (
            <div className="skill-box" key={s.name}>
              <div className="skill-head">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  data-w={s.pct}
                  ref={(el) => (barRefs.current[i] = el)}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* TOOL GRID */}
        <div className="skills-right">
          {tools.map((t) => (
            <div className="tool-card" key={t.name}>
              <i className={`ti ${t.icon} tool-icon`} aria-hidden="true"></i>
              <div className="tool-name">{t.name}</div>
              <div className="tool-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
};

export default Skills;