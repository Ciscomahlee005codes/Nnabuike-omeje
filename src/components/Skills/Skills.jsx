import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skills = [
  { name: "Email Management", pct: 95 },
  { name: "Calendar Scheduling", pct: 92 },
  { name: "Admin & Operations", pct: 93 },
  { name: "Customer Support", pct: 90 },
  { name: "Data Entry & Research", pct: 88 },
];

const tools = [
  { icon: "ti-brand-google", name: "Google Workspace", desc: "Docs, Sheets, Drive & Meet" },
  { icon: "ti-brand-slack", name: "Slack", desc: "Team communication" },
  { icon: "ti-brand-trello", name: "Trello", desc: "Project & task boards" },
  { icon: "ti-layout-kanban", name: "Notion", desc: "Wikis, docs & databases" },
  { icon: "ti-file-word", name: "Microsoft Office", desc: "Word, Excel & Outlook" },
  { icon: "ti-calendar-time", name: "Scheduling Tools", desc: "Calendly, Acuity & more" },
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
    <section className="skills" id="skills">
      <div className="skills-header">
        <div className="sec-eyebrow skills-eyebrow">
          <span className="sec-eyebrow-line-dark"></span>
          My skills
        </div>
        <h2 className="skills-heading">Tools &amp; expertise</h2>
        <p className="skills-sub">
          Helping businesses stay productive, organized, and professionally
          managed through modern virtual assistance solutions.
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
  );
};

export default Skills;