import "./skills.css";

function Skills() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
      </div>
      <br />
      <section id="skills">
        <div className="card">
          <div className="head">Frontend Development</div>
          <div className="content">
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="head">Backend Development</div>
          <div className="content">
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="head">Game Development</div>
          <div className="content">
            <ul>
              <li>Godot | GDScript</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="head">Databases</div>
          <div className="content">
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="head">3D / Creative Tools</div>
          <div className="content">
            <ul>
              <li>Blender</li>
              <li>Krita</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="head">Soft Skills</div>
          <div className="content">
            <ul>
              <li>Blender</li>
              <li>Krita</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
