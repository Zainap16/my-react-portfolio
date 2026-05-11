import FadeUp from "./FadeUp";
import { IconSchool } from "@tabler/icons-react";
import "./education.css";
function Education() {
  return (
    <>
      <FadeUp>
        <div className="section-header">
          <h2 className="section-title">Education</h2>
        </div>
      </FadeUp>

      <br />
      <section id="education">
        <div id="edu-container">
          <div className="exp-item">
            <div className="edu-summary">
              <div className="edu-badge">
                <IconSchool stroke={2} />
              </div>
              <div className="edu-progress">Completed</div>
            </div>
            <p className="edu-title">Title of edu</p>
            <div className="exp-company">University of South Africa</div>
            <div className="exp-period">2024 - Present </div>
            <div className="exp-location ">📍 Remote | Parow, CPT</div>

            <div className="divider space-divider"></div>

            <div className="edu-modules ">
              <p className="edu-module-tit ">KEY MODULES</p>
              <ul>
                <li>Data structures</li>
                <li>Database Systems</li>
                <li>Computer Networks</li>
              </ul>
            </div>
            <span className="edu-extra">Expected 2027</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
