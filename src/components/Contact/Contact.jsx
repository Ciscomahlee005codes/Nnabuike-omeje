import React, { useState } from "react";
import "./Contact.css";
import Reveal from "../Reveal/Reveal";

const contactInfo = [
  {
    icon: "ti-mail",
    label: "Email",
    value: "omejennabuikesamuel@gmail.com",
    href: "mailto:omejennabuikesamuel@gmail.com",
  },
  {
    icon: "ti-phone",
    label: "Phone",
    value: "+234 808 345 2132",
    href: "tel:+2348083452132",
  },
  {
    icon: "ti-map-pin",
    label: "Location",
    value: "Enugu, Nigeria",
    href: null,
  },
  {
    icon: "ti-brand-x",
    label: "LinkedIn",
    value: "Nnabuike Omeje",
    href: "https://x.com/maazinnabuike?s=11",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up your form service (EmailJS, Formspree, etc.) here
    console.log("Form submitted:", form);
  };

  return (
     <Reveal>
       <section className="contact" id="contact">
      <div className="contact-header">
  <div className="sec-eyebrow contact-eyebrow">
    <span className="eyebrow-line-dark"></span>
    Contact
  </div>

  <h2 className="contact-heading">Let's Connect</h2>

  <p className="contact-sub">
    Whether you're interested in publishing, thought leadership, speaking
    engagements, strategic collaboration, or meaningful conversations on
    philosophy, governance, and African development, I'd be delighted to hear
    from you.
  </p>
</div>

      <div className="contact-layout">
        {/* LEFT — Info */}
        <div className="contact-left">
          {contactInfo.map((item) => (
            <div className="contact-info" key={item.label}>
              <div className="contact-info-icon" aria-hidden="true">
                <i className={`ti ${item.icon}`}></i>
              </div>
              <div>
                <div className="contact-info-label">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="contact-info-value link">
                    {item.value}
                  </a>
                ) : (
                  <div className="contact-info-value">{item.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Form */}
        <div className="contact-form-wrap">
          <div className="form-heading">Send a message</div>
          <div className="form-sub">I typically respond within 24 hours</div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Full name</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">Email address</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can I help?"
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Send message <span className="submit-arr">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
     </Reveal>
  );
};

export default Contact;