import "./contact.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import FadeUp from "./FadeUp";
function Contact() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">
          Get in <span>Touch</span>
        </h2>
      </div>

      <section id="contact">
        <FadeUp>
          <div className="socials exp-item">
            <ul>
              <li>
                <a href="https://github.com/Zainap16">
                  <IconBrandGithub size={20} stroke={1.5} color="#ffe2fe" />{" "}
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zainap-van-blerck-928277251/">
                  <IconBrandLinkedin size={20} stroke={1.5} color="#ffe2fe" />
                  Linkedin
                </a>
              </li>
              <li>
                <a href="mailto:zvanblerck1@gmail.com">
                  <IconMail size={20} stroke={1.5} color="#ffe2fe" /> Send Email
                  : zvanblerck1@email.com
                </a>
              </li>
              <li>
                <a href="">
                  <IconPhone size={20} stroke={1.5} color="#ffe2fe" /> Call me:
                  067-255-7493
                </a>
              </li>
            </ul>
          </div>
        </FadeUp>

        <FadeUp>
          <div id="availability" className="exp-item">
            <span className="contact-minor-title">CURRENT AVAILABILITY</span>
            <div className="nav-badge">
              <div className="status-dot"></div>
              <a href="#">Open to opportunities</a>
            </div>
            <p className="contact-desc divider">
              I&apos;m currently seeking junior or internship opportunities in
              web development, Python programming, and any other software
              development-related fields. I&apos;m eager to gain hands-on
              industry experience where I can apply and grow my skills in
              building applications, solving problems, and working within real
              development teams. I&apos;m especially interested in roles that
              allow me to learn modern development practices, contribute to
              meaningful projects, and continue improving my abilities across
              both frontend and backend development.
            </p>
            <br />
            <div id="contact-roles">
              <p className="contact-minor-title">PREFERRED ROLES</p>
              <br />
              <div className="roles-tags">
                <span className="tags highlighted-tags">
                  Frontend Developer Intern
                </span>
                <span className="tags highlighted-tags">
                  Full-Stack Developer Intern
                </span>
                <span className="tags highlighted-tags">
                  Software Developer Intern
                </span>
                <span className="tags">Game Developer Intern</span>
                <span className="tags">Junior Data Analyst</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
      <br />
      <br />
      <section id="main-footer">
        <span>zainap.vanblerck</span>
        <span>&copy; 2025</span>
      </section>
    </>
  );
}

export default Contact;
