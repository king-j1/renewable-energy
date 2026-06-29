import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import {
  IconBolt,
  IconSwap,
  IconLeaf,
  IconApp,
  IconShield,
  IconGauge,
  IconArrow,
  IconCheck,
} from "../components/Icons.jsx";
import { scooters, reviews, stats, heroImage } from "../data.js";

const features = [
  {
    icon: <IconSwap />,
    title: "6-second battery swap",
    text: "Pull in, swap a depleted battery for a fully charged one, and ride off. No waiting, no cables.",
  },
  {
    icon: <IconBolt />,
    title: "Instant electric torque",
    text: "Smart motors deliver smooth, silent acceleration the moment you twist the throttle.",
  },
  {
    icon: <IconApp />,
    title: "Connected app",
    text: "Track range, find the nearest station, lock your scooter and get ride insights in real time.",
  },
  {
    icon: <IconLeaf />,
    title: "Zero tailpipe emissions",
    text: "Every ride replaces petrol with clean energy, cutting cost and carbon at the same time.",
  },
  {
    icon: <IconShield />,
    title: "Swappable, safe batteries",
    text: "Aerospace-grade cells, IP-rated and monitored 24/7 across the entire network.",
  },
  {
    icon: <IconGauge />,
    title: "Built for the city",
    text: "Lightweight frames and tight turning made for real streets, real traffic, real commutes.",
  },
];

const steps = [
  {
    n: "01",
    title: "Ride electric",
    text: "Choose your scooter and ride silent, smooth and emission-free across the city.",
  },
  {
    n: "02",
    title: "Run low? Swap.",
    text: "Roll into any GoStation, swap your battery in seconds, and you're instantly back to full.",
  },
  {
    n: "03",
    title: "Never charge at home",
    text: "Forget overnight charging. The network keeps you powered wherever you are.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <img src={heroImage} alt="Electric scooter rider in the city at dusk" />
        </div>
        <div className="container hero-content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Smart electric mobility · Ghana
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Ride electric. <span className="accent">Swap</span> in seconds.
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            Smart electric scooters powered by a city-wide battery-swapping
            network. No charging, no fuel queues — just pull in, swap, and go.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            <Link to="/scooters" className="btn btn-lime">
              Explore scooters <IconArrow size={16} />
            </Link>
            <Link to="/contact" className="btn btn-ghost on-dark">
              Book a test ride
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow dark">Why xy.com</span>
            <h2>A smarter way to move</h2>
            <p>
              Everything about the ride is rethought — from how you power up to
              how it feels on the road.
            </p>
          </Reveal>
          <div className="feature-grid">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Split showcase */}
      <section className="section paper">
        <div className="container">
          <div className="split">
            <Reveal className="split-media">
              <img src={scooters[1].img} alt="Pulse X performance scooter" />
            </Reveal>
            <Reveal className="split-body" delay={120}>
              <span className="eyebrow dark">The machine</span>
              <h2>Performance you can feel</h2>
              <p>
                A featherweight frame, instant torque and adaptive ride modes
                make every commute effortless and every weekend ride a thrill.
              </p>
              <ul className="split-list">
                <li>
                  <span className="tick">
                    <IconCheck />
                  </span>
                  Up to 170 km of range on a single swap
                </li>
                <li>
                  <span className="tick">
                    <IconCheck />
                  </span>
                  Smart dash with turn-by-turn navigation
                </li>
                <li>
                  <span className="tick">
                    <IconCheck />
                  </span>
                  Keyless unlock straight from your phone
                </li>
              </ul>
              <div className="hero-actions">
                <Link to="/scooters" className="btn btn-dark">
                  See all models <IconArrow size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How swapping works */}
      <section className="section dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The network</span>
            <h2>How battery swapping works</h2>
            <p>
              Forget charging. Our GoStation network keeps a fully charged
              battery waiting for you, all over the city.
            </p>
          </Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="step">
                  <div className="n">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="stats" style={{ marginTop: 60 }}>
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

      {/* Popular scooters */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow dark">The line-up</span>
            <h2>Find your ride</h2>
            <p>From nimble city commuters to long-range flagships.</p>
          </Reveal>
          <div className="product-grid">
            {scooters.slice(0, 3).map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <article className="product-card">
                  <div className="product-media">
                    <img src={s.img} alt={s.name} />
                  </div>
                  <div className="product-body">
                    <span className="tag">{s.tag}</span>
                    <h3>{s.name}</h3>
                    <div className="price">{s.price}</div>
                    <div className="spec-row">
                      <div className="spec">
                        <div className="v">{s.range}</div>
                        <div className="k">Range</div>
                      </div>
                      <div className="spec">
                        <div className="v">{s.top}</div>
                        <div className="k">Top speed</div>
                      </div>
                    </div>
                    <Link to="/scooters" className="btn btn-dark">
                      View details <IconArrow size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link to="/scooters" className="btn btn-ghost">
                See the full line-up <IconArrow size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="section paper">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow dark">Loved by riders</span>
            <h2>What our riders say</h2>
          </Reveal>
          <div className="review-grid">
            {reviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
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

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Ready to ride the future?</h2>
              <Link to="/contact" className="btn btn-dark">
                Book your free test ride <IconArrow size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
