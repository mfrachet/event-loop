import React, { Component, Fragment } from "react";
import { Subtitle } from "../../components/Subtitle";
import { Keyboard } from "../listener/keyboard";
import "./Code.css";

export class Code extends Component {
  constructor(props) {
    super(props);

    this.state = { snippet: null, steps: {}, currentStep: 0, caption: null };
  }

  componentDidUpdate() {
    window.Prism.highlightAll();
  }

  componentDidMount() {
    import(`./snippet/${this.props.snippet}`).then(
      ({ snippet, steps, caption }) =>
        this.setState({
          snippet,
          steps,
          caption
        })
    );
  }

  handleSpacePress = e => {
    const { steps, currentStep } = this.state;

    if (steps) {
      const nextState = currentStep + 1;

      if (steps[nextState]) {
        this.setState({ currentStep: nextState });
        return this.props.onLineChange(steps[nextState]);
      }

      this.setState({ currentStep: 0 });
    }
  };

  render() {
    const { snippet, currentStep, steps, caption } = this.state;

    return (
      <Fragment>
        <Keyboard k={" "} onPress={this.handleSpacePress} />
        <Subtitle>Code</Subtitle>

        <pre
          className="line-numbers"
          data-line={currentStep ? steps[currentStep].line : 0}
        >
          <code className="language-javascript">{snippet}</code>
        </pre>
        {caption && <p className="italic">{caption}</p>}
      </Fragment>
    );
  }
}
