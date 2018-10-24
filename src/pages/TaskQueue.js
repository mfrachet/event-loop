import React, { Component } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../modules/code";
import { Container } from "../components/Container";

export class TaskQueue extends Component {
  constructor(props) {
    super(props);

    this.state = { callstack: [], taskQueue: [], webApis: [] };
  }

  handleChangeLine = step => {
    if (step === null) {
      return this.setState({ callstack: [], taskQueue: [], webApis: [] });
    }

    const { callstack, taskQueue, webApis } = this.state;

    if (step.action === "remove-apis") {
      webApis.pop();
    } else if (step.action === "add-apis") {
      webApis.push(step.funcName);
    } else if (step.action === "enqueue") {
      taskQueue.push(step.funcName);
    } else if (step.action === "dequeue") {
      taskQueue.pop();
      callstack.push(step.funcName);
    } else {
      if (step.action === "pop") {
        callstack.pop();
      }
      if (step.funcName) {
        callstack.push(step.funcName);
      }
    }

    return this.setState({ callstack, taskQueue, webApis });
  };

  render() {
    const { taskQueue, callstack, webApis } = this.state;

    return (
      <Container>
        <Cols>
          <Col size={50}>
            <Code snippet="async" onLineChange={this.handleChangeLine} />
          </Col>
          <Col>
            <Stack funcs={callstack} name="Call stack" color="#9b4dca" />
          </Col>
          <Col>
            <Stack
              funcs={taskQueue}
              name="Task queue"
              color="#222222"
              noBottom
            />
          </Col>
          <Col>
            <Stack funcs={webApis} name="Web APIs" color="#222222" noBottom />
          </Col>
        </Cols>
      </Container>
    );
  }
}
