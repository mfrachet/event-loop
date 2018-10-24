import React, { Component } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../modules/code";
import { Container } from "../components/Container";
import { Donut } from "../components/Donut";

export class TaskQueue extends Component {
  constructor(props) {
    super(props);

    this.state = { callstack: [], taskQueue: [], webApis: [] };
  }

  handleChangeLine = step => {
    if (step === null) {
      return this.setState({
        callstack: [],
        taskQueue: [],
        webApis: [],
        isLoopVisible: false
      });
    }

    const { callstack, taskQueue, webApis, isLoopVisible } = this.state;

    let isNewLoopVisible = isLoopVisible;

    if (step.action === "show-loop") {
      isNewLoopVisible = true;
    } else if (step.action === "remove-apis") {
      webApis.shift();
    } else if (step.action === "add-apis") {
      webApis.push(step.funcName);
    } else if (step.action === "enqueue") {
      taskQueue.push(step.funcName);
    } else if (step.action === "dequeue") {
      taskQueue.shift();
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
      webApis,
      isLoopVisible: isNewLoopVisible
    });
  };

  render() {
    const { taskQueue, callstack, webApis, isLoopVisible } = this.state;

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
            {isLoopVisible && (
              <div className="task-queue-loop">
                <Donut little>Event loop</Donut>
              </div>
            )}
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
