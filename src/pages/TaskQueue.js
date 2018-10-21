import React, { Component, Fragment } from "react";
import { Cols, Col } from "../components/Cols";
import { Stack } from "../components/Stack";
import { Code } from "../modules/code";

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
    return (
      <Fragment>
        <Cols>
          <Col>
            <Code snippet="async" onLineChange={this.handleChangeLine} />
          </Col>
          <Col>
            <Stack
              funcs={this.state.callstack}
              name="Call stack"
              color="#E91E63"
            />
          </Col>
          <Col>
            <Stack
              funcs={this.state.taskQueue}
              name="Task queue"
              color="#4CAF50"
            />
          </Col>
        </Cols>
      </Fragment>
    );
  }
}
