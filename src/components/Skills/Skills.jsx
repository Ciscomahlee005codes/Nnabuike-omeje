import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skills = [
  { name: "Content Writing & Copywriting", pct: 95 },
  { name: "SEO & Keyword Strategy",        pct: 88 },
  { name: "Brand Storytelling",            pct: 92 },
  { name: "Social Media Content",          pct: 90 },
  { name: "Research & Fact-checking",      pct: 87 },
];

const tools = [
  { icon: "ti-brand-google",    name: "Google Docs",      desc: "Long-form drafting & collaboration"   },
  { icon: "ti-world",           name: "WordPress",         desc: "Publishing & on-page SEO"             },
  { icon: "ti-brand-notion",    name: "Notion",            desc: "Editorial calendars & planning"       },
  { icon: "ti-chart-bar",       name: "Semrush",           desc: "Keyword research & SEO audits"        },
  { icon: "ti-writing",         name: "Grammarly",         desc: "Proofreading & style refinement"      },
  { icon: "ti-brand-instagram", name: "Social Platforms",  desc: "Instagram, X, LinkedIn & more"        },
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
        <h2 className="skills-heading">Craft &amp; expertise</h2>
        <p className="skills-sub">
          From concept to published piece — the writing skills and creative tools
          I use to help brands communicate with clarity and impact.
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