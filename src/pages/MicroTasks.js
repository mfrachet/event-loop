import React, { Component } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../modules/code";
import { Container } from "../components/Container";

export class MicroTasks extends Component {
  constructor(props) {
    super(props);

    this.state = { callstack: [], taskQueue: [], webApis: [], microQueue: [] };
  }

  handleChangeLine = step => {
    if (step === null) {
      return this.setState({
        callstack: [],
        taskQueue: [],
        webApis: [],
        microQueue: []
      });
    }

    const { callstack, taskQueue, webApis, microQueue } = this.state;

    if (step.action === "remove-apis") {
      webApis.shift();
    } else if (step.action === "add-apis") {
      webApis.push(step.funcName);
    } else if (step.action === "enqueue") {
      taskQueue.push(step.funcName);
    } else if (step.action === "dequeue") {
      taskQueue.shift();
      callstack.push(step.funcName);
    } else if (step.action === "enqueue-micro") {
      microQueue.push(step.funcName);
    } else if (step.action === "dequeue-micro") {
      microQueue.shift();
      callstack.push(step.funcName);
    } else {
      if (step.action === "pop") {
        callstack.pop();
      }
      if (step.funcName) {
        callstack.push(step.funcName);
      }
    }

    return this.setState({
      callstack,
      taskQueue,
      webApis
    });
  };

  render() {
    const { taskQueue, callstack, webApis, microQueue } = this.state;

    return (
      <Container custom>
        <Cols>
          <Col>
            <Code snippet="microTasks" onLineChange={this.handleChangeLine} />
          </Col>
          <Col>
            <Stack funcs={callstack} name="Call stack" color="#9b4dca" />
          </Col>
          <Col>
            <Stack
              funcs={microQueue}
              name="Micro tasks"
              color="#222222"
              noBottom
            />
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
