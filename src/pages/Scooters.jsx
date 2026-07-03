import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { IconArrow } from "../components/Icons.jsx";
import { scooters } from "../data.js";

const categories = ["All", "City", "Performance", "Business", "Adventure"];

export default function Scooters() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () =>
      filter === "All" ? scooters : scooters.filter((s) => s.tag === filter),
    [filter]
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">The line-up</span>
          <h1>Scooters engineered for the swap era</h1>
          <p>
            Every model runs on the same swappable battery network — pick the
            ride that fits your life, from daily commutes to long-range
            adventures.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="chips">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {list.map((s, i) => (
              <Reveal key={s.id} delay={i * 70}>
                <article className="product-card">
                  <div className="product-media">
                    <img src={s.img} alt={s.name} />
                  </div>
                  <div className="product-body">
                    <span className="tag">{s.tag}</span>
                    <h3>{s.name}</h3>
                    <div className="price">{s.price}</div>
                    <p style={{ color: "var(--muted)", marginTop: 10 }}>
                      {s.blurb}
                    </p>
                    <div className="spec-row">
                      <div className="spec">
                        <div className="v">{s.range}</div>
                        <div className="k">Range</div>
                      </div>
                      <div className="spec">
                        <div className="v">{s.top}</div>
                        <div className="k">Top speed</div>
                      </div>
                      <div className="spec">
                        <div className="v">{s.charge}</div>
                        <div className="k">Recharge</div>
                      </div>
                    </div>
                    <Link to="/contact" className="btn btn-dark">
                      Book a test ride <IconArrow size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>Not sure which model is right for you?</h2>
              <Link to="/contact" className="btn btn-dark">
                Talk to our team <IconArrow size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
