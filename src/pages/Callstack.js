import React, { Component } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../modules/code";
import { Container } from "../components/Container";

export class Callstack extends Component {
  constructor(props) {
    super(props);

    this.state = { funcs: [] };
  }

  handleChangeLine = step => {
    if (step === null) {
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
      <Container>
        <Cols>
          <Col>
            <Code snippet="simple" onLineChange={this.handleChangeLine} />
          </Col>
          <Col>
            <Stack funcs={this.state.funcs} name="Call stack" color="#9b4dca" />
          </Col>
        </Cols>
      </Container>
    );
  }
}
