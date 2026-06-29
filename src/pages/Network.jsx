import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import {
  IconSwap,
  IconBattery,
  IconApp,
  IconLeaf,
  IconArrow,
  IconPin,
} from "../components/Icons.jsx";
import { stations, stats, chargingImage } from "../data.js";

const points = [
  {
    icon: <IconBattery />,
    title: "Always charged",
    text: "Batteries are charged and health-checked at the station, so you only ever pick up a perfect one.",
  },
  {
    icon: <IconSwap />,
    title: "Swap in 6 seconds",
    text: "Open the dock, drop the old battery, take a fresh one. Faster than a fuel stop.",
  },
  {
    icon: <IconApp />,
    title: "Find stations live",
    text: "The app shows real-time battery availability at every GoStation near you.",
  },
  {
    icon: <IconLeaf />,
    title: "Smarter for the grid",
    text: "Stations charge off-peak and balance demand, making the whole network cleaner.",
  },
];

export default function Network() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">GoStation network</span>
          <h1>Power is everywhere you ride</h1>
          <p>
            A growing network of battery-swap stations across Ghana keeps you
            moving. No cables, no charging time — just swap and go.
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
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
            <span className="eyebrow dark">How it works</span>
            <h2>Charging, reinvented</h2>
            <p>
              Owning an electric scooter shouldn't mean planning your day around
              a charger. The network does the charging for you.
            </p>
          </Reveal>
          <div className="feature-grid">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="feature-card">
                  <div className="feature-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <div className="split">
            <Reveal className="split-body">
              <span className="eyebrow dark">Coverage</span>
              <h2>Stations across Ghana</h2>
              <p>
                We're expanding fast. Here's where you can swap today — with new
                GoStations going live every month.
              </p>
              <ul className="split-list">
                {stations.map((c) => (
                  <li key={c.city}>
                    <span className="tick">
                      <IconPin size={14} />
                    </span>
                    {c.city} — {c.count} stations
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="split-media" delay={120}>
              <img src={chargingImage} alt="Battery being charged at a swap station" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Join the swap network today</h2>
              <Link to="/contact" className="btn btn-dark">
                Get started <IconArrow size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
