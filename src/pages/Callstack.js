import React, { Component, Fragment } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../modules/code";
import { Title } from "../components/Title";

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
      <Fragment>
        <Title>Callstack</Title>
        <Cols>
          <Col>
            <Code snippet="simple" onLineChange={this.handleChangeLine} />
          </Col>
          <Col size={25}>
            <Stack funcs={this.state.funcs} name="Callstack" color="#E91E63" />
          </Col>
        </Cols>
      </Fragment>
    );
  }
}
