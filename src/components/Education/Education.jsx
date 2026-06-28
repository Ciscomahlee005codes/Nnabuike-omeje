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
    desc: "His humanities degree broadened his intellectual foundation, cultivating expertise in communication, history, culture, literature, and the social sciences. This dual academic formation — combining the rigour of philosophy with the breadth of the humanities — defines the interdisciplinary character of his intellectual output.",
  },
  {
    year: "2022 — 2026",
    icon: "ti-atom",
    degree: "Bachelor of Philosophy",
    school: "Pontificia Universitas Urbaniana, Rome",
    desc: "Omeje’s philosophical formation at one of Nigeria’s most prestigious ecclesiastical institutions equipped him with advanced competencies in formal logic, ethics, metaphysics, epistemology, philosophy of the human person, and the philosophy of social realities. This training sharpened his capacity for critical analysis, structured argumentation, and the examination of foundational questions about existence, knowledge, and justice — skills that permeate all dimensions of his professional work.",
  },
];

const certifications = [
  {
    icon: "ti-school",
    name: "Bachelor of Philosophy (B.Phil.)",
    org: "Bigard Memorial Seminary · Pontifical Urban University (Affiliated) · 2026",
  },
  {
    icon: "ti-school",
    name: "Bachelor of Arts (B.A.)",
    org: "Bigard Memorial Seminary · University of Ibadan (Affiliated) · 2026",
  },
  {
    icon: "ti-award",
    name: "Latin Diploma",
    org: "Sacred Heart Seminary, Nsude · 2018",
  },
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