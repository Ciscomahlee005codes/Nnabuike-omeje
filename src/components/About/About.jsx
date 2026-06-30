import React, { useState, useRef } from "react";
import "./About.css";
import Sam1 from "../../assets/omeje-1.jpeg";
import Sam2 from "../../assets/omeje-2.jpeg";
import Sam3 from "../../assets/sam-pic1.jpeg";
import Sam4 from "../../assets/sam-pic2.jpeg";
import Reveal from "../Reveal/Reveal";

const images = [
  { src: Sam1, alt: "Omeje Samuel Nnabuike — portrait", position: "center 15%" },
  { src: Sam2, alt: "Omeje Samuel Nnabuike — at work", position: "center 15%" },
  { src: Sam3, alt: "Omeje Samuel Nnabuike — speaking", position: "center 10%" },
  { src: Sam4, alt: "Omeje Samuel Nnabuike — Working", position: "center 15%" },
];

const cards = [
  {
    icon: "ti-book",
    title: "Author & Publisher",
    desc: "Publishing impactful books and guiding aspiring authors through every stage of the publishing journey, from manuscript development to global distribution.",
  },
  {
    icon: "ti-bulb",
    title: "Philosophical Thought",
    desc: "Applying critical thinking, ethical reasoning, and intellectual inquiry to address complex societal, leadership, and human development challenges.",
  },
  {
    icon: "ti-scale",
    title: "Political Analysis",
    desc: "Providing insightful perspectives on governance, democracy, public policy, and ethical leadership with a strong focus on African development.",
  },
  {
    icon: "ti-world",
    title: "Digital Strategy",
    desc: "Helping individuals and organisations build influential digital brands through publishing, content strategy, and knowledge-driven entrepreneurship.",
  },
];

const stats = [
  {
    num: "50+",
    label: "Published Works & Digital Publications",
  },
  {
    num: "5+",
    label: "Professional Disciplines",
  },
  {
    num: "2026",
    label: "Bachelor of Philosophy",
  },
];

/* ── Swipeable gallery ──────────────────────────────────────────────────── */
const SWIPE_THRESHOLD = 50; // px before a drag counts as a slide change

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);

  const last = images.length - 1;
  const goTo = (i) => setIndex(Math.max(0, Math.min(last, i)));
  const next = () => setIndex((i) => Math.min(last, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  const onPointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onPointerMove = (e) => {
    if (!isDragging.current || startX.current === null) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setDragX(x - startX.current);
  };

  const endDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragX > SWIPE_THRESHOLD) prev();
    else if (dragX < -SWIPE_THRESHOLD) next();
    setDragX(0);
    startX.current = null;
  };

  return (
    <div
      className="about-gallery"
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={endDrag}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      <div
        className="about-gallery-track"
        style={{
          transform: `translateX(calc(-${index * 100}% + ${dragX}px))`,
          transition: dragX !== 0 ? "none" : "transform 0.5s cubic-bezier(0.65, 0, 0.2, 1)",
        }}
      >
        {images.map((img) => (
          <div className="about-gallery-slide" key={img.src}>
            <img
              src={img.src}
              alt={img.alt}
              draggable="false"
              style={{ objectPosition: img.position || "center 15%" }}
            />
          </div>
        ))}
      </div>

      <button
        className="gallery-arrow gallery-arrow-left"
        onClick={prev}
        disabled={index === 0}
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        className="gallery-arrow gallery-arrow-right"
        onClick={next}
        disabled={index === last}
        aria-label="Next photo"
      >
        ›
      </button>

      <div className="gallery-counter">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      <div className="gallery-dots">
        {images.map((img, i) => (
          <button
            key={img.src}
            className={`gallery-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Reveal>
      <section className="about" id="about">
        <div className="about-layout">

          {/* LEFT — Gallery */}
          <div className="about-img-col">
            <Gallery />
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
              "Hope for the best — and be ready for the worst."
            </p>
            <p className="about-body">
              Nnabuike Omeje is a Nigerian philosopher, author, publisher, political analyst, and digital entrepreneur whose work spans the domains of intellectual inquiry, knowledge creation, social advocacy, and innovation-driven enterprise. Born on 8 September 2000 in Obimo, Nsukka Local Government Area of Enugu State, Nigeria, he has built a multidisciplinary profile that bridges rigorous academic training in philosophy and the humanities with practical engagement in publishing, digital strategy, and public discourse.
              Rooted in a deep conviction that knowledge is the most transformative force available to humanity, Omeje has committed his career to inspiring intellectual growth, empowering individuals and communities, and promoting responsible leadership across Africa and beyond. His approach is simultaneously visionary and pragmatic — guided by the belief that ideas must not only be conceived but rigorously developed, effectively communicated, and purposefully applied.
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

            <div className="about-actions">
              <a
                href="Nnabuike-Omeje-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn about-btn-primary"
              >
                <i className="ti ti-file-text"></i>
                View Curriculum Vitae
              </a>

              <a href="#contact" className="about-btn about-btn-secondary">
                <i className="ti ti-message-circle"></i>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default About;