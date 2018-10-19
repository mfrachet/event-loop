import React, { Component, Fragment } from "react";
import { Title } from "../components/Title";
import { Browser } from "../modules/browser";
import { Cols, Col } from "../components/Cols";

export class AsyncWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Title>Async world</Title>
        <Cols>
          <Col>Hey </Col>
          <Col>
            <Browser />
          </Col>
        </Cols>
      </Fragment>
    );
  }
}
AsyncWorld.propTypes = {};
