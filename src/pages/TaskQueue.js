import React, { Component } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../modules/code";
import { Donut } from "../components/Donut";
import { Container } from "../components/Container";

export class TaskQueue extends Component {
  constructor(props) {
    super(props);

    this.state = { callstack: [], taskQueue: [] };
  }

  handleChangeLine = step => {
    if (step === null) {
      return this.setState({ callstack: [], taskQueue: [] });
    }

    const { callstack, taskQueue } = this.state;

    if (step.action === "enqueue") {
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

    return this.setState({ callstack, taskQueue });
  };

  render() {
    const { taskQueue, callstack } = this.state;
    const isEventLoopVisible = taskQueue.length && !callstack.length;

    return (
      <div className="m-t-b">
        <Container>
          <Cols>
            <Col size={50}>
              <Code snippet="async" onLineChange={this.handleChangeLine} />
            </Col>
            <Col>
              <Stack funcs={callstack} name="Call stack" color="#9b4dca" />
            </Col>
            <Col>
              <div
                style={{
                  width: "100px",
                  margin: "150px auto",
                  display: isEventLoopVisible ? "block" : "none"
                }}
              >
                <Donut little>Event loop</Donut>
              </div>
            </Col>
            <Col>
              <Stack funcs={taskQueue} name="Task queue" color="#222222" />
            </Col>
          </Cols>
        </Container>
      </div>
    );
  }
}
