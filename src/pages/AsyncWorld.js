import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";
import { Browser } from "../modules/browser";
import { Cols, Col } from "../components/Cols";
import { Thread } from "../modules/thread";
import { PokeDetail } from "../modules/pokemon";
import { Timer } from "../modules/browser/Timer";

export class AsyncWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeCalls: [],
      buttonCalls: [],
      networkCalls: [],
      hasLoaded: false
    };
  }

  handleTimeChange = newTime => this.setState({ timeCalls: [newTime] });

  handleButtonPress = () => this.setState({ buttonCalls: ["onClick"] });

  handleButtonDequeue = () => {
    const [head, ...tail] = this.state.buttonCalls;

    this.setState({ buttonCalls: tail, networkCalls: ["Fetch calls"] });
  };

  handleNetworkDequeue = () => {
    const [head, ...tail] = this.state.buttonCalls;

    this.setState({ networkCalls: tail, hasLoaded: true });
  };

  render() {
    const { buttonCalls, timeCalls, networkCalls, hasLoaded } = this.state;
    return (
      <Fragment>
        <Title>Async world</Title>
        <Cols>
          <Col size={10}>
            <Thread name="Timer Thread" calls={timeCalls} delay={1000} />
          </Col>
          <Col size={10}>
            <Thread
              name="Network Thread"
              calls={networkCalls}
              delay={3000}
              dequeue={this.handleNetworkDequeue}
              color="#E91E63"
            />
          </Col>
          <Col size={10}>
            <Thread
              name="Event Thread"
              calls={buttonCalls}
              delay={300}
              dequeue={this.handleButtonDequeue}
              color="#4CAF50"
            />
          </Col>
          <Col>
            <Browser>
              <span className="float-right">
                <Timer onChange={this.handleTimeChange} />
              </span>
              <h3>An asynchronous world</h3>

              <button onClick={this.handleButtonPress}>
                Show me Bulbasaur!
              </button>
              {hasLoaded && <PokeDetail />}
            </Browser>
          </Col>
        </Cols>
      </Fragment>
    );
  }
}
AsyncWorld.propTypes = {};
