import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`btt ${visible ? "btt-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span className="btt-tooltip">Back to top</span>

      {/* Animated ring */}
      <svg className="btt-ring" viewBox="0 0 52 52" aria-hidden="true">
        <circle cx="26" cy="26" r="23" />
      </svg>

      <div className="btt-arrow" aria-hidden="true">
        <div className="btt-chevron"></div>
        <div className="btt-line"></div>
      </div>
    </button>
  );
};

export default BackToTop;