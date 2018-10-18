import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";

export class EventLoop extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Title>Event loop</Title>
      </Fragment>
    );
  }
}

EventLoop.propTypes = {};
