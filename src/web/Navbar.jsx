import "./navbar.css";

function Navbar() {
  return (
    <nav id="nav-bar">
      <a href="#" className="nav-logo">
        zainap.vanblerck
      </a>

      <ul className="nav-links">
        <li>
          <a href="#skills">SKILLS</a>
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
