import React from "react";
import "./Education.css";

const education = [
  {
    year: "2014 — 2020",
    icon: "ti-school",
    degree: "SSCE",
    school: "Sacred Heart Seminary, Nsude",
    desc: "Developed early writing discipline and a love for language through an intensive humanities curriculum, with strong performance in English Language, Literature in English, and Christian Religious Studies.",
  },
  {
    year: "2018",
    icon: "ti-language",
    degree: "Latin Diploma",
    school: "Pontificia Universitas Urbaniana, Rome",
    desc: "Studied classical Latin with an emphasis on rhetoric, textual analysis, and formal written expression — a foundation that sharpened precision, structure, and the art of persuasive writing.",
  },
  {
    year: "2022 — 2026",
    icon: "ti-book",
    degree: "Bachelor of Arts",
    school: "Bigard Memorial Seminary, Enugu",
    desc: "Pursuing a broad arts degree that deepens critical thinking, cultural literacy, and written communication — core competencies that inform nuanced, audience-aware content creation.",
  },
  {
    year: "2022 — 2026",
    icon: "ti-atom",
    degree: "Bachelor of Philosophy",
    school: "Pontificia Universitas Urbaniana, Rome",
    desc: "Engaging with philosophical reasoning, ethics, and argumentation — skills that translate directly into crafting content with clarity of thought, logical structure, and compelling narrative depth.",
  },
];

const certifications = [
  { icon: "ti-rosette", name: "Content Marketing Certified",  org: "HubSpot Academy · 2023"     },
  { icon: "ti-rosette", name: "SEO Writing Fundamentals",     org: "Semrush Academy · 2023"      },
  { icon: "ti-rosette", name: "Digital Storytelling",         org: "Coursera · 2024"             },
];

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="sec-eyebrow edu-eyebrow">
        <span className="eyebrow-line-d"></span>
        Education
      </div>
      <h2 className="edu-heading">Academic background</h2>
      <p className="edu-sub">
        A rich academic journey rooted in language, philosophy, and the humanities —
        the bedrock of thoughtful, purposeful content.
      </p>

      {/* Degree cards */}
      <div className="edu-grid">
        {education.map((e) => (
          <div className="edu-card" key={e.degree + e.school}>
            <div className="edu-year">{e.year}</div>
            <div className="edu-icon" aria-hidden="true">
              <i className={`ti ${e.icon}`}></i>
            </div>
            <h3 className="edu-degree">{e.degree}</h3>
            <div className="edu-school">{e.school}</div>
            <p className="edu-desc">{e.desc}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="edu-certs">
        {certifications.map((c) => (
          <div className="edu-cert" key={c.name}>
            <div className="edu-cert-icon" aria-hidden="true">
              <i className={`ti ${c.icon}`}></i>
            </div>
            <div>
              <div className="edu-cert-name">{c.name}</div>
              <div className="edu-cert-org">{c.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;