import "./App.css";
import Projects from "./web/projects";
import Experience from "./web/experience";
import Contact from "./web/contact";
import AboutMe from "./web/about";
import Skills from "./web/skills";
import Navbar from "./web/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <br />
      <Skills />
      <br /> <br />
      <Projects />
      <br />
      <Experience />
      <br />
      <Contact />
    </>
  );
}

export default App;
