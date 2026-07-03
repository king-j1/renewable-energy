import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconMenu, IconClose, IconArrow } from "./Icons.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/scooters", label: "Scooters" },
  { to: "/network", label: "Battery Swap" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`nav dark ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="xy.com home">
          <span className="brand-mark">x</span>
          xy<span style={{ color: "var(--lime)" }}>.com</span>
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-lime">
            Book a test ride <IconArrow size={16} />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-lime">
            Book a test ride <IconArrow size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
