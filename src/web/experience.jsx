import "./experience.css";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>

      <section id="experience">
        <ExperienceItem
          period="2025 &ndash; 2026 | 11 Months"
          location="Cape Town, Western Cape | On-site"
          role="IT Security & Infrastructure Analyst Apprentice"
          company="Ardagh Group"
          desc={[
            "Designed and maintained Power BI dashboards for IT reporting",
            "Provided Tier 1 IT support via ServiceNow",
            "Logged and escalated incidents",
            "Supported IT operations monitoring workflows",
          ]}
        />

        <ExperienceItem
          period="2025 &ndash; 2026  9 Months"
          location="Johanessburg Remote"
          role="Team Lead & Game Developer"
          company="Zainlitha Studios | Tshimologong Game Incubator"
          desc={[
            "Led development of indie game projects from concept to prototype",
            "Managed small multidisciplinary teams (artists, writers, designers)",
            "Built game prototypes using Godot and Blender",
            "Oversaw production planning and studio documentation",
          ]}
        />

        <ExperienceItem
          period="2024 &ndash; 2025 | 12 Months"
          location="Western Cape, Cape Town"
          role="Data Analyst Intern"
          company="Capaciti"
          desc={[
            "Analyzed business datasets to support operational decision-making and client reporting",
            "Developed and maintained interactive Power BI dashboards for data visualization and reporting",
            "Connected and processed data from multiple sources including Excel and SQL databases",
            "Transformed raw data into clear visual insights (charts, graphs, KPI dashboards)",
          ]}
        />

        <ExperienceItem
          period="2023 | 5 Months"
          location="Western Cape, Cape Town"
          role="Service Desk Agent Internship"
          company="Clickatell"
          desc={[
            "Provided Tier 1 IT support including password resets, software installations, and basic troubleshooting using JIRA",
            "Logged, tracked, and escalated incidents using service management tools",
          ]}
        />
      </section>
    </>
  );
}

export default Experience;
