import { Component } from "react";

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
    const { children } = this.props;

    return children || "";
  }
}

Keyboard.propTypes = {};
