import "./education.css";
function EducationItem({
  eduBadge,
  progress,
  title,
  institution,
  period,
  location,
  modules,
  eduExtra,
}) {
  return (
    <>
      <div className="edu-container">
        <div className="exp-item">
          <div className="edu-summary">
            <div className="edu-badge">{eduBadge}</div>
            <div className="edu-progress">{progress}</div>
          </div>
          <p className="edu-title">{title}</p>
          <div className="exp-company">{institution}</div>
          <div className="exp-period">{period} </div>
          <div className="exp-location ">{location}</div>

          <div className="divider space-divider"></div>

          <div className="edu-modules ">
            <p className="edu-module-tit ">COVERED / CURRENT FOCUS</p>
            <ul>
              {modules.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <br />
          <div className="edu-extra-container">
            {eduExtra.map((item, index) => (
              <span key={index} className="edu-extra exp-location">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationItem;
