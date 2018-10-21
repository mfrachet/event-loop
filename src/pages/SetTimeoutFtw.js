import React, { Component } from "react";
import { Code } from "../modules/code";

export class SetTimeoutFTW extends Component {
  constructor(props) {
    super(props);

    this.state = { isPlaying: false, information: null };
  }

  handleClick = () => {
    this.setState({ isPlaying: true });

    for (let i = 0; i < 100000; i++) {
      setTimeout(() => console.log("hello world"), 0);
    }

    const start = Date.now();

    setTimeout(() => {
      const end = Date.now();

      this.setState({ isPlaying: false, information: end - start });
    }, 1000);
  };

  render() {
    const { isPlaying, information } = this.state;

    return (
      <div className="m-t-b">
        <h1>
          setTimeout...
          {information && ` is not parallel: ${information} ms`}
        </h1>
        <button onClick={this.handleClick} disabled={isPlaying}>
          {isPlaying ? "Waiting..." : "Play"}
        </button>

        <Code snippet="setTimeoutDead" />

        {isPlaying && <div>Computing...</div>}
      </div>
    );
  }
}
