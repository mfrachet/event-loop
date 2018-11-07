import React, { Component } from "react";
import { Subtitle } from "../components/Subtitle";
import { Donut } from "../components/Donut";
import { Cols, Col } from "../components/Cols";
import { Queue } from "../components/Queue";
import { Browser } from "../modules/browser";
import { Line } from "../components/Line";
import { Container } from "../components/Container";
import { Keyboard } from "../modules/listener/Keyboard";
import { Arrow } from "../components/Arrow";

export class Raf extends Component {
  static count = 0;

  constructor(props) {
    super(props);

    this.state = { queue: [], browserItems: [] };
  }

  handleSpacePress = () => {
    const { queue } = this.state;

    Raf.count++;
    queue.push({
      funcName: `requestAnimationFrame(() => {
  newLine.style.display = 'block';
});`,
      value: Raf.count
    });

    this.setState({ queue });
  };

  dequeue = () => {
    const { queue, browserItems } = this.state;

    if (queue.length) {
      const lastCall = queue.shift();
      this.setState({ queue });

      browserItems.push(lastCall);

      setTimeout(() => this.setState({ browserItems }), 1000);
    }
  };

  render() {
    const { queue, browserItems } = this.state;

    return (
      <Container custom>
        <Cols>
          <Col>
            <Subtitle centered>Browser</Subtitle>
            <Browser>
              <button onClick={this.handleSpacePress}>Raf call</button>
              <Line width="50%" />
              <Line width="70%" />
              <Line width="20%" />
              <br />
              <Line />
              <Line />
              <Line />
              <br />

              {browserItems.map((item, index) => (
                <Line key={`${item.funcName}-${index}`} hasAppeared />
              ))}
            </Browser>
          </Col>
          <Col>
            <div className="center">
              <Donut onHandle={this.dequeue}>
                <Subtitle>Event loop</Subtitle>
              </Donut>
              <div style={{ marginTop: "-30px" }}>
                <Arrow />
                <h3 className="m-t">Rendering appears here</h3>
              </div>
            </div>
          </Col>
          <Col>
            <Subtitle centered>Render Queue</Subtitle>
            <Queue items={queue} />
          </Col>
        </Cols>
      </Container>
    );
  }
}

Raf.propTypes = {};
