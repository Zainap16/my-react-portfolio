import "./App.css";
import Projects from "./web/projects";
import Experience from "./web/experience";
import Contact from "./web/contact";
import AboutMe from "./web/about";
import Skills from "./web/skills";
import Navbar from "./web/Navbar";
import Education from "./web/education";
// import CurrentlyWorkingOn from "./web/CurrentlyWorkingOn";
function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <br />
      <Skills />
      <br /> <br />
      <Education />
      <br />
      <br />
      <Projects />
      <br />
      <Experience />
      {/* <br />
      <CurrentlyWorkingOn />
      <br /> */}
      <br />
      <Contact />
    </>
  );
}

export default App;
