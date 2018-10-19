import React, { Component } from "react";
import { Timer } from "./Timer";
import "./Browser.css";

export class Browser extends Component {
  handleFetchClick = () => this.props.onButtonPress("onClick");

  render() {
    const { children } = this.props;

    return (
      <div className="browser">
        <div className="browser-row">
          <div className="browser-column browser-left">
            <span className="browser-dot" style={{ background: "#ED594A" }} />
            <span className="browser-dot" style={{ background: "#FDD800" }} />
            <span className="browser-dot" style={{ background: "#5AC05A" }} />
          </div>
          <div className="browser-column browser-middle">
            <input
              type="text"
              value="https://mfrachet.github.io/event-loop"
              readOnly
            />
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
          <span className="float-right">
            <Timer onChange={this.props.onTimeChange} />
          </span>
          <h3>An asynchronous world</h3>

          <button onClick={this.handleFetchClick}>Show me Bulbasaur!</button>

          {children}
        </div>
      </div>
    );
  }
}
