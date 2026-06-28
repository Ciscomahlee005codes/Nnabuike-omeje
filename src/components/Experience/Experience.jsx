import React from "react";
import "./Experience.css";

const experiences = [
  {
    period: "2022 — Present",
    role: "Author & Publisher",
    company: "Independent",
    type: "Self-Employed",
    desc: "Publishes books through global digital publishing platforms while helping writers, academics, and entrepreneurs transform their ideas into professionally published works. Experienced in manuscript development, author branding, digital distribution, and publishing strategy.",
    tags: [
      "Book Publishing",
      "Amazon KDP",
      "Author Coaching",
      "Editorial Strategy",
      "Digital Distribution",
    ],
  },
  {
    period: "2022 — Present",
    role: "Digital Strategist & Entrepreneur",
    company: "Independent",
    type: "Consulting",
    desc: "Advises individuals and organisations on digital branding, knowledge-based businesses, content strategy, and online business development, helping clients build impactful digital identities.",
    tags: [
      "Digital Strategy",
      "Personal Branding",
      "Content Strategy",
      "Business Development",
      "Thought Leadership",
    ],
  },
  {
    period: "2021 — Present",
    role: "Political Analyst & Social Advocate",
    company: "Independent",
    type: "Public Engagement",
    desc: "Contributes philosophical perspectives to governance, democracy, ethical leadership, and African development through writing, public discourse, and advocacy for intellectual decolonisation and social justice.",
    tags: [
      "Political Analysis",
      "Public Policy",
      "Leadership",
      "African Development",
      "Social Justice",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="sec-eyebrow exp-eyebrow">
        <span className="eyebrow-line-w"></span>
        Experience
      </div>
      <h2 className="exp-heading">Professional background</h2>
      <p className="exp-sub">
        A track record of crafting content that builds brands, engages audiences,
        and delivers measurable results across industries.
      </p>

      <div className="exp-timeline">
        {experiences.map((e, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-dot" aria-hidden="true"></div>
            {i < experiences.length - 1 && (
              <div className="exp-dot-line" aria-hidden="true"></div>
            )}
            <div className="exp-period">{e.period}</div>
            <h3 className="exp-role">{e.role}</h3>
            <div className="exp-company">
              <span>{e.company}</span>
              <span className="exp-sep" aria-hidden="true"></span>
              <span>{e.type}</span>
            </div>
            <p className="exp-desc">{e.desc}</p>
            <div className="exp-tags">
              {e.tags.map((t) => (
                <span className="exp-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;