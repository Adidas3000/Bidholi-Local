import { Link } from "react-router-dom";
import { CITIES } from "../data";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div>
          <strong className="logo">Local</strong>
          <p>Homes for students and professionals moving to a new city.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/listings">Find a home</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <h4>Cities</h4>
          {CITIES.map((c) => (
            <Link key={c.id} to={`/listings?city=${c.id}`}>{c.name}</Link>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@local.example">hello@local.example</a>
        </div>
      </div>
      <p className="wrap copy">© {new Date().getFullYear()} Local. All rights reserved.</p>
    </footer>
  );
}