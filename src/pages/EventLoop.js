import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";
import { Donut } from "../components/Donut";
import { Cols, Col } from "../components/Cols";
import { Queue } from "../components/Queue";

export class EventLoop extends Component {
  static count = 0;

  constructor(props) {
    super(props);

    this.state = { queue: [], lastCall: null };
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  handleKeypress = e => {
    if (e.key === " ") {
      const { queue } = this.state;

      EventLoop.count++;
      queue.push({
        funcName: `setTimeout(
  () => console.log(${EventLoop.count}),
0)`,
        value: `console.log(${EventLoop.count})`
      });

      this.setState({ queue });
    }
  };

  dequeue = () => {
    const { queue } = this.state;

    if (queue.length) {
      const lastCall = queue.shift();

      this.setState({ queue, lastCall: lastCall.value });
    }
  };

  render() {
    const { queue, lastCall } = this.state;
    return (
      <Fragment>
        <Title>Event loop</Title>

        <Cols>
          <Col>
            <Donut onHandle={this.dequeue}>
              {lastCall && (
                <Fragment>
                  <h3>In the main thread</h3>
                  <pre>
                    <code className="language-javascript">{lastCall}</code>
                  </pre>
                </Fragment>
              )}
            </Donut>
          </Col>
          <Col>
            <Queue items={queue} />
          </Col>
        </Cols>
      </Fragment>
    );
  }
}

EventLoop.propTypes = {};
