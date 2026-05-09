import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="hero-about">
        {/* HERO ABOUT ME PAGE  */}
        <div className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span>
                ◆ ASPIRING FULL-STACK DEVELOPER | GAME DEVELOPER | ROBOTICS
                ENGINEER
              </span>
            </div>
            <h1 className="hero-name">
              Zainap <br /> <em>Van Blerck</em>
            </h1>

            <p className="hero-desc">
              I&apos;m an aspiring full-stack developer with a strong interest
              in game development, robotics, and building interactive digital
              experiences. I enjoy turning ideas into functional projects,
              whether it&apos;s a web app, a small game, or an experimental
              prototype. I&apos;m currently focused on improving my skills in
              React, Python, and Godot while exploring how software and robotics
              can work together to solve real-world problems. I&apos;m always
              curious, always learning, and constantly looking for ways to
              challenge myself through creative and technical projects.
            </p>
            <div className="about-btn">
              <button>
                <span className="button_top">View work</span>
              </button>
              <button>
                <span className="button_top">Get in touch</span>
              </button>
            </div>
          </div>
        </div>
        {/* HERO ABOUT ME PAGE END*/}
      </div>
    </>
  );
}

export default AboutMe;
