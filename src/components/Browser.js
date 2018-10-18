import React, { Component } from "react";
import "./Browser.css";

export class Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="browser">
        <div className="browser-row">
          <div className="browser-column browser-left">
            <span className="browser-dot" style={{ background: "#ED594A" }} />
            <span className="browser-dot" style={{ background: "#FDD800" }} />
            <span className="browser-dot" style={{ background: "#5AC05A" }} />
          </div>
          <div className="browser-column browser-middle">
            <input type="text" value="http://www.w3schools.com" />
          </div>
          <div className="browser-column browser-right">
            <div style={{ float: "right" }}>
              <span className="browser-bar" />
              <span className="browser-bar" />
              <span className="browser-bar" />
            </div>
          </div>
        </div>

        <div className="browser-content">
          <h3>Browser Window</h3>
          <p>How to create a detailed browser window look with CSS.</p>
        </div>
      </div>
    );
  }
}
