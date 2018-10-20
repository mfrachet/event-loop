import React, { Component } from "react";
import "./Queue.css";

export class Queue extends Component {
  componentDidUpdate() {
    window.Prism.highlightAll();
  }

  render() {
    return (
      <div className="queue">
        {this.props.items.map(item => (
          <div className="queue-item" key={item.funcName}>
            <pre data-line="2" className="line-numbers">
              <code className="language-javascript">{item.funcName}</code>
            </pre>
          </div>
        ))}
      </div>
    );
  }
}
