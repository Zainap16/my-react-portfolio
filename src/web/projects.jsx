import "./projects.css";
import CostumeJoy from "../assets/CostumeJoy.png";
import SyndicateBooksLogo from "../assets/SyndicateBooksLogo.png";
import GithubIcon from "./GitHubIcon";
import LinkIcon from "./LinkIcon";
import FadeUp from "./FadeUp";
function Projects() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>
      <br />
      <section id="projects">
        <FadeUp>
          <div className="projects-card">
            <div className="card__img">
              <img src={CostumeJoy} alt="Costume Joy Project" />
            </div>
            <div className="card__descr-wrapper">
              <p className="card__title">Costume Joy</p>
              <p className="card__descr">
                A first-year web development project created for UNISA, designed
                for a private business called Costume Joy. Built using vanilla
                HTML, CSS, and JavaScript, focusing on a clean user interface
                and foundational front-end development skills.
              </p>
              <div className="card__links">
                <div>
                  <LinkIcon />
                  <a
                    className="link"
                    href="https://zainap16.github.io/CostumeJoy/"
                  >
                    Website
                  </a>
                </div>
                <div>
                  <GithubIcon />
                  <a
                    className="link"
                    href="https://github.com/Zainap16/CostumeJoy"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="projects-card">
            <div className="card__img">
              <img src={SyndicateBooksLogo} alt="SyndicateBooksLogo" />
            </div>
            <div className="card__descr-wrapper">
              <p className="card__title">Syndicate Books</p>
              <p className="card__descr">
                A Godot game built using GDScript where I contributed as both a
                developer and 3D modeler (Blender). The project won 2nd place at
                the Playlabs Game Jam, highlighting strong teamwork and rapid
                game development under constraints.
              </p>
              <div className="card__links">
                <div>
                  <LinkIcon />
                  <a
                    className="link"
                    href="https://zainap16.github.io/CostumeJoy/"
                  >
                    Website
                  </a>
                </div>
                <div>
                  <GithubIcon />
                  <a
                    className="link"
                    href="https://github.com/darksyndicatenet-games/syndicate_books_2026"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

export default Projects;
