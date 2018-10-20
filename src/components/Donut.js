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
    return (
      <div className="donut">
        <div className="donut-item" />
        {this.props.children}
      </div>
    );
  }
}
