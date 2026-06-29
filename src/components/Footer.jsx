import { Link } from "react-router-dom";
import { IconPin, IconMail, IconPhone } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark">x</span>
              xy<span style={{ color: "var(--lime)" }}>.com</span>
            </Link>
            <p>
              Smart electric scooters and a city-wide battery-swapping network.
              Ride electric, swap in seconds, and move Ghana toward a cleaner
              future.
            </p>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <Link to="/scooters">Scooters</Link>
            <Link to="/network">Battery Swap</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h5>Support</h5>
            <Link to="/contact">Book a test ride</Link>
            <Link to="/network">Find a station</Link>
            <Link to="/contact">Service centres</Link>
            <Link to="/contact">Warranty</Link>
          </div>

          <div className="footer-col">
            <h5>Get in touch</h5>
            <a href="tel:+233500000000">
              <IconPhone size={16} /> +233 50 000 0000
            </a>
            <a href="mailto:hello@xy.com">
              <IconMail size={16} /> hello@xy.com
            </a>
            <a href="#">
              <IconPin size={16} /> Accra, Ghana
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} xy.com. All rights reserved.</span>
          <span>Designed for a smarter, cleaner ride.</span>
        </div>
      </div>
    </footer>
  );
}
