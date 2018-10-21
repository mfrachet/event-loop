import React, { Component, Fragment } from "react";
import { Subtitle } from "../components/Subtitle";
import { Donut } from "../components/Donut";
import { Cols, Col } from "../components/Cols";
import { Queue } from "../components/Queue";
import { Browser } from "../modules/browser";
import { Line } from "../components/Line";

export class EventLoop extends Component {
  static count = 0;

  constructor(props) {
    super(props);

    this.state = { queue: [], browserItems: [] };
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
        funcName: `setTimeout(() => {
  document.appendChild(element${EventLoop.count})
}, 0)`,
        value: EventLoop.count
      });

      this.setState({ queue });
    }
  };

  dequeue = () => {
    const { queue, browserItems } = this.state;

    if (queue.length) {
      const lastCall = queue.shift();

      browserItems.push(lastCall);

      this.setState({ queue, browserItems });
    }
  };

  render() {
    const { queue, browserItems } = this.state;
    return (
      <Fragment>
        <Cols>
          <Col>
            <Subtitle centered>Main Thread</Subtitle>
            <Browser>
              <Line width="50%" />
              <Line width="70%" />
              <Line width="20%" />
              <br />
              <Line />
              <Line />
              <Line />
              <br />

              {browserItems.map(item => (
                <Line key={item} hasAppeared />
              ))}
            </Browser>
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
