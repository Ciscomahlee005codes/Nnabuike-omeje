import React from "react";
import "./Experience.css";

const experiences = [
  {
    period: "Jan 2023 — Present",
    role: "Senior Virtual Assistant",
    company: "TechServe Global",
    type: "Remote · Full-time",
    desc: "Managed high-volume email inboxes and executive calendars for three C-suite clients, coordinated travel logistics, and handled customer escalations — reducing response time by 40%.",
    tags: ["Calendar Management", "Email Handling", "Customer Support", "Slack", "Notion"],
  },
  {
    period: "Jun 2021 — Dec 2022",
    role: "Administrative Assistant",
    company: "BrightPath Consulting",
    type: "Lagos, Nigeria · On-site",
    desc: "Provided full administrative support to a 12-person consulting team — managing documents, preparing reports, scheduling client meetings, and maintaining digital filing systems.",
    tags: ["Data Entry", "Report Writing", "Microsoft Office", "Google Workspace"],
  },
  {
    period: "Jan 2020 — May 2021",
    role: "Customer Support Representative",
    company: "Konga Nigeria",
    type: "Lagos, Nigeria · Full-time",
    desc: "Resolved customer queries via live chat and email, maintained a 95% satisfaction rating, and escalated complex issues to the appropriate departments with full documentation.",
    tags: ["Live Chat", "CRM Tools", "Conflict Resolution"],
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
        Hands-on experience supporting executives, teams, and clients across
        diverse industries with precision and care.
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