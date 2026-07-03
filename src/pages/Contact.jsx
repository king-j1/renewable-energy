import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import {
  IconPin,
  IconMail,
  IconPhone,
  IconClock,
  IconCheck,
} from "../components/Icons.jsx";
import { reviews, scooters } from "../data.js";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  model: "",
  location: "",
  date: "",
  time: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      er.email = "Enter a valid email";
    if (!form.phone.trim()) er.phone = "Please enter a phone number";
    if (!form.model) er.model = "Select a scooter";
    if (!form.date) er.date = "Pick a preferred date";
    if (!form.time) er.time = "Pick a preferred time";
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Book your appointment</span>
          <h1>Book a free test ride</h1>
          <p>
            Pick a scooter, choose a time, and ride one yourself. Our team will
            confirm your appointment and walk you through the swap network.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <form className="form" onSubmit={onSubmit} noValidate>
                {submitted && (
                  <div className="success-banner">
                    <IconCheck size={18} />
                    Thank you! Your test-ride appointment has been received — we'll
                    confirm shortly.
                  </div>
                )}

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={update}
                      className={errors.name ? "invalid" : ""}
                      placeholder="e.g. Ama Mensah"
                    />
                    {errors.name && <div className="err">{errors.name}</div>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      className={errors.email ? "invalid" : ""}
                      placeholder="you@email.com"
                    />
                    {errors.email && <div className="err">{errors.email}</div>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      className={errors.phone ? "invalid" : ""}
                      placeholder="+233 ..."
                    />
                    {errors.phone && <div className="err">{errors.phone}</div>}
                  </div>
                  <div className="field">
                    <label htmlFor="model">Scooter</label>
                    <select
                      id="model"
                      name="model"
                      value={form.model}
                      onChange={update}
                      className={errors.model ? "invalid" : ""}
                    >
                      <option value="">Select a scooter</option>
                      {scooters.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    {errors.model && <div className="err">{errors.model}</div>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="location">Preferred location</label>
                  <input
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={update}
                    placeholder="e.g. Accra showroom"
                  />
                </div>

                <div className="form-row">
                  <div className="field">
                    <label htmlFor="date">Preferred date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={update}
                      className={errors.date ? "invalid" : ""}
                    />
                    {errors.date && <div className="err">{errors.date}</div>}
                  </div>
                  <div className="field">
                    <label htmlFor="time">Preferred time</label>
                    <input
                      id="time"
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={update}
                      className={errors.time ? "invalid" : ""}
                    />
                    {errors.time && <div className="err">{errors.time}</div>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us anything we should know..."
                  />
                </div>

                <button type="submit" className="btn btn-lime">
                  Request appointment
                </button>
              </form>
            </Reveal>

            <Reveal className="contact-info" delay={120}>
              <div className="info-item">
                <span className="ic">
                  <IconPin />
                </span>
                <div>
                  <div className="k">Visit us</div>
                  <div className="v">Independence Ave, Accra, Ghana</div>
                </div>
              </div>
              <div className="info-item">
                <span className="ic">
                  <IconPhone />
                </span>
                <div>
                  <div className="k">Call us</div>
                  <div className="v">+233 50 000 0000</div>
                </div>
              </div>
              <div className="info-item">
                <span className="ic">
                  <IconMail />
                </span>
                <div>
                  <div className="k">Email</div>
                  <div className="v">hello@xy.com</div>
                </div>
              </div>
              <div className="info-item">
                <span className="ic">
                  <IconClock />
                </span>
                <div>
                  <div className="k">Open hours</div>
                  <div className="v">Mon–Sat · 8:00 – 18:00</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow dark">Loved by riders</span>
            <h2>What our riders say</h2>
          </Reveal>
          <div className="review-grid">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <div className="review">
                  <div className="stars">{"★".repeat(r.rating)}</div>
                  <p>“{r.text}”</p>
                  <div className="who">
                    <span className="avatar">{r.name.charAt(0)}</span>
                    <span>
                      <span className="name">{r.name}</span>
                      <br />
                      <span className="loc">{r.location}</span>
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
