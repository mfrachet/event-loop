import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";
import { Donut } from "../components/Donut";
import { Cols, Col } from "../components/Cols";

export class EventLoop extends Component {
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

      queue.push("Some call");

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
            {queue.map((name, index) => (
              <div key={`${name}-${index}`}>{name}</div>
            ))}
          </Col>
        </Cols>
      </Fragment>
    );
  }
}

EventLoop.propTypes = {};
