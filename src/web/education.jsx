import FadeUp from "./FadeUp";
import { IconSchool } from "@tabler/icons-react";
import "./education.css";
import EducationItem from "./EducationItem";
// import { progress } from "framer-motion";
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
        <EducationItem
          eduBadge={<IconSchool size={24} />}
          progress="In-Progress"
          title="Diploma in Information Technology"
          institution="University of South Africa"
          period="2024 - Present"
          location="REMOTE | CPT"
          modules={[
            "Web Development",
            "Database Systems",
            "Operating Systems & Network Technical Skills",
            "Object-Oriented Programming",
            "UI/UX & GUI Development",
            "Business Informatics",
          ]}
          eduExtra={["NQF 6", "PART-TIME", "3rd YEAR STUDENT"]}
        />
        <EducationItem
          eduBadge={<IconSchool size={24} />}
          progress="Completed"
          title="Systems Development"
          institution="CAPACITI | SETA"
          period="2023 - 2024"
          location="CAPE TOWN, WESTERN CAPE"
          modules={[
            "Web Development",
            "Object-Oriented Programming",
            "UI/UX & GUI Development",
          ]}
          eduExtra={["NQF 5", "Learnership"]}
        />

        <EducationItem
          eduBadge={<IconSchool size={24} />}
          progress="In-Progress"
          title="Bsc in Robotics Engineering"
          institution="University of Applied Sciences"
          period="2026 - Present"
          location="REMOTE | GERMANY"
          modules={[
            "Linear Algebra",
            "Physics",
            "Technical Drawing",
            "Robotics",
          ]}
          eduExtra={["NQF 7", "1st YEAR STUDENT"]}
        />
      </section>
    </>
  );
}

export default Education;
