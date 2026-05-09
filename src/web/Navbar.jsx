import "./navbar.css";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav id="nav-bar">
      <a href="#" className="nav-logo">
        zainap.vanblerck
      </a>
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#skills" className="divider-nav">
            SKILLS
          </a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="nav-badge">
        <div className="status-dot"></div>
        <a href="#">available for hire</a>
      </div>
    </nav>
  );
}

export default Navbar;
