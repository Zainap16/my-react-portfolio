import "./Terminal.css";

function Terminal() {
  return (
    <div id="terminal-container">
      <div className="terminal">
        <div className="terminal-bar">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
          <span className="terminal-title">about.json</span>
        </div>

        <div className="terminal-body">
          <div className="t-line">
            <span className="t-prompt">$</span>
            <span className="t-cmd">cat about.json</span>
          </div>

          <br />

          <div className="t-line">
            <span className="t-out">{"{"}</span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;<span className="t-key">"name"</span>:{" "}
              <span className="t-str">"Zainap"</span>,
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;<span className="t-key">"role"</span>:{" "}
              <span className="t-str">"Full-Stack Developer"</span>,
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;<span className="t-key">"location"</span>:{" "}
              <span className="t-str">"Cape Town, ZA"</span>,
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;<span className="t-key">"stack"</span>: [
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"React"</span>,
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"Node.js"</span>,
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="t-str">"MySQL"</span>
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">&nbsp;&nbsp;],</span>
          </div>
          <div className="t-line">
            <span className="t-out">
              &nbsp;&nbsp;<span className="t-key">"open_to_work"</span>:{" "}
              <span className="t-num">true</span>
            </span>
          </div>
          <div className="t-line">
            <span className="t-out">{"}"}</span>
          </div>

          <br />

          <div className="t-line">
            <span className="t-prompt">$</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terminal;
