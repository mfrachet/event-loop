import React, { Component } from "react";
import { Browser } from "../modules/browser";
import { Cols, Col } from "../components/Cols";
import { Thread } from "../modules/thread";
import { PokeDetail } from "../modules/pokemon";
import { Timer } from "../modules/browser/Timer";
import { Box } from "../components/Box";
import { Donut } from "../components/Donut";
import { Container } from "../components/Container";
import { Subtitle } from "../components/Subtitle";
import { Pane } from "../components/Pane";

const ONCLICK = "onClick";
const KEYPRESS = "keyPress";
export class AsyncWorld extends Component {
  static eventId = 0;

  constructor(props) {
    super(props);

    this.state = {
      timeCalls: [],
      buttonCalls: [],
      networkCalls: [],
      hasLoaded: false
    };
  }

  handleTimeChange = newTime =>
    this.setState({ timeCalls: [{ name: newTime, id: newTime }] });

  handleEvent = name => () => {
    const { buttonCalls } = this.state;

    AsyncWorld.eventId++;
    buttonCalls.push({ name, id: AsyncWorld.eventId });

    this.setState({ buttonCalls });
  };

  handleEventDequeue = eventName => {
    const { buttonCalls, networkCalls } = this.state;

    buttonCalls.pop();

    if (eventName === ONCLICK) {
      AsyncWorld.eventId++;
      networkCalls.push({ name: "Fetch", id: AsyncWorld.eventId });
    }

    this.setState({ buttonCalls, networkCalls });
  };

  handleNetworkDequeue = () => {
    const { networkCalls } = this.state;

    networkCalls.pop();

    this.setState({ networkCalls, hasLoaded: true });
  };

  render() {
    const { buttonCalls, timeCalls, networkCalls, hasLoaded } = this.state;

    return (
      <Container custom>
        <Cols>
          <Col size={40}>
            <Pane>
              <Subtitle centered>Web APIs</Subtitle>
              <Cols>
                <Col>
                  <Thread name="Timer" calls={timeCalls} delay={1000} />
                </Col>
                <Col>
                  <Thread
                    name="Network"
                    calls={networkCalls}
                    delay={3000}
                    dequeue={this.handleNetworkDequeue}
                    color="#9b4dca"
                  />
                </Col>
                <Col>
                  <Thread
                    name="Event"
                    calls={buttonCalls}
                    delay={300}
                    dequeue={this.handleEventDequeue}
                    color="#4CAF50"
                  />
                </Col>
              </Cols>
            </Pane>
          </Col>
          <Col>
            <Browser>
              <span className="float-right">
                <Timer onChange={this.handleTimeChange} />
              </span>

              <h3>An asynchronous world</h3>

              <input
                type="text"
                placeholder="Fill something right there"
                onChange={this.handleEvent(KEYPRESS)}
              />

              <button onClick={this.handleEvent(ONCLICK)}>
                Show me Bulbasaur!
              </button>
              {hasLoaded && <PokeDetail />}
            </Browser>
          </Col>
        </Cols>
        <div className="m-t">
          <Cols>
            <Col size={40}>
              <Subtitle centered>Enqueue tasks</Subtitle>
              <Box>Different task queues</Box>
            </Col>
            <Col>
              <Subtitle centered>Handle transitions</Subtitle>
              <Donut little>Event loop</Donut>
            </Col>
            <Col size={40}>
              <Subtitle centered>Execute code in the main thread</Subtitle>
              <Box>Call stack</Box>
            </Col>
          </Cols>
        </div>
      </Container>
    );
  }
}
AsyncWorld.propTypes = {};
