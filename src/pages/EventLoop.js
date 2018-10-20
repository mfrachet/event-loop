import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";
import { Donut } from "../components/Donut";
import { Cols, Col } from "../components/Cols";
import { Queue } from "../components/Queue";

export class EventLoop extends Component {
  static count = 0;

  constructor(props) {
    super(props);

    this.state = { queue: [] };
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
      queue.push(`setTimeout(
  () => console.log(${EventLoop.count}),
0)`);

      this.setState({ queue });
    }
  };

  dequeue = () => {
    const { queue } = this.state;

    queue.shift();

    this.setState({ queue });
  };

  render() {
    const { queue } = this.state;
    return (
      <Fragment>
        <Title>Event loop</Title>

        <Cols>
          <Col>
            <Donut onHandle={this.dequeue} />
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
