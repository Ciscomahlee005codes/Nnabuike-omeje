import React from "react";
import "./Clientsocials.css";
import Reveal from "../Reveal/Reveal";

/**
 * Update this array with your real handles + links.
 * `platform` controls icon + tint: "instagram" | "x" | "tiktok" | "youtube" | "facebook"
 */
const socialHandles = [
  {
    platform: "instagram",
    handle: "@maazinnabuikeomejeacademy",
    href: "https://www.instagram.com/maazinnabuikeomejeacademy?igsh=MTJycW52bW4zeWQwMA%3D%3D&utm_source=qr",
    desc: "Behind-the-scenes looks at projects, writing process, and day-to-day content creation.",
  },
  {
    platform: "x",
    handle: "@MaaziNnabuike",
    href: "https://x.com/maazinnabuike?s=11",
    desc: "Quick thoughts on writing, content strategy, and the occasional industry hot take.",
  },
  {
    platform: "tiktok",
    handle: "@maazinnabuike",
    href: "https://www.tiktok.com/@maazinnabuike?_r=1&_t=ZN-97EaprXgzcE",
    desc: "Short-form videos breaking down what makes content actually work.",
  },
  {
    platform: "youtube",
    handle: "Maazi Nnabuike Omeje Academy",
    href: "https://youtube.com/@maazinnabuike?si=ymrWwMLur4MWjzU6",
    desc: "Long-form videos on copywriting, content strategy, and brand storytelling.",
  },
  {
    platform: "facebook",
    handle: "Maazi Nnabuike Omeje Academy",
    href: "https://www.facebook.com/share/1977jBhC3s/?mibextid=wwXIfr",
    desc: "Updates, published work, and client highlights from recent projects.",
  },
];

const platformMeta = {
  instagram: { label: "Instagram", icon: "ti-brand-instagram" },
  x:         { label: "X",         icon: "ti-brand-x"         },
  tiktok:    { label: "TikTok",    icon: "ti-brand-tiktok"    },
  youtube:   { label: "YouTube",   icon: "ti-brand-youtube"   },
  facebook:  { label: "Facebook",  icon: "ti-brand-facebook"  },
};

const Clientsocials = () => {
  return (
    <Reveal>
       <section className="client-socials" id="client-socials">
      <div className="cs-eyebrow">
        <span className="cs-eyebrow-line"></span>
        My Social Handles
      </div>

      <div className="cs-header">
        <h2 className="cs-heading">
          Find me <span className="accent">online</span>
        </h2>
        <p className="cs-sub">
          Follow along for writing tips, behind-the-scenes content, and a
          closer look at the work I do for brands.
        </p>
      </div>

      <div className="cs-grid">
        {socialHandles.map((s) => {
          const meta = platformMeta[s.platform];
          return (
            <a
              key={s.platform}
              href={s.href}
              className="cs-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cs-card-top">
                <div className={`cs-platform-icon ${s.platform}`} aria-hidden="true">
                  <i className={`ti ${meta.icon}`}></i>
                </div>
                <span className="cs-ext-arrow" aria-hidden="true">↗</span>
              </div>

              <div>
                <div className="cs-platform-name">{meta.label}</div>
                <div className="cs-handle">{s.handle}</div>
              </div>

              <p className="cs-desc">{s.desc}</p>
            </a>
          );
        })}
      </div>
    </section>
    </Reveal>
  );
};

export default Clientsocials;