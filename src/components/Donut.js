import React, { Component } from "react";

import "./Donut.css";

export class Donut extends Component {
  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { onHandle } = this.props;

      return onHandle && onHandle();
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { little } = this.props;
    return (
      <div className={`donut${little ? "-little" : ""}`}>
        <div className={`donut-item${little ? "-little" : ""}`} />
        <div className="donut-content">{this.props.children}</div>
      </div>
    );
  }
}
