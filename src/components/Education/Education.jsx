import React from "react";
import "./Education.css";

const education = [
  {
    year: "2014 — 2020",
    icon: "ti-school",
    degree: "SSCE",
    school: "Sacred Heart Seminary, Nsude",
    desc: "Majored in Management with a focus on organisational behaviour, business communication, and office administration. Graduated with second-class upper honours.",
  },
   {
    year: "2018",
    icon: "ti-school",
    degree: "Latin Diploma",
    school: "Pontificia Universitas Urbaniana, Rome",
    desc: "Majored in Management with a focus on organisational behaviour, business communication, and office administration. Graduated with second-class upper honours.",
  },
  {
    year: "2022-2026",
    icon: "ti-device-laptop",
    degree: "Bachelor of Arts",
    school: "Bigard Memorial Seminary, Enugu",
    desc: "Completed an intensive programme covering remote work tools, client communication, project management, and digital productivity systems used by top VAs globally.",
  },
  {
    year: "2022-2026",
    icon: "ti-device-laptop",
    degree: "Bachelor of Philosophy",
    school: "Pontificia Universitas Urbaniana, Rome",
    desc: "Completed an intensive programme covering remote work tools, client communication, project management, and digital productivity systems used by top VAs globally.",
  },
];

const certifications = [
  { icon: "ti-rosette", name: "Google Workspace Admin",    org: "Google · 2022"          },
  { icon: "ti-rosette", name: "Project Mgmt Essentials",  org: "Coursera · 2022"         },
  { icon: "ti-rosette", name: "Customer Success",         org: "HubSpot Academy · 2023"  },
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
        A strong foundation in business communication and administration,
        sharpened through professional practice.
      </p>

      {/* Degree cards */}
      <div className="edu-grid">
        {education.map((e) => (
          <div className="edu-card" key={e.degree}>
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

      {/* Certifications row */}
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