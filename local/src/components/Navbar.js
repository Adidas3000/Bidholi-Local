import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link to="/" className="logo">Local</Link>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/listings">Find a home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}