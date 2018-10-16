import React, { Component } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../components/Code";

export class SimpleCallstack extends Component {
  constructor(props) {
    super(props);

    this.state = { funcs: [] };
  }

  handleChangeLine = step => {
    if (step.line === 0) {
      return this.setState({ funcs: [] });
    }

    const { funcs } = this.state;

    if (step.action) {
      funcs.pop();
    }

    if (step.funcName) {
      funcs.push(step.funcName);
    }

    return this.setState({ funcs });
  };

  render() {
    return (
      <Cols>
        <Col>
          <Code snippet="simple" onLineChange={this.handleChangeLine} />
        </Col>
        <Col size={25}>
          <Stack funcs={this.state.funcs} />
        </Col>
      </Cols>
    );
  }
}
