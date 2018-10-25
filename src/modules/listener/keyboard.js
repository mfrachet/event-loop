import React, { Component } from "react";
import "./Keyboard.css";

export class Keyboard extends Component {
  componentDidMount() {
    document.addEventListener("keypress", this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  handleKeypress = e => {
    const { k, onPress } = this.props;

    return e.key === k && onPress();
  };

  render() {
    const { k } = this.props;
    const letter = k === " " ? "space" : k;

    return (
      <div className="keyboard">
        Keyboard feature is activated on this page. Press{" "}
        <span className={`key ${letter}`}>{letter}</span>
      </div>
    );
  }
}
