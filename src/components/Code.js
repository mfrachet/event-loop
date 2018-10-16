import React, { Fragment, Component } from "react";

export class Code extends Component {
  constructor(props) {
    super(props);

    this.state = { snippet: null, steps: {}, currentStep: 0 };
  }

  componentDidUpdate() {
    window.Prism.highlightAll();
  }

  componentDidMount() {
    import(`../snippet/${this.props.snippet}`)
      .then(({ snippet, steps }) =>
        this.setState({
          snippet,
          steps
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

    if (e.key === " " && steps[nextState]) {
      this.setState({ currentStep: nextState });
      this.props.onLineChange(steps[nextState]);
    }
  };

  render() {
    const { snippet, currentStep, steps } = this.state;

    return (
      <Fragment>
        <h1>Code</h1>
        <pre
          className="line-numbers"
          data-line={currentStep ? steps[currentStep].line : 0}
        >
          <code className="language-javascript">{snippet}</code>
        </pre>
      </Fragment>
    );
  }
}
