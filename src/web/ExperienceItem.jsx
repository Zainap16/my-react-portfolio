function ExperienceItem({ period, location, role, company, desc }) {
  return (
    <div className="exp-item">
      <div className="exp-period">{period}</div>
      <div className="exp-location">{location}</div>
      <div className="exp-role">{role}</div>
      <div className="exp-company">{company}</div>
      <br />

      <div className="exp-desc">
        <ul>
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
