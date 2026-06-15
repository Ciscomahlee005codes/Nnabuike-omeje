import React, { useEffect, useState } from "react";
import "./Loader.css";

const phases = [
  { from: 0,  to: 15,  label: "Initializing",        delay: 40  },
  { from: 15, to: 50,  label: "Loading assets",       delay: 28  },
  { from: 50, to: 78,  label: "Building components",  delay: 38  },
  { from: 78, to: 100, label: "Almost ready",         delay: 55  },
];

const Loader = ({ onComplete }) => {
  const [pct, setPct]       = useState(0);
  const [status, setStatus] = useState("Initializing");
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let phaseIdx = 0;
    let current  = 0;

    const tick = () => {
      if (cancelled) return;
      if (phaseIdx >= phases.length) return;

      const { to, label, delay } = phases[phaseIdx];
      setStatus(label);

      if (current < to) {
        current = Math.min(current + 1, to);
        setPct(current);
        setTimeout(tick, delay);
      } else {
        phaseIdx++;
        if (phaseIdx < phases.length) {
          setTimeout(tick, 200);
        } else {
          // done — wait, then fade out
          setTimeout(() => {
            if (!cancelled) {
              setHiding(true);
              setTimeout(() => { if (!cancelled && onComplete) onComplete(); }, 700);
            }
          }, 400);
        }
      }
    };

    const startTimer = setTimeout(tick, 800);
    return () => { cancelled = true; clearTimeout(startTimer); };
  }, [onComplete]);

  return (
    <div className={`loader-root ${hiding ? "loader-hide" : ""}`}>
      {/* Grid background */}
      <div className="loader-grid" aria-hidden="true"></div>

      {/* Scan line */}
      <div className="loader-scan" aria-hidden="true"></div>

      {/* Corner accents */}
      <div className="lc lc-tl" aria-hidden="true"></div>
      <div className="lc lc-tr" aria-hidden="true"></div>
      <div className="lc lc-bl" aria-hidden="true"></div>
      <div className="lc lc-br" aria-hidden="true"></div>

      {/* Center content */}
      <div className="loader-center">

        {/* Logo */}
        <div className="loader-logo">
          <div className="loader-logo-mark">
            <span>C</span>
          </div>
          <div className="loader-logo-text">Cardinal</div>
        </div>

        {/* Audio bars */}
        <div className="loader-bars" aria-hidden="true">
          {[14, 22, 32, 40, 32, 22, 14].map((h, i) => (
            <div
              key={i}
              className="loader-bar"
              style={{ height: h, animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>

        {/* Progress */}
        <div className="loader-progress">
          <div className="loader-track">
            <div
              className="loader-fill"
              style={{ width: `${pct}%` }}
            ></div>
          </div>
          <div className="loader-meta">
            <span>Loading</span>
            <span>{pct}%</span>
          </div>
        </div>

        {/* Status label */}
        <div className="loader-status" aria-live="polite">
          Virtual Assistant Portfolio —{" "}
          <span className="loader-status-phase">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;