import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";
import { Donut } from "../components/Donut";

export class EventLoop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Title>Event loop</Title>
        <Donut />
      </Fragment>
    );
  }
}

EventLoop.propTypes = {};
