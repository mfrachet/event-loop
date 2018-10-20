import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
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
        <Cols>
          <Col>
            <Subtitle centered>Main Thread</Subtitle>
            {lastCall && (
              <Fragment>
                <pre>
                  <code className="language-javascript">{lastCall}</code>
                </pre>
              </Fragment>
            )}
          </Col>
          <Col>
            <Subtitle centered>Event loop</Subtitle>
            <Donut onHandle={this.dequeue} />
          </Col>
          <Col>
            <Subtitle centered>Task Queue</Subtitle>
            <Queue items={queue} />
          </Col>
        </Cols>
      </Fragment>
    );
  }
}

EventLoop.propTypes = {};
