import React from "react";
import "./Experience.css";

const experiences = [
  {
    period: "Jan 2023 — Present",
    role: "Senior Content Writer",
    company: "Narrative Agency",
    type: "Remote · Full-time",
    desc: "Lead writer for a portfolio of 8 brand clients across fintech, lifestyle, and education. Produce weekly blog content, email newsletters, and social copy — growing average client organic traffic by 62% in 12 months.",
    tags: ["Blog Writing", "SEO Content", "Email Copy", "Brand Voice", "WordPress"],
  },
  {
    period: "Jun 2021 — Dec 2022",
    role: "Content Creator & Strategist",
    company: "BrightPath Media",
    type: "Lagos, Nigeria · Hybrid",
    desc: "Developed and executed content strategies for 5 SME clients, managing editorial calendars, producing long-form articles, and writing social media copy that drove a combined 120K+ impressions monthly.",
    tags: ["Content Strategy", "Social Media Copy", "Long-form Articles", "Editorial Calendar"],
  },
  {
    period: "Jan 2020 — May 2021",
    role: "Junior Copywriter",
    company: "Konga Nigeria",
    type: "Lagos, Nigeria · Full-time",
    desc: "Wrote product descriptions, promotional banners, and email campaigns for Nigeria's leading e-commerce platform. Collaborated with the marketing team to maintain a consistent brand voice across all touchpoints.",
    tags: ["Copywriting", "Product Descriptions", "Email Campaigns", "Brand Consistency"],
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