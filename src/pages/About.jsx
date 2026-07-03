import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import {
  IconLeaf,
  IconBolt,
  IconShield,
  IconSwap,
  IconArrow,
} from "../components/Icons.jsx";
import { team, stats } from "../data.js";

const values = [
  {
    icon: <IconLeaf />,
    title: "Cleaner cities",
    text: "We exist to take petrol two-wheelers off the road and give Ghana cleaner air.",
  },
  {
    icon: <IconSwap />,
    title: "Access for all",
    text: "Swappable batteries make electric riding affordable — no expensive home charging needed.",
  },
  {
    icon: <IconBolt />,
    title: "Relentless innovation",
    text: "We design our scooters, batteries and stations together as one smart system.",
  },
  {
    icon: <IconShield />,
    title: "Safety first",
    text: "Every battery and station is monitored and certified to the highest standards.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our story</span>
          <h1>We're electrifying how Ghana moves</h1>
          <p>
            xy.com was founded on a simple belief: getting around your city
            should be clean, affordable and effortless. So we built the
            scooters and the network to make it real.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal className="split-body">
              <span className="eyebrow dark">Why we started</span>
              <h2>From fuel queues to six-second swaps</h2>
              <p>
                Millions of riders depend on two-wheelers every day — but petrol
                is dirty, costly and unpredictable. We saw a better way: pair
                smart electric scooters with a network of battery-swap stations
                so riders never wait to recharge.
              </p>
              <p style={{ marginTop: 16 }}>
                Today we're building that future across Ghana, one neighbourhood,
                one station and one rider at a time.
              </p>
            </Reveal>
            <Reveal className="split-media" delay={120}>
              <img src="/img/cargo-one.jpg" alt="Electric rider on a city street" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow dark">What we stand for</span>
            <h2>Our values</h2>
          </Reveal>
          <div className="feature-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="feature-card">
                  <div className="feature-icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">By the numbers</span>
            <h2>Momentum you can measure</h2>
          </Reveal>
          <Reveal>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow dark">The team</span>
            <h2>Built by people who ride</h2>
          </Reveal>
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="member">
                  <div className="face">{m.initials}</div>
                  <h4>{m.name}</h4>
                  <div className="role">{m.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Come ride the future with us</h2>
              <Link to="/contact" className="btn btn-dark">
                Book a test ride <IconArrow size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
