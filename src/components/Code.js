import React, { Component, Fragment } from "react";
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
    import(`../snippet/${this.props.snippet}`)
      .then(({ snippet, steps, caption }) =>
        this.setState({
          snippet,
          steps,
          caption
        })
      )
      .then(() => document.addEventListener("keypress", this.handleKeypress));
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  handleKeypress = e => {
    const { steps, currentStep } = this.state;

    const nextState = currentStep + 1;

    if (e.key === " ") {
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
        <h1>Code</h1>
        {steps && <p>Press space to interact</p>}
        <pre
          className="line-numbers code"
          data-line={currentStep ? steps[currentStep].line : 0}
        >
          <code className="language-javascript">{snippet}</code>
        </pre>
        {caption && <p className="italic">{caption}</p>}
      </Fragment>
    );
  }
}
